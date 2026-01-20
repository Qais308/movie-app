// import { useEffect, useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { MovieContext } from "../context/MovieContext";

// const featuredMovies = [
//    {
//     id: 299534,
//     title: "Avengers Endgame",
//     poster: "/posters/avengers.webp",
//     overview:
//       "After the devastating events of Infinity War, the remaining Avengers assemble once more to reverse Thanos.",
//   },
//   {
//     id: 414906,
//     title: "The Batman",
//     poster: "/posters/batman.webp",
//     overview:
//       "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues.",
//   },
//   {
//     id: 986056,
//     title: "Thunderbolts",
//     poster: "/posters/thunderbolts.webp",
//     overview:
//       "A group of antiheroes and reformed villains are recruited by the government to undertake dangerous missions that no one else is willing to handle.",
//   },
//   {
//     id: 76600,
//     title: "Avatar: The Way of Water",
//     poster:
//       "/posters/avatar.webp",
//     overview:
//       "Set more than a decade after the events of the first film, Jake Sully and Neytiri have formed a family and are living peacefully in the forests of Pandora.",
//   },
//   {
//     id: 693134,
//     title: "Dune: Part Two",
//     poster: "/posters/dune-2.webp",
//     overview:
//       "The story continues as Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
//   },
//   {
//     id: 155,
//     title: "The Dark Knight",
//     poster: "/posters/dark-knight.webp",
//     overview:
//       "Batman faces the Joker, a criminal mastermind who plunges Gotham into chaos and pushes the hero to his limits.",
//   },
// ];

// const preloadImages = async (srcArray) => {
//   await Promise.all(
//     srcArray.map(
//       (src) =>
//         new Promise((resolve) => {
//           const img = new Image();
//           img.src = src;
//           img.decode?.().then(resolve).catch(resolve);
//         })
//     )
//   );
// };

// export default function HeroSection() {
//   const { heroIndex, setHeroIndex } = useContext(MovieContext);
//   const [loaded, setLoaded] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     preloadImages(featuredMovies.map((m) => m.poster)).then(() => setLoaded(true));
//   }, []);

//   useEffect(() => {
//     if (!loaded) return;
//     const interval = setInterval(() => {
//       setHeroIndex((prev) => (prev + 1) % featuredMovies.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [loaded, setHeroIndex]);

//   if (!loaded)
//     return <div className="h-[60vh] sm:h-[70vh] md:h-[80vh] bg-black" />;

//   const currentMovie = featuredMovies[heroIndex];

//   const textVariants = {
//     initial: { opacity: 0, x: -40, y: 20 },
//     animate: { opacity: 1, x: 0, y: 0 },
//     exit: { opacity: 0, x: 40, y: -30 },
//   };

//   return (
//     <div
//       className="relative h-[60vh] sm:h-[65vh] md:h-[75vh] flex items-end justify-start p-4 sm:p-6 md:p-10 overflow-hidden cursor-pointer"
//       onClick={() => currentMovie?.id && navigate(`/details/${currentMovie.id}`)}
//     >
//       {/* Poster Crossfade */}
//       <AnimatePresence mode="wait">
//         <motion.img
//           key={currentMovie.id}
//           src={currentMovie.poster}
//           alt={currentMovie.title}
//           className="absolute top-0 left-0 w-full h-full object-cover opacity-80 will-change-transform will-change-opacity"
//           initial={{ opacity: 0, scale: 1.1 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 1.05 }}
//           transition={{ duration: 1.5, ease: "easeInOut" }}
//         />
//       </AnimatePresence>

//       {/* Gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
// {/* Text container */}
// <div className="relative z-10 max-w-full sm:max-w-xl md:max-w-lg lg:max-w-xl">
//   {/* Animate title */}
//   <AnimatePresence mode="wait">
//     <motion.h1
//       key={currentMovie.title + "-title"}
//       variants={textVariants}
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       transition={{
//         delay: 0.6,
//         duration: 0.6,
//         ease: "easeOut",
//       }}
//       className="text-2xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-3 text-white drop-shadow-md"
//     >
//       {currentMovie.title}
//     </motion.h1>
//   </AnimatePresence>

//   {/* Animate overview separately */}
//   <AnimatePresence mode="wait">
//     <motion.p
//       key={currentMovie.title + "-overview"}
//       variants={textVariants}
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       transition={{
//         delay: 0.8,
//         duration: 0.6,
//         ease: "easeOut",
//       }}
//       className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed line-clamp-3 sm:line-clamp-none"
//     >
//       {currentMovie.overview}
//     </motion.p>
//   </AnimatePresence>
// </div>
//     </div>
//   );
// }
// src/components/HeroSection.jsx
// src/components/HeroSection.jsx
// src/components/HeroSection.jsx


import { motion } from "framer-motion";
import MovieLogo from "./MovieLogo";

const featuresText = `
Discover the latest movies and top-rated blockbusters.
Save favorites, create watchlists, and watch trailers directly in MovieSync.
`;

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden mb-10">
         <div className="max-w-7xl mx-auto px-4
                  flex flex-col lg:flex-row
                   gap-8">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://wallpapers.com/images/hd/movie-poster-background-q1zm830g0hfww2lk.jpg')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-20 xl:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          
          

<div className="hidden lg:block w-full border-2 rounded-2xl">
  <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
    
    {/* Image */}
    <div className="w-full lg:w-1/2">
      <img
        src="https://img.freepik.com/photos-gratuite/vue-elements-du-cinema-3d_23-2150720822.jpg?t=st=1709279140~exp=1709279740~hmac=81af85905a5cbf7cb7715e80c7654fb782df277fe529ea9a247cc84842ebc99f"
        alt="Enjoy watching movies"
        className="w-full rounded-xl object-cover shadow-lg"
      />
    </div>

    {/* Text */}
    <div className="w-full lg:w-1/2 text-center lg:text-left">
      <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
        Make every moment a movie moment
      </h2>

      <p className="mt-4 text-gray-300 text-base sm:text-lg leading-relaxed">
        From late-night thrillers to family favorites, there’s always something to watch.
      </p>
    </div>

  </div>
</div>


       
        {/* LEFT: Text + Logo (FeatureSection content) */}
          <motion.div
            className="max-w-xl border-2 rounded-2xl bg-black/50 p-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <MovieLogo size="lg" fullText={true} />

            <p className="mt-6 text-white font-extrabold text-xl sm:text-2xl md:text-3xl leading-relaxed whitespace-pre-line">
              {featuresText.trim()}
            </p>
          </motion.div>
          </div>
      </div>
    </div>
    </section>
  );
}
