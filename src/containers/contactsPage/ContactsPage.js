import React from "react";
import { ContactForm } from "../../components/contactForm/ContactForm"
import { TileList } from "../../components/tileList/TileList"

export const ContactsPage = (props) => {
  console.log(props.contacts)
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
        <ContactForm></ContactForm>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList
         contacts={props.contacts}
         />
      </section>
    </div>
  );
};
