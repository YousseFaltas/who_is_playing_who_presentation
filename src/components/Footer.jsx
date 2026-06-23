/**
 * Slide footer with slide number and presentation title.
 * Maps to addFooter() from the pptx script.
 */
export default function Footer({ num, total = 21, dark = false }) {
  return (
    <div className={`slide-footer slide-footer--${dark ? 'dark' : 'light'}`}>
      <span>{num} / {total}</span>
      <span>Who's Playing Who?</span>
    </div>
  );
}
