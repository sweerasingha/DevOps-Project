import { useMemo } from "react";
import "./VariantOn.css";

const VariantOn = ({
  carNumber,
  variantOnWidth,
  variantOnHeight,
  variantOnPosition,
  variantOnTop,
  variantOnLeft,
  variantOnBorderRadius,
  variantOnOpacity,
  divHeight,
  divWidth,
  divFontSize,
  divColor,
}) => {
  const variantOnStyle = useMemo(() => {
    return {
      width: variantOnWidth,
      height: variantOnHeight,
      position: variantOnPosition,
      top: variantOnTop,
      left: variantOnLeft,
      borderRadius: variantOnBorderRadius,
      opacity: variantOnOpacity,
    };
  }, [
    variantOnWidth,
    variantOnHeight,
    variantOnPosition,
    variantOnTop,
    variantOnLeft,
    variantOnBorderRadius,
    variantOnOpacity,
  ]);

  const divStyle = useMemo(() => {
    return {
      height: divHeight,
      width: divWidth,
      fontSize: divFontSize,
      color: divColor,
    };
  }, [divHeight, divWidth, divFontSize, divColor]);

  return (
    <div className="varianton" style={variantOnStyle}>
      <div className="div" style={divStyle}>
        {carNumber}
      </div>
    </div>
  );
};

export default VariantOn;
