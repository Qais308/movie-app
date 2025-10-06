import React, { useEffect } from "react";
import ScrollCardItem from "../components/ScrollCardItem";
import { preloadImages } from "../utils/preLoadImages";

const ScrollCard = () => {
  const upperCard = [
    { id: "tt15354916", image: "/posters/jawan.avif" },
    { id: "tt26548265", image: "/posters/maharaja.jpg" },
    { id: "tt9179430", image: "/posters/vikram.jpg" },
    { id: "tt8178634", image: "/posters/rrr.jpeg" },
  ];

  const lowerCard = [
    { id: 872585, image: "/posters/oppenheimer.avif" },
    { id: 157336, image: "/posters/interstellar.jpg" },
    { id: 27205, image: "/posters/inception.jpg" },
    { id: 603692, image: "/posters/johnwick4.webp" },
  ];

  useEffect(() => {
    const urls = [...upperCard, ...lowerCard].map((m) => m.image);
    preloadImages(urls);
  }, []);

  return (
    <div className="relative w-[85vw] sm:w-[75vw] md:w-[60vw] mx-auto overflow-hidden">
      <h2 className="relative z-20 text-3xl sm:text-4xl font-bold text-white mb-6 text-left">
       Blockbuster Hits
      </h2>

      <div className="flex flex-col gap-10 relative z-0">
        <ScrollCardItem images={upperCard} from={0} to={"-100%"} />
        <ScrollCardItem images={lowerCard} from={"-100%"} to={0} />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-10 
                   bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.2)_40%,rgba(0,0,0,0.9)_100%)]"
      />
    </div>
  );
};

export default ScrollCard;
