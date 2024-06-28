import "./Footer.css";

const Footer = ({ dimensionText }) => {
  return (
    <div className="footer4">
      <div className="footer-inner" />
      <img className="sperenza-logo-icon5" alt="" src={dimensionText} />
      <div className="empowering-progress-through3">
        Empowering Progress Through Digital Craftsmanship and Electronic
        Wizardry.
      </div>
      <div className="col8">
        <b className="quick-links4">Quick Links</b>
        <div className="home-doctor-patient-container4">
          <ul className="home-doctor-patient-about-cont4">
            <li className="home8">Home</li>
            <li className="home8">Doctor</li>
            <li className="home8">Patient</li>
            <li className="home8">About</li>
            <li>Contact US</li>
          </ul>
        </div>
      </div>
      <div className="col9">
        <b className="contact6">Contact</b>
        <div className="sachiprojectsgmailcom-monday4">
          <p className="p8">+94 77 41 22656</p>
          <p className="p8">+94 77 41 22656</p>
          <p className="p8">sachiprojects@gmail.com</p>
          <p className="p8">Monday to Friday 09:00 a.m. to 8:00 p.m.</p>
        </div>
      </div>
      <div className="sperenza-all-rights3">
        © 2023 SPERENZA. All Rights Reserved.
      </div>
      <div className="sperenza3">SPERENZA</div>
      <img className="social-icon4" alt="" src="/social1.svg" />
      <img
        className="icbaseline-access-time-icon2"
        alt=""
        src="/icbaselineaccesstime1.svg"
      />
      <img
        className="icbaseline-email-icon2"
        alt=""
        src="/icbaselineemail1.svg"
      />
      <img
        className="icbaseline-whatsapp-icon2"
        alt=""
        src="/icbaselinewhatsapp1.svg"
      />
      <img
        className="icbaseline-call-icon2"
        alt=""
        src="/icbaselinecall1.svg"
      />
    </div>
  );
};

export default Footer;
