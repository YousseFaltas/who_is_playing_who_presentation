import { motion } from 'framer-motion';
import { FaCommentDots } from 'react-icons/fa';
import SlideWrapper from '../components/SlideWrapper';
import BgDecoration from '../components/BgDecoration';
import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';

export default function Slide16_BrandListening({ direction }) {
  return (
    <SlideWrapper direction={direction}>
      <BgDecoration />
      <Header kicker="PART 3 · AI, ADS & YOUR CHOICES" title="AI Is Listening to Your Brand Opinions" icon={FaCommentDots} titleSize={20} />
      <div className="slide-content">
        <motion.p style={{ fontSize: '2.315vh', color: 'var(--text-body)', marginBottom: '1.852vh', lineHeight: 1.5 }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
          Companies now use AI to read millions of social media comments, reviews, and tweets to figure out how people genuinely feel about them.
        </motion.p>

        <Card fill="var(--card-bg2)" style={{ padding: '14px 18px', marginBottom: '1.852vh' }} delay={0.3}>
          <p style={{ fontSize: '2.222vh', color: 'var(--text-dark)', lineHeight: 1.45 }}>
            <strong className="text-cyan-dk">Real Example — Talabat: </strong>
            Researchers built AI systems trained on <em>Egyptian Arabic dialect</em> — not formal Arabic — to scan customer reviews and detect complaints, praise, and frustration at scale, far faster than any human team could. The company uses that to fix problems, retrain staff, or redesign ad campaigns to hit the exact emotional nerve trending in the comments.
          </p>
        </Card>

        <Card fill="#FFF4E0" shadow={false} style={{ padding: '10px 16px' }} delay={0.45}>
          <p style={{ fontSize: '2.130vh', color: '#8A5A00', lineHeight: 1.45 }}>
            <strong>So while you're venting in a comment thread</strong> about bad delivery or praising a product — that text might directly become training data for the next ad campaign aimed at people just like you.
          </p>
        </Card>
      </div>
      <Footer num={16} total={21} />
    </SlideWrapper>
  );
}
