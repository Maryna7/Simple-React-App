import React from 'react';
import styles from './App.module.scss';
import { Header } from '../Header/Header';
import  { Banner } from '../Banner/Banner';
import { ServicesList } from '../ServicesList/ServicesList';
import { ProjectList } from '../ProjectList/ProjectList';
import { AboutList } from '../AboutList/AboutList';
import { TeamList } from '../TeamList/TeamList';
import { PortfolioSlider } from '../PortfolioSlider/PortfolioSlider';


const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <Banner />
        <ServicesList />
        <ProjectList />
        <AboutList />
        <TeamList />
        <PortfolioSlider />
      </main>
    </div>
  );
}

export { App };
