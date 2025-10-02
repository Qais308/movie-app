import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const TMDB_KEY = "46b71fe47d81e124380aeddcf9b37ccd";

const PersonDetails = () => {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [credits, setCredits] = useState([]);
  const [showFullBio, setShowFullBio] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${TMDB_KEY}`);
      const personData = await res.json();
      setPerson(personData);

      const creditsRes = await fetch(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${TMDB_KEY}`);
      const creditsData = await creditsRes.json();
      setCredits(creditsData.cast || []);
    }
    fetchData();
  }, [id]);

  if (!person) return <p className="text-white">Loading...</p>;

  const previewLength = 550;
  const bio = person.biography || "No biography available.";
  const shortBio = bio.length > previewLength ? bio.slice(0, previewLength) + "..." : bio;

  const topMovies = [...credits].sort((a, b) => (b.popularity || 0) - (a.popularity || 0)).slice(0, 6);
  const timeline = [...credits].sort((a, b) => new Date(a.release_date) - new Date(b.release_date));

  return (
    <div className="max-w-7xl mx-auto p-4 text-white">
      {/* Actor Info */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-6">
        {/* Actor Photo */}
        <div className="flex-shrink-0 mx-auto md:mx-0">
          <img
            src={person.profile_path ? `https://image.tmdb.org/t/p/w300${person.profile_path}` : "https://via.placeholder.com/300x450?text=No+Image"}
            alt={person.name}
            className="rounded-lg w-36 sm:w-44 md:w-48 lg:w-64 object-cover shadow-lg"
          />
        </div>

        {/* Actor Details */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">{person.name}</h1>
          <p className="text-sm sm:text-base md:text-gray-300">
            {showFullBio ? bio : shortBio}
            {bio.length > previewLength && (
              <button
                className="ml-1 sm:ml-2 text-blue-400 underline text-xs sm:text-sm"
                onClick={() => setShowFullBio(!showFullBio)}
              >
                {showFullBio ? "Read less" : "Read more"}
              </button>
            )}
          </p>
        </div>
      </div>

      {/* Top Movies */}
      <div className="mb-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">Top Movies</h2>
        <div className="flex gap-3 sm:gap-4 md:gap-4 overflow-x-auto pb-2">
          {topMovies.map(movie => (
            <div key={movie.id} className="flex-shrink-0 w-24 sm:w-28 md:w-36">
              <img
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : "https://via.placeholder.com/200x300?text=No+Image"}
                alt={movie.title}
                className="rounded-lg shadow-md w-full h-36 sm:h-40 md:h-48 object-cover"
              />
              <p className="text-[9px] sm:text-xs md:text-sm mt-1 text-center truncate">{movie.release_date?.slice(0,4)} - {movie.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Career Timeline */}
      <div>
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">Career Timeline</h2>
        <div className="flex gap-3 sm:gap-4 md:gap-4 overflow-x-auto pb-2">
          {timeline.map(movie => (
            <div key={movie.id} className="flex-shrink-0 w-24 sm:w-28 md:w-36">
              <img
                src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : "https://via.placeholder.com/200x300?text=No+Image"}
                alt={movie.title}
                className="rounded-lg shadow-md w-full h-36 sm:h-40 md:h-48 object-cover"
              />
              <p className="text-[9px] sm:text-xs md:text-sm mt-1 text-center truncate">{movie.release_date?.slice(0,4)} - {movie.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonDetails;
