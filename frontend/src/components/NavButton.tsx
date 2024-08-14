import React from 'react';

interface NavButtonProps {
  text: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ text, icon, onClick }) => {
  return (
    <button
      className="
        flex flex-col items-center justify-center
        border-[2px] border-r-[4px] border-b-[4px] sm:border-[3px] sm:border-r-[6px] sm:border-b-[6px] border-black
        bg-[#E6D3A3] rounded-xl
        p-1 sm:p-2
        transition-transform duration-200 ease-in-out
        hover:bg-[#d4a738] hover:translate-y-1 hover:translate-x-1
        active:translate-y-0 active:translate-x-0 active:shadow-inner
        text-sm sm:text-lg
        max-h-20 sm:max-h-24
      "
      onClick={onClick}
    >
      {icon && <span className="text-2xl sm:text-4xl">{icon}</span>}
      <h1 className="text-sm sm:text-lg font-bold mt-auto">{text}</h1>
    </button>
  );
};

export default NavButton;
