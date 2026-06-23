import { motion } from 'framer-motion';

/**
 * Slide header: kicker text, title, and icon badge.
 * Maps to addHeader() from the pptx script.
 */
export default function Header({ kicker, title, icon: Icon, dark = false, titleSize }) {
  const variant = dark ? 'dark' : 'light';
  // Convert px size to vh: 24px = 4.444vh
  const size = titleSize ? (titleSize / 5.4) + 'vh' : '4.444vh';

  return (
    <div className="slide-header">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5vh', marginBottom: '1vh' }}>
        <motion.div
          className={`slide-header__icon-badge slide-header__icon-badge--${variant}`}
        initial={{ scale: 0, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.2 }}
      >
        {Icon && <Icon />}
      </motion.div>

      {/* Kicker */}
      <motion.p
        className={`slide-header__kicker slide-header__kicker--${variant}`}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
          {kicker}
        </motion.p>
      </div>

      {/* Title */}
      <motion.h1
        className={`slide-header__title slide-header__title--${variant}`}
        style={{ fontSize: size }}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {title}
      </motion.h1>
    </div>
  );
}
