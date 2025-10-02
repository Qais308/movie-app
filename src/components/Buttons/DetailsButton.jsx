const DetailsButton = ({ movie, onDetailsClick }) => {
  if (!movie?.id) return null;

  return (
    <button
      onClick={onDetailsClick}
      className="group relative text-gray-300 hover:text-blue-400 transition"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
        />
      </svg>

      <span
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
                   px-2 py-1 text-xs rounded text-white bg-gray-700/90
                   opacity-0 group-hover:opacity-100 transition
                   pointer-events-none z-50"
      >
        View Details
      </span>
    </button>
  );
};

export default DetailsButton;
