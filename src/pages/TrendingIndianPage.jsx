import { useEffect, useState } from "react";
import MovieSection from "../components/MovieSection";

const API_KEY = "46b71fe47d81e124380aeddcf9b37ccd"; // your TMDB key

const TrendingIndianPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingIndian = async () => {
      try {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&region=IN&with_original_language=hi|ta|te|ml|kn|mr|pa|gu|bn`;
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results || []);
      } catch (err) {
        console.error("Error fetching trending Indian movies:", err);
      }
    };

    fetchTrendingIndian();
  }, []);

  return (
    <div className="px-1 md:px-4">
      <h1 className="text-3xl text-white font-bold mb-4">Trending in India</h1>
      {movies.length > 0 ? (
        <MovieSection movies={movies} />
      ) : (
        <p className="text-gray-500">No trending Indian movies found.</p>
      )}
    </div>
  );
};

export default TrendingIndianPage;
