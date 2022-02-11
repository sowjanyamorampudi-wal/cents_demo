import { BsCart2 } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { GiWashingMachine } from "react-icons/gi";
import { VscReport } from "react-icons/vsc";
import { BrowserRouter, Link, Routes, Route, Outlet } from "react-router-dom";
import MainComponent from "../../mainCard/mainComponent";
import AccountSidebar from "./account/accountSidebar/accountSidebar";
const AdminSidebar = () => {
  return (
    <div className="admincheck">
      {/* <BrowserRouter> */}
      <div className="admin_side_bar_container">
        <Link to="/locations">
          <div>
            <p>
              <BsCart2 /> Locations
            </p>
          </div>
        </Link>

        <Link to="/team">
          <div>
            <p>
              <BsPeople /> Team
            </p>
          </div>
        </Link>

        <Link to="/product">
          <div>
            <p>
              <GiWashingMachine /> products services
            </p>
          </div>
        </Link>

        <Link to="/tasks">
          <div>
            <p>
              <VscReport /> Tasks
            </p>
          </div>
        </Link>
        <Link to="/devices">
          <div>
            <p>
              <VscReport /> Devices
            </p>
          </div>
        </Link>
        <Link to="/promotions">
          <div>
            <p>
              <VscReport /> promotions
            </p>
          </div>
        </Link>

        <div>
          <Link to="account">
            <div className="side-bar-items">
              <p>
                <VscReport /> account
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminSidebar;
