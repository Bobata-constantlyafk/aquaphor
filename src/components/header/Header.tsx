import React, { FC } from "react";
import styles from "./Header.module.scss";

export const Header: FC = () => {
  return (
    <div className={styles.header}>
      <img
        className={styles.search}
        src="/search.png"
        alt="aquaphor logo img"
      />
      <img
        className={styles.logo}
        src="/aqua-logo.svg"
        alt="aquaphor logo img"
      />
      <img className={styles.menu} src="/menu.png" alt="aquaphor logo img" />
    </div>
  );
};
