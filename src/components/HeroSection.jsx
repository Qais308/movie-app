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
    id: 986056,
    title: "Thunderbolts",
    poster: "/posters/thunderbolts.jpg",
    overview:
      "A group of antiheroes and reformed villains are recruited by the government to undertake dangerous missions that no one else is willing to handle.",
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
  
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    preloadImages(featuredMovies.map((m) => m.poster)).then(() => {
      setLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (!loaded) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredMovies.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [loaded]);

  if (!loaded)
    return (
      <div className="h-[60vh] flex items-center justify-center text-white">
        Loading hero section...
      </div>
    );

  const currentMovie = featuredMovies[currentIndex];

  return (
    <div
      className="relative h-[60vh] sm:h-[65vh] md:h-[75vh] flex items-end justify-start p-6 md:p-10 overflow-hidden cursor-pointer"
      onClick={() => currentMovie?.id && navigate(`/details/${currentMovie.id}`)}
    >
      {/* Background Poster */}
      <motion.img
        key={currentMovie.id}
        src={currentMovie.poster}
        alt={currentMovie.title}
        className="absolute top-0 left-0 w-full h-full object-cover object-center opacity-70"
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1.05, opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Animated Text */}
      <div className="relative z-10 max-w-xl">
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentMovie.id + "-title"}
            className="text-4xl sm:text-5xl font-bold mb-2 text-white"
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -25, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {currentMovie.title}
          </motion.h1>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={currentMovie.id + "-overview"}
            className="text-lg sm:text-base text-gray-200"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            {currentMovie.overview}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
}
