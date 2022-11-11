import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";
import styles from "../appointmentForm/AppointmentForm.module.scss"

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <div>
      <form className={styles.appointmentForm}>
        <div>
          <label>Title</label>
          <input type="text" placeholder="Title" value={title} onChange={()=>{}}/>
        </div>
        <div>
          <label>Booked Date</label>
          <input type="text" placeholder={getTodayString} value={date} disabled/>
        </div>
        <div>
          <label>time appointment data</label>
          <input type="date"/>
        </div>
      </form>
    </div>
  );
};
