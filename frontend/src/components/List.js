import React from 'react'
import img1 from '../images/img1.jpg'
import './List.css'
import Calendar from 'react-calendar'
import axios from 'axios';
import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./UserSlice";
export default function List() {
    const user = useSelector(selectUser);
    const [userData, setUserData] = useState({ username: 'Loading...' }); // Initial state

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axios.get('http://localhost:3001/api/v1/user', {
          headers: {
            'x-access-token': user.token,
          },
        });

        setUserData({
          username: response.data.username,
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
        setUserData({ username: 'Error' }); // Handle the error state
      }
    }
    // Hello, {userData.username}

    fetchUserData();
  }, []); 
    
  return (
    <div className='aa'>
        <div className='ll'>
            <div className='ll1'>
            
                <p className='hi'>Hello, {userData.username}</p>
                <p className='hi2'>Visist for Today</p>
                <p className='hi2'>104</p>
                <div className='cc'>
                    <div className='mm'>
                        <p className='mm2'>New Patients</p>
                        <p className='mm2'>60</p>
                    </div>
                    <div className='mm'>
                        <p className='mm2'>Old Patients</p>
                        <p className='mm2'>45</p>
                    </div>
                </div>
                
            </div>
            <Calendar/>
        </div>
      
        <div className="dropdown"> 
            <button className="dropbtn"> 
                Patient List
            </button> 
              
            <div className="dropdown-content"> 
                <a className='pn' href="#"> 
                    <img className='patientlist' src= {img1}
                    width="40" height="35"/> Patient 1</a>  
            
                <a href="#" className='pn'> 
                    <img className='patientlist' src= {img1}
                    width="40" height="35"/> Patient 2</a> 
  
                <a className='pn' href="#"> 
                    <img className='patientlist' src= {img1}/> Patient 3</a> 
                <a className='pn' href="#"> 
                    <img className='patientlist' src= {img1} width="40" height="35"/> Patient 4</a> 
                <a className='pn' href="#"> 
                    <img className='patientlist' src= {img1} width="40" height="35"/> Patient 5</a> 
            </div> 
        </div> 
    </div>
  )
}
