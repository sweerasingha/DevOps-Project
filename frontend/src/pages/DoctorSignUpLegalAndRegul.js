import { useCallback } from "react";
import { Button, Checkbox, FormControlLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import SideContainer from "../components/SideContainer";
import "./DoctorSignUpLegalAndRegul.css";

const DoctorSignUpLegalAndRegul = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/doctor-log-in");
  }, [navigate]);

  const onTermsAndConditionsClick = useCallback(() => {
    navigate("/doctor-sign-up-terms-and-conditions");
  }, [navigate]);

  return (
    <div className="doctor-sign-up-legal-and-regul">
      <div className="polygon-parent">
        <img className="polygon-icon" alt="" src="/polygon-1.svg" />
        <div className="legal-and-regulatory2">
          Legal and Regulatory Compliance
        </div>
        <Button
          className="group-button"
          sx={{ width: 405 }}
          color="success"
          id="submitbuttn"
          variant="contained"
          onClick={onGroupButtonClick}
        >
          Submit
        </Button>
        <FrameComponent
          showJanet={false}
          frameDivWidth="39.31rem"
          frameDivAlignItems="flex-end"
          frameDivPosition="absolute"
          frameDivTop="15.31rem"
          frameDivLeft="11.56rem"
          frameDivHeight="12.31rem"
          janetFontSize="24px"
          janetFontFamily="Jost"
          janetTextAlign="left"
          janetLineHeight="120%"
          janetLetterSpacing="unset"
          frameDivMargin="0"
          frameDivPosition1="unset"
          frameDivTop1="unset"
          frameDivLeft1="unset"
          frameDivBackgroundColor="unset"
          frameDivDisplay="unset"
          frameDivFlexDirection="unset"
          frameDivAlignItems1="unset"
          frameDivJustifyContent="unset"
          frameDivPadding="unset"
          frameDivBoxSizing="unset"
          frameDivZIndex="unset"
        />
        <Button
          className="frame-child16"
          sx={{ width: 156 }}
          color="success"
          id="uploadbutton"
          variant="contained"
        >
          Upload
        </Button>
        <div className="frame-child17" />
        <div className="frame-child18" />
        <FormControlLabel
          className="typcntick"
          label=""
          control={<Checkbox id="checkbox" color="success" required />}
        />
        <i
          className="terms-and-conditions1"
          onClick={onTermsAndConditionsClick}
        >
          *Terms and Conditions
        </i>
      </div>
      <div className="doctor-sign-up-legal-and-regul-child" />
      <div className="deskripsi-protime">
        Healing with Heart and Hands, Guiding Light through the Shadows.
      </div>
      <div className="pict-web1">
        <img className="abstraction-icon1" alt="" src="/abstraction@2x.png" />
        <img
          className="hourglass-with-glasmorphism-ef1"
          alt=""
          src="/hourglass-with-glasmorphism-effect@2x.png"
        />
      </div>
      <img className="icon" alt="" src="/06-1.svg" />
      <b className="i-hereby-confirm">
        I hereby confirm that I am legally eligible to practice medicine in the
        chosen jurisdiction and that I possess the necessary medical licenses,
        certifications, and qualifications required by the regulatory
        authorities. I understand that providing false or misleading information
        may result in legal consequences
      </b>
      <SideContainer
        imageDimensions="/frame10.svg"
        rectangleDivPosition="absolute"
        rectangleDivFlexShrink="unset"
        rectangleDivTop="0rem"
        rectangleDivLeft="0rem"
      />
    </div>
  );
};

export default DoctorSignUpLegalAndRegul;
