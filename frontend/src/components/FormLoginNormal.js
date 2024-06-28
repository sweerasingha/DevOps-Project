import { useCallback } from "react";
import { Switch } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import LoginCardForm from "./LoginCardForm";
import Google from "./Google";
import "./FormLoginNormal.css";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { login } from './UserSlice';
const FormLoginNormal = () => {
  
  const navigate = useNavigate();
  



  const onFrameContainer11Click = useCallback(() => {
    navigate("/doctor-sign-up-create-account");
  }, [navigate]);

  const onDontHaveAnClick = useCallback(() => {
    navigate("/doctor-sign-up-create-account");
  }, [navigate]);

  return (
    <section className="log-in-normal2" data-scroll-to="logInNormal">
      <h1 className="here-we-go">Here we GO!</h1>
      <div className="switchbar">
        <div className="doctor5">Doctor</div>
        <Switch colorScheme="teal" />
        <div className="doctor5">Patient</div>
      </div>
      <div className="frame41">
        <img className="doctorimage-icon1" alt="" src="/doctorimage.svg" />
        <div className="logdetails1">
          <LoginCardForm
            imageTextId="/line-1.svg"
            imageTextId1="/line-1.svg"
            
          />
          <div className="signupmethods1">
            <div className="social-icons2">
              <Google
                iconText="/google1.svg"
                googlePosition="unset"
                googleTop="unset"
                googleLeft="unset"
                googleIconWidth="3rem"
                googleIconHeight="3rem"
              />
              <img className="facebook-icon3" alt="" src="/facebook1.svg" />
              <img className="facebook-icon3" alt="" src="/apple1.svg" />
            </div>
            <div className="frame42" onClick={onFrameContainer11Click}>
              <div
                className="dont-have-an-container2"
                onClick={onDontHaveAnClick}
              >
                <span>Don’t have an account?</span>
                <span className="span3">{` `}</span>
                <span className="sign-up2">SignUp</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormLoginNormal;
