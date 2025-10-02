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
    <div className="relative flex flex-col bg-gray-950 rounded-lg overflow-hidden text-white shadow-lg w-[45%]  md:w-[220px]">
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
      <p className="text-center sm:text-lg md:text-xl font-semibold mt-2 px-2 truncate">
        {movie.title || movie.name}
      </p>

     {/* Buttons */}
<div className="mt-auto">
  <div className="flex justify-between px-2 py-1 mb-2"> {/* Added mb-2 */}
    <FavouriteButton movie={movie} />
    <DetailsButton movie={movie} onDetailsClick={handleDetailsClick} />
  </div>
  <WatchlistButton movie={movie} />
</div>

    </div>
  );
};

export default MovieCard;
