import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";

const genres = [
  {
    id: 28,
    name: "Action",
    image:
      "https://images.filmibeat.com/wallpapers/desktop/2023/12/salaar-part-1-ceasefire_4.jpg",
  },
  {
    id: 35,
    name: "Comedy",
    image:
      "https://www.typesof.com/wp-content/uploads/2024/01/types-of-comedy-1024x701.jpg",
  },
  {
    id: 16,
    name: "animation",
    image:
      "https://images.wallpapersden.com/image/download/demon-slayer_a2xoZWuUmZqaraWkpJRnamtlrWZsZWU.jpg",
  },
  {
    id: 27, 
    name: "horror",
    image: "https://s.studiobinder.com/wp-content/uploads/2022/12/Horror-Movie-Tropes-Featured.jpg", 
  },
  {
    id: 878,
    name: "Sci-Fi",
    image:
      "https://wallpaperaccess.com/full/1561771.jpg",
  },
  {
    id: 36,
    name: "historic",
    image:
      "https://images.fanpop.com/images/image_uploads/Troy-movies-72646_1024_768.jpg",
  },
];

const categories = [
  {
    title: "Trending",
    link: "/trending",
    img: "https://wallpaperaccess.com/full/4839516.jpg",
  },
  {
    title: "Trending Indian",
    link: "/indian",
    img: "https://images.filmibeat.com/img/popcorn/movie_lists/upcoming-bollywood-action-movies-of-2024-20240124135118-79.jpg",
  },
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Section */}
      <HeroSection />

    <FeatureSection />

      {/* Browse Categories */}
      <motion.div
        className="px-6 py-8 space-y-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl font-bold mb-6">Browse Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  className="w-full h-65 sm:h-70 xs:h-48 object-cover rounded-xl"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h2 className="text-xl sm:text-lg xs:text-base font-bold">
                    {cat.title}
                  </h2>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Genres */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Genres</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
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
                      <h3 className="text-white font-semibold text-sm sm:text-base">
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
