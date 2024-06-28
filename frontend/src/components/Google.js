import { useMemo } from "react";
import "./Google.css";

const Google = ({
  iconText,
  googlePosition,
  googleTop,
  googleLeft,
  googleIconWidth,
  googleIconHeight,
}) => {
  const googleStyle = useMemo(() => {
    return {
      position: googlePosition,
      top: googleTop,
      left: googleLeft,
    };
  }, [googlePosition, googleTop, googleLeft]);

  const googleIconStyle = useMemo(() => {
    return {
      width: googleIconWidth,
      height: googleIconHeight,
    };
  }, [googleIconWidth, googleIconHeight]);

  return (
    <div className="google" style={googleStyle}>
      <img
        className="google-icon"
        alt=""
        src={iconText}
        style={googleIconStyle}
      />
    </div>
  );
};

export default Google;
