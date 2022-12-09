import React from 'react'
import "./Button.css"

const PrimaryButton = (props) => {
  return (
        <button className= "primary-btn" onClick={props.function}>{props.btnText}</button>
  )
}

export default PrimaryButton