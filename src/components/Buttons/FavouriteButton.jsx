import { useContext, useState } from "react";
import { MovieContext } from "../../context/MovieContext";

const FavouriteButton = ({ movie }) => {
  const { favourites, addToFavourites, removeFromFavourites } = useContext(MovieContext);
  const [showFavMsg, setShowFavMsg] = useState(false);

  const inFavourites = favourites.some((m) => m.id === movie.id);

  const handleClick = () => {
    if (inFavourites) removeFromFavourites(movie.id);
    else addToFavourites(movie);
    setShowFavMsg(true);
    setTimeout(() => setShowFavMsg(false), 1500);
  };

  return (
    <button
      onClick={handleClick}
      className="p-1 sm:p-2 rounded-full transition relative flex items-center justify-center"
    >
      <div
  className={`absolute -top-6 left-0 right-0 mx-auto text-xs px-2 py-1 rounded  text-white shadow-lg transition-all duration-500
  max-w-[120px] text-center
  ${showFavMsg ? "opacity-100 -translate-y-2" : "opacity-0 translate-y-0"}`}
>
  {inFavourites ? "Added to Favourites" : "Removed from Favourites"}
</div>


      {inFavourites ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" className="w-6 sm:w-7 h-6 sm:h-7">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2} className="w-6 sm:w-7 h-6 sm:h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.014-4.5-4.5-4.5-1.74 0-3.223.993-4 2.445A5.002 5.002 0 007.5 3.75C5.014 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      )}
    </button>

  );
};

export default FavouriteButton;
