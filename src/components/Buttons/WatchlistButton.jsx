// import { useState, useContext } from "react";
// import { MovieContext } from "../../context/MovieContext";

// const WatchlistButton = ({ movie }) => {
//   const { watchlist, addToWatchlist, removeFromWatchlist } =
//     useContext(MovieContext);

//   // Check if this movie is already in the global watchlist
//   const inWatchlist = watchlist.some((m) => m.id === movie.id);

//   const [showWatchlistMsg, setShowWatchlistMsg] = useState(false);

//   const handleClick = () => {
//     if (inWatchlist) {
//       removeFromWatchlist(movie.id);
//     } else {
//       addToWatchlist(movie);
//     }

//     setShowWatchlistMsg(true);
//     setTimeout(() => setShowWatchlistMsg(false), 1500);
//   };

//   return (
//     <button
//       onClick={handleClick}
//       className={`w-full py-2 text-white font-semibold transition relative ${
//         inWatchlist
//           ? "bg-green-600 hover:bg-green-700"
//           : "bg-yellow-500 hover:bg-yellow-600"
//       }`}
//     >
//       {inWatchlist ? "✓ Added to Watchlist" : "+ Add to Watchlist"}

//       {/* Popup text */}
//       <div className="absolute -top-8 left-1/2 -translate-x-1/2">
//         <div
//           className={`bg-black text-white text-xs px-2 py-1 rounded-lg shadow-lg transform transition-all duration-500
//           ${
//             showWatchlistMsg
//               ? "opacity-100 -translate-y-2"
//               : "opacity-0 translate-y-0"
//           }
//           whitespace-pre-line text-center`}
//         >
//           {inWatchlist ? "Added to\nWatchlist" : "Removed from\nWatchlist"}
//         </div>
//       </div>
//     </button>
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
  className={`w-full py-2 text-white font-semibold transition relative ${
    inWatchlist ? "bg-green-600 hover:bg-green-700" : "bg-yellow-500 hover:bg-yellow-600"
  }`}
>
  {/* Full text by default */}
  <span className="block sm:hidden">{inWatchlist ? "✓ Added" : "+ Add"}</span>
  <span className="hidden sm:block">{inWatchlist ? "✓ Added to Watchlist" : "+ Add to Watchlist"}</span>

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
