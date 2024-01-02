// PageTransition.js
import { motion } from 'framer-motion';

const transitionVariants = {
  initial: { x: '-100vw' },
  animate: {
    x: '100vw',
    transition: { type: 'tween', ease: 'easeInOut', duration: 0.5 },
  },
  exit: { x: '100vw', transition: { duration: 0.1 } },
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      variants={transitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed top-0 left-0 w-full h-full bg-black z-500"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
