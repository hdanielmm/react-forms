import React from 'react'

const Emoji = ({label, symbol}) => {
  return (
    <div>
      <span 
        role="img" 
        aria-label={label ? label : ""}
        aria-hidden={label ? "false" : "true"}
      >
        {symbol}
      </span>
    </div>
  )
}

export default Emoji