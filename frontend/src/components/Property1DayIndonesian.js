import { useMemo } from "react";
import "./Property1DayIndonesian.css";

const Property1DayIndonesian = ({
  personName,
  property1DayIndonesianWidth,
  property1DayIndonesianPadding,
  property1DayIndonesianPosition,
  property1DayIndonesianTop,
  property1DayIndonesianLeft,
  property1DayIndonesianBorderRadius,
  property1DayIndonesianHeight,
  senFontSize,
  senFontWeight,
  senFontFamily,
  senColor,
}) => {
  const property1DayIndonesianStyle = useMemo(() => {
    return {
      width: property1DayIndonesianWidth,
      padding: property1DayIndonesianPadding,
      position: property1DayIndonesianPosition,
      top: property1DayIndonesianTop,
      left: property1DayIndonesianLeft,
      borderRadius: property1DayIndonesianBorderRadius,
      height: property1DayIndonesianHeight,
    };
  }, [
    property1DayIndonesianWidth,
    property1DayIndonesianPadding,
    property1DayIndonesianPosition,
    property1DayIndonesianTop,
    property1DayIndonesianLeft,
    property1DayIndonesianBorderRadius,
    property1DayIndonesianHeight,
  ]);

  const senStyle = useMemo(() => {
    return {
      fontSize: senFontSize,
      fontWeight: senFontWeight,
      fontFamily: senFontFamily,
      color: senColor,
    };
  }, [senFontSize, senFontWeight, senFontFamily, senColor]);

  return (
    <div
      className="property-1day-indonesian"
      style={property1DayIndonesianStyle}
    >
      <div className="sen" style={senStyle}>
        {personName}
      </div>
    </div>
  );
};

export default Property1DayIndonesian;
