import React, { useState } from 'react'

const ControlledFormInputs = ({name, placeholder, onChange }) => {
  const [text, setText] = useState("")

  const handleUpdate = (event) => {
    setText(event.target.value)
    
    onChange(name, text)
  }

  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder={placeholder}
        onChange={handleUpdate}
      />
    </div>
  )
}

export default ControlledFormInputs