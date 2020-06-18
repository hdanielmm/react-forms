import React, { useState } from 'react'

const ControlledFormInputs = () => {
  const [name2, setName] = useState("")
  const [email2, setEmail] = useState("")
  const [color2, setColor] = useState("#e8e8e8")

  const handleChange = (event) => {
    const {name, value} = event.target
    let color = "green"

    name === "name" ? setName(value) : setEmail(value)
    
    if (name2.trim() === "") color = " #e8e8e8"
    if (name2.trim() !== "" && name2.trim().length < 5) color = "red"

    setColor(color)
  }

  const handleClick = () => {
    console.log("Name:", name2)
    console.log('Email:', email2)
  }

  const styles = {
    border: `1px solid ${color2}`
  }

  return (
    <div>
      <h3>Controlled form inputs</h3>
      <input
        type="text"
        name="name"
        value={name2}
        placeholder="Name"
        onChange={handleChange}
        style={styles}
      />
      <input
        type="text"
        name="email"
        value={email2}
        placeholder="Email"
        onChange={handleChange}
      />
      <button
        onClick={handleClick}
      >
        Send
      </button>
    </div>
  )
}

export default ControlledFormInputs