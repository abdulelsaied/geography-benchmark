import React, { useState, useEffect, useContext } from 'react';
import GameButton from '../components/GameButton';
import StatusBar from '../components/StatusBar';
import Flag from '../components/Flag';
import Layout from '../components/Layout';
import scoresApi from '../services/scoresApi';
import { saveHighScore, getHighScore } from '../utils/highScores'; 
import { useScores } from '../context/useScores'; 
import { Histogram } from '../components/Histogram';
import { getRandomCountry, getRandomCountryCode } from '../utils/countryUtils';
// import { CountryContext } from '../context/CountryContext';

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
  const [shake, setShake] = useState<boolean>(false); 
  const [flash, setFlash] = useState<boolean>(false); 
  const [histogramData, setHistogramData] = useState<number[]>([]); 
  const [width, setWidth] = useState<number>(300);
  const [height, setHeight] = useState<number>(200);

  const { gameData, loading } = useScores();

  useEffect(() => {
    if (flash) {
      const timer = setTimeout(() => setFlash(false), 500); 
      return () => clearTimeout(timer);
    }
  }, [flash]);

  useEffect(() => {
    if (showFinalScore && gameData['flag-memory']) {
      setHistogramData(gameData['flag-memory']);
    }
  }, [showFinalScore, gameData]);

  useEffect(() => {
    const updateDimensions = () => {
      if (window.innerWidth >= 768) {
        setWidth(380);
        setHeight(253);
      } else {
        setWidth(300);
        setHeight(200);
      }
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const startGame = async () => {
    try {
      const startingCountryCode = await getRandomCountryCode();
      if (startingCountryCode){
        setCurrentCountryCode(startingCountryCode);
        setPreviousCountryCode(startingCountryCode);
        setGameStarted(true);
        setLives(3);
        setSeenCountries(new Set());
        setShowTitle(false);
        setShowFinalScore(false);
      }
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
        setFlash(true);
      } else {
        if (lives - 1 === 0) {
          scoresApi.addScore('flag-memory', score);
          saveHighScore('flag-memory', score);  
          setLives(lives - 1);
          setFinalScore(score);
          setShowFinalScore(true);
          setScore(0);
          setGameStarted(false);
          return;
        }
        setLives(lives - 1);
        setShake(true);
        setTimeout(() => setShake(false), 500); 
      }
      
      let nextCountryCode: string;

      do {
        nextCountryCode =
          Math.random() < 0.5 && seenCountries.size > 0
            ? Array.from(seenCountries)[Math.floor(Math.random() * seenCountries.size)]
            : await getRandomCountryCode();

      } while (nextCountryCode === currentCountryCode);

      setPreviousCountryCode(currentCountryCode); 
      setCurrentCountryCode(nextCountryCode);
  
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div 
        className={`flex flex-col border-2 sm:border-4 border-black bg-white rounded-3xl p-4 md:p-8 text-center ${shake ? 'shake' : ''}`}
      >
        {showTitle && !showFinalScore ? 
           ( <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Flag Memory</h1> 
                <p className="text-base sm:text-lg md:text-xl">remember as many flags as possible.</p>
            </div> 
           ) : showFinalScore ? 
           ( <div className="flex items-center justify-center gap-x-2 md:gap-x-4">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold">Final Score: {finalScore}</h1>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold">High Score: {getHighScore('flag-memory')}</h1> 
             </div>) :
           ( 
             <StatusBar 
               lives={lives} 
               score={score} 
               flash={flash} 
             />
           )
        }
        <div className="w-[300px] h-[200px] md:w-[380px] md:h-[253px] bg-gray-200 mx-auto">
          {showFinalScore ? (
            <Histogram
              width={width} 
              height={height} 
              data={histogramData}
            />
          ) : (
            <Flag 
              countryCode={currentCountryCode} 
              width={width}
              height={height}
            />
          )}
        </div>
        <div id="game-buttons" className="flex md:flex-row items-center justify-center pt-2 md:pt-4 gap-4 md:gap-6">
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
