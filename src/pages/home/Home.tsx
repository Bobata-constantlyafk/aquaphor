import React, { FC } from "react";
import styles from "./Home.module.scss";
import { Header } from "@/components/header";
import Link from "next/link";

const HomeComponent: FC = () => {
  return (
    <div className={styles.homeMain}>
      <Header />

      <video
        className={styles.video}
        src="aqua-vid.mp4"
        autoPlay
        loop
        muted></video>

      <div className={styles.bottom}>
        <Link className={styles.button} href="/shop">
          ПРОДУКТИ
        </Link>
      </div>
    </div>
  );
};

export default HomeComponent;
