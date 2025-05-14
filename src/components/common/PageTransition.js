// /src/components/PageTransition.js
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function PageTransition({ clickPosition, onComplete, isExiting }) {
  const [coverScale, setCoverScale] = useState(1);

  // compute how big to scale a 24px square so it covers the screen
  useEffect(() => {
    const maxDim = Math.max(window.innerWidth, window.innerHeight);
    setCoverScale((maxDim * 2) / 24); // times 2 for buffer
  }, []);

  const variants = {
    enter: {
      x: clickPosition.x - 12,
      y: clickPosition.y - 12,
      scale: 1,
      transition: { duration: 0 },
    },
    center: {
      x: 0,
      y: 0,
      scale: coverScale,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
    exit: {
      x: clickPosition.x - 12,
      y: clickPosition.y - 12,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-[24px] h-[24px] bg-black z-50"
      variants={variants}
      initial="enter"
      animate={isExiting ? 'exit' : 'center'}
      onAnimationComplete={() => {
        // once we finish the enter animation, call onComplete to navigate
        if (!isExiting) onComplete();
      }}
    />
  );
}
