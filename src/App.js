import React, { useState } from 'react';
import { Charts } from './uncontrolledFormInputs/Charts';
import UncontrolledFormInput from './uncontrolledFormInputs/UncontrolledFormInput';
import Emoji from './Emoji';
import ControlledFormInputs from './controlledFormInputs/ControlledFormInputs';

function App() {
  const [nameText, setNameText] = useState("")
  const [emailText, setEmailText] = useState("")

  const send = (data) => {
    console.log(data)
  }

  const handleUpdate = (name, text) => {

    name === "name"
      ? setNameText(text)
      : setEmailText(text)
  }

  return (
    <div className="App">
      <Emoji label="Rhinoceros" symbol="🦏" />
      <h3>How to use refs</h3>
      <Charts />
      <UncontrolledFormInput 
        onSend={send}
      />
      <ControlledFormInputs 
        name="name"
        placeholder="Name"
        onChange={handleUpdate}
      />
      <ControlledFormInputs 
        name="email"
        placeholder="Email"
        onChange={handleUpdate}
      />
      <h4>Nombre: {nameText}</h4>
      <h4>Email: {emailText}</h4>
    </div>
  );
}

export default App;
