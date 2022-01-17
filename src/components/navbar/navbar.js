import { Link } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { CgDisplayGrid } from "react-icons/cg";
import { HiOutlineLocationMarker } from "react-icons/hi";
const NavbarTop = () => {
  return (
    <nav className="Nav_container">
      <div className="direction">
        <Link to="/admin">
          <p style={{ marginRight: "10px" }} className="admin_container">
            <FiSettings className="nav_icon" />
            Admin
          </p>
        </Link>

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
          <p className="location_container">
            <HiOutlineLocationMarker className="nav_icon" /> All locations
            <AiOutlineDoubleRight className="location_icon" />
          </p>
        </Link>
      </div>
      <div className="right_container">
        <h1>C</h1>

        <a className="link" href="#a">
          Give your two cents
        </a>

        <CgProfile
          className="avthar"
          // className="nav_icon"
        />
      </div>
    </nav>
  );
};

export default NavbarTop;
