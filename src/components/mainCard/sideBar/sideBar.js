import "./sideBar.css";
import { BsCart2 } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div className="side_bar_container">
        <div>
          <Link to="/">
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
              <BsPeople className="icon" /> Machine
            </p>
          </Link>
        </div>
        <div>
          <Link to="/dashboard/reports">
            <p className="icon_container">
              <BsPeople className="icon" /> Reports
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
