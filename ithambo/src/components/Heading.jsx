import React from 'react'
import "./Heading.css"

const Heading = (props) => {
  return (
    <div className='heading'>
        <h1>{props.text}</h1>
    </div>
  )
}

export default Heading