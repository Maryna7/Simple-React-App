import React from "react";
import styles from "./ServicesList.module.scss";
import { Icons } from "../Icons/Icons";

const ServicesList = () => {
  const serviceData = [
    {
      iconName: Icons.iconWrench,
      heading: "Web Design & Development",
      text: [
        "Regendos maiestatis no ius, in veli tibique percipit, saperet labores si Cu facete causae eleifend eam, ni graeci noster. Id pro insolens aliqu qui dolor diceret ex, id sed suas in intellegat. No vix suas soluta.",
      ],
    },
    {
      iconName: Icons.iconCamera,
      heading: "Copywriting & Publishing",
      text: [
        "Regendos maiestatis no ius, in veli tibique percipit, saperet labores si Cu facete causae eleifend eam, ni graeci noster. Id pro insolens aliqu qui dolor diceret ex, id sed suas in intellegat. No vix suas soluta.",
        "Regendos maiestatis no ius, in veli tibique percipit, saperet labores si Cu facete causae eleifend eam, ni graeci noster. Id pro insolens aliqu qui dolor diceret ex, id sed suas in intellegat. No vix suas soluta.",
      ],
    },
    {
      iconName: Icons.iconLaptop,
      heading: "Digital & Offset Printing",
      text: [
        "Regendos maiestatis no ius, in veli tibique percipit, saperet labores si Cu facete causae eleifend eam, ni graeci noster. Id pro insolens aliqu qui dolor diceret ex, id sed suas in intellegat. No vix suas soluta.",
      ],
    },
  ];

  return (
    <section className={styles.servicesSection}>
      <div className="container">
        <h2 className="h2">
          <span>SERVICES</span>
        </h2>

        <ul className="articlesColumns">
          {serviceData.map((item) => (
            <li className="article">
              <div className="iconHolder">{item.iconName}</div>
              <h3 className="h3">{item.heading}</h3>
              <div className="textHolder">
                {item.text.map((paragraph) => (
                  <p>{paragraph}</p>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { ServicesList };
