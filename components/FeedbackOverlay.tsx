import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, ArrowRight, ShieldAlert } from 'lucide-react';
import { RiskLevel } from '../types';
import { RISK_CONFIG } from '../constants';

interface FeedbackOverlayProps {
  isCorrect: boolean;
  correctLevel: RiskLevel;
  onNext: () => void;
  isLast: boolean;
  explanation: string;
}

export const FeedbackOverlay: React.FC<FeedbackOverlayProps> = ({ 
  isCorrect, 
  correctLevel, 
  onNext,
  isLast,
  explanation
}) => {
  const correctConfig = RISK_CONFIG[correctLevel];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl border border-slate-100 overflow-y-auto"
    >
      <div className="flex-shrink-0 mb-4">
        {isCorrect ? (
          <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto" />
        ) : (
          <XCircle className="w-16 h-16 text-red-500 mx-auto" />
        )}
      </div>

      <h3 className={`text-2xl font-bold mb-2 flex-shrink-0 ${isCorrect ? 'text-emerald-600' : 'text-red-600'}`}>
        {isCorrect ? '回答正确！' : '回答错误'}
      </h3>

      {!isCorrect && (
        <div className="w-full space-y-4 mb-4">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 w-full flex-shrink-0">
                <p className="text-sm text-slate-500 mb-1">正确归类应为：</p>
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-bold ${correctConfig.bgColor} ${correctConfig.textColor}`}>
                    {correctConfig.label}
                </div>
            </div>

            <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 w-full text-left">
                 <h4 className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                     <ShieldAlert className="w-4 h-4" />
                     专家解析
                 </h4>
                 <p className="text-sm text-slate-700 leading-relaxed">
                    {explanation}
                 </p>
            </div>
        </div>
      )}

      <button
        onClick={onNext}
        className="flex-shrink-0 mt-2 px-8 py-3 bg-slate-900 text-white rounded-full font-semibold shadow-lg hover:bg-slate-800 hover:scale-105 transition-all flex items-center gap-2"
      >
        {isLast ? '查看结果' : '下一题'}
        <ArrowRight className="w-4 h-4" />
      </button>
    </motion.div>
  );
};
