// import FavouriteButton from "./Buttons/FavouriteButton";
// import DetailsButton from "./Buttons/DetailsButton";
// import WatchlistButton from "./Buttons/WatchlistButton";

// const MovieCard = ({ movie }) => {
//   return (
//     <div className=" flex-none relative rounded-[10px] w-[100px] h-[150px] sm:w-[150px] sm:h-[250px] md:w-[220px] md:h-[450px] overflow-hidden text-center text-white bg-gray-950">
//       <img
//         src={
//           movie.poster_path
//             ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
//             : "https://via.placeholder.com/500x750?text=No+Image"
//         }
//         alt={movie.title || "Movie Poster"}
//         className="rounded h-[65%] w-full"
//       />
//       <p className="text-xl font-semibold pt-2">{movie.title}</p>
//       <div className="absolute bottom-0 w-full">
//         <div className="flex justify-between px-3 mb-2">
//           <FavouriteButton movie={movie}></FavouriteButton>
//           <DetailsButton movie={movie}></DetailsButton>
//         </div>
//         <WatchlistButton movie={movie}></WatchlistButton>
//       </div>
//     </div>
//   );
// };

// export default MovieCard;

// import { useNavigate } from "react-router-dom";
// import FavouriteButton from "./Buttons/FavouriteButton";
// import DetailsButton from "./Buttons/DetailsButton";
// import WatchlistButton from "./Buttons/WatchlistButton";

// const MovieCard = ({ movie }) => {
//   const navigate = useNavigate();

//   const handleDetailsClick = () => {
//     if (movie?.id) {
//       navigate(`/details/${movie.id}`);
//     }
//   };

//   return (
//     <div className="flex-none relative rounded-[10px] w-[100px] h-[150px] sm:w-[150px] sm:h-[250px] md:w-[220px] md:h-[450px] overflow-hidden text-center text-white bg-gray-950">
      
//       {/* Poster clickable with same function */}
//      <img
//   src={
//     movie.poster_path
//       ? movie.media_type === "tv"
//         ? movie.poster_path // OMDb series full URL
//         : `https://image.tmdb.org/t/p/w500${movie.poster_path}` // TMDb movies
//       : "https://via.placeholder.com/300x450?text=Poster+Not+Available"
//   }
//   alt={movie.title || "Movie Poster"}
//   className="rounded h-[65%] w-full object-cover cursor-pointer"
//   onClick={handleDetailsClick}
// />

//       {/* Movie title */}
//     <p className="text-xl font-semibold pt-2">{movie.title || movie.name}</p>


//       {/* Buttons */}
//       <div className="absolute bottom-0 w-full">
//         <div className="flex justify-between px-3 mb-2">
//           <FavouriteButton movie={movie} />
//           <DetailsButton movie={movie} onDetailsClick={handleDetailsClick} />
//         </div>
//         <WatchlistButton movie={movie} />
//       </div>
//     </div>
//   );
// };

// export default MovieCard;
import { useNavigate } from "react-router-dom";
import FavouriteButton from "./Buttons/FavouriteButton";
import DetailsButton from "./Buttons/DetailsButton";
import WatchlistButton from "./Buttons/WatchlistButton";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    if (movie?.id) {
      navigate(`/details/${movie.id}?type=${movie.media_type || "movie"}`);
    }
  };

  return (
    <div className="relative flex flex-col bg-gray-950 rounded-lg overflow-hidden text-white shadow-lg w-[40%] h-[55%] sm:w-[45%] md:w-[220px]">
      {/* Poster */}
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "https://via.placeholder.com/300x450?text=Poster+Not+Available"
        }
        alt={movie.title || movie.name || "Movie Poster"}
        className="w-full h-auto object-cover cursor-pointer"
        onClick={handleDetailsClick}
      />

      {/* Title */}
      <p className="text-center text-sm sm:text-base md:text-xl font-semibold mt-2 px-2 truncate">
        {movie.title || movie.name}
      </p>

      {/* Buttons */}
      <div className="mt-auto">
        <div className="flex justify-between px-2 py-1">
          <FavouriteButton movie={movie} />
          <DetailsButton movie={movie} onDetailsClick={handleDetailsClick} />
        </div>
        <WatchlistButton movie={movie} />
      </div>
    </div>
  );
};

export default MovieCard;
