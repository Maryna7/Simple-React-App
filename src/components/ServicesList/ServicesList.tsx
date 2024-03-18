import React from 'react';
import styles from './ServicesList.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench, faCameraRetro, faLaptop } from '@fortawesome/free-solid-svg-icons'


const ServicesList = () => {
 

  return (
    <section className={styles.servicesSection}>
      <div className="container">
      <h2 className="h2"><span>SERVICES</span></h2>
      <ul className="articlesColumns">
        <li className="article">
          <div className="iconHolder"><FontAwesomeIcon icon={faWrench} /></div>
          <h3 className='h3'>Web Design & Development</h3>
          <div className="textHolder">
            <p>Regendos maiestatis no ius, in veli tibique percipit, saperet labores si Cu facete causae eleifend eam, ni graeci noster. Id pro insolens aliqu qui dolor diceret ex, id sed suas in intellegat. No vix suas soluta.</p>
          </div>
        </li>
        <li className="article">
          <div className="iconHolder"><FontAwesomeIcon icon={faCameraRetro} /></div>
          <h3 className='h3'>Copywriting & Publishing</h3>
          <div className="textHolder">
            <p>Regendos maiestatis no ius, in veli tibique percipit, saperet labores si Cu facete causae eleifend eam, ni graeci noster. Id pro insolens aliqu qui dolor diceret ex, id sed suas in intellegat. No vix suas soluta.</p>
            <p>Regendos maiestatis no ius, in veli tibique percipit, saperet labores si Cu facete causae eleifend eam, ni graeci noster. Id pro insolens aliqu qui dolor diceret ex, id sed suas in intellegat. No vix suas soluta.</p>
          </div>
        </li>
        <li className="article">
          <div className="iconHolder"><FontAwesomeIcon icon={faLaptop} /></div>
          <h3 className='h3'>Digital & Offset Printing</h3>
          <div className="textHolder">
            <p>Regendos maiestatis no ius, in veli tibique percipit, saperet labores si Cu facete causae eleifend eam, ni graeci noster. Id pro insolens aliqu qui dolor diceret ex, id sed suas in intellegat. No vix suas soluta.</p>
          </div>
        </li>
      </ul>
      </div>
    </section>
  );
}

export { ServicesList };