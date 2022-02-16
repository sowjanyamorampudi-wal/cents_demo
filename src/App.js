import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./global.scss";
import MainComponent from "./components/mainCard/mainComponent";
import NavbarTop from "./components/navbar/navbar";
import AdminSidebar from "./components/adminComponent/adminSidebar/adminSidebar";
import AccountSidebar from "./components/adminComponent/adminSidebar/account/accountSidebar/accountSidebar";
import MainComponentTwo from "./components/mainCard/mainComponentTwo";
import Details from "./components/adminComponent/adminSidebar/account/details/details";
import Payment from "./components/adminComponent/adminSidebar/account/payments/payment";
import Preferences from "./components/adminComponent/adminSidebar/account/preferences/preferences";
import Regions from "./components/adminComponent/adminSidebar/account/regions/regions";
import Taxes from "./components/adminComponent/adminSidebar/account/taxes/taxes";
import Settings from "./components/adminComponent/adminSidebar/account/settings/settings";
import { Provider } from "react-redux";
import Store from "./store";
import Customers from "./laundromatsComponents/customers";
import Machine from "./laundromatsComponents/machine";
import Reports from "./laundromatsComponents/reports";
import Sidebar from "./components/mainCard/sideBar/sideBar";

function App() {
  // con hiiiiii
  return (
    <div>
      <Provider store={Store}>
        <BrowserRouter>
          <NavbarTop />

          <Routes>
            <Route index element={<MainComponentTwo />} />
            <Route path="/laundromats" element={<Sidebar />}>
              <Route index element={<MainComponent />} />
              <Route path="orders" element={<MainComponent />} />
              <Route path="customers" element={<Customers />} />
              <Route path="machine" element={<Machine />} />
              <Route path="reports" element={<Reports />} />
            </Route>

            <Route exact path="/admin" element={<AdminSidebar />}>
              <Route path="account" element={<AccountSidebar />}>
                <Route path="details" element={<Details />} />

                <Route index element={<Details />} />
                <Route path="payments" element={<Payment />} />
                <Route path="preferences" element={<Preferences />} />
                <Route path="regions" element={<Regions />} />
                <Route path="taxes" element={<Taxes />} />
                <Route path="settings" element={<Settings />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
