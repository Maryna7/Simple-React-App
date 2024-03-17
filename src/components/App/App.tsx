import React from 'react';
import styles from './App.module.scss';
import { Header } from '../Header/Header';
import  { Banner } from '../Banner/Banner';
import { ServicesList } from '../ServicesList/ServicesList';


const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <Banner />
        <ServicesList />
      </main>
    </div>
  );
}

export { App };
