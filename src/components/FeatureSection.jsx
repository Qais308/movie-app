import { motion } from "framer-motion";
import MovieLogo from "./MovieLogo";

const featuresText = `
Discover the latest movies and top-rated blockbusters.
Save favorites, create watchlists, and watch trailers directly in MovieSync.
`;

export default function FeatureSection() {
  return (
    <div className="relative w-full py-16 overflow-hidden bg-gradient-to-t from-black via-gray-900 to-black">
      <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-center justify-center gap-6">
        {/* Full MovieSync Logo (always shows full text) */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
        >
          <MovieLogo size="lg" fullText={true} />
        </motion.div>

        {/* Feature Text */}
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed md:leading-snug">
            {featuresText.trim()}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
