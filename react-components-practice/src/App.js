import React from "react";
import ContactCard from "./components/ContactCard"
import contacts from "./contacts";
console.log(contacts)

function createCard(contact){
  return <ContactCard
    id = {contact.id}
    key = {contact.id}
    name = {contact.name}
    imgURL = {contact.imgURL}
    phone = {contact.phone}
    email = {contact.email}    
  />
}

function App() {
  return (
    <div>
      <h1 className="heading"> My Contacts</h1>
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
