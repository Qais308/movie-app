import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const TMDB_KEY = "46b71fe47d81e124380aeddcf9b37ccd";

const SearchPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("query") || "";

  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/multi?api_key=${TMDB_KEY}&language=en-US&query=${encodeURIComponent(query)}`
        );
        const data = await res.json();

        const filtered = data.results.filter(
          (item) => item.poster_path || item.Poster // keep movies or series with poster
        );

        // Exact matches first
        const sorted = filtered.sort((a, b) => {
          const searchLower = query.toLowerCase();
          const aName = (a.title || a.name || "").toLowerCase();
          const bName = (b.title || b.name || "").toLowerCase();
          if (aName === searchLower) return -1;
          if (bName === searchLower) return 1;
          return 0;
        });

        setResults(sorted.slice(0, 20));
      } catch (err) {
        console.error("Error fetching search results:", err);
      }
    };

    fetchMovies();
  }, [query]);

  return (
    <div className="mb-12 w-[95vw] mx-auto">
      <h2 className="text-2xl font-bold mb-6 px-2 text-white">
        Search results for "{query}"
      </h2>

      <div className="flex flex-wrap gap-x-5 gap-y-12 p-2 justify-center">
        {results.length > 0 ? (
          results.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p className="text-gray-400 text-lg mt-10">No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;

