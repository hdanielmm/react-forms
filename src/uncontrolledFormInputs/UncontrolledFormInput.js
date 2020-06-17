import React from 'react'

const UncontrolledFormInput = ({ onSend }) => {
  const refName = React.createRef()
  const refEmail = React.createRef()

  const handleClick = () => {
    const name = refName.current.value
    const email = refEmail.current.value

    onSend({name, email})
  }

  return (
    <div>
      <h3>Uncontrolled form inputs</h3>
      <div>
        <input
          type="text"
          ref={refName}
          placeholder="Name"
        />
        <input
          type="text"
          ref={refEmail}
          placeholder="Email"
        />
        <button onClick={handleClick}>
          Send
        </button>
      </div>
    </div>
  )
}

export default UncontrolledFormInput