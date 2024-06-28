import "./ContainerCardForm.css";

const ContainerCardForm = ({ dimensionText }) => {
  return (
    <div className="frame-parent12">
      <div className="ellipse-parent5">
        <div className="frame-child34" />
        <div className="frame-child35" />
        <div className="ss1">SS</div>
      </div>
      <div className="sachitha-sankha1">Sachitha Sankha</div>
      <div className="male-23">Male - 23 Years 10 Months</div>
      <img className="frame-child36" alt="" src={dimensionText} />
    </div>
  );
};

export default ContainerCardForm;
