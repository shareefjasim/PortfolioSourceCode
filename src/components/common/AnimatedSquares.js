// src/components/AnimatedSquares.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedSquares = ({
  count = 10,
  minSize = 30,
  maxSize = 100,
  drift = 30,        // max ± drift in px
  minDuration = 1,   // seconds
  maxDuration = 3,   // seconds
}) => {
  // Generate square properties once and store them
  const [squares] = useState(() => 
    Array.from({ length: count }, () => {
      const topPct = Math.random() * 100;
      const leftPct = Math.random() * 100;
      const size = Math.random() * (maxSize - minSize) + minSize;
      const driftX = (Math.random() * 2 - 1) * drift;
      const driftY = (Math.random() * 2 - 1) * drift;
      const delay = Math.random() * maxDuration;
      const duration = Math.random() * (maxDuration - minDuration) + minDuration;
      // Generate a random z-index between 1 and 10
      const zIndex = Math.floor(Math.random() * 10) + 1;
      
      return { topPct, leftPct, size, driftX, driftY, delay, duration, zIndex };
    })
  );

  return (
    <div className="absolute inset-0">
      {squares.map((square, i) => {
        const { topPct, leftPct, size, driftX, driftY, delay, duration, zIndex } = square;

        return (
          <motion.div
            key={i}
            className="absolute bg-black/40 dark:bg-white/40 backdrop-blur-md"
            style={{ zIndex }}
            initial={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${topPct}%`,
              left: `${leftPct}%`,
              opacity: 0.7
            }}
            animate={{
              x: [0, driftX, 0],
              y: [0, driftY, 0],
              opacity: [0.1, 0.9, 0.7]
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: duration,
              delay: delay,
              ease: "easeInOut"
            }}
          />
        );
      })}
    </div>
  );
};

export default AnimatedSquares;