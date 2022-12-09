import React from 'react'
import "./Button.css"

const SecondaryBtn = (props) => {
  return (
        <button className= "secondary-btn" onClick={props.function}>{props.icon} {props.btnText}</button>
  )
}

export default SecondaryBtn