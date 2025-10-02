import { useState, useEffect, useRef } from "react";

const TMDB_KEY = "46b71fe47d81e124380aeddcf9b37ccd";
const OMDB_KEY = "ad50766f";

const highlightStat = (val1, val2) => {
  if (val1 === "N/A" || val2 === "N/A") return "";
  return val1 > val2 ? "text-green-400" : val1 < val2 ? "text-red-400" : "";
};

const ComparePage = () => {
  const [firstQuery, setFirstQuery] = useState("");
  const [secondQuery, setSecondQuery] = useState("");
  const [firstSuggestions, setFirstSuggestions] = useState([]);
  const [secondSuggestions, setSecondSuggestions] = useState([]);
  const [firstMovie, setFirstMovie] = useState(null);
  const [secondMovie, setSecondMovie] = useState(null);
  const [firstOMDb, setFirstOMDb] = useState(null);
  const [secondOMDb, setSecondOMDb] = useState(null);
  const [showComparison, setShowComparison] = useState(false);

  const firstRef = useRef();
  const secondRef = useRef();

  // Close suggestions on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (firstRef.current && !firstRef.current.contains(e.target)) setFirstSuggestions([]);
      if (secondRef.current && !secondRef.current.contains(e.target)) setSecondSuggestions([]);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fetch suggestions
  const fetchSuggestions = async (query, setSuggestions) => {
    if (!query) return setSuggestions([]);
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=${TMDB_KEY}&query=${encodeURIComponent(query)}`
      );
      const data = await res.json();
      setSuggestions(data.results.slice(0, 5));
    } catch (err) {
      console.error(err);
    }
  };

  // Fetch TMDB details
  const fetchTMDBDetails = async (id, type) => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=${TMDB_KEY}&append_to_response=watch/providers`
      );
      const data = await res.json();

      // For TV shows, fetch external_ids to get IMDb
      let imdbId = data.imdb_id || null;
      if (type === "tv") {
        const extRes = await fetch(
          `https://api.themoviedb.org/3/tv/${id}/external_ids?api_key=${TMDB_KEY}`
        );
        const extData = await extRes.json();
        imdbId = extData.imdb_id || null;
      }

      return {
        ...data,
        title: type === "tv" ? data.name : data.title,
        release_date: type === "tv" ? data.first_air_date : data.release_date,
        budget: type === "tv" ? "N/A" : data.budget,
        revenue: type === "tv" ? "N/A" : data.revenue,
        imdb_id: imdbId,
      };
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  // Fetch OMDb
  const fetchOMDb = async (imdb_id, setOMDb) => {
    if (!imdb_id) return;
    try {
      const res = await fetch(`https://www.omdbapi.com/?i=${imdb_id}&apikey=${OMDB_KEY}`);
      const data = await res.json();
      if (data.Response === "True") setOMDb(data);
    } catch (err) {
      console.warn(err);
    }
  };

  // Handle selection
  const handleSelectMovie = async (item, isFirst) => {
    const type = item.media_type === "tv" ? "tv" : "movie";
    const tmdbDetails = await fetchTMDBDetails(item.id, type);

    if (!tmdbDetails) return;

    if (isFirst) {
      setFirstMovie(tmdbDetails);
      setFirstQuery(item.title || item.name);
      fetchOMDb(tmdbDetails.imdb_id, setFirstOMDb);
      setFirstSuggestions([]);
    } else {
      setSecondMovie(tmdbDetails);
      setSecondQuery(item.title || item.name);
      fetchOMDb(tmdbDetails.imdb_id, setSecondOMDb);
      setSecondSuggestions([]);
    }
    setShowComparison(false);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 text-white">
      <h1 className="text-3xl font-bold mb-4 text-center">Compare Movies/Shows</h1>

      {/* Search Bars */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        {[
          { query: firstQuery, setQuery: setFirstQuery, suggestions: firstSuggestions, setSuggestions: setFirstSuggestions, ref: firstRef, isFirst: true },
          { query: secondQuery, setQuery: setSecondQuery, suggestions: secondSuggestions, setSuggestions: setSecondSuggestions, ref: secondRef, isFirst: false },
        ].map((s, idx) => (
          <div key={idx} className="flex-1 relative" ref={s.ref}>
            <input
              type="text"
              placeholder={`Search ${s.isFirst ? "first" : "second"} movie/show...`}
              value={s.query}
              onChange={(e) => {
                s.setQuery(e.target.value);
                fetchSuggestions(e.target.value, s.setSuggestions);
              }}
              className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none"
            />
            {s.suggestions.length > 0 && (
              <ul className="absolute z-10 w-full bg-gray-900 rounded mt-1 shadow-lg">
                {s.suggestions.map((m) => (
                  <li
                    key={m.id}
                    className="flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-700 transition-all duration-150"
                    onClick={() => handleSelectMovie(m, s.isFirst)}
                  >
                    {m.poster_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w92${m.poster_path}`}
                        alt={m.title || m.name}
                        className="w-10 h-14 object-cover rounded"
                      />
                    ) : (
                      <div className="w-10 h-14 bg-gray-700 rounded" />
                    )}
                    <span>{m.title || m.name} ({(m.release_date || m.first_air_date)?.slice(0, 4) || "N/A"})</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Compare Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setShowComparison(true)}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded"
          disabled={!firstMovie || !secondMovie}
        >
          Compare
        </button>
      </div>

      {/* Comparison Section */}
      {showComparison && firstMovie && secondMovie && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[firstMovie, secondMovie].map((movie, idx) => {
            const omdb = idx === 0 ? firstOMDb : secondOMDb;
            const otherMovie = idx === 0 ? secondMovie : firstMovie;
            const otherOMDb = idx === 0 ? secondOMDb : firstOMDb;

            return (
              <div key={movie.id || idx} className="bg-gray-800 p-4 rounded-lg flex flex-col items-center">
                <img
                  src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : ""}
                  alt={movie.title || movie.name}
                  className="rounded mb-4"
                />
                <h2 className="text-xl font-bold mb-2">{movie.title || movie.name}</h2>
                <p className="text-gray-300 italic mb-2">{movie.tagline || "N/A"}</p>

                {/* Comparisons */}
                <p className={highlightStat(movie.budget, otherMovie.budget)}>
                  <strong>Budget:</strong> {movie.budget !== "N/A" ? `$${movie.budget?.toLocaleString()}` : "N/A"}
                </p>
                <p className={highlightStat(movie.revenue, otherMovie.revenue)}>
                  <strong>Revenue:</strong> {movie.revenue !== "N/A" ? `$${movie.revenue?.toLocaleString()}` : "N/A"}
                </p>
                <p className={highlightStat(Number(omdb?.imdbRating), Number(otherOMDb?.imdbRating))}>
                  <strong>IMDb Rating:</strong> ⭐ {omdb?.imdbRating || "N/A"}/10
                </p>
                <p>
                  <strong>Genres:</strong> {movie.genres?.map((g) => g.name).join(", ") || "N/A"}
                </p>
                <p>
                  <strong>Watch Providers:</strong>{" "}
                  {movie["watch/providers"]?.results?.US?.flatrate?.map(p => p.provider_name).join(", ") || "N/A"}
                </p>
                <p className="mt-2 text-sm text-gray-300">{movie.overview || "No overview available."}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ComparePage;

