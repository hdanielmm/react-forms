import React from 'react';
import { Charts } from './uncontrolledFormInputs/Charts';
import UncontrolledFormInput from './uncontrolledFormInputs/UncontrolledFormInput';
import Emoji from './Emoji';
import ControlledFormInputs from './controlledFormInputs/ControlledFormInputs';

function App() {

  const send = (data) => {
    console.log(data)
  }

  return (
    <div className="App">
      <Emoji label="Rhinoceros" symbol="🦏" />
      <h3>How to use refs</h3>
      <Charts />
      <UncontrolledFormInput 
        onSend={send}
      />
      <ControlledFormInputs />
    </div>
  );
}

export default App;
