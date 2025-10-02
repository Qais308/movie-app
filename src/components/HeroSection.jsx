// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// // Featured movies with correct TMDb IDs
// const featuredMovies = [
//   {
//     id: 155, // The Dark Knight
//     title: "The Dark Knight",
//     poster: "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
//     overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham...",
//   },
//   {
//     id: 76600, // Avatar: The Way of Water
//     title: "Avatar: The Way of Water",
//     poster: "https://image.tmdb.org/t/p/original/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
//     overview: "Jake Sully lives with his newfound family formed on Pandora, until a familiar threat returns to finish what was previously started.",
//   },
//   {
//     id: 157336, // Interstellar
//     title: "Interstellar",
//     poster: "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
//     overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival...",
//   },
//   {
//     id: 438631, // Dune: Part Two
//     title: "Dune: Part Two",
//     poster: "https://image.tmdb.org/t/p/original/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
//     overview: "Paul Atreides continues his journey on the desert planet Arrakis to secure the future of his family and people.",
//   },
//   {
//     id: 505642, // Black Panther: Wakanda Forever
//     title: "Black Panther: Wakanda Forever",
//     poster: "https://image.tmdb.org/t/p/original/rv1AWImgx386ULjcf62VYaW8zSt.jpg",
//     overview: "Shuri and the leaders of Wakanda fight to protect their nation from intervening world powers after the death of King T’Challa.",
//   },
// ];

// export default function HeroSection() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % featuredMovies.length);
//     }, 6000); // changes every 6s
//     return () => clearInterval(interval);
//   }, []);

//   const currentMovie = featuredMovies[currentIndex];

//   return (
//     <div
//       className="relative h-[60vh] sm:h-[65vh] md:h-[75vh] flex items-end justify-start p-6 md:p-10 overflow-hidden cursor-pointer"
//       onClick={() => {
//         if (currentMovie?.id) navigate(`/details/${currentMovie.id}`);
//       }}
//     >
//      <motion.img
//   key={currentMovie.id}
//   src={currentMovie.poster}
//   alt={currentMovie.title}
//   className="absolute top-0 left-0 w-full h-full object-cover object-center opacity-70"
//   initial={{ scale: 1.2, opacity: 0 }}
//   animate={{ scale: 1, opacity: 1 }}
//   transition={{ duration: 1.5, ease: "easeOut" }}
// />


//       {/* Text Overlay */}
//       <div className="relative z-10 max-w-xl">
//         <motion.h1
//           className="text-5xl sm:text-4xl xs:text-2xl font-bold mb-2"
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           {currentMovie.title}
//         </motion.h1>
//         <motion.p
//           className="text-lg sm:text-base xs:text-sm text-gray-200"
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//         >
//           {currentMovie.overview}
//         </motion.p>
//       </div>
//     </div>
//   );
// // }
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Balanced "safe crop" featured movies (5 total)
const featuredMovies = [
  {
    id: 414906, // The Batman (2022)
    title: "The Batman",
    poster: "https://image.tmdb.org/t/p/original/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
    overview:
      "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues.",
  },
  {
    id: 157336, // Interstellar
    title: "Interstellar",
    poster: "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    overview:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  },
   {
    id: 155, // The Dark Knight (2008)
    title: "The Dark Knight",
    poster: "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    overview:
      "Batman faces the Joker, a criminal mastermind who plunges Gotham into chaos and pushes the hero to his limits.",
  },
    {
    id: 475557, // Joker (2019)
    title: "Joker",
    poster: "https://image.tmdb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    overview:
      "A failed stand-up comedian’s descent into madness and nihilism inspires a violent countercultural revolution in Gotham City.",
  },
  {
    id: 27205, // Inception
    title: "Inception",
    poster: "https://image.tmdb.org/t/p/original/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    overview:
      "A skilled thief who steals corporate secrets through dream-sharing technology is given a chance at redemption if he can successfully perform inception.",
  },
  
];


export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredMovies.length);
    }, 6000); // change every 6 seconds
    return () => clearInterval(interval);
  }, []);

  const currentMovie = featuredMovies[currentIndex];

  return (
    <div
      className="relative h-[60vh] sm:h-[65vh] md:h-[75vh] flex items-end justify-start p-6 md:p-10 overflow-hidden cursor-pointer"
      onClick={() => {
        if (currentMovie?.id) navigate(`/details/${currentMovie.id}`);
      }}
    >
      {/* Background Poster */}
      <motion.img
        key={currentMovie.id}
        src={currentMovie.poster}
        alt={currentMovie.title}
        className="absolute top-0 left-0 w-full h-full object-cover object-center opacity-70"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Movie Info */}
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
