import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import MovieSection from "../components/MovieSection";

const WatchlistPage = () => {
  const { watchlist } = useContext(MovieContext);

  return (
    <div>
      <h1 className="text-2xl text-white font-bold mb-4 px-4">My Watchlist</h1>
      <MovieSection movies={watchlist} />
    </div>
  );
};

export default WatchlistPage;
