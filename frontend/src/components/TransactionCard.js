import ContainerCardForm from "./ContainerCardForm";
import PrescriptionForm from "./PrescriptionForm";
import "./TransactionCard.css";

const TransactionCard = () => {
  return (
    <div className="vector-parent1">
      <img className="frame-child37" alt="" src="/vector-4.svg" />
      <ContainerCardForm dimensionText="/group-1000000893.svg" />
      <div className="frame-parent14">
        <div className="vector-parent2">
          <img className="vector-icon127" alt="" src="/vector124.svg" />
          <div className="fever1">Fever</div>
        </div>
        <div className="frame-parent15">
          <img className="frame-icon8" alt="" src="/frame3.svg" />
          <div className="frame59">
            <div className="heart-burn1">Heart Burn</div>
          </div>
        </div>
        <div className="group-container">
          <img className="group-icon2" alt="" src="/group.svg" />
          <div className="cough1">Cough</div>
        </div>
      </div>
      <PrescriptionForm />
    </div>
  );
};

export default TransactionCard;
