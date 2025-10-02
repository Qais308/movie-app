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
    <div className="mb-12 w-[95vw] mx-auto">
      {title && <h2 className="text-2xl font-bold mb-6 px-2">{title}</h2>}

      <div className="flex flex-wrap gap-x-5 gap-y-12 p-2 justify-center">
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p className="text-gray-400 text-lg mt-10">No movies yet</p>
        )}
      </div>
    </div>
  );
};

export default MovieSection;



// import { useEffect, useState } from "react";
// import MovieCard from "./MovieCard";

// const API_KEY = "46b71fe47d81e124380aeddcf9b37ccd";

// const MovieSection = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     async function fetchMovies() {
//       const all = [];
//       const totalPages = 3;

//       for (let p = 1; p <= totalPages; p++) {
//         const res = await fetch(
//           `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=${p}`
//         );
//         const data = await res.json();
//         if (data.results) {
//           all.push(...data.results);
//         }
//       }

//       setMovies(all);
//     }

//     fetchMovies();
//   }, []);

//   return (
//     <div className="flex flex-wrap gap-x-5 gap-y-12 p-2 w-[95vw] mx-auto justify-center">
//       {movies.map((movie) => (
//         <MovieCard key={movie.id} movie={movie} />
//       ))}
      
//     </div>
//   );
// };

// export default MovieSection;

