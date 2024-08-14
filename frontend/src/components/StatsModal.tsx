import React, { useState, useEffect } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react';
import GameButton from '../components/GameButton';
import { HistogramDatasetTransition } from '../components/HistogramTransition';

interface StatsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const StatsModal: React.FC<StatsModalProps> = ({ isOpen, onClose }) => {
  const [selectedGame, setSelectedGame] = useState<'flag-memory' | 'more-or-less'>('flag-memory');
  const [width, setWidth] = useState<number>(400);
  const [height, setHeight] = useState<number>(300);

  useEffect(() => {
    const updateDimensions = () => {
      if (window.innerWidth >= 1024) {
        setWidth(400);
        setHeight(300);
      } else if (window.innerWidth >= 768) {
        setWidth(380);
        setHeight(253);
      } else {
        setWidth(300);
        setHeight(200);
      }
    };

    updateDimensions(); // Set initial dimensions
    window.addEventListener('resize', updateDimensions); // Add resize event listener

    return () => window.removeEventListener('resize', updateDimensions); // Clean up event listener
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={{ base: 'sm', md: 'md', lg: 'lg' }} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Stats</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div className="flex flex-col items-center">
            <div className="flex gap-4 mb-4">
              <GameButton 
                text="Flag Memory" 
                buttonFunction={() => setSelectedGame('flag-memory')} 
                selected={selectedGame === "flag-memory"}
              />
              <GameButton 
                text="More or Less" 
                buttonFunction={() => setSelectedGame('more-or-less')} 
                selected={selectedGame === "more-or-less"}
              />
            </div>
            <div className={`w-[${width}px] h-[${height}px] border-4 border-black bg-gray-200 flex items-center justify-center`}>
              <HistogramDatasetTransition 
                width={width}
                height={height}
                selectedGame={selectedGame}
              />
            </div>
            <div className="mt-4">
              <GameButton text="Close" buttonFunction={onClose} />
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default StatsModal;
