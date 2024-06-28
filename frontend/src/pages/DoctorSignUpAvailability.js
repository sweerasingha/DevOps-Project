import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import SideContainer from "../components/SideContainer";
import "./DoctorSignUpAvailability.css";

const DoctorSignUpAvailability = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/doctor-sign-up-consultation-fees");
  }, [navigate]);

  return (
    <div className="doctor-sign-up-availability">
      <div className="polygon-container">
        <img className="frame-child21" alt="" src="/polygon-1.svg" />
        <div className="availability2">Availability</div>
        <Button
          className="frame-child22"
          sx={{ width: 405 }}
          color="success"
          id="availabilitybuttn"
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
          frameDivHeight="31.56rem"
          janetFontSize="24px"
          janetFontFamily="Jost"
          janetTextAlign="left"
          janetLineHeight="257%"
          janetLetterSpacing="-0.04em"
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
      <div className="doctor-sign-up-availability-child" />
      <div className="deskripsi-protime2">
        Healing with Heart and Hands, Guiding Light through the Shadows.
      </div>
      <div className="pict-web3">
        <img className="abstraction-icon3" alt="" src="/abstraction1@2x.png" />
        <img
          className="hourglass-with-glasmorphism-ef3"
          alt=""
          src="/hourglass-with-glasmorphism-effect1@2x.png"
        />
      </div>
      <img className="icon2" alt="" src="/06-11.svg" />
      <SideContainer
        imageDimensions="/frame12.svg"
        rectangleDivPosition="absolute"
        rectangleDivFlexShrink="unset"
        rectangleDivTop="0rem"
        rectangleDivLeft="0rem"
      />
    </div>
  );
};

export default DoctorSignUpAvailability;
