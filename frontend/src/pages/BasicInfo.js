import React from 'react'
import './BasicInfo.css'
import './CreateAcc.css'
import doc from '../assets/doctorimage.png'

export default function BasicInfo() {

  return (
    <div className='create'>
      <div className='image'>
            <p className='topic'>Heling with Heart and Hands, Guiding Light through the Shadows.</p>
            <img className='doctor' src={doc}></img>
      </div>
      <div className='content'>
            <h2 className='title'>Basic Information</h2>
            <input className='inputs' type="text" placeholder="Username*" name="username" required/>
            <input className='inputs' type="text" placeholder="Email*" name="email" required/>
            <input className='inputs' type="password" placeholder="Password*" name="password" required/>
            <button classname='btn'>Next Step</button>
            
            
        </div>
    </div>
  )
}
