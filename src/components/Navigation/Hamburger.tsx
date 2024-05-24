import styles from "./Navigation.module.scss";

type HamburgerProp = {
  onClick: () => void;
  isOpen: boolean;
};

const Hamburger = ({ onClick, isOpen }: HamburgerProp) => {
  return (
    <button className={styles.hamburger} onClick={onClick}>
      <span
        className={
          isOpen ? `${styles.burger} ${styles.burger1}` : styles.burger
        }
      />
      <span
        className={
          isOpen ? `${styles.burger} ${styles.burger2}` : styles.burger
        }
      />
      <span
        className={
          isOpen ? `${styles.burger} ${styles.burger3}` : styles.burger
        }
      />
    </button>
  );
};

export { Hamburger };
