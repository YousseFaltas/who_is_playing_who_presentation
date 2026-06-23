import { motion } from 'framer-motion';
import { FaBalanceScale } from 'react-icons/fa';
import SlideWrapper from '../components/SlideWrapper';
import BgDecoration from '../components/BgDecoration';
import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';

const flaws = [
  {
    st: '"This influencer takes a supplement and got abs in two weeks, so the supplement gave him abs."',
    fl: 'He could also be training and dieting — correlation isn\'t causation.',
  },
  {
    st: '"Everyone in my class likes this song, so it must be the best song ever made."',
    fl: 'Popularity isn\'t quality — and "everyone" is a tiny, biased sample.',
  },
  {
    st: '"My phone\'s battery died right after I talked about buying new shoes, so my phone is definitely listening."',
    fl: 'Coincidence vs. evidence — no real proof of cause and effect.',
  },
];

export default function Slide09_SpotTheFlaw({ direction, num, total }) {
  return (
    <SlideWrapper direction={direction}>
      <BgDecoration />
      <Header kicker="PART 2 · YOUR GREATEST WEAPON" title="Spot the Flaw" icon={FaBalanceScale} />
      <div className="slide-content">
        <div className="s8-flaw-list">
          {flaws.map((f, i) => (
            <Card key={i} fill="var(--card-bg)" shadow={false} className="s8-flaw-card" delay={0.2 + i * 0.12}>
              <p className="s8-statement">{f.st}</p>
              <p className="s8-correction">
                <strong className="text-cyan-dk">The flaw: </strong>
                <span className="text-body">{f.fl}</span>
              </p>
            </Card>
          ))}
        </div>
        <motion.p className="s8-takeaway" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.65 }}>
          Critical thinking is a muscle — and like any muscle, if you stop using it, it gets weak.
        </motion.p>
      </div>
      <Footer num={num} total={total} />
    </SlideWrapper>
  );
}
