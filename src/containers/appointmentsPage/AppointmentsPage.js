import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
 const [title, setTitle] = useState([])
 const [date, setDate] = useState("")
 const [time, setTime] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
            handleSubmit={handleSubmit}
            title={title}
            setTitle={setTitle}
            date={date}
            setDate={setDate}
            time={time}
            setTime={setTime}
            contacts={props.contacts}
            contact={props.contact}
            setContact={props.setContact}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
      </section>
    </div>
  );
};
