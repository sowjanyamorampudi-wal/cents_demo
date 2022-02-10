import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./global.scss";
import MainComponent from "./components/mainCard/mainComponent";
import NavbarTop from "./components/navbar/navbar";
import AdminSidebar from "./components/adminComponent/adminSidebar/adminSidebar";
import AccountSidebar from "./components/adminComponent/adminSidebar/account/accountSidebar/accountSidebar";
import MainComponentTwo from "./components/mainCard/mainComponentTwo";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavbarTop />

        <Routes>
          <Route exact path="/admin" element={<AdminSidebar />} />
          <Route path="/main" element={<MainComponentTwo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
