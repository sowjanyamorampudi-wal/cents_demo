import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customers from "../../laundromatsComponents/customers";
import Machine from "../../laundromatsComponents/machine";
import Reports from "../../laundromatsComponents/reports";
import MainComponentTwo from "./mainComponentTwo";
import Sidebar from "./sideBar/sideBar";

const MainComponent = () => {
  return (
    <>
      <div className="main_container">
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route
              exact
              path="/dashboard/orders"
              element={<MainComponentTwo />}
            />
            <Route path="/dashboard/customers" element={<Customers />} />
            <Route path="/dashboard/machine" element={<Machine />} />
            <Route path="/dashboard/reports" element={<Reports />} />
            <Route path="*" element={<MainComponentTwo />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default MainComponent;
