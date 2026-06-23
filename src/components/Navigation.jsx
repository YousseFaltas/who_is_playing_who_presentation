import { useEffect, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

/**
 * Navigation overlay: arrow buttons, keyboard, and touch swipe support.
 */
export default function Navigation({ onPrev, onNext, current, total }) {
  // Keyboard navigation (LTR)
  const handleKey = useCallback((e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') onNext();
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') onPrev();
    if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); onNext(); }
  }, [onNext, onPrev]);

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  // Touch swipe
  useEffect(() => {
    let startX = 0;
    const onTouchStart = (e) => { startX = e.touches[0].clientX; };
    const onTouchEnd = (e) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (dx > 50) onPrev();
      if (dx < -50) onNext();
    };
    window.addEventListener('touchstart', onTouchStart);
    window.addEventListener('touchend', onTouchEnd);
    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [onNext, onPrev]);

  return (
    <>
      {/* Progress bar */}
      <div className="progress-bar" style={{ width: `${(current / total) * 100}%` }} />

      {/* Arrow buttons */}
      <div className="nav-overlay">
        {current > 1 && (
          <button className="nav-btn nav-btn--prev" onClick={onPrev} aria-label="Previous slide">
            <FaChevronLeft />
          </button>
        )}
        {current < total && (
          <button className="nav-btn nav-btn--next" onClick={onNext} aria-label="Next slide">
            <FaChevronRight />
          </button>
        )}
      </div>


    </>
  );
}
