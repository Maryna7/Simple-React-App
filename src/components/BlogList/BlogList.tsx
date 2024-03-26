/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./BlogList.module.scss";
import { Link } from "../Link/Link";
import { Icons } from "../Icons/Icons";

const BlogList: React.FC = () => {
  return (
    <section className={styles.blogSection}>
      <h2 className="h2">
        <span>LATEST BLOGS</span>
      </h2>
      <ul className={styles.blogList}>
        <li className={styles.blogItem}>
          <Link className={styles.blogLink} href="#">
            <div className={styles.blogImgWrap}>
              {/* <img src="../../images/img-1.jpg" alt="the future of food" /> */}
            </div>
            <div className={styles.blogTextWrap}>
              <div className={styles.blogTextHeader}>
                <h3 className="h3">
                  <span>The Future of Food</span>
                </h3>
                <div className={styles.blogTextComments}>
                  {Icons.comments}
                  <span className={styles.numberOfComments}>15</span>
                </div>
              </div>
              <p>
                Regendos maiestatis no ius, in velidusae arie tibique percipit,
                saperet labores si fotalo see Cu facete causae eleifend eam, ni
                percipit in graeci noster. Id pro insolens aliqu qui dolor qui
                dolor diceret ex, id sed suas in eleifend intellegat. No vix
                suas soluta.
              </p>
              <p>
                Regendos maiestatis no ius, in velidusae arie tibique percipit,
                saperet labores si fotalo see Cu facete causae eleifend eam, ni
                percipit in graeci noster. Id pro insolens aliqu qui dolor qui
                dolor diceret ex, id sed suas in eleifend intellegat. No vix
                suas soluta.
              </p>
              <div className={styles.blogTextFooter}>
                <div className={styles.blogAuthorWrap}>
                  {Icons.penToSquare}
                  <span className={styles.authorName}>by Admin</span>
                </div>
                <div className={styles.blogDateWrap}>
                  {Icons.clock}
                  <span className={styles.blogDate}>Aug 28|2023</span>
                </div>
              </div>
            </div>
          </Link>
        </li>
        <li className={styles.blogItem}>
          <Link className={styles.blogLink} href="#">
            <div className={styles.blogImgWrap}>
              {/* <img src="../../images/img-1.jpg" alt="the future of food" /> */}
            </div>
            <div className={styles.blogTextWrap}>
              <div className={styles.blogTextHeader}>
                <h3 className="h3">
                  <span>The Future of Food</span>
                </h3>
                <div className={styles.blogTextComments}>
                  {Icons.comments}
                  <span className={styles.numberOfComments}>15</span>
                </div>
              </div>
              <p>
                Regendos maiestatis no ius, in velidusae arie tibique percipit,
                saperet labores si fotalo see Cu facete causae eleifend eam, ni
                percipit in graeci noster. Id pro insolens aliqu qui dolor qui
                dolor diceret ex, id sed suas in eleifend intellegat. No vix
                suas soluta.
              </p>
              <p>
                Regendos maiestatis no ius, in velidusae arie tibique percipit,
                saperet labores si fotalo see Cu facete causae eleifend eam, ni
                percipit in graeci noster. Id pro insolens aliqu qui dolor qui
                dolor diceret ex, id sed suas in eleifend intellegat. No vix
                suas soluta.
              </p>
              <div className={styles.blogTextFooter}>
                <div className={styles.blogAuthorWrap}>
                  {Icons.penToSquare}
                  <span className={styles.authorName}>by Admin</span>
                </div>
                <div className={styles.blogDateWrap}>
                  {Icons.clock}
                  <span className={styles.blogDate}>Aug 28|2023</span>
                </div>
              </div>
            </div>
          </Link>
        </li>
        <li className={styles.blogItem}>
          <Link className={styles.blogLink} href="#">
            <div className={styles.blogImgWrap}>
              {/* <img src="../../images/img-1.jpg" alt="the future of food" /> */}
            </div>
            <div className={styles.blogTextWrap}>
              <div className={styles.blogTextHeader}>
                <h3 className="h3">
                  <span>The Future of Food</span>
                </h3>
                <div className={styles.blogTextComments}>
                  {Icons.comments}
                  <span className={styles.numberOfComments}>15</span>
                </div>
              </div>
              <p>
                Regendos maiestatis no ius, in velidusae arie tibique percipit,
                saperet labores si fotalo see Cu facete causae eleifend eam, ni
                percipit in graeci noster. Id pro insolens aliqu qui dolor qui
                dolor diceret ex, id sed suas in eleifend intellegat. No vix
                suas soluta.
              </p>
              <p>
                Regendos maiestatis no ius, in velidusae arie tibique percipit,
                saperet labores si fotalo see Cu facete causae eleifend eam, ni
                percipit in graeci noster. Id pro insolens aliqu qui dolor qui
                dolor diceret ex, id sed suas in eleifend intellegat. No vix
                suas soluta.
              </p>
              <div className={styles.blogTextFooter}>
                <div className={styles.blogAuthorWrap}>
                  {Icons.penToSquare}
                  <span className={styles.authorName}>by Admin</span>
                </div>
                <div className={styles.blogDateWrap}>
                  {Icons.clock}
                  <span className={styles.blogDate}>Aug 28|2023</span>
                </div>
              </div>
            </div>
          </Link>
        </li>
        <li className={styles.blogItem}>
          <Link className={styles.blogLink} href="#">
            <div className={styles.blogImgWrap}>
              {/* <img src="../../images/img-1.jpg" alt="the future of food" /> */}
            </div>
            <div className={styles.blogTextWrap}>
              <div className={styles.blogTextHeader}>
                <h3 className="h3">
                  <span>The Future of Food</span>
                </h3>
                <div className={styles.blogTextComments}>
                  {Icons.comments}
                  <span className={styles.numberOfComments}>15</span>
                </div>
              </div>
              <p>
                Regendos maiestatis no ius, in velidusae arie tibique percipit,
                saperet labores si fotalo see Cu facete causae eleifend eam, ni
                percipit in graeci noster. Id pro insolens aliqu qui dolor qui
                dolor diceret ex, id sed suas in eleifend intellegat. No vix
                suas soluta.
              </p>
              <p>
                Regendos maiestatis no ius, in velidusae arie tibique percipit,
                saperet labores si fotalo see Cu facete causae eleifend eam, ni
                percipit in graeci noster. Id pro insolens aliqu qui dolor qui
                dolor diceret ex, id sed suas in eleifend intellegat. No vix
                suas soluta.
              </p>
              <div className={styles.blogTextFooter}>
                <div className={styles.blogAuthorWrap}>
                  {Icons.penToSquare}
                  <span className={styles.authorName}>by Admin</span>
                </div>
                <div className={styles.blogDateWrap}>
                  {Icons.clock}
                  <span className={styles.blogDate}>Aug 28|2023</span>
                </div>
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export { BlogList };
