import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import SideContainer from "../components/SideContainer";
import "./DoctorSignUpConsultationFe.css";

const DoctorSignUpConsultationFe = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/doctor-sign-up-legal-and-regulatory-compliance");
  }, [navigate]);

  return (
    <div className="doctor-sign-up-consultation-fe">
      <div className="polygon-group">
        <img className="frame-child19" alt="" src="/polygon-1.svg" />
        <div className="consultation-fees2">Consultation Fees</div>
        <Button
          className="frame-child20"
          sx={{ width: 405 }}
          color="success"
          id="consultaionfeesbutton"
          variant="contained"
          onClick={onGroupButtonClick}
        >
          Next Step
        </Button>
        <FrameComponent
          showJanet
          frameDivWidth="39.31rem"
          frameDivAlignItems="flex-end"
          frameDivPosition="absolute"
          frameDivTop="15.31rem"
          frameDivLeft="11.56rem"
          frameDivHeight="unset"
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
        <FrameComponent
          showJanet
          frameDivWidth="39.31rem"
          frameDivAlignItems="flex-end"
          frameDivPosition="absolute"
          frameDivTop="30.69rem"
          frameDivLeft="11.56rem"
          frameDivHeight="unset"
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
      </div>
      <div className="doctor-sign-up-consultation-fe-child" />
      <div className="deskripsi-protime1">
        Healing with Heart and Hands, Guiding Light through the Shadows.
      </div>
      <div className="pict-web2">
        <img className="abstraction-icon2" alt="" src="/abstraction@2x.png" />
        <img
          className="hourglass-with-glasmorphism-ef2"
          alt=""
          src="/hourglass-with-glasmorphism-effect1@2x.png"
        />
      </div>
      <img className="icon1" alt="" src="/06-1.svg" />
      <SideContainer
        imageDimensions="/frame11.svg"
        rectangleDivPosition="absolute"
        rectangleDivFlexShrink="unset"
        rectangleDivTop="0rem"
        rectangleDivLeft="0rem"
      />
    </div>
  );
};

export default DoctorSignUpConsultationFe;
