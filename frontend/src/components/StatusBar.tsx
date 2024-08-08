import React from 'react'

interface StatusBarProps {
    lives: number;
    score: number;
}

const StatusBar: React.FC<StatusBarProps> = ({lives, score}) => {
    return (
        <div>
            <p>lives: {lives}</p>
            <p>score: {score}</p>
        </div>
    )
}

export default StatusBar;
