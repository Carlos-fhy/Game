export enum RiskLevel {
  High = 'HIGH',
  Low = 'LOW',
  Safe = 'SAFE'
}

export interface BehaviorCard {
  id: string;
  content: string;
  correctLevel: RiskLevel;
  explanation: string; // Fixed expert explanation
}

export interface GameState {
  currentCardIndex: number;
  placedCards: Record<string, RiskLevel>; // cardId -> User's chosen level
  score: number;
  isFinished: boolean;
  isPlaying: boolean;
}
