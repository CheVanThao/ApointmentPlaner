import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./TileList.module.scss"

export const TileList = (props) => {
  console.log(props.contact)
  return (
    <div>
      <div className={styles.contact}>
        <div><img src="https://nationaltoday.com/wp-content/uploads/2020/08/international-cat-day.jpg" className={styles.img} alt="..." /></div>
        <div className={styles.name}>{`${props.contact.firstName} ${props.contact.lastName}`}</div>
        <div className={styles.info}>
          <div className={styles.email}>{`Email : ${props.contact.email}`}</div>
          <div className={styles.phone}>{`Phone : ${props.contact.phone}`}</div>
        </div>
      </div>
    </div>
  );
};
