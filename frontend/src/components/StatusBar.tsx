import React from 'react'

interface StatusBarProps {
    lives: number;
    score: number;
}

const StatusBar: React.FC<StatusBarProps> = ({lives, score}) => {
    return (
        <div className = "flex flex-row items-center justify-center space-x-4 p-2">
            <div className = "flex items-center space-x-2">
                <span className = "font-bold text-lg">Lives |</span>
                <span className = "text-lg">{'❤️'.repeat(lives)}</span>
            </div>

            <div className = "flex items-center space-x-2">
                <span className = "font-bold text-lg">Score |</span>
                <span className = "text-lg">{score}</span>
            </div>
        </div>
    )
}

export default StatusBar;
