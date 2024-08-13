import { useState, useEffect } from "react";
import { data, data2 } from "../assets/data";
import { Histogram } from "./Histogram";

const BUTTONS_HEIGHT = 50;

type HistogramDatasetTransitionProps = {
  width: number;
  height: number;
  selectedGame: 'flagMemory' | 'moreOrLess';
};

const buttonStyle = {
  border: "1px solid #9a6fb0",
  borderRadius: "3px",
  padding: "0px 8px",
  margin: "10px 2px",
  fontSize: 14,
  color: "#9a6fb0",
  opacity: 0.7,
};

export const HistogramDatasetTransition = ({
  width,
  height,
  selectedGame,
}: HistogramDatasetTransitionProps) => {
  const [selectedData, setSelectedData] = useState<number[]>(data);

  useEffect(() => {
    if (selectedGame === 'flagMemory') {
      setSelectedData(data); // or other dataset for flagMemory
    } else if (selectedGame === 'moreOrLess') {
      setSelectedData(data2); // or other dataset for moreOrLess
    }
  }, [selectedGame]);

  return (
    <div>
      <Histogram
        width={width}
        height={height - BUTTONS_HEIGHT}
        data={selectedData}
      />
    </div>
  );
};
