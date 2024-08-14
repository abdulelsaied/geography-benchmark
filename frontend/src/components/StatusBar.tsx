import React from 'react';
import { FaHeart } from 'react-icons/fa';

interface StatusBarProps {
    lives: number;
    score: number;
    flash?: boolean;
}

const StatusBar: React.FC<StatusBarProps> = ({ lives, score, flash }) => {
    const maxHearts = 3;

    return (
        <div className="flex flex-row items-center justify-center space-x-6 p-2">
            <div className="flex items-center space-x-2">
                <span className="font-bold text-lg sm:text-2xl">Lives |</span>
                <div className="flex flex-row items-center space-x-2">
                    {[...Array(maxHearts)].map((_, index) => (
                        <FaHeart
                            key={index}
                            className={`text-lg sm:text-2xl ${
                                index < lives ? 'text-red-600' : 'text-red-300'
                            }`}
                        />
                    ))}
                </div>
            </div>

            <div className="relative flex items-center space-x-2">
                <span className="font-bold text-lg sm:text-2xl">Score |</span>
                <span className={`score ${flash ? 'flash-green' : ''} text-lg sm:text-2xl`}>{score}</span>
                {flash && <span className = "absolute top-0 right-[-20px] flash-green ml-2">+1</span>}
            </div>
        </div>
    );
};

export default StatusBar;
