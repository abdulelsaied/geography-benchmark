import React from 'react';

interface GameButtonProps {
  text: string;
  buttonFunction: (...args: any[]) => void;
  selected?: boolean; // Add selected prop
}

const GameButton: React.FC<GameButtonProps> = ({ text, buttonFunction, selected }) => {
  return (
    <button
      className={`
        flex flex-col
        border-[3px] border-r-[6px] border-b-[6px] border-black
        ${selected ? 'bg-[#d4a738]' : 'bg-[#E6D3A3]'} 
        rounded-xl p-2 m-2
        transition-transform duration-200 ease-in-out
        ${selected ? '' : 'hover:bg-[#d4a738] hover:translate-y-1 hover:translate-x-1'}
        active:translate-y-0 active:translate-x-0 active:shadow-inner
        text-lg font-bold
      `}
      onClick={() => buttonFunction()}
    >
      {text}
    </button>
  );
};

export default GameButton;
