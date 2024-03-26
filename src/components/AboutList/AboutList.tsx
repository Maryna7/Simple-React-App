import React from "react";
import { Icons } from "../Icons/Icons";
import "./AboutList.scss";

const AboutList = () => {
  const aboutSectionData = [
    {
      icon: Icons.iconBullhorn,
      headingsNumber: "89%",
      heading: "Double the traffic",
      text: "Regendos maiestatis no ius, in veli tibique percipit, saperet labores si Cu facete causae eleifend eam, ni graeci noster. Id pro insolens aliqu qui dolor diceret ex, id sed suas in intellegat. No vix suas soluta.",
    },
    {
      icon: Icons.iconLightbulb,
      headingsNumber: "75%",
      heading: "Better Ideas",
      text: "Regendos maiestatis no ius, in veli tibique percipit, saperet labores si Cu facete causae eleifend eam, ni graeci noster. Id pro insolens aliqu qui dolor diceret ex, id sed suas in intellegat. No vix suas soluta.",
    },
    {
      icon: Icons.iconSquareCheck,
      headingsNumber: "100%",
      heading: "Digital & Offset Printing",
      text: "Regendos maiestatis no ius, in veli tibique percipit, saperet labores si Cu facete causae eleifend eam, ni graeci noster. Id pro insolens aliqu qui dolor diceret ex, id sed suas in intellegat. No vix suas soluta.",
    },
  ];

  return (
    <section className="aboutSection">
      <div className="container">
        <h2 className="h2">
          <span>About</span>
        </h2>
        <ul className="articlesColumns">
          {aboutSectionData.map((item) => (
            <li className="article">
              <div className="iconHolder">{item.icon}</div>
              <h3 className="h3">
                <span className="headingsNumber">{item.headingsNumber}</span>
                {item.heading}
              </h3>
              <div className="textHolder">
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { AboutList };
