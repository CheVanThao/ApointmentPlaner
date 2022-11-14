import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { ContactPicker } from "../../components/contactPicker/ContactPicker";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */
 const [title, setTitle] = useState("")
 const [date, setDate] = useState("")
 const [time, setTime] = useState(null)

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  let appointment = {
    title: title,
    date: date,
    bookedDate: getTodayString()
  }
  const handleSubmit = (e) => {
    console.log(appointment)
    e.preventDefault();
    props.addAppointment(appointment)
    setTitle("")
    setDate("")

    /*
    Add contact info and clear data  
    */
   
  };

  return (
    <div style={{width: "50%"}}>
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
        {props.appointments.map((appointment, index) => {
          return (
            <ContactPicker key={index} appointment={appointment} />
          )
        })}
      </section>
    </div>
  );
};
