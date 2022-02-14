import { VscReport } from "react-icons/vsc";
import { useSelector } from "react-redux";

const Taxes = () => {
  const taxes = useSelector((state) => state.taxes);
  return (
    <div className="taxes-align">
      <div className="tax-head-container">
        <VscReport />
        <h2>Tax Rates</h2>
      </div>
      {taxes.map((item) => (
        <div className="region-item">
          <p>{item.name}</p>
          <p>{item.rate}</p>
          <p>{item.agency}</p>
        </div>
      ))}
    </div>
  );
};

export default Taxes;
