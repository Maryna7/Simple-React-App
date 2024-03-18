/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareTwitter, faSquareFacebook, faLinkedin, faSquarePinterest, faSquareGooglePlus, faYoutube } from '@fortawesome/free-brands-svg-icons';
import styles from './TeamList.module.scss';


const TeamList = () => {
 

  return (
    <section className={styles.teamSection}>
      <div className="container">
      <h2 className="h2"><span>MEET OUR TEAM</span></h2>
      <ul className={styles.teamList}>
        <li className={styles.teamItem}>
          <div className={styles.teamDescription}>
            <div className={styles.imageHolder}><img className={styles.teamImage} src="../../images/team-1.jpg" alt="pictures of our staff" /></div>
            <h3 className='h3'>Lorem Ipsum Dolor</h3>
            <div className={styles.jobTitle}>Logistics</div>
            <div className={styles.textHolder}>
              <p>Regendos maiestatis no ius, in veli tibique percipit, saperet labores si Cu facete causae eleifend eam, ni graeci noster. Id pro insolens aliqu qui dolor diceret ex, id sed suas in intellegat. No vix suas soluta.</p>
            </div>
          </div>
          <ul className={styles.teamSocialList}>
            <li className={styles.teamSocialItem}><a className={styles.teamSocialLink} href="#"><FontAwesomeIcon icon={faSquareTwitter} /></a></li>
            <li className={styles.teamSocialItem}><a className={styles.teamSocialLink} href="#"><FontAwesomeIcon icon={faSquareFacebook} /></a></li>
            <li className={styles.teamSocialItem}><a className={styles.teamSocialLink} href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li className={styles.teamSocialItem}><a className={styles.teamSocialLink} href="#"><FontAwesomeIcon icon={faSquarePinterest} /></a></li>
            <li className={styles.teamSocialItem}><a className={styles.teamSocialLink} href="#"><FontAwesomeIcon icon={faSquareGooglePlus} /></a></li>
            <li className={styles.teamSocialItem}><a className={styles.teamSocialLink} href="#"><FontAwesomeIcon icon={faYoutube} /></a></li>
          </ul>
        </li>
        <li className={styles.teamItem}>
          <div className={styles.teamDescription}>
            <div className={styles.imageHolder}><img className={styles.teamImage} src="../../images/team-2.jpg" alt="pictures of our staff" /></div>
            <h3 className='h3'>Lorem Ipsum Dolor</h3>
            <div className={styles.jobTitle}>Support Guru</div>
            <div className={styles.textHolder}>
              <p>Regendos maiestatis no ius, in veli tibique percipit, saperet labores si Cu facete causae eleifend eam, ni graeci noster. Id pro insolens aliqu qui dolor diceret ex, id sed suas in intellegat. No vix suas soluta.</p>
            </div>
          </div>
          <ul className={styles.teamSocialList}>
            <li className={styles.teamSocialItem}><a className={styles.teamSocialLink} href="#"><FontAwesomeIcon icon={faSquareTwitter} /></a></li>
            <li className={styles.teamSocialItem}><a className={styles.teamSocialLink} href="#"><FontAwesomeIcon icon={faSquareFacebook} /></a></li>
            <li className={styles.teamSocialItem}><a className={styles.teamSocialLink} href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li className={styles.teamSocialItem}><a className={styles.teamSocialLink} href="#"><FontAwesomeIcon icon={faSquarePinterest} /></a></li>
            <li className={styles.teamSocialItem}><a className={styles.teamSocialLink} href="#"><FontAwesomeIcon icon={faSquareGooglePlus} /></a></li>
            <li className={styles.teamSocialItem}><a className={styles.teamSocialLink} href="#"><FontAwesomeIcon icon={faYoutube} /></a></li>
          </ul>
        </li>
        <li className={styles.teamItem}>
          <div className={styles.teamDescription}>
            <div className={styles.imageHolder}><img className={styles.teamImage} src="../../images/team-3.jpg" alt="pictures of our staff" /></div>
            <h3 className='h3'>Lorem Ipsum Dolor</h3>
            <div className={styles.jobTitle}>Logistics</div>
            <div className={styles.textHolder}>
              <p>Regendos maiestatis no ius, in veli tibique percipit, saperet labores si Cu facete causae eleifend eam, ni graeci noster. Id pro insolens aliqu qui dolor diceret ex, id sed suas in intellegat. No vix suas soluta.</p>
              <p>Regendos maiestatis no ius, in veli tibique percipit, saperet labores si Cu facete causae eleifend eam, ni graeci noster. Id pro insolens aliqu qui dolor diceret ex, id sed suas in intellegat. No vix suas soluta.</p>
            </div>
          </div>
          <ul className={styles.teamSocialList}>
            <li className={styles.teamSocialItem}><a className={styles.teamSocialLink} href="#"><FontAwesomeIcon icon={faSquareTwitter} /></a></li>
            <li className={styles.teamSocialItem}><a className={styles.teamSocialLink} href="#"><FontAwesomeIcon icon={faSquareFacebook} /></a></li>
            <li className={styles.teamSocialItem}><a className={styles.teamSocialLink} href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li className={styles.teamSocialItem}><a className={styles.teamSocialLink} href="#"><FontAwesomeIcon icon={faSquarePinterest} /></a></li>
            <li className={styles.teamSocialItem}><a className={styles.teamSocialLink} href="#"><FontAwesomeIcon icon={faSquareGooglePlus} /></a></li>
            <li className={styles.teamSocialItem}><a className={styles.teamSocialLink} href="#"><FontAwesomeIcon icon={faYoutube} /></a></li>
          </ul>
        </li>
      </ul>
      </div>
    </section>
  );
}

export { TeamList }