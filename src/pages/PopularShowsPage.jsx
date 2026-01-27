// src/pages/PopularOTTShowsPage.jsx
import { useEffect, useState } from "react";
import MovieSection from "../components/MovieSection";

const API_KEY = "46b71fe47d81e124380aeddcf9b37ccd";

// OTT provider IDs: Netflix: 8, Amazon Prime: 119, Disney+: 337
const OTT_IDS = [8, 119, 337];

export default function PopularOTTShowsPage() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true); // ✅ added loading state

  useEffect(() => {
    const fetchOTTShows = async () => {
      try {
        const fetchShows = async (lang) => {
          const showsList = [];

          // Fetch first 3 pages
          for (let page = 1; page <= 3; page++) {
            const res = await fetch(
              `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_original_language=${lang}&sort_by=popularity.desc&page=${page}`
            );
            const data = await res.json();
            showsList.push(...(data.results || []));
          }

          // Filter only OTT shows
          const ottShows = await Promise.all(
            showsList.map(async (show) => {
              if (!show.id || !show.poster_path) return null;

              const provRes = await fetch(
                `https://api.themoviedb.org/3/tv/${show.id}/watch/providers?api_key=${API_KEY}`
              );
              const provData = await provRes.json();
              const providers = provData.results.IN?.flatrate || provData.results.US?.flatrate || [];

              const available = providers.some((p) => OTT_IDS.includes(p.provider_id));
              return available ? { ...show, media_type: "tv" } : null;
            })
          );

          return ottShows.filter(Boolean).slice(0, 20);
        };

        const indianShows = await fetchShows("hi");
        const globalShows = await fetchShows("en");

        setShows([...indianShows, ...globalShows]);
      } catch (err) {
        console.error("Error fetching OTT shows:", err);
      } finally {
        setLoading(false); 
      }
    };

    fetchOTTShows();
  }, []);

  return (
    <div className="md:px-4 px-1">
      <h1 className="text-3xl text-white font-bold mb-4">Popular OTT Shows</h1>

      {loading ? (
        <p className="text-gray-400">Loading popular OTT shows...</p> // ✅ loading message
      ) : shows.length > 0 ? (
        <MovieSection movies={shows} />
      ) : (
        <p className="text-gray-500">No popular OTT shows available right now.</p>
      )}
    </div>
  );
}
