import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import SideContainer from "../components/SideContainer";
import "./DoctorSignUpWorkExperience.css";

const DoctorSignUpWorkExperience = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/doctor-sign-up-profile-information");
  }, [navigate]);

  return (
    <div className="doctor-sign-up-work-experience">
      <div className="polygon-parent2">
        <img className="frame-child27" alt="" src="/polygon-1.svg" />
        <div className="work-experience2">Work Experience</div>
        <Button
          className="frame-child28"
          sx={{ width: 405 }}
          color="success"
          id="experiencebuton"
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
          subject="+"
          showJanet
          frameDivWidth="39.31rem"
          frameDivAlignItems="flex-end"
          frameDivPosition="absolute"
          frameDivTop="29.56rem"
          frameDivLeft="11.44rem"
          frameDivHeight="4.31rem"
          janetFontSize="24px"
          janetFontFamily="Jost"
          janetTextAlign="center"
          janetLineHeight="120%"
          janetLetterSpacing="unset"
          frameDivMargin="0 !important"
          frameDivPosition1="absolute"
          frameDivTop1="-0.69rem"
          frameDivLeft1="1.31rem"
          frameDivBackgroundColor="1px solid #fff"
          frameDivDisplay="flex"
          frameDivFlexDirection="row"
          frameDivAlignItems1="flex-start"
          frameDivJustifyContent="flex-start"
          frameDivPadding="2px"
          frameDivBoxSizing="border-box"
          frameDivZIndex="1"
          firstNamePosition="relative"
          firstNameFontSize="24px"
          firstNameLineHeight="120%"
          firstNameDisplay="inline-block"
          firstNameFontFamily="Jost"
          firstNameColor="#000"
          firstNameTextAlign="center"
          firstNameFontWeight="unset"
        />
        <FrameComponent
          showJanet
          frameDivWidth="39.31rem"
          frameDivAlignItems="flex-end"
          frameDivPosition="absolute"
          frameDivTop="36.56rem"
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
      <div className="doctor-sign-up-work-experience-child" />
      <div className="deskripsi-protime4">
        Healing with Heart and Hands, Guiding Light through the Shadows.
      </div>
      <div className="pict-web5">
        <img className="abstraction-icon5" alt="" src="/abstraction@2x.png" />
        <img
          className="hourglass-with-glasmorphism-ef5"
          alt=""
          src="/hourglass-with-glasmorphism-effect1@2x.png"
        />
      </div>
      <img className="icon4" alt="" src="/06-12.svg" />
      <SideContainer
        imageDimensions="/frame13.svg"
        rectangleDivPosition="absolute"
        rectangleDivFlexShrink="unset"
        rectangleDivTop="0rem"
        rectangleDivLeft="0rem"
      />
    </div>
  );
};

export default DoctorSignUpWorkExperience;
