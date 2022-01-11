import "./sideBar.css";
import { BsCart2 } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { GiWashingMachine } from "react-icons/gi";
import { VscReport } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="side_bar_container">
        <div>
          <Link to="/dashboard/orders">
            <p className="icon_container">
              <BsCart2 className="icon" /> Orders
            </p>
          </Link>
        </div>

        <div>
          <Link to="/dashboard/customers">
            <p className="icon_container">
              <BsPeople className="icon" /> Customers
            </p>
          </Link>
        </div>
        <div>
          <Link to="/dashboard/machine">
            <p className="icon_container">
              <GiWashingMachine className="icon" /> Machine
            </p>
          </Link>
        </div>
        <div>
          <Link to="/dashboard/reports">
            <p className="icon_container">
              <VscReport className="icon" /> Reports
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
