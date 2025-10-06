import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ScrollCardItem = ({ images = [], from, to }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    if (id) navigate(`/details/${id}`); 
  };

  return (
    <div className="flex overflow-hidden MyGradient">
      {/* First strip */}
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((item, i) => (
          <div
            key={i}
            onClick={() => handleClick(item.id)}
            className="pr-4 cursor-pointer"
          >
            <div
              className="aspect-[3/4] 
                         w-32 sm:w-36 md:w-44 lg:w-52 xl:w-60 
                         overflow-hidden relative rounded-xl"
            >
              <img
                src={item.image}
                alt={`poster-${i}`}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        ))}
      </motion.div>

      {/* Duplicate strip */}
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((item, i) => (
          <div
            key={`dup-${i}`}
            onClick={() => handleClick(item.id)}
            className="pr-4 cursor-pointer"
          >
            <div
              className="aspect-[3/4] 
                         w-32 sm:w-36 md:w-44 lg:w-52 xl:w-60 
                         overflow-hidden relative rounded-xl"
            >
              <img
                src={item.image}
                alt={`poster-dup-${i}`}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollCardItem;
