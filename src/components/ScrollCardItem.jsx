import React from "react";
import { motion } from "framer-motion";

const ScrollCardItem = ({ images, from, to }) => {
  return (
    <div className="flex overflow-hidden MyGradient">
      {/* First strip */}
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, i) => (
          <div key={i} className="pr-4">
            <div
              className="aspect-[3/4] 
                         w-32 sm:w-36 md:w-44 lg:w-52 xl:w-60 
                         overflow-hidden relative rounded-xl"
            >
              <img
                src={image}
                alt={`poster-${i}`}
                className="absolute top-0 left-0 w-full h-full object-cover overflow-hidden"
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
        {images.map((image, i) => (
          <div key={i} className="pr-4">
            <div
              className="aspect-[3/4] 
                         w-32 sm:w-36 md:w-44 lg:w-52 xl:w-60 
                         overflow-hidden relative rounded-xl"
            >
              <img
                src={image}
                alt={`poster-${i}`}
                className="absolute top-0 left-0 w-full h-full object-cover overflow-hidden"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollCardItem;

