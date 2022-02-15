import { BsToggle2Off } from "react-icons/bs";
import { VscReport } from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux";
import { showTaxes } from "../../../../../redux/taxes/taxesActions";

const Taxes = () => {
  const taxes = useSelector((state) => state.taxes);
  const dispatch = useDispatch();
  return (
    <div className="taxes-align">
      <div className="tax-head-container">
        <VscReport />
        <h2>Tax Rates</h2>
        <BsToggle2Off onClick={(e) => dispatch(showTaxes(!taxes.isShown))} />
      </div>
      {taxes.isShown &&
        taxes.taxes.map((item) => (
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
