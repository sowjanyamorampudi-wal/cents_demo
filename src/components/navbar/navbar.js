import { Link } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { CgDisplayGrid } from "react-icons/cg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import "./navbar.css";
const NavbarTop = () => {
  return (
    <div className="card">
      <nav className="Nav_container">
        <div className="direction">
          <div>
            <Link to="/admin">
              <p style={{ marginRight: "10px" }} className="admin_container">
                <FiSettings className="nav_icon" />
                Admin
              </p>
            </Link>
          </div>

          <div className="direction">
            <Link to="/laundromats">
              <p className="laundromats_container">
                <CgDisplayGrid className="nav_icon" />
                Laundromats
              </p>
            </Link>
          </div>
        </div>

        <div>
          <Link to="/alllocations">
            <p className="location_container" style={{ color: "black" }}>
              <HiOutlineLocationMarker className="nav_icon" /> All locations
              <AiOutlineDoubleRight className="location_icon" />
            </p>
          </Link>
        </div>
        <div className="right_container">
          <h1>C</h1>

          <a style={{ color: "#3790f4", marginLeft: "0px" }} href="#">
            Give your two cents
          </a>

          <CgProfile
            style={{
              marginLeft: "20px",
              color: "#3790f4",
              width: "50px",
              height: "30px",
            }}
            // className="nav_icon"
          />
        </div>
      </nav>
    </div>
  );
};

export default NavbarTop;
