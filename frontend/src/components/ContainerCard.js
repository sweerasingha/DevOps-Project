import { useMemo } from "react";
import "./ContainerCard.css";

const ContainerCard = ({
  group48095504,
  aM,
  propTop,
  propLeft,
  propWidth,
  propWidth1,
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const hiHiStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const aMStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className="group-parent1" style={frameDiv2Style}>
      <img className="frame-child38" alt="" src={group48095504} />
      <div className="hi-hi5" style={hiHiStyle}>
        Hi Hi
      </div>
      <div className="weekly-visit">Weekly Visit</div>
      <div className="am-wrapper4">
        <div className="am6" style={aMStyle}>
          {aM}
        </div>
      </div>
      <div className="sm">SM</div>
    </div>
  );
};

export default ContainerCard;
