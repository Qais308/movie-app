// import { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import MovieCard from "../components/MovieCard"; // your existing MovieCard

// export default function SearchPage() {
//   const [results, setResults] = useState([]);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const params = new URLSearchParams(location.search);
//   const query = params.get("query") || "";

//   useEffect(() => {
//     if (!query) return;

//     const fetchMovies = async () => {
//       try {
//         const res = await fetch(
//           `https://api.themoviedb.org/3/search/movie?api_key=46b71fe47d81e124380aeddcf9b37ccd&language=en-US&query=${encodeURIComponent(
//             query
//           )}`
//         );
//         const data = await res.json();

        
//        setResults(
//   data.results
//     ?.filter((movie) => movie.poster_path) // keep only movies with posters
//     .slice(0, 15) || []                     // take top 15 or empty array
// );

//       } catch (error) {
//         console.error("Error fetching movies:", error);
//       }
//     };

//     fetchMovies();
//   }, [query]);

//   const handleDetails = (id) => {
//     navigate(`/details/${id}`);
//   };

//   return (
//     <div className="p-6 pt-24">
//       <h2 className="text-2xl font-bold text-white mb-6">
//         Search Results for: <span className="text-red-400">{query}</span>
//       </h2>

//       {results.length > 0 ? (
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
//           {results.map((movie) => (
//             <MovieCard
//               key={movie.id}
//               movie={movie}
//               onDetails={() => handleDetails(movie.id)}
//               allowWatchlist={true}
//               allowFavorite={true}
//             />
//           ))}
//         </div>
//       ) : (
//         <p className="text-gray-400 text-center col-span-full">
//           No movies found.
//         </p>
//       )}
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const SearchPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query") || "";
  const [results, setResults] = useState([]);

  // API key placeholders
  const tmdbApiKey = "46b71fe47d81e124380aeddcf9b37ccd";
  const omdbApiKey = "ad50766f";

  useEffect(() => {
    if (!query) return;

    const fetchResults = async () => {
      try {
        // --- TMDb Movies ---
        const tmdbRes = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${tmdbApiKey}&query=${encodeURIComponent(query)}&language=en-US`
        );
        const tmdbData = await tmdbRes.json();
        const movies = tmdbData.results
          .filter((m) => m.poster_path) // only with poster
          .map((m) => ({ ...m, media_type: "movie" }));

        // --- OMDb Series ---
        const omdbRes = await fetch(
          `https://www.omdbapi.com/?apikey=${omdbApiKey}&s=${encodeURIComponent(query)}&type=series`
        );
        const omdbData = await omdbRes.json();
        const series = omdbData.Search?.filter(
          (s) => s.Poster && s.Poster !== "N/A"
        ).map((s) => ({
          id: s.imdbID,
          title: s.Title,
          poster_path: s.Poster, // full URL
          media_type: "tv",
        })) || [];

        // --- Combine movies + series ---
        const combined = [...movies, ...series];

        // --- Prioritize exact matches ---
        const exactMatch = combined.filter(
          (item) =>
            item.title?.toLowerCase() === query.toLowerCase() ||
            item.name?.toLowerCase() === query.toLowerCase()
        );
        const others = combined.filter((item) => !exactMatch.includes(item));

        setResults([...exactMatch, ...others].slice(0, 15));
      } catch (err) {
        console.error("Error fetching search results:", err);
      }
    };

    fetchResults();
  }, [query, tmdbApiKey, omdbApiKey]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      {results.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={{
            ...movie,
            title: movie.title || movie.name,
          }}
        />
      ))}
    </div>
  );
};

export default SearchPage;

