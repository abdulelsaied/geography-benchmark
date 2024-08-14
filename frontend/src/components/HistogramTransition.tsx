import { useEffect, useState } from 'react';
import { Histogram } from './Histogram';
import { useScores } from '../context/useScores'; 

type HistogramDatasetTransitionProps = {
  width: number;
  height: number;
  selectedGame: 'flag-memory' | 'more-or-less';
};


export const HistogramDatasetTransition = ({
  width,
  height,
  selectedGame,
}: HistogramDatasetTransitionProps) => {
  const { gameData, loading } = useScores();
  const [selectedData, setSelectedData] = useState<number[]>([]);

  useEffect(() => {
    if (!loading && gameData[selectedGame]) {
      setSelectedData(gameData[selectedGame]);
    }
  }, [selectedGame, gameData, loading]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Histogram
        width={width}
        height={height}
        data={selectedData}
      />
    </div>
  );
};
