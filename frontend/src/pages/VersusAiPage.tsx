import React, { useEffect, useRef, useState } from 'react';
import Select from 'react-select'
import Layout from '../components/Layout';
import { FaRobot } from 'react-icons/fa';
import Typewriter, { TypewriterClass } from 'typewriter-effect';
import GameButton from '../components/GameButton';
import { useScores } from '../context/useScores';
import { getHighScore, saveHighScore } from '../utils/highScores';
import StatusBar from '../components/StatusBar';
import { Histogram } from '../components/Histogram';
import getRandomCategory from '../utils/randomCategory';
import { getRandomCountryCode, getCountryNames, getRandomCountry, Country } from '../utils/countryUtils';
import scoresApi from '../services/scoresApi';
import openaiApi from '../services/openaiApi';

const VersusAiPage: React.FC = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [lives, setLives] = useState<number>(3);
  const [score, setScore] = useState<number>(0);
  const [difficulty, setDifficulty] = useState<number>(0);
  const [showTitle, setShowTitle] = useState<boolean>(true);
  const [showFinalScore, setShowFinalScore] = useState<boolean>(false);
  const [finalScore, setFinalScore] = useState<number>(0);
  const [shake, setShake] = useState<boolean>(false); 
  const [robotAnimated, setRobotAnimated] = useState<boolean>(false); 
  const [flash, setFlash] = useState<boolean>(false); 
  const [histogramData, setHistogramData] = useState<number[]>([]); 
  const [width, setWidth] = useState<number>(200);
  const [height, setHeight] = useState<number>(100);
  const [currentCountry, setCurrentCountry] = useState<string>();
  const [hint, setHint] = useState<string>("");
  const [seenCountries, setSeenCountries] = useState<Set<string>>(new Set());
  const [countryNames, setCountryNames] = useState<{label: string, value: string}[]>([]);

  const { gameData, loading } = useScores();

  const typewriterRef = useRef<TypewriterClass | null>(null);

  useEffect(() => {
    console.log("hint has changed");
    console.log(hint);
    updateHint(hint);
  }, [hint]);

  useEffect(() => {
    if (flash) {
      const timer = setTimeout(() => setFlash(false), 500); 
      return () => clearTimeout(timer);
    }
  }, [flash]);

  useEffect(() => {
    if (showFinalScore && gameData['versus-ai']) {
      setHistogramData(gameData['versus-ai']);
    }
  }, [showFinalScore, gameData]);

  useEffect(() => {
    const fetchCountries = async () => {
        try {
          const namesArray = await getCountryNames();
          setCountryNames(namesArray);
        } catch (error) {
            console.error("Error fetching country names:", error);
        }
    };
    fetchCountries();
}, []);

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

  const updateHint = (newHint: string) => {
    if (typewriterRef.current) {
      console.log("updating tpywriter text");
      typewriterRef.current.deleteAll(25).typeString(newHint).start();
    }
  }

  const startGame = async () => {
    try {
      const startingCountry = await getRandomCountry();
      const hintResponse = await openaiApi.generateHint(startingCountry.name, difficulty);
      if (startingCountry) {
        setCurrentCountry(startingCountry.name);
        setHint(hintResponse);
        setLives(3);
        setDifficulty(1);
        setGameStarted(true);
        setSeenCountries(new Set());
        setShowTitle(false);
        setShowFinalScore(false);
        setRobotAnimated(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleGuess = async (guess: string) => {
    try {
      if (guess && guess === currentCountry) {
        if (!seenCountries.has(currentCountry)) {
          seenCountries.add(currentCountry);
          setSeenCountries(new Set(seenCountries));
        }
        setScore(score + 1);
        setFlash(true);
        setDifficulty(difficulty + 1)
      } else {
        if (lives - 1 === 0) {
          scoresApi.addScore('versus-ai', score);
          saveHighScore('versus-ai', score);
          setLives(lives - 1);
          setFinalScore(score);
          setShowFinalScore(true);
          setScore(0);
          setGameStarted(false);
          return
        }
        setLives(lives - 1)
        setShake(true);
        setTimeout(() => setShake(false), 500); 
      }

      let nextCountry: string;

      do {
        nextCountry = (await getRandomCountry()).name;
      } while (nextCountry === currentCountry);
      setCurrentCountry(nextCountry);
      const hintResponse = await openaiApi.generateHint(nextCountry, difficulty);
      setHint(hintResponse);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Layout>
      <div 
        className={`flex flex-col border-2 sm:border-4 border-black bg-white rounded-3xl p-4 md:p-8 text-center ${shake ? 'shake' : ''}`}
      >
        {showTitle && !showFinalScore ? 
           ( <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Versus AI</h1> 
                <p className="text-base sm:text-lg md:text-xl">Guess the country based on AI-generated clues.</p>
            </div> 
           ) : showFinalScore ? 
           ( <div className="flex items-center justify-center gap-x-2 md:gap-x-4">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold">Final Score: {finalScore}</h1>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold">High Score: {getHighScore('versus-ai')}</h1> 
             </div>) :
           ( 
             <StatusBar 
               lives={lives} 
               score={score} 
               difficulty={difficulty}
               flash={flash} 
             />
           )
        }
        <div className="w-[400px] h-[200px] md:w-[480px] md:h-[253px] mx-auto flex items-center justify-center">
          {showFinalScore ? (
            <Histogram width={width} height={height} data={histogramData} />
          ) : (
            <div className="w-full h-[200px] md:h-[253px] flex items-center justify-between gap-x-10  ">
              {/* Robot */}
              <FaRobot
                className = {`w-full h-full transition-all duration-500 ease-in-out animate-shake-rotate ${
                  robotAnimated ? 'w-[15%] transform translate-x-[-50%]' : ''
                } animate-shake-rotate `}
              />
                {robotAnimated && (
                  <div className="w-[80%] h-full flex items-center justify-center p-4 bg-gray-100 border-2 border-gray-300 rounded-lg">
                    <Typewriter
                    onInit={(typewriter) => {
                      typewriterRef.current = typewriter;
                      if (hint) {
                        typewriter.typeString(hint).start();
                      }
                    }}
                      options={{
                        delay: 50,
                        autoStart: true,
                      }}
                    />
                  </div>
                )}
            </div>
          )}
        </div>
        <div id="game-buttons" className="flex md:flex-row items-center justify-center pt-2 md:pt-4 gap-4 md:gap-6">
          {!gameStarted ? (
            <GameButton text="start" buttonFunction={() => startGame()} />
          ) : (
            <Select
              options={countryNames}
              onChange={(newValue) => {
                if (newValue && gameStarted) {
                  handleGuess(newValue.value);
                }
              }}
              className="w-64"
              styles={{
                menu: (provided) => ({
                  ...provided,
                  width: '16rem',
                }),
              }}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default VersusAiPage;