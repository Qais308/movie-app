import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { preloadImages } from "../utils/preloadImages";

const featuredMovies = [
  {
    id: 693134,
    title: "Dune: Part Two",
    poster: "/posters/dune.jpg",
    overview:
      "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
  },
  {
    id: 414906,
    title: "The Batman",
    poster: "/posters/batman.webp",
    overview:
      "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues.",
  },
  {
    id: 157336,
    title: "Interstellar",
    poster: "/posters/intersteller.webp",
    overview:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  },
  {
    id: 299534,
    title: "Avengers Endgame",
    poster: "/posters/avengers.jpg",
    overview:
      "After the devastating events of Infinity War, the remaining Avengers assemble once more to reverse Thanos.",
  },
  {
    id: 155,
    title: "The Dark Knight",
    poster: "/posters/dark knight.webp",
    overview:
      "Batman faces the Joker, a criminal mastermind who plunges Gotham into chaos and pushes the hero to his limits.",
  },
  {
    id: 986056,
    title: "Thunderbolts",
    poster: "/posters/thunderbolts.jpg",
    overview:
      "A group of antiheroes and reformed villains are recruited by the government to undertake dangerous missions that no one else is willing to handle.",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(() => {
    return Number(localStorage.getItem("heroIndex")) || 0;
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Preload all posters
    preloadImages(featuredMovies.map((m) => m.poster));

    // Change movie every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % featuredMovies.length;
        localStorage.setItem("heroIndex", next); // persist current index
        return next;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentMovie = featuredMovies[currentIndex];

  return (
    <div
      className="relative h-[60vh] sm:h-[65vh] md:h-[75vh] flex items-end justify-start p-6 md:p-10 overflow-hidden cursor-pointer bg-black"
      onClick={() => navigate(`/details/${currentMovie.id}`)}
    >
      {/* Poster crossfade */}
      <AnimatePresence mode="wait">
        <motion.img
          key={currentMovie.id}
          src={currentMovie.poster}
          alt={currentMovie.title}
          className="absolute top-0 left-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Info animation */}
      <div className="relative z-10 max-w-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentMovie.id + "-text"}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl font-bold mb-2 text-white"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {currentMovie.title}
            </motion.h1>
            <motion.p
              className="text-lg sm:text-base text-gray-200"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {currentMovie.overview}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
