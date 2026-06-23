import { motion } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';
import SlideWrapper from '../components/SlideWrapper';
import BgDecoration from '../components/BgDecoration';
import Header from '../components/Header';
import Footer from '../components/Footer';

const teams = [
  { letter: 'O', color: '#12153D', company: 'OpenAI', product: 'ChatGPT', club: 'The Real Madrid of AI' },
  { letter: 'G', color: '#0E8A97', company: 'Google DeepMind', product: 'Gemini', club: 'The Man City of AI' },
  { letter: 'A', color: '#8A3FFC', company: 'Anthropic', product: 'Claude', club: 'The Barcelona of AI' },
];

export default function Slide05_BigTeams({ direction, num, total }) {
  return (
    <SlideWrapper direction={direction}>
      <BgDecoration />
      <Header kicker="PART 1 · DOES AI ACTUALLY THINK?" title="The Three Big Players" icon={FaTrophy} />
      <div className="slide-content">
        <motion.p className="s5-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
          Three companies are racing each other to build the smartest Large Language Model (LLM) — the tech that changed the world in the last two years.
        </motion.p>
        <div className="s5-grid">
          {teams.map((t, i) => (
            <motion.div key={i} className="card s5-team-card" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}>
              <div className="s5-team-avatar" style={{ background: t.color }}>{t.letter}</div>
              <span className="s5-company">{t.company}</span>
              <span className="s5-product">{t.product}</span>
              <span className="s5-club">{t.club}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer num={num} total={total} />
    </SlideWrapper>
  );
}
