import { Link, Route, Routes } from "react-router-dom";
import AdminSidebar from "../../adminSidebar";
import Details from "../details/details";

const AccountSidebar = () => {
  return (
    <div className="account-side_bar_container">
      <div>
        <h1>Account</h1>
      </div>
      <div>
        <Link to="/admin/details">
          <p>Details</p>
        </Link>

        <p>Payments</p>
        <p>Regions</p>
        <p>Taxes</p>
        <p>Settings</p>
        <p>Preferences</p>
      </div>
      <div>
        <Routes>
          <Route path="/admin/details" element={Details} />
        </Routes>
      </div>
    </div>
  );
};

export default AccountSidebar;
