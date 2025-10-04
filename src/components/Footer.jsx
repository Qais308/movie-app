export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-white font-bold text-2xl mb-2">MovieSync</h2>
          <p className="text-sm sm:text-base">
            Discover, track, and compare your favorite movies and TV shows.
          </p>
        </div>
{/* Navigation Links */}
<div className="text-center">
  <h3 className="text-white font-semibold mb-2">Explore</h3>
  <ul className="list-none m-0 p-0">
    <li>
      <a
        href="/"
        className="block text-gray-400 hover:text-white transition-colors duration-300"
      >
        Home
      </a>
    </li>
    <li>
      <a
        href="/about"
        className="block text-gray-400 hover:text-white transition-colors duration-300"
      >
        About
      </a>
    </li>
  </ul>
</div>


        {/* Credits / Legal */}
        <div className="text-center md:text-right text-sm sm:text-base space-y-1">
          <p>
            <strong>APIs:</strong> TMDB, OMDb API
          </p>
          <p>
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
