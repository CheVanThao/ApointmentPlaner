import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./TileList.module.scss"

export const TileList = ({firstName, lastName, phone, email}) => {
  return (
    <div>
      <div className={styles.contact}>
        <div><img src="https://nationaltoday.com/wp-content/uploads/2020/08/international-cat-day.jpg" className={styles.img} alt="..." /></div>
        <div className={styles.name}>{`${firstName} ${lastName}`}</div>
        <div className={styles.info}>
          <div className={styles.email}>{`Email : ${email}`}</div>
          <div className={styles.phone}>{`Phone : ${phone}`}</div>
        </div>
      </div>
    </div>
  );
};
