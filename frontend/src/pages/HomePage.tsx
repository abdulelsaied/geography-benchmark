import React from 'react';
import { FaFlag } from 'react-icons/fa';
import { FaArrowDownUpAcrossLine, FaRobot } from 'react-icons/fa6';
import MenuCard from '../components/MenuCard';
import Layout from '../components/Layout';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-12">
        <MenuCard
          title="Flag Memory"
          subtitle="Remember as many flags as possible"
          icon={<FaFlag />}
          to="/flag-memory"
        />
        <MenuCard
          title="More or Less"
          subtitle="Choose the country with the higher statistic"
          icon={<FaArrowDownUpAcrossLine />}
          to="/more-or-less"
        />
        <MenuCard
          title="Versus AI"
          subtitle="Guess the country based on AI-generated hints."
          icon={<FaRobot />}
          to="/versus-ai"
        />
      </div>
    </Layout>
  );
};

export default HomePage;