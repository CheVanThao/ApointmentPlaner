import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contacts, setContacts] = useState([{
    firstName: "Che",
    lastName: "Van Thao",
    email: "chevanthao96@gmail.com",
    phone: "090-2533-9116"
  }])
  const [appointments, setAppointments] = useState([])
  /*
  Define state variables for 
  contacts and appointments 
  */

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContact = (contact) => {
    setContacts((preState) => [...preState, contact])
  }

  const addAppointment = (appointment) => {
    setAppointments((preState) => [...preState, appointment])
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage
              addContact={addContact}
              contacts={contacts}
             />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage 
              appointments={appointments}
              addAppointment={addAppointment}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
