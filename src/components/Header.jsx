// import { NavLink, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";

// export default function Header({ isOpen, setIsOpen }) {
//   const items = [
//     { name: "Home", path: "/" },
//     { name: "My Watchlist", path: "/watchlist" },
//     { name: "Favourites", path: "/favourites" },
//     { name: "Compare Movies", path: "/compare" },
//   ];

//   const [search, setSearch] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const navigate = useNavigate();

//   // Fetch suggestions as user types (debounced)
//   useEffect(() => {
//     if (search.trim().length < 2) {
//       setSuggestions([]);
//       return;
//     }

//     const timeout = setTimeout(async () => {
//       try {
//         const res = await fetch(
//           `https://api.themoviedb.org/3/search/movie?api_key=46b71fe47d81e124380aeddcf9b37ccd&query=${encodeURIComponent(
//             search
//           )}`
//         );
//         const data = await res.json();
//         setSuggestions(data.results?.slice(0, 6) || []);
//       } catch (err) {
//         console.error("Error fetching suggestions:", err);
//       }
//     }, 300);

//     return () => clearTimeout(timeout);
//   }, [search]);

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     if (search.trim()) {
//       navigate(`/search?query=${encodeURIComponent(search)}`);
//       setSearch("");
//       setSuggestions([]);
//     }
//   };

//   const handleSelect = (movie) => {
//     navigate(`/search?query=${encodeURIComponent(movie.title)}`);
//     setSearch("");
//     setSuggestions([]);
//   };

//   return (
//     <header className="fixed top-0 left-0 w-full bg-[#111] text-white z-50 flex items-center justify-between px-4 py-3 shadow-md">
//       {/* Left: Hamburger / Tabs */}
//       <div className="flex items-center gap-4 md:gap-6">
//         <button
//           className="text-2xl cursor-pointer md:hidden"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           ☰
//         </button>

//         <nav className="hidden md:flex gap-6">
//           {items.map((item) => (
//             <NavLink
//               key={item.name}
//               to={item.path}
//               className={({ isActive }) =>
//                 `text-white font-medium hover:text-blue-400 transition ${
//                   isActive ? "text-blue-500 border-b-2 border-blue-500" : ""
//                 }`
//               }
//             >
//               {item.name}
//             </NavLink>
//           ))}
//         </nav>
//       </div>

//       {/* Right: Search + Logo */}
//       <div className="flex items-center gap-4 md:gap-6 flex-1 justify-end relative">
//         <form
//           onSubmit={handleSearchSubmit}
//           className="w-[calc(100%-4rem)] sm:max-w-[250px] md:w-[200px] xl:w-[400px] relative"
//         >
//           <input
//             type="text"
//             placeholder="Search movies..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full px-2 py-1 rounded bg-gray-800 text-white focus:outline-none"
//           />

//           {/* Suggestions dropdown */}
//          {/* Suggestions dropdown */}
// {suggestions.length > 0 && (
//   <div className="absolute top-full left-0 w-full bg-[#1e1e1e] border border-gray-700 rounded-md mt-1 max-h-72 overflow-y-auto shadow-lg z-50">
//     {suggestions.map((movie) => (
//       <div
//         key={movie.id}
//         className="flex items-center gap-2 p-2 hover:bg-gray-700 cursor-pointer"
//         onClick={() => handleSelect(movie)}
//       >
//         <span className="text-sm">{movie.title}</span>
//       </div>
//     ))}
//   </div>
// )}

//         </form>

//         <div className="w-8 h-8 bg-gray-700 rounded-md flex items-center justify-center">
//           LOGO
//         </div>
//       </div>
//     </header>
//   );
// }
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header({ isOpen, setIsOpen }) {
  const items = [
    { name: "Home", path: "/" },
    { name: "My Watchlist", path: "/watchlist" },
    { name: "Favourites", path: "/favourites" },
    { name: "Compare Movies", path: "/compare" },
  ];

  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  // API key placeholders
  const tmdbApiKey = "46b71fe47d81e124380aeddcf9b37ccd";
  const omdbApiKey = "ad50766f";

  useEffect(() => {
    if (search.trim().length < 2) {
      setSuggestions([]);
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        // TMDb movies
        const tmdbRes = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${tmdbApiKey}&query=${encodeURIComponent(search)}&language=en-US`
        );
        const tmdbData = await tmdbRes.json();
        const movies = tmdbData.results
          .filter((m) => m.poster_path)
          .map((m) => ({ ...m, media_type: "movie" }));

        // OMDb series
        const omdbRes = await fetch(
          `https://www.omdbapi.com/?apikey=${omdbApiKey}&s=${encodeURIComponent(search)}&type=series`
        );
        const omdbData = await omdbRes.json();
        const series = omdbData.Search?.filter(
          (s) => s.Poster && s.Poster !== "N/A"
        ).map((s) => ({
          id: s.imdbID,
          title: s.Title,
          poster_path: s.Poster,
          media_type: "tv",
        })) || [];

        // Combine results
        const combined = [...movies, ...series];

        // Exact matches first
        const exactMatch = combined.filter(
          (item) =>
            item.title?.toLowerCase() === search.toLowerCase() ||
            item.name?.toLowerCase() === search.toLowerCase()
        );
        const others = combined.filter((item) => !exactMatch.includes(item));

        setSuggestions([...exactMatch, ...others].slice(0, 6));
      } catch (err) {
        console.error("Error fetching suggestions:", err);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [search, tmdbApiKey, omdbApiKey]);

  const handleSearchSubmit = (e) => {
  e.preventDefault();
  if (search.trim()) {
    navigate(`/search?query=${encodeURIComponent(search)}`);
    setSearch("");
    setSuggestions([]); // <-- hide dropdown on submit
  }
};
 const handleSelect = (movie) => {
  navigate(`/search?query=${encodeURIComponent(movie.title)}`);
  setSearch("");
  setSuggestions([]); // <-- hide dropdown on selection
};
  return (
    <header className="fixed top-0 left-0 w-full bg-[#111] text-white z-50 flex items-center justify-between px-4 py-3 shadow-md">
      {/* Left: Hamburger / Tabs */}
      <div className="flex items-center gap-4 md:gap-6">
        <button
          className="text-2xl cursor-pointer md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <nav className="hidden md:flex gap-6">
          {items.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-white font-medium hover:text-blue-400 transition ${
                  isActive ? "text-blue-500 border-b-2 border-blue-500" : ""
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Right: Search + Logo */}
      <div className="flex items-center gap-4 md:gap-6 flex-1 justify-end relative">
        <form
          onSubmit={handleSearchSubmit}
          className="w-[calc(100%-4rem)] sm:max-w-[250px] md:w-[200px] xl:w-[400px] relative"
        >
          <input
            type="text"
            placeholder="Search movies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-2 py-1 rounded bg-gray-800 text-white focus:outline-none"
          />

          {/* Suggestions dropdown */}
          {suggestions.length > 0 && (
            <div className="absolute top-full left-0 w-full bg-[#1e1e1e] border border-gray-700 rounded-md mt-1 max-h-72 overflow-y-auto shadow-lg z-50">
              {suggestions.map((movie) => (
                <div
                  key={movie.id}
                  className="flex items-center gap-2 p-2 hover:bg-gray-700 cursor-pointer"
                  onClick={() => handleSelect(movie)}
                >
                  <span className="text-sm">{movie.title}</span>
                </div>
              ))}
            </div>
          )}
        </form>

        <div className="w-8 h-8 bg-gray-700 rounded-md flex items-center justify-center">
          LOGO
        </div>
      </div>
    </header>
  );
}
