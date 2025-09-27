import { useState } from "react";
import ContactList from "./components/ContactList/ContactList";
import Form from "./components/Form/Form";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="App-title">Phonebook</h1>
      <Form />
      <ContactList />
    </div>
  );
}

export default App;
