import React from 'react'
import './EditDetailsDoctorNormal.css'
import { useSelector } from "react-redux";
import { selectUser } from './UserSlice';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 

function EditDetailsDoctorNormal() {
  const user = useSelector(selectUser);
  console.log('User:', user);
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '', // New password
    currentPassword: '', // Current password
  });
  
  useEffect(() => {
    async function fetchUserData() {
      try {
        if (user && user.token) {
          const response = await axios.get('http://localhost:3001/api/v1/user', {
            headers: {
              'x-access-token': user.token,
            },
          });
  
          setUserData({
            username: response.data.username,
            email: response.data.email,
            password: '', 
          });
        } else {
          console.error('User object or token is null or undefined.');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
  
    fetchUserData();
  }, [user]); // Include 'user' as a dependency to react to changes in 'user'.
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  const handleCancel = (e) => {
    window.location.href = '/doctor-db';
  };
  const handleUpdateInfo = async () => {
    try {
      // Check if the current password matches the password in your database.
      const response = await axios.post(
        'http://localhost:3001/api/v1/user/checkpassword',
        {
          currentPassword: userData.currentPassword,
        },
        {
          headers: {
            'x-access-token': user.token,
          },
        }
      );
  
      if (response.data && response.data.isValidPassword) {
        // Password is valid, proceed to update.
        const updateResponse = await axios.put(
          'http://localhost:3001/api/v1/user/update',
          userData, // This includes the new password
          {
            headers: {
              'x-access-token': user.token,
            },
          }
        );
  
        console.log('User information updated successfully');
        window.location.href = '/doctor-db';
      } else {
        console.error('Current password is incorrect.');
      }
    } catch (error) {
      console.error('Error updating user information:', error);
    }
  };
  
  

  return (
    <div>
      <>
      <div className="sidebar">
        <a className="active" href="#home">Edit Profile</a>
        <a href="#news">Basic Information</a>
        <a href="#contact">Credentials and Qualifications</a>
        <a href="#about">Work Experience</a>
        <a href="#about">Profile Information</a>
        <a href="#about">Availability</a>
        <a href="#about">Consultation Fees</a>
        <a href="#about">Legal and Regulatory Compliance</a>
        <Link to="/doctor-edit-delete" >Delete Account</Link>       </div>

      <div className='contentss'>
        <h2 className='title1'>Create Account</h2>
        
        <input className='input1' type="text" placeholder="Username*" 
        value={userData.username}
        onChange={handleInputChange}
        name="username" required/>
        <input className='input1' type="text" placeholder="Email*" 
        value={userData.email}
        onChange={handleInputChange}
        name="email" required/>
        <input
          className='input1'
          type="password"
          placeholder="Current Password*"
          value={userData.currentPassword}
          onChange={handleInputChange}
          name="currentPassword"
          required
        />

        <input className='input1' type="password" placeholder="New Password*" 
        value={userData.password}
        onChange={handleInputChange}
        name="password" required/>
        <div className='butt'>
        <button onClick={handleCancel} classname='btnn1'>Cancel</button>
        <button onClick={handleUpdateInfo} classname='btnn1'>Save</button>
        </div>
      </div>
    </>
    </div>
  )
}

export default EditDetailsDoctorNormal
