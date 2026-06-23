import { motion } from 'framer-motion';
import { FaPlayCircle, FaMobileAlt, FaCamera, FaMapMarkedAlt, FaFingerprint, FaKeyboard, FaChartLine } from 'react-icons/fa';
import SlideWrapper from '../components/SlideWrapper';
import BgDecoration from '../components/BgDecoration';
import Header from '../components/Header';
import Footer from '../components/Footer';

const items = [
  { label: 'Your Social Feed & Recommendations', Icon: FaPlayCircle },
  { label: 'Netflix / Shahid "Because you watched…"', Icon: FaMobileAlt },
  { label: 'Snapchat Face Filters', Icon: FaCamera },
  { label: 'Google Maps Traffic Prediction', Icon: FaMapMarkedAlt },
  { label: 'FaceID & Fingerprint Unlock', Icon: FaFingerprint },
  { label: 'Keyboard Autocomplete', Icon: FaKeyboard },
];

export default function Slide04_AIEverywhere({ direction }) {
  return (
    <SlideWrapper direction={direction}>
      <BgDecoration />
      <Header kicker="PART 1 · DOES AI ACTUALLY THINK?" title="AI Is Not One Thing" icon={FaChartLine} />
      <div className="slide-content">
        <motion.p className="body-intro" style={{ fontSize: '2.315vh', color: 'var(--text-body)', marginBottom: '1.852vh', lineHeight: 1.5 }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }}>
          When people say "AI," they usually picture a chatbot. But AI is already inside almost everything you touch.
        </motion.p>
        <div className="s4-grid">
          {items.map((item, i) => (
            <motion.div key={i} className="card s4-card" initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}>
              <div className="s4-icon-circle"><item.Icon /></div>
              <span className="s4-label">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer num={4} total={21} />
    </SlideWrapper>
  );
}
