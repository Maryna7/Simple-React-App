/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from './PortfolioSlider.module.scss';

const PortfolioSlider = () => {

  return (
    <section className={styles.portfolioSection}>
      <div className="container">
      <h2 className="h2"><span>LATEST PHOTOS</span></h2>
     <ul className={styles.portfolioList}>
      <li className={styles.portfolioItem}>
        <a className={styles.portfolioLink} href="#">
          <img src="../../images/img-14.jpg" alt="plant in the office" />
          <div className={styles.linkHover}> 
            <div className={styles.hoverTextWrap}> 
              <span className={styles.hoverText}>Wiev all</span>
            </div>
          </div>
        </a>
        <div className={styles.portfolioLinkWrap}>
        <a className={styles.portfolioLink} href="#">
          <img src="../../images/img-15.jpg" alt="retro radio " />
          <div className={styles.linkHover}> 
            <div className={styles.hoverTextWrap}> 
              <span className={styles.hoverText}>Wiev all</span>
            </div>
          </div>
        </a>
        <a className={styles.portfolioLink} href="#">
          <img src="../../images/img-16.jpg" alt="magazins" />
          <div className={styles.linkHover}> 
            <div className={styles.hoverTextWrap}> 
              <span className={styles.hoverText}>Wiev all</span>
            </div>
          </div>
        </a>
        </div>
      </li>
      <li className={styles.portfolioItem}>
        <a className={styles.portfolioLink} href="#">
          <img src="../../images/img-13.jpg" alt="magazine of the company" />
          <div className={styles.linkHover}> 
            <div className={styles.hoverTextWrap}> 
              <span className={styles.hoverText}>Wiev all</span>
            </div>
          </div>
        </a>
      </li>
      <li className={styles.portfolioItem}>
        <a className={styles.portfolioLink} href="#">
          <img src="../../images/img-9.jpg" alt="forest" />
          <div className={styles.linkHover}> 
            <div className={styles.hoverTextWrap}> 
              <span className={styles.hoverText}>Wiev all</span>
            </div>
          </div>
        </a>
        <a className={styles.portfolioLink} href="#">
          <img src="../../images/img-10.jpg" alt="documents" />
          <div className={styles.linkHover}> 
            <div className={styles.hoverTextWrap}> 
              <span className={styles.hoverText}>Wiev all</span>
            </div>
          </div>
        </a>
        <a className={styles.portfolioLink} href="#">
          <img src="../../images/img-11.jpg" alt="calendar cards" />
          <div className={styles.linkHover}> 
            <div className={styles.hoverTextWrap}> 
              <span className={styles.hoverText}>Wiev all</span>
            </div>
          </div>
        </a>
        <a className={styles.portfolioLink} href="#">
          <img src="../../images/img-12.jpg" alt="retro camera" />
          <div className={styles.linkHover}> 
            <div className={styles.hoverTextWrap}> 
              <span className={styles.hoverText}>Wiev all</span>
            </div>
          </div>
        </a>
      </li>
     </ul>
      </div>
    </section>
  );
}

export { PortfolioSlider }