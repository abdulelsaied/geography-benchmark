import React, { useState, useEffect } from 'react';
import GameButton from '../components/GameButton';
import StatusBar from '../components/StatusBar';
import Flag from '../components/Flag';
import Layout from '../components/Layout';
import countryApi from '../services/countryApi';
import scoresApi from '../services/scoresApi';
import { saveHighScore, getHighScore } from '../utils/highScores'; 
import { useScores } from '../context/useScores'; 
import { Histogram } from '../components/Histogram';
import getRandomCategory from '../utils/randomCategory';

const MoreOrLessPage: React.FC = () => {

  type Category = "population" | "size";

  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [lives, setLives] = useState<number>(3);
  const [leftCountry, setLeftCountry] = useState({
	"name": "Spain",
	"population": 48446594,
	"size": 498980,
	"continent": "Europe",
	"country_code": "ES",
	"primary_language": "Spanish"
});

  const [rightCountry, setRightCountry] = useState({
	"name": "Costa Rica",
	"population": 5262225,
	"size": 51060,
	"continent": "North America",
	"country_code": "CR",
	"primary_language": "Spanish"
});
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

  const { gameData, loading } = useScores();

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
      setLeftCountry(await countryApi.fetchRandomCountry());
      let fetchedRightCountry;
      do {
        fetchedRightCountry = await countryApi.fetchRandomCountry();
      } while (fetchedRightCountry.country_code === leftCountry.country_code);
      setRightCountry(fetchedRightCountry);
      setCategory(getRandomCategory());
    } catch (error) {
      console.log(error);
    }
  };

  const handleGuess = async (guess: string) => {
    try {
      const isGuessCorrect =
        (guess === 'more' && leftCountry[category] < rightCountry[category]) ||
        (guess === 'less' && leftCountry[category] > rightCountry[category]);
  
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
      setLeftCountry(rightCountry);
      let fetchedRightCountry;
      do {
        fetchedRightCountry = await countryApi.fetchRandomCountry();
      } while (fetchedRightCountry.country_code === leftCountry.country_code);
      setRightCountry(fetchedRightCountry);
      setCategory(getRandomCategory());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div 
        className={`relative flex flex-col gap-y-8 border-2 sm:border-4 border-black bg-white rounded-3xl p-4 md:p-8 text-center ${shake ? 'shake' : ''}`}
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
               flash={flash} 
             />
           )
        }
        <div className="relative mx-auto mt-2">
          {showFinalScore ? (
            <Histogram
              width={300} 
              height={250} 
              data={histogramData}
            />
          ) : (
            <div className="flex gap-x-10">
              <div className="flex flex-col items-center">
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold">{leftCountry["name"]}</h1> 
                <Flag 
                    countryCode={leftCountry["country_code"].toLowerCase()} 
                    width={width}
                    height={height}
                />
                <div
                  style={{ visibility: gameStarted ? 'visible' : 'hidden' }}
                >
                  <p className="text-base mt-2 sm:text-lg md:text-xl">has a {category} of</p>
                  <p className="font-bold text-base mt-2 sm:text-lg md:text-xl">{leftCountry[category]}</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold">{rightCountry["name"]}</h1> 
                <Flag 
                    countryCode={rightCountry["country_code"].toLowerCase()} 
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
