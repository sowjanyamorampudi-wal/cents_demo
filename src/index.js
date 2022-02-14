import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import Store from "./store";

// const store = createStore(() => ({
//   details: {
//     name: "ishaan GUlati",
//     company: "westagile labs hyderabad",
//     address: "purva..",
//     city: "Hyderabad",
//     state: "Telangana",
//     zip: "9421",
//     phone: "9989786543",
//     email: "ishaan@westagilelabs.com",
//   },
//   payments: {
//     title: "connected account",
//     details: "Stripe test bank ****11111",
//   },
//   // regions: ["Berkeley", "New york", "Test region", "Virginia"],
//   // districts: ["Hearst avenue", "New york", "Test dist", "Washington"],
//   regions: [
//     { region: "Berkeley", district: "Hearst avenue" },
//     { region: "New york", district: "New york" },
//     { region: "Berkeley", district: "Hearst avenue......." },
//   ],
//   taxes: [
//     { name: "abb", rate: "2", agency: "abb" },
//     { name: "abbb", rate: "12.7", agency: "abbb" },
//     { name: "Arizona", rate: "2.45", agency: "Arizona Tax Agency" },
//     { name: "berkeley", rate: "0", agency: "agens" },
//   ],
//   preferences: {
//     title: "customer preferences",
//     details:
//       "Enable customers to set custom care preferences based on options you provide",
//   },
// }));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
