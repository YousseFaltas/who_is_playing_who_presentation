import { motion } from 'framer-motion';
import { FaStream } from 'react-icons/fa';
import SlideWrapper from '../components/SlideWrapper';
import Footer from '../components/Footer';

export default function Slide14_AdsIntro({ direction, num, total }) {
  return (
    <SlideWrapper dark direction={direction}>
      <motion.div className="bg-circle bg-circle--animate" style={{ left: '-10%', top: '-18%', width: '40%', paddingBottom: '40%', background: 'var(--cyan)', opacity: 0.10 }} initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 0.10 }} transition={{ duration: 1.2 }} />
      <motion.div className="bg-circle bg-circle--animate-slow" style={{ right: '-6%', bottom: '-12%', width: '24%', paddingBottom: '24%', background: 'var(--amber)', opacity: 0.12 }} initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 0.12 }} transition={{ duration: 1.2, delay: 0.2 }} />

      <motion.p className="s3-kicker" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
        PART 3 · WHO'S REALLY MAKING THE DECISION?
      </motion.p>

      <motion.h1 className="s3-question" style={{ fontSize: '5.556vh' }} initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.3 }}>
        AI, Ads & Your Choices
      </motion.h1>

      <motion.p className="s3-footer-text" style={{ maxWidth: '85%', direction: "rtl", textAlign: "right" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }}>
        تعالى نرجع للـ Instagram feed اللي بدأنا بيه. ليه ورّاك بالظبط الحاجات اللي شفتها؟ كل مرة تعمل scroll، أو تعمل like، أو تعدّي حاجة، أو تعيد مشاهدة فيديو — إنت كده بتغذي recommender system ببيانات. وظيفته الوحيدة: إنه يخلّيك تكمّل مشاهدة… ويحطلك في النص حاجات متوقع إنك تشتريها.
      </motion.p>

      <Footer num={num} total={total} dark />
    </SlideWrapper>
  );
}
