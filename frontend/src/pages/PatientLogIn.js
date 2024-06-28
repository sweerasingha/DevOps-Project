import { useCallback } from "react";
import Google from "../components/Google";
import { useNavigate } from "react-router-dom";
import "./PatientLogIn.css";
import Navbar from "../components/Navbar";
import PatientLoginNormal from "../components/PatientLoginNormal";
import SperenzaFooter from "../components/SperenzaFooter";

const PatientLogIn = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onDoctorTextClick = useCallback(() => {
    navigate("/doctor-log-in");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  return (
    <div className="patient-log-in">
      <Navbar/>
      <PatientLoginNormal/>
      <SperenzaFooter/>
    </div>
  );
};

export default PatientLogIn;
