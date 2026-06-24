import { motion } from 'framer-motion';
import { FaKeyboard } from 'react-icons/fa';
import SlideWrapper from '../components/SlideWrapper';
import BgDecoration from '../components/BgDecoration';
import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';

const suggestions = ['الچيم', 'البيت', 'المذاكرة'];

export default function Slide06_HowLLMThinks({ direction, num, total }) {
  return (
    <SlideWrapper direction={direction}>
      <BgDecoration />
      <Header kicker="PART 1 · DOES AI ACTUALLY THINK?" title='How Does an LLM "Think"?' icon={FaKeyboard} />
      <div className="slide-content">
        <motion.p className="s6-prompt" style={{ textAlign: 'center' , direction: 'rtl'}} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
          افتح الـ WhatsApp، واكتب "أنا هروح…" وبُص على الـ 3 كلمات المقترحة اللي فوق الـ keyboard:
        </motion.p>
        <Card fill="#EDEFF7" className="s6-phone-mockup" delay={0.3}>
          <div className="s6-suggestions">
            {suggestions.map((w, i) => (
              <motion.div key={i} className="s6-suggestion-chip" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.45 + i * 0.1 }}>
                {w}
              </motion.div>
            ))}
          </div>
          <p className="s6-typing" style={{ direction: 'ltr', textAlign: 'left' }}>أنا هروح…</p>
        </Card>
        <motion.p className="s6-explanation" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
          <strong className="text-dark">ChatGPT, Claude, and Gemini do exactly the same thing — at massive scale. </strong>
          <span className="text-body">
            They've read almost every word on the internet and predict the most likely next word, one word at a time. They don't "understand" your question the way your brain does
          </span>
        </motion.p>
      </div>
      <Footer num={num} total={total} />
    </SlideWrapper>
  );
}
