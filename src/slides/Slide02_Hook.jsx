import { motion } from 'framer-motion';
import { FaMobileAlt } from 'react-icons/fa';
import SlideWrapper from '../components/SlideWrapper';
import BgDecoration from '../components/BgDecoration';
import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';

export default function Slide02_Hook({ direction, num, total }) {
  return (
    <SlideWrapper direction={direction}>
      <BgDecoration />
      <Header kicker="OPENING" title="The Hook" icon={FaMobileAlt} />
      <div className="slide-content">
        <motion.p className="s2-prompt" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
          Pull out your phone, open Instagram or TikTok, and look at the very first thing in your feed. Don't show me — just look.
        </motion.p>
        <Card fill="var(--card-bg2)" className="s2-highlight" delay={0.4}>
          <p>Raise your hand if that first video or post was exactly what you wanted to see right now.</p>
        </Card>
        <motion.p className="s2-explanation" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.55 }}>
          <strong className="text-navy">How did it know? </strong>
          <span className="text-body">
            Something on the other side of that screen studied you — what you watch, how long you watch it, what you skip — and decided what to put in front of your eyes next.
          </span>
        </motion.p>
      </div>
      <Footer num={num} total={total} />
    </SlideWrapper>
  );
}
