import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Select, Button } from '@chakra-ui/react';
import { FaRobot } from 'react-icons/fa';
import GameButton from '../components/GameButton';

const VersusAiPage: React.FC = () => {
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    // Blank function for now
    setGameStarted(true);
  };

  return (
    <Layout>
      <div 
        className={
          "w-[300px] h-[125px] sm:w-[450px] sm:h-[250px] md:w-[650px] md:h-[450px] relative flex flex-col justify-around gap-y-8 border-2 sm:border-4 border-black bg-white rounded-3xl p-4 md:p-8 text-center"
        }
      >
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Versus AI</h1>
          <p className="text-base mt-2 sm:text-lg md:text-xl">
            Guess the country based on AI-generated clues.
          </p>
        </div>
        <div className="relative mx-auto gap-y-10 text-6xl md:text-9xl text-gray-500">
              <FaRobot className = "animate-shake-rotate"/>
          </div>
          {(!gameStarted) && (
            <div className = "flex justify-center"> 
                <GameButton text="Start" buttonFunction={startGame} />
            </div>
          )}
        </div>
    </Layout>
  );
};

export default VersusAiPage;