import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import ScrollCard from "../components/ScrollCard";

const genres = [
  {
    id: 28,
    name: "Action",
    image:
      "/posters/action.webp",
  },
  {
    id: 35,
    name: "Comedy",
    image:
      "/posters/comedy.webp",
  },
  {
    id: 16,
    name: "Animation",
    image:
      "posters/animation.webp",
  },
  {
    id: 27,
    name: "Horror",
    image:
      "/posters/horror.webp",
  },
  {
    id: 878,
    name: "Sci-Fi",
    image: "/posters/sci-fi.webp",
  },
  {
    id: 36,
    name: "Historic",
    image:
      "/posters/historic.webp",
  },
];

const categories = [
  {
    title: "Popular movies",
    link: "/movies",
    img: "https://images.filmibeat.com/img/popcorn/movie_lists/upcoming-bollywood-action-movies-of-2024-20240124135118-79.jpg",
  },
  {
    title: "Popular Shows",
    link: "/shows",
    img: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/11/squid-game-season-2-players.jpg",
  },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Section */}
      <HeroSection />

      <FeatureSection />

      <ScrollCard />

      {/* Browse Categories */}
      <motion.div
        className="px-6 py-8 space-y-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl font-bold">Browse Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2 md:mt-3">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="relative rounded-xl overflow-hidden shadow-2xl cursor-pointer"
            >
              <Link to={cat.link}>
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-55 sm:h-80 xs:h-48 object-cover rounded-xl"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                    {cat.title}
                  </h2>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Genres */}
        <div>
          <h2 className="text-3xl font-bold">Genres</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-2 md:mt-3">
            {genres.map((g, i) => (
              <motion.div
                key={g.id}
                whileHover={{ scale: 1.05, opacity: 0.7 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer "
              >
                <Link to={`/genre/${g.id}/${g.name}`}>
                  <div className="w-full aspect-[4/3] relative">
                    <img
                      src={g.image}
                      alt={g.name}
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-2">
                      <h3 className="text-white font-bold text-base sm:text-lg md:text-2xl">
                        {g.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
