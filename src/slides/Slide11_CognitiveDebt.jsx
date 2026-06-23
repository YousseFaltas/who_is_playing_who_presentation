import { motion } from 'framer-motion';
import { FaBatteryQuarter } from 'react-icons/fa';
import SlideWrapper from '../components/SlideWrapper';
import BgDecoration from '../components/BgDecoration';
import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';

const stats = [
  { label: 'Weakest Brain Activity', caption: 'The ChatGPT group had the weakest brain activity of all three groups.' },
  { label: "Couldn't Quote Their Own Essay", caption: 'When asked to quote a sentence from the essay they "wrote" — most couldn\'t.' },
];

export default function Slide11_CognitiveDebt({ direction }) {
  return (
    <SlideWrapper direction={direction}>
      <BgDecoration />
      <Header kicker="PART 2 · YOUR GREATEST WEAPON" title="When AI Quietly Damages Your Thinking" icon={FaBatteryQuarter} titleSize={21} />
      <div className="slide-content">
        <motion.p className="s10-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
          MIT, 2025: They split people into 3 groups writing essays — one used ChatGPT, one used a search engine, one used just their own brain. They measured brain activity and tested recall.
        </motion.p>
        <div className="s10-stats-grid">
          {stats.map((st, i) => (
            <Card key={i} fill="var(--card-bg2)" className="s10-stat-card" delay={0.3 + i * 0.12}>
              <p className="s10-stat-label">{st.label}</p>
              <p className="s10-stat-caption">{st.caption}</p>
            </Card>
          ))}
        </div>
        <Card fill="var(--navy)" className="s10-bottom-card" delay={0.5}>
          <p>
            <strong className="text-amber">Cognitive Debt: </strong>
            <span className="text-white">
              It feels free in the moment — but you're quietly borrowing against your own ability to think, remember, and create. The bill comes due later, usually in an exam room with no Wi-Fi.
            </span>
          </p>
        </Card>
      </div>
      <Footer num={11} total={21} />
    </SlideWrapper>
  );
}
