import React from "react";
import styles from "./ContactPicker.module.scss"

export const ContactPicker = (props) => {
  return (
    <div className={styles.ContactPicker}>
      <h2 className={styles.ContactPickerHeader}>{props.appointment.title || "Example"}</h2>
      <div className={styles.ContactPickerDiv}>Appointment {props.appointment.date || "0000-00-00"}</div>
      <div className={styles.ContactPickerDiv}>Booked Date {props.appointment.bookedDate}</div>
    </div>
  );
};
