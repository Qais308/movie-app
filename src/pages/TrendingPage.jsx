// src/pages/TrendingPage.jsx
import { useEffect, useState } from "react";
import MovieSection from "../components/MovieSection";

const API_KEY = "46b71fe47d81e124380aeddcf9b37ccd";

const TrendingPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results || []);
    };
    fetchTrending();
  }, []);

  return (
    <div className="px-4">
      <h1 className="text-3xl font-bold mb-4">Trending Movies</h1>
      <MovieSection movies={movies} />
    </div>
  );
};

export default TrendingPage;
