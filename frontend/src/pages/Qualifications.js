import React from 'react'
import './CreateAcc.css'
import './Qualifications.css'
import SideContainer from '../components/SideContainer'

function Qualifications() {
  return (
    <div className='create'>
      <SideContainer imageDimensions="/frame8.svg" />
      <div className='content'>
        <h2 className='title'>Credentials and Qualifications</h2>
        <input className='input' type="text" placeholder="Medical Degree*" name="degree" required/> 
        <input className='input' type="text" placeholder="Specialty or Area of Expertise*" name="specialty" required/>
        <input className='input' type="password" placeholder="Medical License Number*" name="license" required/>
        <input className='inputCer' type="text" placeholder="Professional Certifications*" name="certifications" required/>

        <button classname='btn'>Next Step</button>
        
      </div>
    </div> 
  )
}

export default Qualifications
 