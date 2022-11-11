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
    return `${year}/${month.padStart(2, "0")}/${day.padStart(2, "0")}`;
  };

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleDate = (e) => {
    setDate(e.target.value)
  }

  return (
    <div>
      <form className={styles.appointmentForm}>
        <div>
          <label>Title</label>
          <input type="text" placeholder="Title" value={title} onChange={handleTitle}/>
        </div>
        <div>
          <label>Booked Date</label>
          <input type="text" placeholder={getTodayString} value={getTodayString()} disabled/>
        </div>
        <div>
          <label>Date Appointment</label>
          <input type="date" value={date} onChange={handleDate}/>
        </div>
        <div>
          <button
            onClick={handleSubmit}
            className={styles.btn}
            >
              Submit
          </button>
        </div>
      </form>
    </div>
  );
};
