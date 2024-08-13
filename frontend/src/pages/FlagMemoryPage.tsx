import React, { useState, useEffect } from 'react';
import GameButton from '../components/GameButton';
import StatusBar from '../components/StatusBar';
import Flag from '../components/Flag';
import Layout from '../components/Layout';
import countryApi from '../services/countryApi';
import { saveHighScore, getHighScore } from '../utils/highScores'; 


const FlagMemoryPage: React.FC = () => {
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [lives, setLives] = useState<number>(3);
  const [seenCountries, setSeenCountries] = useState<Set<string>>(new Set());
  const [currentCountryCode, setCurrentCountryCode] = useState<string>('eg');
  const [previousCountryCode, setPreviousCountryCode] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [showTitle, setShowTitle] = useState<boolean>(true);
  const [showFinalScore, setShowFinalScore] = useState<boolean>(false);
  const [finalScore, setFinalScore] = useState<number>(0);
  const [shake, setShake] = useState<boolean>(false); // For shaking effect
  const [flash, setFlash] = useState<boolean>(false); // For flashing effect

  useEffect(() => {
    if (flash) {
      const timer = setTimeout(() => setFlash(false), 500); // Duration of the flash
      return () => clearTimeout(timer); // Clean up timer
    }
  }, [flash]);

  const startGame = async () => {
    try {
      const startingCountryCode = await countryApi.fetchRandomCountryCode();
      setCurrentCountryCode(startingCountryCode);
      setPreviousCountryCode(startingCountryCode);
      setGameStarted(true);
      setLives(3);
      setSeenCountries(new Set());
      setShowTitle(false);
      setShowFinalScore(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGuess = async (guess: string) => {
    try {
      const isGuessCorrect =
        (guess === 'seen' && seenCountries.has(currentCountryCode)) ||
        (guess === 'new' && !seenCountries.has(currentCountryCode));
  
      if (isGuessCorrect) {
        if (!seenCountries.has(currentCountryCode)) {
          seenCountries.add(currentCountryCode);
          setSeenCountries(new Set(seenCountries));
        }
        setScore(score + 1);
        setFlash(true); // Trigger flash on correct guess
      } else {
        if (lives - 1 === 0) {
          saveHighScore('flag-memory', score);  
          setLives(lives - 1);
          setFinalScore(score);
          setShowFinalScore(true);
          setScore(0);
          setGameStarted(false);
          return;
        }
        setLives(lives - 1);
        setShake(true); // Trigger shake on wrong guess
        // Remove shake effect after animation completes
        setTimeout(() => setShake(false), 500); // Match duration with shake animation
      }
      
      let nextCountryCode;
      do {
        nextCountryCode =
          Math.random() < 0.5 && seenCountries.size > 0
            ? Array.from(seenCountries)[Math.floor(Math.random() * seenCountries.size)]
            : await countryApi.fetchRandomCountryCode();
      } while (nextCountryCode === currentCountryCode);
  
      setPreviousCountryCode(currentCountryCode); 
      setCurrentCountryCode(nextCountryCode);
  
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <Layout>
      <div className={`flex flex-col gap-4 border-4 border-black bg-white rounded-3xl p-8 pb-4 text-center ${shake ? 'shake' : ''}`}>
        {showTitle && !showFinalScore ? 
           ( <div>
                <h1 className="text-2xl font-bold">Flag Memory</h1> 
                <p className="text-xl">remember as many flags as possible.</p>
            </div> 
           ) : showFinalScore ? 
           ( <div>
              <h1 className="text-2xl font-bold">Final Score: {finalScore}</h1>
              <h1 className="text-2xl font-bold">High Score: {getHighScore('flag-memory')}</h1> 
             </div>) :
           ( 
             <StatusBar 
               lives={lives} 
               score={score} 
               flash={flash} 
             />
           )
        }
        <Flag countryCode={currentCountryCode} />
        <div id="game-buttons" className="flex items-center justify-center gap-6">
          {!gameStarted ? (
            <GameButton text="start" buttonFunction={() => startGame()} />
          ) : (
            <>
              <GameButton text="new" buttonFunction={() => handleGuess('new')} />
              <GameButton text="seen" buttonFunction={() => handleGuess('seen')} />
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default FlagMemoryPage;
