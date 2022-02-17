import { BsPeople } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { modifyUserDetails } from "../../../../../redux/details/detailsActions";
const Details = () => {
  const defaultDetails = useSelector((state) => state);
  const dispatch = useDispatch();
  // const modifyDetails = (e) => {
  //   dispatch(modifyUserDetails({ [e.target.name]: e.target.value }));
  // };
  return (
    <div>
      <div className="details_height">
        <div className="details_container">
          <BsPeople className="details_images" />
          <div>
            <label>Name</label>

            <br />
            <input
              type="text"
              name="name"
              defaultValue={defaultDetails.details.name}
              onChange={(e) =>
                dispatch(modifyUserDetails({ [e.target.name]: e.target.value }))
              }
            />
          </div>
        </div>
        <div className="details_align">
          <label>company name</label>
          <br />
          <input
            type="text"
            name="company"
            defaultValue={defaultDetails.details.company}
            onChange={(e) =>
              dispatch(modifyUserDetails({ [e.target.name]: e.target.value }))
            }
          />
        </div>
        <div className="details_container">
          <BsPeople className="details_images" />
          <div>
            <label>Address</label>
            <br />
            <input
              type="text"
              name="address"
              defaultValue={defaultDetails.details.address}
              onChange={(e) =>
                dispatch(modifyUserDetails({ [e.target.name]: e.target.value }))
              }
            />
          </div>
        </div>
        <div className="details_align">
          <label>city</label>
          <br />
          <input
            type="text"
            name="city"
            defaultValue={defaultDetails.details.city}
            onChange={(e) =>
              dispatch(modifyUserDetails({ [e.target.name]: e.target.value }))
            }
          />
        </div>
        <div className="details_align">
          <label>state</label>
          <br />
          <input
            type="text"
            name="state"
            defaultValue={defaultDetails.details.state}
            onChange={(e) =>
              dispatch(modifyUserDetails({ [e.target.name]: e.target.value }))
            }
          />
        </div>
        <div className="details_align">
          <label>zip</label>
          <br />
          <input
            type="text"
            name="zip"
            defaultValue={defaultDetails.details.zip}
            onChange={(e) =>
              dispatch(modifyUserDetails({ [e.target.name]: e.target.value }))
            }
          />
        </div>
        <div className="details_container">
          <BsPeople className="details_images" />
          <div>
            <label>phone num</label>
            <br />
            <input
              type="text"
              name="phone"
              defaultValue={defaultDetails.details.phone}
              onChange={(e) =>
                dispatch(modifyUserDetails({ [e.target.name]: e.target.value }))
              }
            />
          </div>
        </div>
        <div className="details_container">
          <BsPeople className="details_images" />
          <div>
            <label>email</label>
            <br />
            <input
              type="text"
              name="email"
              defaultValue={defaultDetails.details.email}
              onChange={(e) =>
                dispatch(modifyUserDetails({ [e.target.name]: e.target.value }))
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
