import { motion } from "framer-motion";
import MovieLogo from "./MovieLogo";

const featuresText = `
Discover the latest movies and top-rated blockbusters.
Save favorites, create watchlists, and watch trailers directly in MovieSync.
`;

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden mb-10">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
          
             "url('https://wallpapers.com/images/hd/movie-poster-background-q1zm830g0hfww2lk.jpg')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Centered Content */}
      <div className="relative z-10 min-h-[60vh] xl:min-h-[75vh]
                      flex items-center justify-center px-4">

        <motion.div
          className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl
                     border-2 rounded-2xl bg-black/40 p-6 sm:p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <MovieLogo size="lg" fullText={true} />

          <p className="mt-6 text-white font-extrabold text-xl md:text-3xl leading-relaxed whitespace-pre-line">
            {featuresText.trim()}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
