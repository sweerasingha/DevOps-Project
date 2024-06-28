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

  const handleDelete = async () => {
    try {
      // Directly delete the user account.
      await axios.delete('http://localhost:3001/api/v1/user/delete', {
        headers: {
          'x-access-token': user.token,
        },
      });

      console.log('User account deleted successfully');
      window.location.href = '/';    } catch (error) {
      console.error('Error deleting user account:', error);
    }
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
        <Link to="/doctor-edit-details" >Edit Profile</Link> 
        <a href="#news">Basic Information</a>
        <a href="#contact">Credentials and Qualifications</a>
        <a href="#about">Work Experience</a>
        <a href="#about">Profile Information</a>
        <a href="#about">Availability</a>
        <a href="#about">Consultation Fees</a>
        <a href="#about">Legal and Regulatory Compliance</a>
        <a className="active" href="#about">Delete Account</a>
      </div>

      <div className='contentss'>
        <h2 className='Are You Sure to Delete Your Account? '>Create Account</h2>
        
        
        <div className='butt'>
        <button onClick={handleCancel} classname='btnn1'>Cancel</button>
        <button onClick={handleDelete} classname='btnn1'>Delete</button>
        </div>
      </div>
    </>
    </div>
  )
}

export default EditDetailsDoctorNormal
