import React from "react";
import styles from "./ContactPicker.module.scss"

export const ContactPicker = (props) => {
  return (
    <div className={styles.ContactPicker}>
      <h2 className={styles.ContactPickerHeader}>{props.appointment.title}</h2>
      <div className={styles.ContactPickerDiv}>Appointment {props.appointment.date}</div>
      <div className={styles.ContactPickerDiv}>Booked Date {props.appointment.bookedDate}</div>
    </div>
  );
};
