import { FiDownload } from "react-icons/fi";
import "./leftCard.css";
const LeftCard = () => {
  return (
    <>
      <div className="left_card">
        <div>
          <div className="left_card_direction">
            <p>Showing orders in all locations</p>
            <FiDownload className="left_card_icon" />
          </div>
          <hr />
          <div>
            <button className="active_button">Active</button>
            <button className="complete_button">Complete</button>
          </div>
          <hr />
        </div>
        <div className="left_card_scroll_bar">
          <div className="left_card_direction">
            <h5>WF-1854 1111</h5>

            <p>Apoorva Marathe</p>

            <h5>EST Test 2241 southern</h5>
          </div>
          <hr />
          <div className="left_card_direction">
            <h5>WF-1854 1111</h5>

            <p>Apoorva Marathe</p>

            <h5>EST Test 2241 southern</h5>
          </div>
          <hr />
          <div className="left_card_direction">
            <h5>WF-1854 1111</h5>

            <p>Apoorva Marathe</p>

            <h5>EST Test 2241 southern</h5>
          </div>
          <hr />
          <div className="left_card_direction">
            <h5>WF-1854 1111</h5>

            <p>Apoorva Marathe</p>

            <h5>EST Test 2241 southern</h5>
          </div>
          <hr />
          <div className="left_card_direction">
            <h5>WF-1854 1111</h5>

            <p>Apoorva Marathe</p>

            <h5>EST Test 2241 southern</h5>
          </div>
          <hr />
          <div className="left_card_direction">
            <h5>WF-1854 1111</h5>

            <p>Apoorva Marathe</p>

            <h5>EST Test 2241 southern</h5>
          </div>

          <hr />
        </div>
      </div>
    </>
  );
};

export default LeftCard;
