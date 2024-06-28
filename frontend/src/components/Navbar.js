import React, { Component } from 'react';
import "./Navbar.css";
import Logo from "../images/logo.svg";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div>
        <nav>
          <a className='pqr' href="/"> 
            <img src={Logo} alt="" />
          </a>
          <div className='abc'>
            <ul id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar"}>
              <li><a className="active" href='/'>Home</a></li> 
              <li><a href='/doctor-log-in'>Doctor</a></li> 
              <li><a href='/patient-log-in'>Patient</a></li> 
              <li><a href='/about'>About</a></li> 
              <li><a href='/contact-us'>Contact Us</a></li> 
            </ul>
          </div>
          <div id='mobile' onClick={this.handleClick}>
            <i id='bar' className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
