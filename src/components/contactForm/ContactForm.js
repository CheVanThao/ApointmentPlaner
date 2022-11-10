import React, { useState } from "react";
import { Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactForm.css"

export const ContactForm = (props) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("clicked")
    const contact = {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
    }
    if(contact !== null) {
      setFirstName("")
      setLastName("")
      setPhone("")
      setEmail("")
      console.log(contact)
    }
    props.addContact(contact)
  }

  const handleFirstName = (e) => {
    setFirstName(e.target.value)
  }
  const handleLastName = (e) => {
    setLastName(e.target.value)
  }
  const handlePhone = (e) => {
    setPhone(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  return (
    <form className="w-50">
      <div className="row">
        <div className="col-md-6 ">
          <label className="form-label" htmlFor="typePhone">First name</label>
          <input type="text" className="form-control" placeholder="First name" aria-label="First name" value={firstName} onChange={handleFirstName}/>
        </div>
        <div className="col-md-6">
          <label className="form-label" htmlFor="typePhone">Last name</label>
          <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" value={lastName} onChange={handleLastName}/>
        </div>
      </div>
      <div className="form-outline">
        <label className="form-label" htmlFor="typePhone">Phone number input</label>
        <input type="tel" id="typePhone" className="form-control" value={phone} onChange={handlePhone}/>
      </div>
      <div className="form-outline">
        <label className="form-label" htmlFor="typePhone">Email input</label>
        <input type="tel" id="typePhone" className="form-control" value={email} onChange={handleEmail}/>
      </div>
      <div className="col-auto">
        <Button type="submit" className="custom-btn" onClick={handleSubmit}>Submit</Button>
      </div>
    </form>
  );
};
