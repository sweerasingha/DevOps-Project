import React from 'react'
import './CreateAcc.css'
import './BasicInformation.css'
import SideContainer from '../components/SideContainer'


function BasicInformation() {
  return (
    <div className='create'>
      <SideContainer imageDimensions="/frame8.svg" />
      <div className='content'>
        <h2 className='title'>Basic Information</h2>
        
        <input className='input' type="text" placeholder="Fullname*" name="fullname" required/>
        <div className='info'>
            <select className='gender'>
                <option value="">Gender</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="non-binary">Other</option>
            </select>
            <input className='dates' type="text" placeholder="Date*" name="date" required/>

        </div>

        <input className='input' type="text" placeholder="Contact Number*" name="phone" required/>

        <input className='input' type="text" placeholder="Contact Email*" name="email" required/>
        <input className='input' type="text" placeholder="Address*" name="address" required/>
        <button classname='btn'>Next Step</button>
        
      </div>
    </div> 
  )
}

export default BasicInformation
 