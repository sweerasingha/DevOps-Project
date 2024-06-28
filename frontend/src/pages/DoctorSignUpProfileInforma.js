import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import SideContainer from "../components/SideContainer";
import "./DoctorSignUpProfileInforma.css";

const DoctorSignUpProfileInforma = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/doctor-sign-up-availability");
  }, [navigate]);

  return (
    <div className="doctor-sign-up-profile-informa">
      <div className="polygon-parent1">
        <img className="frame-child23" alt="" src="/polygon-1.svg" />
        <div className="profile-information2">Profile Information</div>
        <Button
          className="frame-child24"
          sx={{ width: 405 }}
          color="success"
          id="profilesignup"
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
          frameDivHeight="12.06rem"
          janetFontSize="24px"
          janetFontFamily="Jost"
          janetTextAlign="left"
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
        <Button
          className="frame-child25"
          sx={{ width: 156 }}
          color="success"
          id="imaeuploadbuttn"
          variant="contained"
        >
          Upload
        </Button>
        <FrameComponent
          showJanet
          frameDivWidth="39.31rem"
          frameDivAlignItems="flex-end"
          frameDivPosition="absolute"
          frameDivTop="30.06rem"
          frameDivLeft="11.56rem"
          frameDivHeight="10.5rem"
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
        <b className="introduce-yourself">Introduce YourSelf</b>
        <FrameComponent
          subject="CheckBox"
          showJanet
          frameDivWidth="39.31rem"
          frameDivAlignItems="flex-end"
          frameDivPosition="absolute"
          frameDivTop="43.25rem"
          frameDivLeft="11.56rem"
          frameDivHeight="5.63rem"
          janetFontSize="24px"
          janetFontFamily="Jost"
          janetTextAlign="left"
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
        <div className="frame-child26" />
      </div>
      <div className="doctor-sign-up-profile-informa-child" />
      <div className="deskripsi-protime3">
        Healing with Heart and Hands, Guiding Light through the Shadows.
      </div>
      <div className="pict-web4">
        <img className="abstraction-icon4" alt="" src="/abstraction1@2x.png" />
        <img
          className="hourglass-with-glasmorphism-ef4"
          alt=""
          src="/hourglass-with-glasmorphism-effect1@2x.png"
        />
      </div>
      <img className="icon3" alt="" src="/06-11.svg" />
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

export default DoctorSignUpProfileInforma;
