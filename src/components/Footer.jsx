export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-8 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        {/* App Info */}
        <div className="text-center md:text-left">
          <h2 className="text-white font-bold text-xl mb-2">MovieSync</h2>
          <p className="text-sm sm:text-base">
            Discover, track, and compare your favorite movies and TV shows.
          </p>
        </div>

        {/* Credits */}
        <div className="text-center md:text-right text-sm sm:text-base">
          <p className="mb-1">
            <strong>APIs:</strong> The Movie Database (TMDB), OMDb API
          </p>
          <p className="mb-1">
            <strong>Libraries:</strong> React, React Router, Tailwind CSS,
            Framer Motion
          </p>
          <p className="mb-1">
            <strong>Images/Posters:</strong> TMDB & OMDb API resources
          </p>
          <p>
            <strong>Icons & Logos:</strong> Custom designed
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} MovieSync. All rights reserved.
      </div>
    </footer>
  );
}
