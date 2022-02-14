import { useState } from "react";
import { BsPeople, BsToggle2Off } from "react-icons/bs";

const Settings = () => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle(!toggle);
  };
  return (
    <div className="settings-over">
      <div className="settings-container-row">
        <BsPeople className="settings-image" />

        <div className="settings-container-col">
          <big>In-Store Team Management</big>
          <small>Require employee code on actions</small>
        </div>
        <BsToggle2Off className="toggle-image" />
      </div>
      <div className="settings-container-row">
        <BsPeople className="settings-image" />
        <big>Full service order settings</big>
      </div>
      <h2>Weight Tracking</h2>
      <p>When would you like the order to be weighted?</p>
      <p>Weigh 1: During intake (sales weight)</p>
      <p>Weigh 2: Before processing</p>
      <p>Weigh 3: After processing</p>
      <p>Weigh 3: After processing</p>
      <div className="settings-container-row">
        <div className="settings-container-col">
          <big>In-Store Team Management</big>
          <small>Require employee code on actions</small>
        </div>
        <BsToggle2Off
          className={toggle ? "color-image" : "toggle-image"}
          onClick={toggleHandler}
        />
      </div>
      <div className="settings-container-col">
        <big>Notes per Bag</big>
        <small>
          Save tags to use for quick notes per bag when you're intaking an order
          on the Tablet App
        </small>
        <div className="settings-container-row">
          <input type="text" placeholder="type a tag and enter +" />
          <button className="plus-icon">+</button>
        </div>
      </div>
      <p className="bag-note">tag</p>
      <p className="bag-note">new tag</p>
      <p className="bag-note">for check tag</p>
      <div className="settings-container-col">
        <big>Terms of Service</big>
        <small>
          Your customer receives a text message when their order has been
          created, we will include a link to view your terms of service. Please
          set which terms we should use.
        </small>
        <p>
          Use the
          <span>
            <a href="#">Cents Standard terms of service</a>
          </span>
        </p>
        <p>Link to my own terms of service</p>
        <big>Receipt Customization</big>
        <small>
          Customize the memo that appears in the footer of the receipt that
          prints out when an order has been paid for.
        </small>
        <h5>In Store Tipping</h5>
        <small>
          Give your customers the opportunity to add a tip to their full service
          laundry order
        </small>
        <h5>Service Fee</h5>
        <small>Charge customers a service fee on every POS sale</small>
        <h3>Hub Settings</h3>
        <small>Bag tracking</small>
      </div>
    </div>
  );
};

export default Settings;
