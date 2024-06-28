import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import MainHeading from "../components/MainHeading";
import Featuring from "../components/Featuring";
import FormLoginNormal from "../components/FormLoginNormal";
import SperenzaFooter from "../components/SperenzaFooter";
import "./Home.css";
import Navbar from "../components/Navbar";

const Home = () => {
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

  const onFrameContainer7Click = useCallback(() => {
    navigate("/doctor-dashboard");
  }, [navigate]);

  const onLogInButtonClick = useCallback(() => {
    navigate("/doctor-dashboard");
  }, [navigate]);

  return (
    <div className="home">
      
      <header className="header">
        <Navbar/>
      </header>
      <MainHeading />
      <Featuring />
      <FormLoginNormal />
      <SperenzaFooter />
    </div>
  );
};

export default Home;
