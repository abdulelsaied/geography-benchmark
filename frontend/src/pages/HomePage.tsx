import React from 'react';
import MenuButton from "../components/MenuButton"

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Geography Benchmark</h1>
      <MenuButton text = "Flag Memory Game" buttonFunction={() => window.location.href = '/flag-memory'} />
    </div>
  );
};

export default HomePage;