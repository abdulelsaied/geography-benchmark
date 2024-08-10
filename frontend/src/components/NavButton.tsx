import React from 'react';

interface NavButtonProps {
  text: string;
  icon: React.ReactNode;
}

const NavButton: React.FC<NavButtonProps> = ({ text, icon }) => {
  return (
    <button
      className="
        flex flex-col items-center justify-center 
        border-[3px] border-r-[6px] border-b-[6px] border-black 
        bg-[#E6D3A3] rounded-xl p-2 m-2 
        transition-transform duration-200 ease-in-out 
        hover:bg-[#d4a738] hover:translate-y-1 hover:translate-x-1 
        active:translate-y-0 active:translate-x-0 active:shadow-inner
      "
    >
      {icon && <span className="text-4xl">{icon}</span>} {/* Increased icon size */}
      <h1 className="text-lg font-bold mt-auto">{text}</h1> {/* Moved text closer to bottom */}
    </button>
  );
};

export default NavButton;