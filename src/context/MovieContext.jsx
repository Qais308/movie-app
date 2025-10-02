import { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);
  const [favourites, setFavourites] = useState([]);

  // ➕ Add to Watchlist
  const addToWatchlist = (movie) => {
    setWatchlist((prev) => {
      if (!prev.find((m) => m.id === movie.id)) {
        return [...prev, movie];
      }
      return prev;
    });
  };

  // ❌ Remove from Watchlist
  const removeFromWatchlist = (id) => {
    setWatchlist((prev) => prev.filter((m) => m.id !== id));
  };

  // ➕ Add to Favourites
  const addToFavourites = (movie) => {
    setFavourites((prev) => {
      if (!prev.find((m) => m.id === movie.id)) {
        return [...prev, movie];
      }
      return prev;
    });
  };

  // ❌ Remove from Favourites
  const removeFromFavourites = (id) => {
    setFavourites((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <MovieContext.Provider
      value={{
        watchlist,
        favourites,
        addToWatchlist,
        removeFromWatchlist,
        addToFavourites,
        removeFromFavourites,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

// import { createContext, useState } from "react";

// export const MovieContext = createContext();

// export const MovieProvider = ({ children }) => {
//   const [watchlist, setWatchlist] = useState([]);
//   const [favourites, setFavourites] = useState([]);

//   const addToWatchlist = (movie) => {
//     if (!watchlist.find((m) => m.id === movie.id)) {
//       setWatchlist([...watchlist, movie]);
//     }
//   };

//   const removeFromWatchlist = (id) => {
//     setWatchlist(watchlist.filter((m) => m.id !== id));
//   };

//   const addToFavourites = (movie) => {
//     if (!favourites.find((m) => m.id === movie.id)) {
//       setFavourites([...favourites, movie]);
//     }
//   };

//   const removeFromFavourites = (id) => {
//     setFavourites(favourites.filter((m) => m.id !== id));
//   };

//   return (
//     <MovieContext.Provider
//       value={{
//         watchlist,
//         favourites,
//         addToWatchlist,
//         removeFromWatchlist,
//         addToFavourites,
//         removeFromFavourites,
//       }}
//     >
//       {children}
//     </MovieContext.Provider>
//   );
// };
