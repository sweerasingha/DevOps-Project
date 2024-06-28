import React,{ useState }  from 'react'
import './CreateAcc1.css'
import doc from '../images/doctorimage.png'
import { AiFillApple } from 'react-icons/ai';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF} from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa";
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

function CreateAcc() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    telephone: '',
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/', formData);
      navigate('/');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };
  return (
    <div className='create'>
        <div className='image'>
            <p className='topic'>Heling with Heart and Hands, Guiding Light through the Shadows.</p>
            <img className='doctor1' src={doc}></img>
        </div>
        <div className='content'>
            <h2 className='title'>Create Account</h2>
            <input className='inputs' type="text" placeholder="Username*" name="username" required
            value={formData.username}
            onChange={handleChange} />
            <input className='inputs' type="text" placeholder="Email*" name="email" required
            value={formData.email}
            onChange={handleChange}/>
            <input className='inputs' type="password" placeholder="Password*" name="password" required
            value={formData.password}
            onChange={handleChange}/>
            <button className='btn' onClick={handleSubmit}>Create Account</button>
            <a className = 'link' href=''>Already have an Account? Log in</a>
            <div className='media'>
                <FcGoogle className='icon'/>
                <AiFillApple className='icon'/>
                <FaFacebookF className='icon'/>
                <FaLinkedin className='icon'/>

            </div>
            <p className='ref'>-or Create Account Via Email-</p>
        </div>
    </div>
  )
}

export default CreateAcc 