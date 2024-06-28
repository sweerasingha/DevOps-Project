import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import "./ContactUs.css";
import Navbar from "../components/Navbar";
import SperenzaFooter from "../components/SperenzaFooter";
const ContactUs = () => {
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

  const onPatientTextClick = useCallback(() => {
    navigate("/patient-log-in");
  }, [navigate]);

  return (
    <div className="contact-us1">
      <Navbar/>
        <div className="a">
          <h1>
            This is Contact Us
          </h1>
        </div>
        <SperenzaFooter/>
    </div>
  );
};

export default ContactUs;
