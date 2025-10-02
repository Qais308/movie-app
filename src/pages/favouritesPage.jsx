import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import MovieSection from "../components/MovieSection";

const FavouritePage = () => {
  const { favourites } = useContext(MovieContext);

  return (
    <div>
      <h1 className="text-2xl text-white font-bold mb-4 px-4">My Favourites</h1>
      <MovieSection movies={favourites} />
    </div>
  );
};

export default FavouritePage;
