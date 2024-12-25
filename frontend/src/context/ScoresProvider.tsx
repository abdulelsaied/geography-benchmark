import React, { useState, useEffect, ReactNode } from 'react';
import { ScoresContext } from './ScoresContext'; 
import scoresApi from '../services/scoresApi'; 

export const ScoresProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [gameData, setGameData] = useState<Record<string, number[]>>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const games = ['flag-memory', 'more-or-less'];
        const data = await Promise.all(games.map(game => scoresApi.getScores(game)));
        const gameData = games.reduce((acc, game, index) => {
          acc[game] = data[index];
          return acc;
        }, {} as Record<string, number[]>);
        setGameData(gameData);
      } catch (error) {
        console.error('Error fetching game data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <ScoresContext.Provider value={{ gameData, loading }}>
      {children}
    </ScoresContext.Provider>
  );
};
