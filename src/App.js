import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainComponent from "./components/mainCard/mainComponent";
import NavbarTop from "./components/navbar/navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavbarTop />
      </BrowserRouter>

      <MainComponent />
    </div>
  );
}

export default App;
