import { useMemo } from "react";
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from './UserSlice';
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import "./LoginCardForm.css";

const LoginCardForm = ({
  imageTextId,
  imageTextId1,
  propPosition,
  propPosition1,
  onFrameContainer7Click,
  onLogInButtonClick,
}) => {
  const usernawmStyle = useMemo(() => {
    return {
      position: propPosition,
    };
  }, [propPosition]);

  const pwStyle = useMemo(() => {
    return {
      position: propPosition1,
    };
  }, [propPosition1]);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/login', formData);
      dispatch(login(response.data));
      console.log('Login successful:', response.data);
      handleSaved();

      window.location.href = '/doctor-db';
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  const handleSaved= () => {
    Swal.fire({
      title: 'Login Successful!',
      text: 'You clicked the button!',
      icon: 'success',
      confirmButtonText: 'OK',
    });
  };

  const log = () => {
    handleSaved();
    handleLogin();
  }


  return (
    <div className="form">
      <div className="frame38">
        <div className="usernamepassword1">
        {/* <TextField
  className="usernawm"
  color="success"
  id="username"
  label="Username"
  size="medium"
  placeholder="Username"
  fullWidth={true}
  variant="standard" 
  value={formData.username}
  onChange={handleInputChange}
/> */}
<input className='usernawm' type="text" placeholder="Username*" 
value={formData.username}
onChange={handleInputChange}
name="username" 
required/>


{/* <TextField
  className="usernawm"
  color="success"
  id="pw"
  label="Password"
  size="medium"
  placeholder="Password"
  fullWidth={true}
  variant="standard"
  type="password"
  value={formData.password}
  onChange={handleInputChange}
/> */}
<input className='usernawm' type="password" placeholder="Password*" 
value={formData.password}
onChange={handleInputChange}
name="password" required/>


          <i className="forgot-your-password1">Forgot your password?</i>
        </div>
        <div className="frame39" >
          <Button
            className="log-in-button1"
            sx={{ width: 197 }}
            color="success"
            variant="contained"
            onClick={handleLogin}
          >
            Log In
          </Button>
        </div>
        <div className="frame40">
        <div className="or2">
          <img className="or-inner" alt="" src={imageTextId} />
          <div className="or3">Or</div>
          <img className="or-inner" alt="" src={imageTextId1} />
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default LoginCardForm;
