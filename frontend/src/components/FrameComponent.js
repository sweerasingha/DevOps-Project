import { useMemo } from "react";
import "./FrameComponent.css";

const FrameComponent = ({
  subject = "Janet",
  showJanet,
  frameDivWidth,
  frameDivAlignItems,
  frameDivPosition,
  frameDivTop,
  frameDivLeft,
  frameDivHeight,
  janetFontSize,
  janetFontFamily,
  janetTextAlign,
  janetLineHeight,
  janetLetterSpacing,
  frameDivMargin,
  frameDivPosition1,
  frameDivTop1,
  frameDivLeft1,
  frameDivBackgroundColor,
  frameDivDisplay,
  frameDivFlexDirection,
  frameDivAlignItems1,
  frameDivJustifyContent,
  frameDivPadding,
  frameDivBoxSizing,
  frameDivZIndex,
  firstNamePosition,
  firstNameFontSize,
  firstNameLineHeight,
  firstNameDisplay,
  firstNameFontFamily,
  firstNameColor,
  firstNameTextAlign,
  firstNameFontWeight,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: frameDivWidth,
      alignItems: frameDivAlignItems,
      position: frameDivPosition,
      top: frameDivTop,
      left: frameDivLeft,
      height: frameDivHeight,
    };
  }, [
    frameDivWidth,
    frameDivAlignItems,
    frameDivPosition,
    frameDivTop,
    frameDivLeft,
    frameDivHeight,
  ]);

  const janetStyle = useMemo(() => {
    return {
      fontSize: janetFontSize,
      fontFamily: janetFontFamily,
      textAlign: janetTextAlign,
      lineHeight: janetLineHeight,
      letterSpacing: janetLetterSpacing,
    };
  }, [
    janetFontSize,
    janetFontFamily,
    janetTextAlign,
    janetLineHeight,
    janetLetterSpacing,
  ]);

  const frameDiv1Style = useMemo(() => {
    return {
      margin: frameDivMargin,
      position: frameDivPosition1,
      top: frameDivTop1,
      left: frameDivLeft1,
      backgroundColor: frameDivBackgroundColor,
      display: frameDivDisplay,
      flexDirection: frameDivFlexDirection,
      alignItems: frameDivAlignItems1,
      justifyContent: frameDivJustifyContent,
      padding: frameDivPadding,
      boxSizing: frameDivBoxSizing,
      zIndex: frameDivZIndex,
    };
  }, [
    frameDivMargin,
    frameDivPosition1,
    frameDivTop1,
    frameDivLeft1,
    frameDivBackgroundColor,
    frameDivDisplay,
    frameDivFlexDirection,
    frameDivAlignItems1,
    frameDivJustifyContent,
    frameDivPadding,
    frameDivBoxSizing,
    frameDivZIndex,
  ]);

  const firstNameStyle = useMemo(() => {
    return {
      position: firstNamePosition,
      fontSize: firstNameFontSize,
      lineHeight: firstNameLineHeight,
      display: firstNameDisplay,
      fontFamily: firstNameFontFamily,
      color: firstNameColor,
      textAlign: firstNameTextAlign,
      fontWeight: firstNameFontWeight,
    };
  }, [
    firstNamePosition,
    firstNameFontSize,
    firstNameLineHeight,
    firstNameDisplay,
    firstNameFontFamily,
    firstNameColor,
    firstNameTextAlign,
    firstNameFontWeight,
  ]);

  return (
    <div className="janet-parent" style={frameDivStyle}>
      {showJanet && (
        <b className="janet" style={janetStyle}>
          {subject}
        </b>
      )}
      <div className="first-name-wrapper" style={frameDiv1Style}>
        <b className="first-name" style={firstNameStyle}>
          First Name
        </b>
      </div>
    </div>
  );
};

export default FrameComponent;
