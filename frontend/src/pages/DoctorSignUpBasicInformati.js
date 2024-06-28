import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import SideContainer from "../components/SideContainer";
import "./DoctorSignUpBasicInformati.css";

const DoctorSignUpBasicInformati = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/doctor-sign-up-credentials-and-qualifications");
  }, [navigate]);

  return (
    <div className="doctor-sign-up-basic-informati">
      <div className="polygon-parent4">
        <img className="frame-child31" alt="" src="/polygon-1.svg" />
        <div className="basic-information2">Basic Information</div>
        <Button
          className="frame-child32"
          sx={{ width: 405 }}
          color="success"
          id="basicinfobuton"
          variant="contained"
          onClick={onGroupButtonClick}
        >
          Next Step
        </Button>
        <FrameComponent
          subject="Janet"
          showJanet
          frameDivWidth="39.31rem"
          frameDivAlignItems="flex-end"
          frameDivPosition="absolute"
          frameDivTop="15.31rem"
          frameDivLeft="11.56rem"
          frameDivHeight="unset"
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
          subject="+"
          showJanet
          frameDivWidth="39.31rem"
          frameDivAlignItems="flex-end"
          frameDivPosition="absolute"
          frameDivTop="29.31rem"
          frameDivLeft="11.56rem"
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
          subject="+"
          showJanet
          frameDivWidth="39.31rem"
          frameDivAlignItems="flex-end"
          frameDivPosition="absolute"
          frameDivTop="36.31rem"
          frameDivLeft="11.56rem"
          frameDivHeight="unset"
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
          subject="+"
          showJanet
          frameDivWidth="39.31rem"
          frameDivAlignItems="flex-end"
          frameDivPosition="absolute"
          frameDivTop="43.31rem"
          frameDivLeft="11.56rem"
          frameDivHeight="unset"
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
          subject="/"
          showJanet
          frameDivWidth="12.94rem"
          frameDivAlignItems="flex-end"
          frameDivPosition="absolute"
          frameDivTop="22.31rem"
          frameDivLeft="11.56rem"
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
          subject="xx/xx/xxxx"
          showJanet
          frameDivWidth="12.94rem"
          frameDivAlignItems="flex-end"
          frameDivPosition="absolute"
          frameDivTop="22.31rem"
          frameDivLeft="28.19rem"
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
        <img className="arrow-icon" alt="" src="/arrow-1.svg" />
      </div>
      <div className="rectangle-group">
        <div className="group-child" />
        <div className="deskripsi-protime6">
          Healing with Heart and Hands, Guiding Light through the Shadows.
        </div>
        <img className="icon6" alt="" src="/06-14.svg" />
      </div>
      <SideContainer
        imageDimensions="/frame14.svg"
        rectangleDivPosition="absolute"
        rectangleDivFlexShrink="unset"
        rectangleDivTop="0rem"
        rectangleDivLeft="0rem"
      />
    </div>
  );
};

export default DoctorSignUpBasicInformati;
