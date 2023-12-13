import React, { FC } from "react";
import styles from "./Item.module.scss";
import { Header } from "@/components/header";

const Item: FC = () => {
  return (
    <div className={styles.itemMain}>
      <Header />
      <div className={styles.itemColumns}>
        <div className={styles.itemImages}>
          <img
            className={styles.itemImage}
            src="/kana-blue-2.png"
            alt="aquaphor logo img"
          />
        </div>
        <div className={styles.itemDescription}>
          <h1>Aquaeffect кана (синя)</h1>
          <h2>Филтрираща кана</h2>
          <p>
            Аквафор Орлеан A5 Mg+ е кана за филтриране на вода от ново поколение
            с класическа форма, вдъхновена от природата. С Орлеан A5 Mg+, Вие и
            семейството Ви ще знаете, че ще разполагате с чиста и прясна питейна
            вода във всеки един момент.
          </p>
          <div className={styles.itemButtons}>
            <button className={styles.addtocart}>
              Добави
              <img src="/cart.png" alt="cart" />
            </button>

            <div className={styles.quantity}>
              <img src="/plus.png" alt="cart" />
              <input type="text" value="1" />
              <img src="/minus.png" alt="cart" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
