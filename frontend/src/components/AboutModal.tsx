import React from 'react';
import GameButton from './GameButton';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Box,
  Text,
  UnorderedList,
  ListItem,
  Link,
} from '@chakra-ui/react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={{ base: 'sm', md: 'md', lg: 'lg' }} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}>
          About Geography Benchmark
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box mb={{ base: 2, md: 4 }}>
            <Text fontSize={{ base: 'sm', md: 'lg', lg: 'lg' }} mb={{ base: 2, md: 4 }}>
              <strong>Geography Benchmark</strong> is a fun and engaging application designed to test and improve your geographic knowledge. Inspired by <Link href="https://humanbenchmark.com/" isExternal color="teal.500" fontWeight="bold">HumanBenchmark</Link>, this app offers various games to challenge your understanding of world geography.
            </Text>
            <Text fontSize={{ base: 'sm', md: 'lg', lg: 'lg' }} mb={{ base: 2, md: 4 }}>
              The app includes the following games:
            </Text>
            <UnorderedList spacing={{ base: 1, md: 2 }} mb={{ base: 2, md: 4 }}>
              <ListItem fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>
                <strong>Flag Memory:</strong> Test your memory by identifying and recalling the flags of different countries.
              </ListItem>
              <ListItem fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>
                <strong>More or Less:</strong> Choose the country with the higher statistic.
              </ListItem>
              <ListItem fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>
                <strong>Versus AI:</strong> Guess the country based on AI-generated hints that increase in difficulty.
              </ListItem>
            </UnorderedList>
            <Text fontSize={{ base: 'sm', md: 'lg', lg: 'lg' }} mb={{ base: 2, md: 4 }}>
              The <strong>Stats</strong> tab allows you to compare your high scores with those of other players, giving you insight into how you stack up against the rest of the community.
            </Text>
          </Box>
        </ModalBody>
        <ModalFooter>
          <GameButton text="Close" buttonFunction={onClose} />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AboutModal;
