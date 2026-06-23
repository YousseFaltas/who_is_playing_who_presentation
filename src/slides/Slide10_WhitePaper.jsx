import { motion } from 'framer-motion';
import { FaLightbulb } from 'react-icons/fa';
import SlideWrapper from '../components/SlideWrapper';
import BgDecoration from '../components/BgDecoration';
import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';

export default function Slide10_WhitePaper({ direction }) {
  return (
    <SlideWrapper direction={direction}>
      <BgDecoration />
      <Header kicker="PART 2 · YOUR GREATEST WEAPON" title="The White Paper Test" icon={FaLightbulb} />
      <div className="slide-content">
        <motion.p className="s9-prompt" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
          A famous creativity test: hand someone a blank sheet of paper and ask — "How many different, unusual uses can you think of for this in two minutes?"
        </motion.p>
        <Card fill="var(--card-bg2)" className="s9-ideas" delay={0.3}>
          <p>Paper airplane  ·  Fan  ·  Gift wrapping  ·  Makeshift cup  ·  Sandpaper substitute  ·  Origami  ·  Fly swatter</p>
        </Card>
        <motion.div className="s9-result" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.45 }}>
          <p>
            <strong className="text-dark">The result: </strong>
            <span className="text-body">
              Researchers ran this test on GPT-3 and compared it to real humans. AI produced lots of answers fast — but humans still beat it on originality and genuine surprise. AI is excellent at remixing what it's already seen. True creativity is still mostly a human thing.
            </span>
          </p>
        </motion.div>
        <Card fill="#FFF4E0" shadow={false} className="s9-warning" delay={0.55}>
          <p>That gap only stays in our favor if we keep practicing. Let AI generate every idea for you, and that creative muscle starts to shrink.</p>
        </Card>
      </div>
      <Footer num={10} total={21} />
    </SlideWrapper>
  );
}
