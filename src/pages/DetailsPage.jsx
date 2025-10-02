

// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const TMDB_KEY = "46b71fe47d81e124380aeddcf9b37ccd"; // <- add your TMDb key
// const OMDB_KEY = "ad50766f"; // <- add your OMDb key

// const Details = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [movie, setMovie] = useState(null);
//   const [omdb, setOmdb] = useState(null);
//   const [trailerKey, setTrailerKey] = useState("");

//   useEffect(() => {
//     async function fetchMovie() {
//       try {
//         let data;

//         // Try fetching as movie
//         let res = await fetch(
//           `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_KEY}&append_to_response=videos,credits`
//         );
//         data = await res.json();

//         // If not found, fetch as TV show
//         if (data.status_code === 34) {
//           res = await fetch(
//             `https://api.themoviedb.org/3/tv/${id}?api_key=${TMDB_KEY}&append_to_response=videos,credits`
//           );
//           data = await res.json();
//           data.is_tv = true;
//         }

//         setMovie(data);

//         // Trailer selection (robust for movies and TV shows)
//         const videos = data.videos?.results || [];
//         const preferredTypes = [
//           "Trailer",
//           "Teaser",
//           "Clip",
//           "Featurette",
//           "Behind the Scenes",
//           "Promo",
//         ];

//         let trailer = null;
//         for (let type of preferredTypes) {
//           trailer = videos.find((v) => v.site === "YouTube" && v.type === type);
//           if (trailer) break;
//         }
//         if (!trailer) {
//           trailer = videos.find((v) => v.site === "YouTube");
//         }
//         if (trailer) setTrailerKey(trailer.key);

//         // Fetch OMDb data if IMDb ID exists
//         if (data.imdb_id) {
//           try {
//             const omdbRes = await fetch(
//               `https://www.omdbapi.com/?i=${data.imdb_id}&apikey=${OMDB_KEY}`
//             );
//             if (!omdbRes.ok) throw new Error("OMDb fetch failed");
//             const omdbData = await omdbRes.json();
//             if (omdbData.Response === "True") setOmdb(omdbData);
//           } catch (err) {
//             console.warn("OMDb fetch failed, skipping:", err.message);
//           }
//         }
//       } catch (err) {
//         console.error("Error fetching details:", err);
//       }
//     }

//     fetchMovie();
//   }, [id]);

//   if (!movie)
//     return <p className="text-center mt-20 text-white">Loading details...</p>;

//   // Dynamic fields for TV shows vs movies
//   const title = movie.is_tv ? movie.name : movie.title;
//   const releaseDate = movie.is_tv ? movie.first_air_date : movie.release_date;
//   const runtime = movie.is_tv
//     ? movie.episode_run_time?.[0] || "N/A"
//     : movie.runtime || "N/A";
//   const numberOfSeasons = movie.is_tv ? movie.number_of_seasons : null;

//   return (
//     <div className="max-w-7xl mx-auto p-4 md:p-6 text-white">
//       {/* Poster + Info */}
//       <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
//         <img
//           src={
//             movie.poster_path
//               ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
//               : "https://via.placeholder.com/500x750?text=No+Image"
//           }
//           alt={title}
//           className="flex-shrink-0 w-48 sm:w-53 md:w-62 lg:w-70 xl:w-75 rounded-lg shadow-lg"
//         />

//         <div className="flex-1 mt-4 sm:mt-0">
//           <h1 className="text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl font-bold mb-1 sm:mb-2">
//             {title}
//           </h1>
//           <p className="text-gray-300 italic text-xs sm:text-sm md:text-base mb-1 sm:mb-2">
//             {movie.tagline || ""}
//           </p>
//           <p className="text-xs sm:text-sm md:text-base">
//             <strong>Release Date:</strong> {releaseDate || "N/A"}
//           </p>
//           <p className="text-xs sm:text-sm md:text-base">
//             <strong>Runtime:</strong> {runtime} min
//           </p>
//           {numberOfSeasons && (
//             <p className="text-xs sm:text-sm md:text-base">
//               <strong>Seasons:</strong> {numberOfSeasons}
//             </p>
//           )}
//           <p className="text-xs sm:text-sm md:text-base">
//             <strong>Genres:</strong>{" "}
//             {movie.genres?.map((g) => g.name).join(", ") || "N/A"}
//           </p>
//           <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base">
//             {movie.overview || "No overview available."}
//           </p>

//           {omdb && (
//             <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base">
//               <strong>IMDb Rating:</strong> ⭐ {omdb.imdbRating || "N/A"}/10 (
//               {omdb.imdbVotes || "N/A"} votes){" "}
//               <span className="text-gray-400">(via OMDb)</span>
//             </p>
//           )}
//         </div>
//       </div>

//       {/* Cast */}
//       <div className="mt-6">
//         <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2 sm:mb-4">
//           Top Cast
//         </h2>
//         <div className="flex gap-2 sm:gap-3 md:gap-4 overflow-x-auto pb-2">
//           {movie.credits?.cast
//             ?.filter((actor) => actor.profile_path)
//             .slice(0, 10)
//             .map((actor) => (
//               <div
//                 key={actor.cast_id || actor.credit_id}
//                 className="text-center min-w-[60px] sm:min-w-[80px] md:min-w-[100px]"
//               >
//                 <img
//                   src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
//                   alt={actor.name}
//                   className="w-22 h-22 sm:w-26 sm:h-32 md:w-30 md:h-40 object-cover rounded-lg mx-auto cursor-pointer"
//                   onClick={() => navigate(`/person/${actor.id}`)}
//                 />
//                 <p className="text-[9px] sm:text-xs md:text-sm mt-1">
//                   {actor.name}
//                 </p>
//                 <p className="text-[8px] sm:text-[10px] md:text-xs text-gray-400">
//                   as {actor.character}
//                 </p>
//               </div>
//             )) || <p className="text-gray-400">No cast info available.</p>}
//         </div>
//       </div>

//       {/* Trailer */}
//       <div className="mt-6">
//         <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2 sm:mb-4">
//           Trailer
//         </h2>
//         {trailerKey ? (
//           <div className="w-full h-40 sm:h-56 md:h-72 lg:h-96 xl:h-[550px]">
//             <iframe
//               width="100%"
//               height="100%"
//               src={`https://www.youtube.com/embed/${trailerKey}?controls=1&rel=0`}
//               title="Trailer"
//               style={{ border: 0 }}
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//               className="rounded-lg shadow-lg"
//             ></iframe>
//           </div>
//         ) : (
//           <p className="text-gray-400 mt-1 sm:mt-2">
//             Trailer not available for this title.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Details;

import { useEffect, useState } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";

const TMDB_KEY = "46b71fe47d81e124380aeddcf9b37ccd";
const OMDB_KEY = "ad50766f";

const Details = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const mediaType = searchParams.get("type") || "movie"; // movie or tv
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [omdb, setOmdb] = useState(null);
  const [trailerKey, setTrailerKey] = useState("");

  useEffect(() => {
    async function fetchDetails() {
      try {
        // TMDb endpoint based on type
        const endpoint =
          mediaType === "tv"
            ? `https://api.themoviedb.org/3/tv/${id}?api_key=${TMDB_KEY}&append_to_response=videos,credits`
            : `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_KEY}&append_to_response=videos,credits`;

        const res = await fetch(endpoint);
        const data = await res.json();
        setMovie(data);

        // Get trailer (YouTube) for both movies & TV
        const videos = data.videos?.results || [];
        let trailer =
          videos.find((vid) => vid.type === "Trailer" && vid.site === "YouTube") ||
          videos.find((vid) => vid.site === "YouTube");
        if (trailer) setTrailerKey(trailer.key);

        // OMDb fetch using imdbID
        if (data.imdb_id) {
          try {
            const omdbRes = await fetch(
              `https://www.omdbapi.com/?i=${data.imdb_id}&apikey=${OMDB_KEY}`
            );
            if (!omdbRes.ok) throw new Error("OMDb fetch failed");
            const omdbData = await omdbRes.json();
            if (omdbData.Response === "True") setOmdb(omdbData);
          } catch (err) {
            console.warn("OMDb fetch failed:", err.message);
          }
        }
      } catch (err) {
        console.error("Error fetching details:", err);
      }
    }

    fetchDetails();
  }, [id, mediaType]);

  if (!movie)
    return <p className="text-center mt-20 text-white">Loading details...</p>;

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 text-white">
      {/* Poster + Info */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://via.placeholder.com/500x750?text=No+Image"
          }
          alt={movie.name || movie.title}
          className="flex-shrink-0 w-48 sm:w-53 md:w-62 lg:w-70 xl:w-75 rounded-lg shadow-lg"
        />

        <div className="flex-1 mt-4 sm:mt-0">
          <h1 className="text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl font-bold mb-1 sm:mb-2">
            {movie.title || movie.name}
          </h1>
          <p className="text-gray-300 italic text-xs sm:text-sm md:text-base mb-1 sm:mb-2">
            {movie.tagline || ""}
          </p>
          <p className="text-xs sm:text-sm md:text-base">
            <strong>Release Date:</strong>{" "}
            {movie.release_date || movie.first_air_date || "N/A"}
          </p>
          {mediaType === "tv" && (
            <p className="text-xs sm:text-sm md:text-base">
              <strong>Seasons:</strong> {movie.number_of_seasons || "N/A"}
            </p>
          )}
          <p className="text-xs sm:text-sm md:text-base">
            <strong>Runtime:</strong>{" "}
            {mediaType === "tv"
              ? movie.episode_run_time?.[0] || "N/A"
              : movie.runtime || "N/A"}{" "}
            min
          </p>
          <p className="text-xs sm:text-sm md:text-base">
            <strong>Genres:</strong>{" "}
            {movie.genres?.map((g) => g.name).join(", ") || "N/A"}
          </p>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base">
            {movie.overview || "No overview available."}
          </p>

          {omdb && (
            <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base">
              <strong>IMDb Rating:</strong> ⭐ {omdb.imdbRating || "N/A"}/10 (
              {omdb.imdbVotes || "N/A"} votes){" "}
              <span className="text-gray-400">(via OMDb)</span>
            </p>
          )}
        </div>
      </div>

      {/* Cast */}
      <div className="mt-6">
        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2 sm:mb-4">
          Top Cast
        </h2>
        <div className="flex gap-2 sm:gap-3 md:gap-4 overflow-x-auto pb-2">
          {movie.credits?.cast
            ?.filter((actor) => actor.profile_path)
            .slice(0, 10)
            .map((actor) => (
              <div
                key={actor.cast_id}
                className="text-center min-w-[60px] sm:min-w-[80px] md:min-w-[100px]"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={actor.name}
                  className="w-22 h-22 sm:w-26 sm:h-32 md:w-30 md:h-40 object-cover rounded-lg mx-auto cursor-pointer"
                  onClick={() => navigate(`/person/${actor.id}`)}
                />
                <p className="text-[9px] sm:text-xs md:text-sm mt-1">{actor.name}</p>
                <p className="text-[8px] sm:text-[10px] md:text-xs text-gray-400">
                  as {actor.character}
                </p>
              </div>
            )) || <p className="text-gray-400">No cast info available.</p>}
        </div>
      </div>

      {/* Trailer */}
      <div className="mt-6">
        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2 sm:mb-4">
          Trailer
        </h2>
        {trailerKey ? (
          <div className="w-full h-40 sm:h-56 md:h-72 lg:h-96 xl:h-[550px]">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${trailerKey}?controls=1&rel=0`}
              title="Trailer"
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        ) : (
          <p className="text-gray-400 mt-1 sm:mt-2">
            Trailer not available for this {mediaType}.
          </p>
        )}
      </div>
    </div>
  );
};

export default Details;
