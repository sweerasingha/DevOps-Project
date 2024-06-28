import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import "./About.css";
import Navbar from "../components/Navbar";
import SperenzaFooter from "../components/SperenzaFooter";

const About = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onDoctorTextClick = useCallback(() => {
    navigate("/doctor-log-in");
  }, [navigate]);

  const onPatientTextClick = useCallback(() => {
    navigate("/patient-log-in");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  return (
    <div className="about2">
        <Navbar/>
        <div className="a">
          <h1>
            This is about
          </h1>
        </div>
        <SperenzaFooter/>
    </div>
  );
};

export default About;
