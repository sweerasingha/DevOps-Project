import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import LoginCardForm from "../components/LoginCardForm";
import Google from "../components/Google";
import SperenzaFooter from "../components/SperenzaFooter";
import "./DoctorLogIn.css";
import Navbar from "../components/Navbar";
import FormLoginNormal from "../components/FormLoginNormal";
import DoctorLoginNormal from "../components/DoctorLoginNormal";

const DoctorLogIn = () => {
  const navigate = useNavigate();

  const onDoctorTextClick = useCallback(() => {
    navigate("/doctor-log-in");
  }, [navigate]);

  const onPatientTextClick = useCallback(() => {
    navigate("/patient-log-in");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/doctor-dashboard");
  }, [navigate]);

  const onLogInButtonClick = useCallback(() => {
    navigate("/doctor-dashboard");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/doctor-sign-up-create-account");
  }, [navigate]);

  const onDontHaveAnClick = useCallback(() => {
    navigate("/doctor-sign-up-create-account");
  }, [navigate]);

  return (
    <div>
      <Navbar/>
      <DoctorLoginNormal/>   
      <SperenzaFooter />   
    </div>
  );
};

export default DoctorLogIn;
