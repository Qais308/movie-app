import { useEffect, useState } from "react";
import MovieSection from "../components/MovieSection";

const API_KEY = "46b71fe47d81e124380aeddcf9b37ccd";

const shuffleArray = (arr) => {
  const array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const interleaveArrays = (arr1, arr2) => {
  const result = [];
  const maxLength = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < maxLength; i++) {
    if (i < arr1.length) result.push(arr1[i]);
    if (i < arr2.length) result.push(arr2[i]);
  }
  return result;
};

const PopularMoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const sessionKey = "popularMovies";
    const storedMovies = sessionStorage.getItem(sessionKey);
    if (storedMovies) {
      setMovies(JSON.parse(storedMovies));
      setLoading(false);
      return;
    }

    const fetchPopularMovies = async () => {
      try {
        
        const globalRes = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=1`
        );
        const globalData = await globalRes.json();
        let globalMovies = (globalData.results || []).filter(
          (m) => m.release_date && parseInt(m.release_date.slice(0, 4)) >= 2010 && m.poster_path
        );
        globalMovies = shuffleArray(globalMovies);

    
        const indiaRes = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_original_language=hi&sort_by=popularity.desc&page=1`
        );
        const indiaData = await indiaRes.json();
        let indiaMovies = (indiaData.results || []).filter(
          (m) => m.release_date && parseInt(m.release_date.slice(0, 4)) >= 2010 && m.poster_path
        );
        indiaMovies = shuffleArray(indiaMovies);

        
        let combined = interleaveArrays(indiaMovies, globalMovies);

    
        const combinedMap = new Map();
        combined.forEach((movie) => {
          if (!combinedMap.has(movie.id)) combinedMap.set(movie.id, movie);
        });
        combined = Array.from(combinedMap.values()).slice(0, 40);

        setMovies(combined);
        sessionStorage.setItem(sessionKey, JSON.stringify(combined));
      } catch (err) {
        console.error("Error fetching popular movies:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPopularMovies();
  }, []);

  return (
    <div className="md:px-4 px-1">
      <h1 className="text-3xl text-white font-bold mb-4">Popular Movies</h1>

      {loading ? (
        <p className="text-gray-400">Loading popular movies...</p> 
      ) : movies.length > 0 ? (
        <MovieSection movies={movies} />
      ) : (
        <p className="text-gray-500">No popular movies available right now.</p>
      )}
    </div>
  );
};

export default PopularMoviesPage;
