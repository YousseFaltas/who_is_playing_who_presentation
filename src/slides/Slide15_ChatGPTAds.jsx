import { motion } from 'framer-motion';
import { FaMoneyBillWave } from 'react-icons/fa';
import SlideWrapper from '../components/SlideWrapper';
import BgDecoration from '../components/BgDecoration';
import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';

export default function Slide15_ChatGPTAds({ direction, num, total }) {
  return (
    <SlideWrapper direction={direction}>
      <BgDecoration />
      <Header kicker="PART 3 · AI, ADS & YOUR CHOICES" title="ChatGPT Now Sells Ads Too" icon={FaMoneyBillWave} titleSize={22} />
      <div className="slide-content">
        <motion.p style={{ fontSize: '2.315vh', color: 'var(--text-body)', marginBottom: '1.852vh', lineHeight: 1.5 }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
          As of February 2026, OpenAI started showing ads inside ChatGPT for free users. Ask about running shoes — you might get your answer, then a small "Sponsored" box suggesting a brand that paid to be there.
        </motion.p>

        <motion.div style={{
          background: '#212121',
          borderRadius: '2vh',
          padding: '2vh 3vh',
          width: '80%',
          boxShadow: '0 1vh 3vh rgba(0,0,0,0.4)',
          border: '1px solid #333',
          fontFamily: 'Inter, sans-serif',
          marginBottom: '2vh',
          textAlign: 'left'
        }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.3 }}>
          
          <div style={{ display: 'flex', gap: '2vh', marginBottom: '2vh' }}>
            <div style={{ width: '4vh', height: '4vh', borderRadius: '50%', background: '#fff', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '2.5vh', height: '2.5vh', background: '#000', borderRadius: '50%' }}></div>
            </div>
            <div>
              <p style={{ fontSize: '2vh', color: '#ececec', lineHeight: 1.5, margin: 0 }}>
                I'd recommend the <strong style={{color: '#fff'}}>Nike Pegasus 41</strong> for your daily runs. It offers great cushioning and durability at a reasonable price, making it perfect for beginners and pros alike.
              </p>
            </div>
          </div>

          <div style={{ marginLeft: '6vh', background: '#2f2f2f', borderRadius: '1vh', padding: '1.5vh', border: '1px solid #444', display: 'flex', alignItems: 'center', gap: '2vh' }}>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: '1.4vh', color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.1vh', marginBottom: '0.5vh', fontWeight: 600 }}>Sponsored</p>
              <p style={{ fontSize: '1.8vh', color: '#fff', fontWeight: 600, margin: 0 }}>Nike Pegasus 41</p>
              <p style={{ fontSize: '1.6vh', color: '#ccc', margin: '0.5vh 0 0 0' }}>Free shipping on orders over $100</p>
            </div>
            <div style={{ background: '#000', color: '#fff', padding: '1vh 2vh', borderRadius: '0.8vh', fontSize: '1.6vh', fontWeight: 600 }}>Shop Now</div>
          </div>
        </motion.div>

        <Card fill="var(--navy)" style={{ padding: '2.5vh 3vh', width: '85%' }} delay={0.45}>
          <p style={{ fontSize: '2.4vh', color: 'var(--white)', lineHeight: 1.5, margin: 0 }}>
            <strong className="text-amber">The principle: </strong>
            The company that built the "smart assistant" you trust for honest answers is also being paid by advertisers. Every time you ask an AI "what should I buy?" — ask yourself: <em>who benefited from the answer I just got?</em>
          </p>
        </Card>
      </div>
      <Footer num={num} total={total} />
    </SlideWrapper>
  );
}
