import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";

const genres = [
  {
    id: 28,
    name: "Action",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.Nf4HBjqFmfH7RJWb-dJCPQHaEo?pid=Api&P=0&h=180",
  },
  {
    id: 35,
    name: "Comedy",
    image:
      "https://tse1.mm.bing.net/th/id/OIP.bvaHqQuakvMAFW3DqcPNBwHaD4?pid=Api&P=0&h=180",
  },
  {
    id: 18,
    name: "Drama",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.kS2UBYS2pjzbbnkWprm03AHaDv?pid=Api&P=0&h=180",
  },
  {
    id: 10749,
    name: "Romance",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.05qNHWBQAkMVV1iaIDG6ZAHaEK?pid=Api&P=0&h=180",
  },
  {
    id: 878,
    name: "Sci-Fi",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.x84oq6o8TmqgXgcrX2dU1QHaEo?pid=Api&P=0&h=180",
  },
  {
    id: 10751,
    name: "Family",
    image:
      "https://www.developgoodhabits.com/wp-content/uploads/2021/02/family_reunion.jpg",
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

      {/* Features Section - Netflix-style */}
      <motion.div
        className="w-full relative mt-4 sm:mt-6 md:mt-10 py-6 sm:py-10 md:py-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Background gradient & shapes */}
        <div className="absolute inset-0 bg-black overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/80 to-black"></div>
          <div className="absolute -top-32 -left-32 w-40 sm:w-64 md:w-80 h-40 sm:h-64 md:h-80 bg-purple-800/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-32 -right-32 w-40 sm:w-64 md:w-80 h-40 sm:h-64 md:h-80 bg-red-800/20 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        {/* Features cards */}
        <div className="relative z-10 max-w-6xl mx-auto px-1 md:px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {" "}
          {[
            {
              title: "Latest Movies",
              desc: "Get the newest releases and trending blockbusters instantly.",
            },
            {
              title: "Top Rated",
              desc: "Explore movies highly rated by critics and audiences alike.",
            },
            {
              title: "Personalized",
              desc: "Save favorites and create your personal watchlist.",
            },
            {
              title: "Trailers & Clips",
              desc: "Watch trailers and teaser clips directly in the app.",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="p-6 sm:p-8 bg-black/10 border border-gray-800 rounded-xl shadow-lg backdrop-blur-sm flex flex-col justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {" "}
              <p className="text-lg sm:text-xl font-semibold mb-2">
                {feature.title}
              </p>{" "}
              <p className="text-sm sm:text-base text-gray-200">
                {feature.desc}
              </p>{" "}
            </motion.div>
          ))}{" "}
        </div>
      </motion.div>

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
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
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
