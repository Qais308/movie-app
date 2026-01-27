import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MovieSection = ({ fetchUrl, movies: propMovies, title }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (propMovies) {
      setMovies(propMovies);
      return;
    }

    async function fetchMovies() {
      if (!fetchUrl) return;

      const res = await fetch(fetchUrl);
      const data = await res.json();
      if (data.results) setMovies(data.results);
    }

    fetchMovies();
  }, [fetchUrl, propMovies]);

  return (
    <div className="mb-12 w-full mx-auto">
      {title && <h2 className="text-xl sm:text-2xl font-bold mb-6 px-2">{title}</h2>}

      
      <div className="flex flex-wrap gap-4 justify-center">
        {movies && movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p className="text-gray-400 text-lg mt-10">No movies yet</p>
        )}
      </div>
    </div>
  );
};

export default MovieSection;
