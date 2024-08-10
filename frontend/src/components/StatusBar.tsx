import React from 'react';
import { FaHeart } from 'react-icons/fa';

interface StatusBarProps {
    lives: number;
    score: number;
}

const StatusBar: React.FC<StatusBarProps> = ({ lives, score }) => {
    // Set the number of hearts to display as 3 in this case
    const maxHearts = 3;

    return (
        <div className="flex flex-row items-center justify-center space-x-6 p-2">
            <div className="flex items-center space-x-2">
                <span className="font-bold text-2xl">Lives |</span>
                <div className="flex flex-row items-center space-x-2">
                    {[...Array(maxHearts)].map((_, index) => (
                        <FaHeart
                            key={index}
                            className={`text-2xl ${
                                index < lives ? 'text-black' : 'text-gray-400'
                            }`}
                        />
                    ))}
                </div>
            </div>

            <div className="flex items-center space-x-2">
                <span className="font-bold text-2xl">Score |</span>
                <span className="text-2xl">{score}</span>
            </div>
        </div>
    );
};

export default StatusBar;
