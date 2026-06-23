import { motion } from 'framer-motion';

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.96,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.96,
  }),
};

/**
 * Wraps each slide with transition animation and background class.
 */
export default function SlideWrapper({ dark = false, children, direction = 0 }) {
  return (
    <motion.div
      className={`slide ${dark ? 'slide--dark' : 'slide--light'}`}
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 },
      }}
    >
      {children}
    </motion.div>
  );
}
