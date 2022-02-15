import { VscReport } from "react-icons/vsc";

const Payment = () => {
  return (
    <div>
      <div className="connected-account-title">
        <VscReport />
        <h2>connected account</h2>
      </div>
      <div className="connected-account-title connected-account-details">
        <VscReport />
        <p>Stripe test bank ****11111</p>
      </div>
    </div>
  );
};

export default Payment;
