import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainComponent from "./components/mainCard/mainComponent";
import NavbarTop from "./components/navbar/navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavbarTop />
      </BrowserRouter>
      <MainComponent />
    </>
  );
}

export default App;
