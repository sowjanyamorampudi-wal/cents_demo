import { Link } from "react-router-dom";
import "./navbar.css";
const NavbarTop = () => {
  return (
    <div className="card">
      <nav>
        <div className="Nav_container">
          <div className="admin_container">
            <div className="admin_container">
              <img
                src="https://cdn-icons.flaticon.com/png/512/2811/premium/2811790.png?token=exp=1641802245~hmac=a0e96a0f2b89162be2844eb814cc98b7"
                alt="icon"
                className="icon"
              />
              <Link to="/admin">
                <p>Admin</p>
              </Link>
            </div>
            <div className="admin_container">
              <img
                src="https://cdn-icons.flaticon.com/png/512/2811/premium/2811790.png?token=exp=1641802245~hmac=a0e96a0f2b89162be2844eb814cc98b7"
                alt="icon"
                className="icon"
              />
              <Link to="/laundromats">
                <p>Laundromats</p>
              </Link>
            </div>
          </div>

          <div className="admin_container">
            <img
              src="https://cdn-icons.flaticon.com/png/512/2811/premium/2811790.png?token=exp=1641802245~hmac=a0e96a0f2b89162be2844eb814cc98b7"
              alt="icon"
              className="icon"
            />
            <Link to="/alllocations">
              <p>All locations</p>
            </Link>
          </div>
          <div className="right_container">
            <img
              src="https://cdn-icons.flaticon.com/png/512/2811/premium/2811790.png?token=exp=1641802245~hmac=a0e96a0f2b89162be2844eb814cc98b7"
              alt="icon"
              className="icon"
            />
            <a href="">Give your two cents</a>
            <img
              src="https://cdn-icons.flaticon.com/png/512/2811/premium/2811790.png?token=exp=1641802245~hmac=a0e96a0f2b89162be2844eb814cc98b7"
              alt="icon"
              className="icon"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarTop;
