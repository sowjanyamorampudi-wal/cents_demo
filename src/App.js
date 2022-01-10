import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavbarTop from "./components/navbar/navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarTop />
      </BrowserRouter>
    </>
  );
}

export default App;
