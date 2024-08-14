import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDisclosure } from '@chakra-ui/react';
import NavButton from './NavButton';
import StatsModal from './StatsModal';
import AboutModal from './AboutModal';
import { IoIosStats, IoIosInformationCircle } from 'react-icons/io';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { isOpen: isStatsOpen, onOpen: onStatsOpen, onClose: onStatsClose } = useDisclosure();
  const { isOpen: isAboutOpen, onOpen: onAboutOpen, onClose: onAboutClose } = useDisclosure();

  return (
    <>
      <div className="flex flex-row w-full justify-center sm:justify-between items-end mb-2">
        <div className = "flex flex-row items-end text-white">
          <div className="pr-4 border-white border-r-2 sm:border-r-0 lg:border-r-2 cursor-pointer" onClick={() => navigate('/')}> 
            <h1 className="text-lg sm:text-4xl font-bold">GE🌎GRAPHY</h1>
            <h1 className="text-lg sm:text-4xl font-bold">BENCHMARK</h1>
          </div>
          <div className="ml-4">
            <h4 className="hidden lg:block lg:text-xl">
              test your geo skills
            </h4>
            <h4 className="hidden lg:block lg:text-xl">
              inspired by HumanBenchmark
            </h4>
          </div>
        </div>
        <div className="flex flex-row items-end gap-x-4">
          <NavButton 
            text="Stats"
            icon={<IoIosStats />}
            onClick={onStatsOpen}
          />
          <NavButton 
            text="About"
            icon={<IoIosInformationCircle />}
            onClick={onAboutOpen}
          />
        </div>
      </div>
      <StatsModal isOpen={isStatsOpen} onClose={onStatsClose} />
      <AboutModal isOpen={isAboutOpen} onClose={onAboutClose} />
    </>
  );
};

export default Header;
