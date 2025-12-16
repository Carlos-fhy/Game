import React, { useState, useEffect } from 'react';
import { BEHAVIOR_CARDS, RISK_CONFIG } from './constants';
import { RiskLevel, BehaviorCard } from './types';
import { Zone } from './components/Zone';
import { ResultsView } from './components/ResultsView';
import { FeedbackOverlay } from './components/FeedbackOverlay';
import { ArrowRight, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Fisher-Yates shuffle
function shuffle<T>(array: T[]): T[] {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

export default function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [cards, setCards] = useState<BehaviorCard[]>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [placements, setPlacements] = useState<Record<string, RiskLevel>>({});
  const [isFinished, setIsFinished] = useState(false);
  
  // New state for immediate feedback
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; correctLevel: RiskLevel } | null>(null);
  
  // Initialize game with shuffled cards
  useEffect(() => {
    setCards(shuffle(BEHAVIOR_CARDS));
  }, []);

  const currentCard = cards[currentCardIndex];
  const progress = Math.round((currentCardIndex / cards.length) * 100);

  const handleStart = () => {
    setHasStarted(true);
  };

  const handleDrop = (level: RiskLevel) => {
    if (!currentCard || feedback) return;

    // Record placement
    setPlacements(prev => ({
      ...prev,
      [currentCard.id]: level
    }));

    const isCorrect = currentCard.correctLevel === level;
    
    // Check correctness immediately
    setFeedback({
      isCorrect,
      correctLevel: currentCard.correctLevel
    });
  };

  const handleNextCard = () => {
    setFeedback(null);
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(prev => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCards(shuffle(BEHAVIOR_CARDS));
    setCurrentCardIndex(0);
    setPlacements({});
    setFeedback(null);
    setIsFinished(false);
    setHasStarted(false); // Go back to intro for clean state
  };

  // Intro Screen
  if (!hasStarted) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-2xl w-full bg-white p-10 lg:p-16 rounded-3xl shadow-xl border border-slate-100">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <Info className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            行为与风险
          </h1>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg mx-auto">
            这个互动游戏将帮助你理解不同的行为在 HIV 传播中的风险程度。
            <br/><br/>
            你需要将卡片分类放入<span className="text-red-500 font-bold">高危</span>、<span className="text-orange-500 font-bold">低危</span>或<span className="text-emerald-500 font-bold">安全</span>区域。
            <br/><br/>
            题目顺序已随机打乱，请凭借你的知识进行判断。
          </p>
          <button
            onClick={handleStart}
            className="w-full max-w-sm mx-auto py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
          >
            开始探索
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    );
  }

  // Results Screen
  if (isFinished) {
    return (
      <div className="min-h-screen bg-slate-50 py-12 px-4">
        <ResultsView 
          cards={cards} 
          userPlacements={placements} 
          onRestart={handleRestart} 
        />
      </div>
    );
  }

  // Game Screen
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      
      {/* Header / Progress */}
      <div className="bg-white px-8 py-5 border-b border-slate-100 flex items-center justify-center sticky top-0 z-40 shadow-sm">
        <div className="w-full max-w-6xl flex items-center justify-between">
            <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">进度</span>
                <span className="text-lg font-semibold text-slate-700">{currentCardIndex + 1} <span className="text-slate-300">/</span> {cards.length}</span>
            </div>
            <div className="w-32 md:w-64 h-3 bg-slate-100 rounded-full overflow-hidden">
                <div 
                    className="h-full bg-blue-500 transition-all duration-300 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
      </div>

      {/* Main Game Area */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 lg:p-8 overflow-hidden w-full max-w-7xl mx-auto">
        
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center w-full gap-8 lg:gap-16 flex-1 min-h-[500px]">
            
            {/* Left Column: Card Deck Area */}
            <div className="flex-1 flex items-center justify-center relative w-full max-w-md lg:max-w-lg min-h-[400px]">
              <AnimatePresence mode="wait">
                {currentCard && !feedback && (
                  <motion.div
                    key={currentCard.id}
                    initial={{ y: 20, opacity: 0, scale: 0.9 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="absolute w-full aspect-[3/4] max-h-[500px] bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 lg:p-12 flex flex-col items-center justify-center text-center z-20"
                  >
                    <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-8">
                        <span className="text-4xl">🤔</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 leading-snug">
                      {currentCard.content}
                    </h3>
                    <p className="mt-8 text-slate-400 text-base lg:text-lg">
                      这个行为的风险程度是？
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <AnimatePresence>
                {feedback && (
                   <FeedbackOverlay
                      isCorrect={feedback.isCorrect}
                      correctLevel={feedback.correctLevel}
                      onNext={handleNextCard}
                      isLast={currentCardIndex === cards.length - 1}
                      explanation={currentCard.explanation}
                   />
                )}
              </AnimatePresence>
              
              {/* Card stack effect behind */}
              {!feedback && (
                  <>
                    <div className="absolute w-[95%] aspect-[3/4] max-h-[500px] bg-white/50 rounded-3xl border border-slate-200 transform scale-95 translate-y-3 -z-10 shadow-lg" />
                    <div className="absolute w-[90%] aspect-[3/4] max-h-[500px] bg-white/30 rounded-3xl border border-slate-200 transform scale-90 translate-y-6 -z-20 shadow-sm" />
                  </>
              )}
            </div>

            {/* Right Column: Zones */}
            <div className={
                `flex-shrink-0 w-full lg:w-80 grid grid-cols-3 lg:grid-cols-1 gap-4 z-30 transition-all duration-300 ${feedback ? 'opacity-50 pointer-events-none grayscale' : ''}`
              }
            >
              <Zone level={RiskLevel.High} onDrop={handleDrop} isActive={false} />
              <Zone level={RiskLevel.Low} onDrop={handleDrop} isActive={false} />
              <Zone level={RiskLevel.Safe} onDrop={handleDrop} isActive={false} />
            </div>

        </div>

        <div className="mt-8 text-center text-sm text-slate-400 lg:hidden">
             请点击对应区域进行分类
        </div>
        <div className="mt-8 text-center text-sm text-slate-400 hidden lg:block">
             请点击右侧选项进行分类
        </div>
      </div>
    </div>
  );
}
