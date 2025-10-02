// src/pages/GenrePage.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieSection from "../components/MovieSection";

const API_KEY = "46b71fe47d81e124380aeddcf9b37ccd"; // your TMDB key

const GenrePage = () => {
  const { genreId, genreName } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchGenreMovies = async () => {
      try {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&sort_by=popularity.desc`;
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results || []);
      } catch (err) {
        console.error("Error fetching genre movies:", err);
      }
    };

    fetchGenreMovies();
  }, [genreId]);

  return (
    <div className="md:px-4 px-1">
      <h1 className="text-3xl font-bold mb-4 text-white">
        {genreName} Movies
      </h1>
      {movies.length > 0 ? (
        <MovieSection movies={movies} />
      ) : (
        <p className="text-gray-500">No movies found in this genre.</p>
      )}
    </div>
  );
};

export default GenrePage;
