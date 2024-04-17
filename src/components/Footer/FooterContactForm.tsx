import React from "react";
import styles from "./Footer.module.scss";

const FooterContactForm = () => {
  return (
    <div className={styles.contactFormWrap}>
      <div className="container">
        <form action="" className={styles.contactForm}>
          <div className={styles.inputWrap}>
            <input className={styles.input} type="text" placeholder="Name" />
            <input className={styles.input} type="email" placeholder="Email" />
          </div>
          <div className={styles.textareaWrap}>
            <textarea
              className={styles.textarea}
              placeholder="Your message"
            ></textarea>
          </div>
          <div className={styles.submitWrap}>
            <input
              className={styles.submitInput}
              type="submit"
              value="Send Message"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export { FooterContactForm };
