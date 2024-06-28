import "./Featuring.css";

const Featuring = () => {
  return (
    <section className="featuring">
      <div className="quote">
        <h1 className="why-we-are">Why we are better than others</h1>
        <div className="our-app-offers">
          Our app offers expert care, rapid responses, personalized guidance, AI
          assistance, data security, global access, continuous support,
          educational resources, seamless prescriptions, and user-friendly
          design.
        </div>
      </div>
      <div className="featuring01">
        <img className="img01-icon" alt="" src="/img01.svg" />
        <b className="expert-medical-team">Expert Medical Team</b>
      </div>
      <div className="featuring02">
        <img className="img02-icon" alt="" src="/img02.svg" />
        <b className="secure-data-handling">Secure Data Handling</b>
      </div>
      <div className="featuring03">
        <img className="img03-icon" alt="" src="/img03.svg" />
        <b className="expert-medical-team">Multilingual Support</b>
      </div>
    </section>
  );
};

export default Featuring;
