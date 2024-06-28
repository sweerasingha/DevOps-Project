import "./Header.css";

const Header = ({
  imageDimensions,
  onDoctorTextClick,
  onPatientTextClick,
  onAboutTextClick,
  onContactUsTextClick,
}) => {
  return (
    <div className="frame31">
      <img className="sperenzalogo-icon" alt="" src={imageDimensions} />
      <nav className="navigationbar">
        <div className="navigationbar-child" />
        <nav className="menu4" id="navigationBar">
          <div className="home5">Home</div>
          <div className="doctor4" onClick={onDoctorTextClick}>
            Doctor
          </div>
          <div className="patient4" onClick={onPatientTextClick}>
            Patient
          </div>
          <div className="patient4" onClick={onAboutTextClick}>
            About
          </div>
          <div className="contact-us3" onClick={onContactUsTextClick}>
            Contact Us
          </div>
        </nav>
      </nav>
    </div>
  );
};

export default Header;
