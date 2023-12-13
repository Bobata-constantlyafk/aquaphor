import React, { FC } from "react";
import styles from "./Shop.module.scss";
import { Header } from "@/components/header";
import Link from "next/link";

const Shop: FC = () => {
  return (
    <div className={styles.shopMain}>
      <Header />
      <div className={styles.shopThreeColumns}>
        <Link href="/item" passHref>
          <div className={styles.shopColumn}>
            <img className={styles.itemImage} src="/kana-blue.png" />
            <h1>Aquaeffect кана</h1>
            <p>Филтрираща кана за вода от ново поколение. Небесно син цвят.</p>
            <h2>15,00 лв.</h2>
          </div>
        </Link>

        <Link href="/item" passHref>
          <div className={styles.shopColumn}>
            <img className={styles.itemImage} src="/kana-white.png" />
            <h1>Aquaeffect Кана</h1>
            <p>Филтрираща кана за вода от ново поколение. Снежно бял цвят.</p>
            <h2>15,00 лв.</h2>
          </div>
        </Link>

        <Link href="/item" passHref>
          <div className={styles.shopColumn}>
            <img className={styles.itemImage} src="/kana-blue.png" />
            <h1>Aquaeffect Кана</h1>
            <p>Филтрираща кана за вода от ново поколение. Небесно син цвят.</p>
            <h2>15,00 лв.</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Shop;
