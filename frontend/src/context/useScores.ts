import { useContext } from 'react';
import { ScoresContext } from './ScoresContext'; // Adjust import path

export const useScores = () => {
  const context = useContext(ScoresContext);
  if (context === undefined) {
    throw new Error('useGameData must be used within a GameDataProvider');
  }
  return context;
};
