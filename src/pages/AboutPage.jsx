import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-gray-200 px-6 py-16 flex flex-col">
      <div className="max-w-4xl mx-auto flex-1">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
          About MovieSync
        </h1>

        <p className="text-lg sm:text-xl mb-4">
          MovieSync is a web app designed for movie and TV enthusiasts. Track,
          discover, and compare your favorite films and series in one place.
        </p>

        <p className="text-lg sm:text-xl mb-4">
          Using data from trusted APIs like <strong>TMDB</strong> and <strong>OMDb</strong>, 
          MovieSync provides accurate information, posters, and ratings for thousands of movies and shows.
        </p>

        <p className="text-lg sm:text-xl mb-4">
          Browse featured content, search for any title, and stay updated with trending releases. 
          Our smooth and responsive interface ensures a professional and enjoyable experience on both desktop and mobile.
        </p>

        <p className="text-lg sm:text-xl mt-6">
          Whether you’re a casual viewer or a movie buff, MovieSync helps you organize your entertainment world efficiently.
        </p>
      </div>

      {/* Back to Home Link */}
      <div className="max-w-4xl mx-auto mt-10 text-center">
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
