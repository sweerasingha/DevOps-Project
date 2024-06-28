import { useMemo } from "react";
import "./SideContainer.css";

const SideContainer = ({
  imageDimensions,
  rectangleDivPosition,
  rectangleDivFlexShrink,
  rectangleDivTop,
  rectangleDivLeft,
}) => {
  const frameStyle = useMemo(() => {
    return {
      position: rectangleDivPosition,
      flexShrink: rectangleDivFlexShrink,
      top: rectangleDivTop,
      left: rectangleDivLeft,
    };
  }, [
    rectangleDivPosition,
    rectangleDivFlexShrink,
    rectangleDivTop,
    rectangleDivLeft,
  ]);

  return (
    <div className="frame52" style={frameStyle}>
      <div className="frame-child39" />
      <div className="frame53">
        <div className="deskripsi-protime7">
          Healing with Heart and Hands, Guiding Light through the Shadows.
        </div>
      </div>
      <img className="frame-icon8" alt="" src={imageDimensions} />
    </div>
  );
};

export default SideContainer;
