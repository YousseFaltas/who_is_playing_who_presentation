import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import './App.css';

import Navigation from './components/Navigation';
import Slide01_Title from './slides/Slide01_Title';
import Slide04_AIEverywhere from './slides/Slide04_AIEverywhere';
import Slide05_BigTeams from './slides/Slide05_BigTeams';
import Slide06_HowLLMThinks from './slides/Slide06_HowLLMThinks';
import Slide07_DoesAIThink from './slides/Slide07_DoesAIThink';
import Slide08_CriticalIntro from './slides/Slide08_CriticalIntro';
import Slide09_SpotTheFlaw from './slides/Slide09_SpotTheFlaw';
import Slide10_WhitePaper from './slides/Slide10_WhitePaper';
import Slide11_CognitiveDebt from './slides/Slide11_CognitiveDebt';
import Slide12_SkillsAtRisk from './slides/Slide12_SkillsAtRisk';
import Slide13_Deepfakes from './slides/Slide13_Deepfakes';
import Slide14_AdsIntro from './slides/Slide14_AdsIntro';
import Slide15_ChatGPTAds from './slides/Slide15_ChatGPTAds';
import Slide16_BrandListening from './slides/Slide16_BrandListening';
import Slide17_EgyptScale from './slides/Slide17_EgyptScale';
import Slide18_AICreative from './slides/Slide18_AICreative';
import Slide19_UseAIRight from './slides/Slide19_UseAIRight';
import Slide20_GoodVsBad from './slides/Slide20_GoodVsBad';
import Slide21_Closing from './slides/Slide21_Closing';

const SLIDES = [
  Slide01_Title,
  Slide04_AIEverywhere,
  Slide05_BigTeams,
  Slide06_HowLLMThinks,
  Slide07_DoesAIThink,
  Slide08_CriticalIntro,
  Slide09_SpotTheFlaw,
  Slide10_WhitePaper,
  Slide11_CognitiveDebt,
  Slide12_SkillsAtRisk,
  Slide13_Deepfakes,
  Slide14_AdsIntro,
  Slide15_ChatGPTAds,
  Slide16_BrandListening,
  Slide17_EgyptScale,
  Slide18_AICreative,
  Slide19_UseAIRight,
  Slide20_GoodVsBad,
  Slide21_Closing,
];

const TOTAL = SLIDES.length;

export default function App() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const goNext = useCallback(() => {
    if (current < TOTAL - 1) {
      setDirection(1);
      setCurrent((c) => c + 1);
    }
  }, [current]);

  const goPrev = useCallback(() => {
    if (current > 0) {
      setDirection(-1);
      setCurrent((c) => c - 1);
    }
  }, [current]);

  const SlideComponent = SLIDES[current];

  return (
    <div className="presentation">
      <AnimatePresence mode="wait" custom={direction}>
        <SlideComponent key={current} direction={direction} />
      </AnimatePresence>
      <Navigation
        onNext={goNext}
        onPrev={goPrev}
        current={current + 1}
        total={TOTAL}
      />
    </div>
  );
}
