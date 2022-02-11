import { VscReport } from "react-icons/vsc";
import { useSelector } from "react-redux";

const Payment = () => {
  const payments = useSelector((state) => state.payments);
  return (
    <div>
      <div className="connected-account-title">
        <VscReport />
        <h2>{payments.title}</h2>
      </div>
      <div className="connected-account-title connected-account-details">
        <VscReport />
        <p>{payments.details}</p>
      </div>
    </div>
  );
};

export default Payment;
