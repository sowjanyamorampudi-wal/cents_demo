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

function App() {
  // con
  return (
    <div>
      <BrowserRouter>
        <NavbarTop />

        <Routes>
          <Route exact path="/admin" element={<AdminSidebar />}>
            <Route path="account" element={<AccountSidebar />}>
              <Route path="details" element={<Details />} />
              <Route path="payments" element={<Payment />} />
              <Route path="preferences" element={<Preferences />} />
              <Route path="regions" element={<Regions />} />
              <Route path="taxes" element={<Taxes />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Route>
          <Route path="/main" element={<MainComponentTwo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
