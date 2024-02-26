import React from 'react'

interface GameButtonProps {
    text: string;
    buttonFunction: (...args: any[]) => void
}

const GameButton: React.FC<GameButtonProps> = ({text, buttonFunction}) => {
    return (
        <button className = "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" 
                onClick = {() => buttonFunction()}>
            {text}
        </button>
    )
}

export default GameButton;