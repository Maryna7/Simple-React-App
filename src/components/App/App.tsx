import React from 'react';
import style from './App.module.scss';
import { Header } from '../Header/Header';
import  { Banner } from '../Banner/Banner';

function App() {
  return (
    <div className={style.app}>
      <Header />
      <main>
        <Banner />
      </main>
    </div>
  );
}

export { App };
