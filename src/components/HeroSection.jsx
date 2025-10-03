import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { preloadImages } from "../utils/preLoadImages";


const featuredMovies = [
  {
  id: 693134, // Dune: Part Two (2024)
  title: "Dune: Part Two",
  poster: "/posters/dune.jpg",
  overview:
    "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
},
  {
    id: 414906, // The Batman (2022)
    title: "The Batman",
    poster: "/posters/batman.webp",
    overview:
      "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues.",
  },
  {
    id: 157336, // Interstellar
    title: "Interstellar",
    poster: "/posters/intersteller.webp",
    overview:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  },
  {
  id: 299534, // Avengers: Endgame (2019)
  title: "Avengers: Endgame",
  poster: "/posters/avengers.jpg",
  overview:
    "After the devastating events of Infinity War, the remaining Avengers assemble once more to reverse Thanos.",
},
   {
    id: 155, // The Dark Knight (2008)
    title: "The Dark Knight",
    poster: "/posters/dark knight.webp",
    overview:
      "Batman faces the Joker, a criminal mastermind who plunges Gotham into chaos and pushes the hero to his limits.",
  },
 {
  id: 986056, // Thunderbolts (2025)
  title: "Thunderbolts",
  poster: "/posters/thunderbolts.jpg", // replace with your chosen poster
  overview:
    "A group of antiheroes and reformed villains are recruited by the government to undertake dangerous missions that no one else is willing to handle.",
}
];
export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  // Preload images on mount
  useEffect(() => {
    preloadImages(featuredMovies.map((m) => m.poster)).then(() => {
      setLoaded(true);
    });
  }, []);

  // Carousel interval
  useEffect(() => {
    if (!loaded) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredMovies.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [loaded]);

  if (!loaded) {
    return (
      <div className="h-[60vh] flex items-center justify-center text-white">
        Loading hero section...
      </div>
    );
  }

  const currentMovie = featuredMovies[currentIndex];

  return (
    <div
      className="relative h-[60vh] sm:h-[65vh] md:h-[75vh] flex items-end justify-start p-6 md:p-10 overflow-hidden cursor-pointer"
      onClick={() => navigate(`/details/${currentMovie.id}`)}
    >
      <motion.img
        key={currentMovie.id}
        src={currentMovie.poster}
        alt={currentMovie.title}
        className="absolute top-0 left-0 w-full h-full object-cover object-center opacity-70"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="relative z-10 max-w-xl">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-2 text-white"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {currentMovie.title}
        </motion.h1>
        <motion.p
          className="text-lg sm:text-base text-gray-200"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {currentMovie.overview}
        </motion.p>
      </div>
    </div>
  );
}
