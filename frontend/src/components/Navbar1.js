import React, { useState } from 'react'
import './Navbar1.css'
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./UserSlice";
export default function Navbar1() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const navigateToEditAccount = () => {
    navigate('/doctor-edit-details');
  };
  const Logout = (e) => {
    console.log("Logout button clicked");
    dispatch(logout());
    window.location.href = '/';
  };
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
  }
}
  return (
    <div className='navbars'>
     <a className='active'>Dashboard</a>
     <a >Patient List</a>
     <a >Message</a>
     <a >Apointment</a>
     <a >Transactions</a>
     <div class="buttonns">
            <button onClick={navigateToEditAccount}>Edit Account</button>
            <button onClick={(e) => Logout(e)}>Logout</button>
      </div>
     
    </div>
  )
}
