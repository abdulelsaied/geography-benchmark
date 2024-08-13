import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react';
import GameButton from '../components/GameButton';
import { HistogramDatasetTransition } from '../components/HistogramTransition';

interface StatsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const StatsModal: React.FC<StatsModalProps> = ({ isOpen, onClose }) => {
  const [selectedGame, setSelectedGame] = useState<'flagMemory' | 'moreOrLess'>('flagMemory');

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
      <ModalOverlay />
      <ModalContent className="modal-center" alignItems="center" justifyContent="center">
        <ModalHeader>Stats</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div className="flex flex-col items-center">
            <div className="flex gap-4 mb-4">
              <GameButton 
                text="Flag Memory" 
                buttonFunction={() => setSelectedGame('flagMemory')} 
                selected={selectedGame === "flagMemory"}
              />
              <GameButton 
                text="More or Less" 
                buttonFunction={() => setSelectedGame('moreOrLess')} 
                selected={selectedGame === "moreOrLess"}
              />
            </div>
            <div className="w-[400px] h-[300px] border-4 border-black bg-gray-200 flex items-center justify-center">
              <HistogramDatasetTransition 
                width={400}
                height={300}
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
