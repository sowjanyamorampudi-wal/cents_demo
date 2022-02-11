import { Link, Outlet, Route, Routes } from "react-router-dom";
import AdminSidebar from "../../adminSidebar";
import Account from "../account";
import Details from "../details/details";

const AccountSidebar = () => {
  return (
    <div className="admincheck">
      <div className="account-side_bar_container">
        <div>
          <h1>Account</h1>
        </div>
        <div>
          <Link to="details">
            <p>Details</p>
          </Link>
          <Link to="payments">
            <p>Payments</p>
          </Link>
          <Link to="regions">
            <p>Regions</p>
          </Link>
          <Link to="taxes">
            <p>Taxes</p>
          </Link>
          <Link to="settings">
            <p>Settings</p>
          </Link>
          <Link to="preferences">
            <p>Preferences</p>
          </Link>
        </div>
      </div>
      <div>
        <Account />
      </div>
    </div>
  );
};

export default AccountSidebar;
