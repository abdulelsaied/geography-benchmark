import { createContext } from 'react';

interface ScoresContextType {
  gameData: Record<string, number[]>;
  loading: boolean;
}

export const ScoresContext = createContext<ScoresContextType | undefined>(undefined);
