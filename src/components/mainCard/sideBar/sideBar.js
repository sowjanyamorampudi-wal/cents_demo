// import "./sideBar.css";
import { BsCart2 } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { GiWashingMachine } from "react-icons/gi";
import { VscReport } from "react-icons/vsc";
import { Link } from "react-router-dom";
import "./sideBar.scss";
const Sidebar = () => {
  return (
    <>
      <div className="side_bar_container">
        <Link to="/dashboard/orders">
          <p>
            <BsCart2 /> Orders
          </p>
        </Link>

        <Link to="/dashboard/customers">
          <p>
            <BsPeople /> Customers
          </p>
        </Link>

        <Link to="/dashboard/machine">
          <p>
            <GiWashingMachine /> Machine
          </p>
        </Link>

        <Link to="/dashboard/reports">
          <p>
            <VscReport /> Reports
          </p>
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
