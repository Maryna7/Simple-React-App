import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb, faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import './AboutList.scss';


const AboutList = () => {
 

  return (
    <section className="aboutSection">
      <div className="container">
      <h2 className="mainHeading"><span>About</span></h2>
      <ul className="articlesColumns">
        <li className="article">
          <div className="iconHolder"><FontAwesomeIcon icon={faBullhorn} /></div>
          <h3><span className="headingsNumber">89%</span>Double the traffic</h3>
          <div className="textHolder">
            <p>Regendos maiestatis no ius, in veli tibique percipit, saperet labores si Cu facete causae eleifend eam, ni graeci noster. Id pro insolens aliqu qui dolor diceret ex, id sed suas in intellegat. No vix suas soluta.</p>
          </div>
        </li>
        <li className="article">
          <div className="iconHolder"><FontAwesomeIcon icon={faLightbulb} /></div>
          <h3><span className="headingsNumber">75%</span>Better Ideas</h3>
          <div className="textHolder">
            <p>Regendos maiestatis no ius, in veli tibique percipit, saperet labores si Cu facete causae eleifend eam, ni graeci noster. Id pro insolens aliqu qui dolor diceret ex, id sed suas in intellegat. No vix suas soluta.</p>
          </div>
        </li>
        <li className="article">
          <div className="iconHolder"><FontAwesomeIcon icon={faSquareCheck} /></div>
          <h3><span className="headingsNumber">100%</span>Digital & Offset Printing</h3>
          <div className="textHolder">
            <p>Regendos maiestatis no ius, in veli tibique percipit, saperet labores si Cu facete causae eleifend eam, ni graeci noster. Id pro insolens aliqu qui dolor diceret ex, id sed suas in intellegat. No vix suas soluta.</p>
          </div>
        </li>
      </ul>
      </div>
    </section>
  );
}

export { AboutList }