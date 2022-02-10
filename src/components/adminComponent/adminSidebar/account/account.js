import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./details/details";

const Account = () => {
  return (
    <div>
      <h1>Account</h1>
      <hr />
      <BrowserRouter>
        <Routes>
          <Route path="/account/details/" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Account;
