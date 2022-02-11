import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Details from "./details/details";

const Account = () => {
  return (
    <div className="middle_account_container">
      <h1>Account</h1>
      <hr />
      <Outlet />
    </div>
  );
};

export default Account;
