import React from 'react';
import { RiskLevel } from '../types';
import { RISK_CONFIG } from '../constants';
import { AlertTriangle, AlertCircle, ShieldCheck } from 'lucide-react';
import clsx from 'clsx';

interface ZoneProps {
  level: RiskLevel;
  onDrop: (level: RiskLevel) => void;
  isActive: boolean;
}

const Icons = {
  [RiskLevel.High]: AlertTriangle,
  [RiskLevel.Low]: AlertCircle,
  [RiskLevel.Safe]: ShieldCheck,
};

export const Zone: React.FC<ZoneProps> = ({ level, onDrop, isActive }) => {
  const config = RISK_CONFIG[level];
  const Icon = Icons[level];

  return (
    <div
      onClick={() => onDrop(level)}
      className={clsx(
        "relative flex flex-col lg:flex-row items-center justify-center lg:justify-start lg:px-8 p-4 rounded-2xl border-2 transition-all duration-200 cursor-pointer select-none overflow-hidden group",
        "h-32 lg:h-32 w-full",
        isActive 
          ? `scale-105 shadow-xl ${config.borderColor} ${config.bgColor}` 
          : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 hover:shadow-md hover:-translate-y-1"
      )}
    >
      <div className={clsx(
        "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity",
        config.color
      )} />
      
      <Icon 
        className={clsx(
          "w-8 h-8 lg:w-10 lg:h-10 mb-2 lg:mb-0 lg:mr-4 transition-colors",
          isActive ? config.textColor : "text-slate-400 group-hover:text-slate-500"
        )} 
      />
      
      <div className="text-center lg:text-left">
          <h3 className={clsx(
            "text-lg lg:text-xl font-bold transition-colors",
            isActive ? config.textColor : "text-slate-600 group-hover:text-slate-800"
          )}>
            {config.label}
          </h3>
          <p className="hidden lg:block text-xs text-slate-400 mt-1">
             点击选择
          </p>
      </div>
    </div>
  );
};
