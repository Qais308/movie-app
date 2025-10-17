import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import MovieSection from "../components/MovieSection";

const FavoritePage = () => {
  const { favorite } = useContext(MovieContext);

  return (
    <div>
      <h1 className="text-2xl text-white font-bold mb-4 px-1 md:px-4">
        My favorite
      </h1>
      <MovieSection movies={favorite} />
    </div>
  );
};

export default FavoritePage;
