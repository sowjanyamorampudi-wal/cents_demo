import { BsCart2 } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { GiWashingMachine } from "react-icons/gi";
import { VscReport } from "react-icons/vsc";
import { Link, Outlet } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="laundromats_side_bar_container">
        <Link to="orders">
          <p>
            <BsCart2 /> Orders
          </p>
        </Link>

        <Link to="customers">
          <p>
            <BsPeople /> Customers
          </p>
        </Link>

        <Link to="machine">
          <p>
            <GiWashingMachine /> Machine
          </p>
        </Link>

        <Link to="reports">
          <p>
            <VscReport /> Reports
          </p>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Sidebar;
