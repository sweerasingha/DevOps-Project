import React from 'react'
import './CreateAcc.css'
import SideContainer from '../components/SideContainer'
import google from '../images/google.png'
import apple from '../images/apple.png'
import fb from '../images/fb.png'

function CreateAcc() {
  return (
    <div className='create'>
      <SideContainer imageDimensions="/frame8.svg" />
      <div className='content'>
        <h2 className='title'>Create Account</h2>
        
        <input className='input2' type="text" placeholder="Username*" name="username" required/>
        <input className='input2' type="text" placeholder="Email*" name="email" required/>
        <input className='input2' type="password" placeholder="Password*" name="password" required/>
        <button classname='btn'>Create Account</button>
        <a className = 'link' href=''>Already have an Account? Log in</a>
        <div className='media'>
            <img className='mediaicon' src= {google}></img>
            <img className='mediaicon' src= {apple}></img>
            <img className='mediaicon fb' src= {fb}></img>
        </div>
        <p className='ref'>-or Create Account Via Email-</p>
      </div>
    </div> 
  )
}

export default CreateAcc
 