import React from 'react';
import "./Sidebar.css";
import {SidebarData} from './SidebarData';

function Sidebar() {
  return (
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
        <a href="#about">Delete Account</a>
      </div>

      <div className="content">
        <form style={{ border: '1px solid #ccc' }}>
          <div className="container">
            <h1>Edit Profile</h1>
            {/* <p>Please fill in this form to create an account.</p> */}
            <hr />

            <label htmlFor="email"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="email" required />

            <label htmlFor="psw"><b>Email</b></label>
            <input type="password" placeholder="Enter Email" name="psw" required />
            <label htmlFor="psw"><b>Current Password</b></label>
            <input type="password" placeholder="Enter Current Password" name="psw" required />
            <label htmlFor="psw"><b>New Password</b></label>
            <input type="password" placeholder="Enter New Password" name="psw" required />

            <label htmlFor="psw-repeat"><b>Repeat New Password</b></label>
            <input type="password" placeholder="Repeat New Password" name="psw-repeat" required />

            {/* <label>
              <input type="checkbox" checked="checked" name="remember" style={{ marginBottom: '15px' }} /> Remember me
            </label>

            <p>By creating an account you agree to our <a href="#" style={{ color: 'dodgerblue' }}>Terms & Privacy</a>.</p> */}

            <div className="clearfix">
              <button type="button" className="cancelbtn">Cancel</button>
              <button type="submit" className="signupbtn">Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default Sidebar;
