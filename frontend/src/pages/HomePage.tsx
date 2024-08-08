import React from 'react'
import Header from '../components/Header';
import { FaGlobe } from 'react-icons/fa';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className = "h-screen flex flex-col">
        <><Header
            title = "Geography Benchmark"
            subtitle = "Test your geo skills with mini games"
            icon = {<FaGlobe />}
            backgroundColor = "#F6FEDB"
        /></>
        <div className = "mt-auto">
            <Footer />
        </div>
    </div>
  );
};

export default HomePage;