import VisionForm from "./VisionForm";
import "./SperenzaFooter.css";

const SperenzaFooter = () => {
  return (
    <footer className="footer2">
      <VisionForm dimensionCode="/sperenza-logo1.svg" />
      <div className="frame45">
        <div className="contact2">
          <img className="frame-icon5" alt="" src="/frame.svg" />
          <div className="col4">
            <b className="contact3">Contact</b>
            <div className="sachiprojectsgmailcom-monday2">
              <p className="monday-to-friday">+94 77 41 22656</p>
              <p className="monday-to-friday">+94 77 41 22656</p>
              <p className="monday-to-friday">sachiprojects@gmail.com</p>
              <p className="monday-to-friday">Monday to Friday</p>
              <p className="monday-to-friday">09:00 a.m. to 8:00 p.m.</p>
            </div>
          </div>
        </div>
        <div className="quicklinks">
          <div className="col5">
            <div className="frame46">
              <b className="contact3">Quick Links</b>
            </div>
            <div className="home-doctor-patient-container2">
              <ul className="home-doctor-patient-about-cont2">
                <li className="home6">Home</li>
                <li className="home6">Doctor</li>
                <li className="home6">Patient</li>
                <li className="home6">About</li>
                <li>Contact US</li>
              </ul>
            </div>
          </div>
        </div>
        <img className="social-icon2" alt="" src="/frame1.svg" />
      </div>
    </footer>
  );
};

export default SperenzaFooter;
