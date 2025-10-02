import React from "react";

const MovieLogo = ({ size = "md", fullText = false, className = "" }) => {
  const sizes = {
    sm: { width: 32, height: 32, textSize: "text-sm" },
    md: { width: 48, height: 48, textSize: "text-base" },
    lg: { width: 90, height: 90, textSize: "text-2xl" }
  };

  const { width, height, textSize } = sizes[size];

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      {/* Logo Icon */}
      <svg
        width={width}
        height={height}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        <circle cx="32" cy="32" r="28" className="fill-blue-500" />
        <circle cx="32" cy="32" r="20" className="fill-gray-900" />
        <circle cx="32" cy="8" r="3" className="fill-red-400" />
        <circle cx="50" cy="20" r="3" className="fill-red-400" />
        <circle cx="54" cy="32" r="3" className="fill-red-400" />
        <circle cx="50" cy="44" r="3" className="fill-red-400" />
        <circle cx="32" cy="56" r="3" className="fill-red-400" />
        <circle cx="14" cy="44" r="3" className="fill-red-400" />
        <circle cx="10" cy="32" r="3" className="fill-red-400" />
        <circle cx="14" cy="20" r="3" className="fill-red-400" />
        <path d="M28 22 L28 42 L42 32 Z" className="fill-blue-500" />
      </svg>

      {/* Text */}
      <span
        className={`font-extrabold ${textSize} tracking-tight bg-gradient-to-r from-blue-500 to-red-400 bg-clip-text text-transparent`}
      >
        {fullText ? "CineHub" : "CH"}
      </span>
    </div>
  );
};

export default MovieLogo;
