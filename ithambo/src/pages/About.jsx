import React from 'react'
import { useNavigate } from 'react-router';
import "./About.css"

function About() {
    const navigate =useNavigate();

  return (
    <div>
        <div className='flex-container'>

        <div   className='about-container'>
          <h3>About Ithambo Store</h3>
        </div>
            {/* <h3>About Ithambo Store</h3> */}
        </div>
    </div>
  )
}

export default About