import React from "react";
import ScrollCardItem from "../components/ScrollCardItem";

const ScrollCard = () => {
  const upperCard = [
    "https://cdna.artstation.com/p/assets/images/images/063/096/684/large/william-j-harris-oppenheimer-movie-poster-2023.jpg?1684720979",
    "https://www.behindwoods.com/uploads/629875356e3ca.jpg",
    "https://assets.gadgets360cdn.com/pricee/assets/product/202206/Jawan-poster_1655912386.jpg",
    "https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2022/11/troll-movie.png?ssl=1",
    "https://images.justwatch.com/poster/252184951/s718/squid-game.jpg",
    "https://m.media-amazon.com/images/M/MV5BMjE2N2MyMzEtNmU5NS00OTI0LTlkNTMtMWM1YWYyNmU4NmY0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",

  ];

  const lowerCard = [
    "https://cdna.artstation.com/p/assets/images/images/046/103/336/large/illusion-design-money-heist-poster-min.jpg?1644314844",
    "https://moviesandmania.com/wp-content/uploads/2022/09/American-Murderer-movie-film-true-crime-thriller-2022-Tom-Pelphrey-poster-1.jpg",
    "http://masala.com/wp-content/uploads/cloud/2023/09/22/image-17.png",
    "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1r4Q4l.img?w=600&h=900&m=6&x=142&y=279&s=382&d=326",
    "https://1.bp.blogspot.com/-VQekIGVpOFc/Wv67Gbl8yvI/AAAAAAAAAXQ/itkY_u4XYOIQPCwzPI___3NdY4WiQAy5QCLcBGAs/s1600/Justice%2BLeague.png",
    "https://juksun.com/wp-content/uploads/2024/02/Mirzapur-Season-2-Web-Series-Poster.jpg",

  ];

  return (
   <div className="relative w-[85vw] sm:w-[75vw] md:w-[60vw] mx-auto overflow-hidden">
    <h2 className="relative z-20 text-3xl sm:text-4xl font-bold text-white mb-6 text-left">
    Spotlight
  </h2>
  {/* Your cards */}
  <div className="flex flex-col gap-10 relative z-0">
    <ScrollCardItem images={upperCard} from={0} to={"-100%"} />
    <ScrollCardItem images={lowerCard} from={"-100%"} to={0} />
  </div>

  {/* Vignette Overlay */}
  <div className="pointer-events-none absolute inset-0 z-10 
                  bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.2)_40%,rgba(0,0,0,0.9)_100%)]" />
</div>

  );
};

export default ScrollCard;

