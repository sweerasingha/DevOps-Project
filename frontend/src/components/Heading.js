import { useMemo } from "react";
import "./Heading.css";

const Heading = ({
  imageDimensions,
  propCursor,
  propCursor1,
  propLeft,
  onHomeTextClick,
  onAboutTextClick,
  onDoctorTextClick,
  onPatientTextClick,
  onContactUsTextClick,
}) => {
  const aboutStyle = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  const contactUsStyle = useMemo(() => {
    return {
      cursor: propCursor1,
    };
  }, [propCursor1]);

  const lineDivStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className="nav2">
      <div className="menu5">
        <div className="home9" onClick={onHomeTextClick}>
          Home
        </div>
        <div className="about9" onClick={onAboutTextClick} style={aboutStyle}>
          About
        </div>
        <div className="doctor9" onClick={onDoctorTextClick}>
          Doctor
        </div>
        <div className="patient9" onClick={onPatientTextClick}>
          Patient
        </div>
        <div
          className="contact-us4"
          style={contactUsStyle}
          onClick={onContactUsTextClick}
        >
          Contact Us
        </div>
      </div>
      <div className="lang5">
        <div className="lang6">
          <img className="lang-item" alt="" src="/group-1.svg" />
          <div className="english4">English</div>
        </div>
      </div>
      <div className="nav-inner" style={lineDivStyle} />
      <img className="sperenza-logo-icon6" alt="" src={imageDimensions} />
    </div>
  );
};

export default Heading;
