import "./sideBar.css";
const Sidebar = () => {
  return (
    <>
      <div className="side_bar_container">
        <div>
          <img
            src="https://www.optimussearch.com/uploads/digital_icon_white.png"
            alt="orders"
            className="icon"
          />
          <p>Orders</p>
        </div>
        <div>
          <img
            src="https://www.optimussearch.com/uploads/digital_icon_white.png"
            alt="customers"
            className="icon"
          />
          <p>Customers</p>
        </div>
        <div>
          <img
            src="https://www.optimussearch.com/uploads/digital_icon_white.png"
            alt="machine"
            className="icon"
          />
          <p>Machine</p>
        </div>
        <div>
          <img
            src="https://www.optimussearch.com/uploads/digital_icon_white.png"
            alt="reports"
            className="icon"
          />
          <p>Reports</p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
