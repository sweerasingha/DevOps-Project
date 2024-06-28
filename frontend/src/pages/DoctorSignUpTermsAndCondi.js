import { Button } from "@mui/material";
import "./DoctorSignUpTermsAndCondi.css";

const DoctorSignUpTermsAndCondi = () => {
  return (
    <div className="doctor-sign-up-terms-and-condi">
      <div className="pict-web">
        <img className="abstraction-icon" alt="" src="/abstraction@2x.png" />
        <img
          className="hourglass-with-glasmorphism-ef"
          alt=""
          src="/hourglass-with-glasmorphism-effect@2x.png"
        />
      </div>
      <div className="frame24">
        <div className="frame-parent10">
          <img className="frame-icon3" alt="" src="/frame7.svg" />
          <Button
            sx={{ width: 422 }}
            color="success"
            id="termsbutton"
            variant="contained"
          >
            Back
          </Button>
        </div>
      </div>
      <div className="frame25">
        <div className="terms-and-conditions">Terms and Conditions Note:</div>
      </div>
      <div className="by-proceeding-you">
        By proceeding, you acknowledge and agree to adhere to the terms and
        conditions of practicing medicine on our platform. These terms and
        conditions outline your legal responsibilities and liabilities as a
        medical professional providing online consultations through our service.
        It is your responsibility to ensure compliance with all relevant laws,
        regulations, and ethical guidelines pertaining to medical practice in
        your jurisdiction. Failure to comply with these terms may result in the
        suspension or termination of your account on our platform. We strongly
        recommend that you review the full terms and conditions document to
        fully understand your obligations.
      </div>
    </div>
  );
};

export default DoctorSignUpTermsAndCondi;
