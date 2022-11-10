import React from "react";
import { ContactForm } from "../../components/contactForm/ContactForm"
import { TileList } from "../../components/tileList/TileList"

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const handleSubmit = (e) => {
    e.preventDefault();
    // addContact(e.target.value)
    // alert("clicked")
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2 onClick={handleSubmit}>Add Contact</h2> 
        <ContactForm 
        addContact={props.addContact}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <div style={{display: "flex", flexWrap: "wrap"}}>
          {props.contacts.map((contact,index) => {
            return(<TileList 
              contact={contact}
              key={index}
            />)
          })}
        </div>
      </section>
    </div>
  );
};
