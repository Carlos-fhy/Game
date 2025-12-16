import React, { useState } from 'react';
import { BehaviorCard, RiskLevel } from '../types';
import { RISK_CONFIG } from '../constants';
import { CheckCircle, XCircle, Bot, ChevronDown, ChevronUp, RefreshCw } from 'lucide-react';
import clsx from 'clsx';

interface ResultsViewProps {
  cards: BehaviorCard[];
  userPlacements: Record<string, RiskLevel>;
  onRestart: () => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({ cards, userPlacements, onRestart }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const calculateScore = () => {
    let correct = 0;
    cards.forEach(c => {
      if (userPlacements[c.id] === c.correctLevel) correct++;
    });
    return Math.round((correct / cards.length) * 100);
  };

  const score = calculateScore();

  const handleToggle = (id: string) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  const getRiskColor = (level: RiskLevel) => RISK_CONFIG[level].textColor;

  return (
    <div className="w-full max-w-4xl mx-auto p-4 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">风险评估报告</h2>
        <div className="flex items-center justify-center gap-4">
           <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
            {score}
            <span className="text-2xl text-slate-400 ml-1">分</span>
          </div>
        </div>
        <p className="text-slate-500 mt-2">
          {score === 100 ? "完美！你对预防知识掌握得非常牢固。" : "还有提升空间，请查看下方的详细解析。"}
        </p>
      </div>

      <div className="space-y-4">
        {cards.map(card => {
          const userChoice = userPlacements[card.id];
          const isCorrect = userChoice === card.correctLevel;
          const isExpanded = expandedId === card.id;

          return (
            <div 
              key={card.id} 
              className={clsx(
                "bg-white rounded-xl border-2 transition-all duration-300 overflow-hidden",
                isCorrect ? "border-slate-100" : "border-red-100 bg-red-50/30"
              )}
            >
              <div 
                className="p-4 flex items-center justify-between cursor-pointer hover:bg-slate-50"
                onClick={() => handleToggle(card.id)}
              >
                <div className="flex items-center gap-3 flex-1">
                  {isCorrect ? (
                    <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                  )}
                  <span className="font-medium text-slate-700">{card.content}</span>
                </div>
                
                <div className="flex items-center gap-4">
                    <div className="text-right text-sm hidden sm:block">
                        <div className={clsx("font-bold", getRiskColor(card.correctLevel))}>
                             正确: {RISK_CONFIG[card.correctLevel].label}
                        </div>
                        {!isCorrect && (
                            <div className="text-slate-400 line-through text-xs">
                                你的选择: {RISK_CONFIG[userChoice].label}
                            </div>
                        )}
                    </div>
                   {isExpanded ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </div>
              </div>

              {isExpanded && (
                <div className="bg-slate-50 p-6 border-t border-slate-100">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                        <Bot className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1 space-y-3">
                        <div>
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">专家解析</h4>
                            <p className="text-slate-700 leading-relaxed">{card.explanation}</p>
                        </div>
                        <div className="mt-4 pt-4 border-t border-slate-200">
                            <p className="text-xs text-slate-400 italic">
                                💡 小贴士：你可以就此观点向你的同伴发起辩论。为什么你最初认为它是{userChoice ? RISK_CONFIG[userChoice].label : '...'}？
                            </p>
                        </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <button
          onClick={onRestart}
          className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 text-white rounded-full font-semibold shadow-lg hover:bg-slate-800 hover:scale-105 transition-all"
        >
          <RefreshCw className="w-4 h-4" />
          重新开始游戏
        </button>
      </div>
    </div>
  );
};
