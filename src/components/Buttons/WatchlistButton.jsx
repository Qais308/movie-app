

// import { useState, useContext } from "react";
// import { MovieContext } from "../../context/MovieContext";

// const WatchlistButton = ({ movie }) => {
//   const { watchlist, addToWatchlist, removeFromWatchlist } = useContext(MovieContext);
//   const inWatchlist = watchlist.some((m) => m.id === movie.id);

//   const [showWatchlistMsg, setShowWatchlistMsg] = useState(false);

//   const handleClick = () => {
//     if (inWatchlist) removeFromWatchlist(movie.id);
//     else addToWatchlist(movie);

//     setShowWatchlistMsg(true);
//     setTimeout(() => setShowWatchlistMsg(false), 1500);
//   };

//   return (
//    <button
//   onClick={handleClick}
//   className={`w-full py-2 text-white font-semibold transition relative ${
//     inWatchlist ? "bg-green-600 hover:bg-green-700" : "bg-yellow-500 hover:bg-yellow-600"
//   }`}
// >
//   {/* Full text by default */}
//   <span className="block sm:hidden">{inWatchlist ? "✓ Added" : "+ Add"}</span>
//   <span className="hidden sm:block">{inWatchlist ? "✓ Added to Watchlist" : "+ Add to Watchlist"}</span>

//   {/* Popup message */}
//   <div className="absolute -top-8 left-1/2 -translate-x-1/2">
//     <div
//       className={`bg-black text-white text-xs px-2 py-1 rounded-lg shadow-lg transform transition-all duration-500 ${
//         showWatchlistMsg ? "opacity-100 -translate-y-2" : "opacity-0 translate-y-0"
//       } whitespace-pre-line text-center`}
//     >
//       {inWatchlist ? "Added to\nWatchlist" : "Removed from\nWatchlist"}
//     </div>
//   </div>
// </button>

//   );
// };


// export default WatchlistButton;

import { useState, useContext } from "react";
import { MovieContext } from "../../context/MovieContext";

const WatchlistButton = ({ movie }) => {
  const { watchlist, addToWatchlist, removeFromWatchlist } = useContext(MovieContext);
  const inWatchlist = watchlist.some((m) => m.id === movie.id);

  const [showWatchlistMsg, setShowWatchlistMsg] = useState(false);

  const handleClick = () => {
    if (inWatchlist) removeFromWatchlist(movie.id);
    else addToWatchlist(movie);

    setShowWatchlistMsg(true);
    setTimeout(() => setShowWatchlistMsg(false), 1500);
  };

  return (
    
    <button
  onClick={handleClick}
  className={`w-full transition relative font-semibold text-white
    py-1 px-2 text-[8px] sm:text-base sm:py-2 sm:px-3
    ${inWatchlist ? "bg-green-600 hover:bg-green-700" : "bg-yellow-500 hover:bg-yellow-600"}
  `}
>
  {/* Shortened text for "added" only on mobile */}
  {inWatchlist ? (
    <>
      <span className="block sm:hidden">✓ Added</span>
      <span className="hidden sm:block">✓ Added to Watchlist</span>
    </>
  ) : (
    "+ Add to Watchlist" // stays same on all screens
  )}

  {/* Popup message */}
  <div className="absolute -top-8 left-1/2 -translate-x-1/2">
    <div
      className={`bg-black text-white text-xs px-2 py-1 rounded-lg shadow-lg transform transition-all duration-500 ${
        showWatchlistMsg ? "opacity-100 -translate-y-2" : "opacity-0 translate-y-0"
      } whitespace-pre-line text-center`}
    >
      {inWatchlist ? "Added to\nWatchlist" : "Removed from\nWatchlist"}
    </div>
  </div>
</button>

  );
};

export default WatchlistButton;
