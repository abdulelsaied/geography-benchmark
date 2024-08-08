import React, { useState } from 'react';
import GameButton from "../components/GameButton"
import Header from '../components/Header';
import StatusBar from '../components/StatusBar';
import countryApi from "../services/countryApi"
import { FaFlagUsa } from 'react-icons/fa';     
import Flag from '../components/Flag';
import Footer from '../components/Footer';


const FlagMemoryPage: React.FC = () => {

    const [gameStarted,  setGameStarted] = useState<boolean>(false);
    const [lives, setLives] = useState<number>(3);
    const [seenCountries, setSeenCountries] = useState<Set<string>>(new Set());
    const [currentCountryCode, setCurrentCountryCode] = useState<string>("eg");
    const [score, setScore] = useState<number>(0);

    const startGame = async () => {
        try {
            const startingCountryCode = await countryApi.fetchRandomCountryCode();
            setCurrentCountryCode(startingCountryCode);
            setGameStarted(true);
            setLives(3);
            setSeenCountries(new Set());
        } catch (error) {
            console.log(error);
        }
    }

    const handleGuess = async (guess: string) => {
        try {
            const isGuessCorrect = 
            (guess === "seen" && seenCountries.has(currentCountryCode)) || 
            (guess === "new" && !seenCountries.has(currentCountryCode));

            if (isGuessCorrect) {
                if (!seenCountries.has(currentCountryCode)) {
                    seenCountries.add(currentCountryCode);
                    setSeenCountries(new Set(seenCountries));
                }
                setScore(score + 1);
            } else {
                if (lives - 1 === 0) {
                    setLives(lives - 1);
                    setScore(0);
                    setGameStarted(false);
                    return;
                }
                setLives(lives - 1);
            }
            const nextCountryCode =  Math.random() < 0.5 && seenCountries.size > 0 
            ? Array.from(seenCountries)[Math.floor(Math.random() * seenCountries.size)]
            : await countryApi.fetchRandomCountryCode();
            setCurrentCountryCode(nextCountryCode);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className = "h-screen flex flex-col">
            <Header
                title = "Flag Memory"
                subtitle = "Remember as many flags as possible."
                icon = {<FaFlagUsa />}
                backgroundColor = "#F6FEDB"
            />
            <div className = "flex flex-col gap-4 mt-10">
                <StatusBar 
                    lives = {lives}
                    score = {score}
                />
                <Flag 
                    countryCode = {currentCountryCode}
                />
                <div id = "game-buttons" className = "flex items-center justify-center gap-8 mt-8">
                    {!gameStarted ? (
                        <GameButton text = "start" buttonFunction={() => startGame()} />
                    ) : (
                        <>
                            <GameButton text = "new" buttonFunction={() => handleGuess("new")} />
                            <GameButton text = "seen" buttonFunction={() => handleGuess("seen")} />
                        </>
                    )}
                </div>
            </div>
            <div className = "mt-auto">
                <Footer />
            </div>
        </div>
    );
};

export default FlagMemoryPage;