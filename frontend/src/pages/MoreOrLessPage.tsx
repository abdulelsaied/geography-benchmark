import React, { useState, useEffect, useContext } from 'react';
import GameButton from '../components/GameButton';
import StatusBar from '../components/StatusBar';
import Flag from '../components/Flag';
import Layout from '../components/Layout';
import scoresApi from '../services/scoresApi';
import { saveHighScore, getHighScore } from '../utils/highScores'; 
import { useScores } from '../context/useScores'; 
import { Histogram } from '../components/Histogram';
import getRandomCategory from '../utils/randomCategory';
import { getRandomCountry, getRandomCountryCode, Country } from '../utils/countryUtils';
import { formatNumber } from '../utils/numberFormatter';


const MoreOrLessPage: React.FC = () => {

  type Category = "population" | "size";

  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [lives, setLives] = useState<number>(3);
  const [category, setCategory] = useState<Category>("population");
  const [score, setScore] = useState<number>(0);
  const [showTitle, setShowTitle] = useState<boolean>(true);
  const [showFinalScore, setShowFinalScore] = useState<boolean>(false);
  const [finalScore, setFinalScore] = useState<number>(0);
  const [shake, setShake] = useState<boolean>(false); 
  const [flash, setFlash] = useState<boolean>(false); 
  const [histogramData, setHistogramData] = useState<number[]>([]); 
  const [width, setWidth] = useState<number>(200);
  const [height, setHeight] = useState<number>(100);
  const [leftCountry, setLeftCountry] = useState<Country | null>(null);
  const [rightCountry, setRightCountry] = useState<Country | null>(null);

  const { gameData, loading } = useScores();

  useEffect(() => {
    const initializeCountries = async () => {
      const leftCountry = await getRandomCountry()
      setLeftCountry(leftCountry);
      let rightCountry;
      do {
        rightCountry = await getRandomCountry();
      } while (rightCountry.country_code === leftCountry.country_code);
      setRightCountry(rightCountry); 
    }
    initializeCountries();
  }, [])

  useEffect(() => {
    if (flash) {
      const timer = setTimeout(() => setFlash(false), 500); 
      return () => clearTimeout(timer);
    }
  }, [flash]);

  useEffect(() => {
    if (showFinalScore && gameData['more-or-less']) {
      console.log(gameData["more-or-less"]);
      setHistogramData(gameData['more-or-less']);
    }
  }, [showFinalScore, gameData]);

  useEffect(() => {
    const updateDimensions = () => {
      if (window.innerWidth >= 768) {
        setWidth(250);
        setHeight(125);
      } else {
        setWidth(200);
        setHeight(100);
      }
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const startGame = async () => {
    try {
      setGameStarted(true);
      setLives(3);
      setShowTitle(false);
      setShowFinalScore(false);
      setCategory(getRandomCategory());
    } catch (error) {
      console.log(error);
    }
  };

  const handleGuess = async (guess: string) => {
    try {

      if (!leftCountry || !rightCountry) {
        console.error("Countries data is not available.");
        return;
      }
      
      const leftStat = Number(leftCountry[category]);
      const rightStat = Number(rightCountry[category])

      const isGuessCorrect =
        (guess === 'more' && leftStat < rightStat) ||
        (guess === 'less' && leftStat > rightStat);
  
      if (isGuessCorrect) {
        setScore(score + 1);
        setFlash(true);
      } else {
        if (lives - 1 === 0) {
          scoresApi.addScore('more-or-less', score);
          saveHighScore('more-or-less', score);  
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
      let newLeftCountry = rightCountry;
      let fetchedRightCountry;
      do {
        fetchedRightCountry = await getRandomCountry();
      } while (fetchedRightCountry.country_code === leftCountry.country_code);
      setLeftCountry(newLeftCountry);
      setRightCountry(fetchedRightCountry);
      setCategory(getRandomCategory());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div 
        className={`w-[300px] h[125px] sm:w-[450px] sm:h[250px] md:w-[650px] md:h[450px] relative flex flex-col gap-y-8 border-2 sm:border-4 border-black bg-white rounded-3xl p-4 md:p-8 text-center ${shake ? 'shake' : ''}`}
      >
        {showTitle && !showFinalScore ? 
           ( <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">More or Less</h1> 
                <p className="text-base mt-2 sm:text-lg md:text-xl">Make the correct choice about the two countries.</p>
            </div> 
           ) : showFinalScore ? 
           ( <div className="flex items-center justify-center gap-x-2 md:gap-x-4">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold">Final Score: {finalScore}</h1>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold">High Score: {getHighScore('more-or-less')}</h1> 
             </div>) :
           ( 
             <StatusBar 
               lives={lives} 
               score={score} 
               difficulty={0}
               flash={flash} 
             />
           )
        }
        <div className="relative mx-auto">
          {showFinalScore ? (
            <div className="flex flex-col items-center">
              <div className="bg-gray-200">
                <Histogram
                  width={300} 
                  height={250} 
                  data={histogramData}
                />
              </div>
              <div className="mt-4">
                <GameButton text="Start" buttonFunction={startGame} />
              </div>
            </div>
          ) : (
            <div className="flex gap-x-10">
              <div className="flex flex-col items-center">
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold">{leftCountry?.name}</h1> 
                <Flag 
                  countryCode={leftCountry?.country_code?.toLowerCase() || 'eg'} 
                  width={width}
                  height={height}
                />
                <div
                  style={{ visibility: gameStarted ? 'visible' : 'hidden' }}
                >
                  <p className="text-base mt-2 sm:text-lg md:text-xl">has a {category} of</p>
                  <p className="font-bold text-base mt-2 sm:text-lg md:text-xl">
                    {typeof leftCountry?.[category as keyof Country] === 'string'
                      ? `${formatNumber(leftCountry[category as keyof Country] as number)} ${
                          category === "population" ? "people" : "km²"
                        }`
                      : ''}
                  </p>            
                  </div>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold">{rightCountry?.name}</h1> 
                <Flag 
                  countryCode={rightCountry?.country_code?.toLowerCase() || 'eg'} 
                  width={width}
                  height={height}
                />
                <div
                  style={{ visibility: gameStarted ? 'visible' : 'hidden' }}
                >
                  <p className="text-base mt-2 sm:text-lg md:text-xl">has</p>
                  <div className="flex items-center justify-center mt-4">
                    <GameButton text="more" buttonFunction={() => handleGuess('more')} />
                    <GameButton text="less" buttonFunction={() => handleGuess('less')} />
                  </div>
                </div>
              </div>
            </div>
          )}
          {!gameStarted && !showFinalScore && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center">
              <GameButton text="Start" buttonFunction={startGame} />
            </div>
          )}
        </div>

      </div>
    </Layout>
  );
};

export default MoreOrLessPage;
