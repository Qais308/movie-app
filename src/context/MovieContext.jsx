import { createContext, useState, useEffect } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  // Initialize state from localStorage
  const [watchlist, setWatchlist] = useState(() => {
    const stored = localStorage.getItem("watchlist");
    return stored ? JSON.parse(stored) : [];
  });

  const [favourites, setFavourites] = useState(() => {
    const stored = localStorage.getItem("favourites");
    return stored ? JSON.parse(stored) : [];
  });

  // Save watchlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  // Save favourites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

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
