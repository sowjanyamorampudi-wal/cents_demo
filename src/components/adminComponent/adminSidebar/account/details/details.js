import { BsPeople } from "react-icons/bs";
import { useSelector } from "react-redux";
const Details = () => {
  const details = useSelector((state) => state.details);
  return (
    <div>
      <div className="details_height">
        <div className="details_container">
          <BsPeople className="details_images" />
          <div>
            <label>Name</label>
            <br />
            <input type="text" label="name" value={details.name} />
          </div>
        </div>
        <div className="details_align">
          <label>com name</label>
          <br />
          <input type="text" value={details.company} />
        </div>
        <div className="details_container">
          <BsPeople className="details_images" />
          <div>
            <label>Address</label>
            <br />
            <input type="text" label="name" value={details.address} />
          </div>
        </div>
        <div className="details_align">
          <label>city</label>
          <br />
          <input type="text" value="sathupally" />
        </div>
        <div className="details_align">
          <label>state</label>
          <br />
          <input type="text" value="telangana" />
        </div>
        <div className="details_align">
          <label>zip</label>
          <br />
          <input type="text" value="507164" />
        </div>
        <div className="details_container">
          <BsPeople className="details_images" />
          <div>
            <label>phone num</label>
            <br />
            <input type="text" label="name" value="8688257325" />
          </div>
        </div>
        <div className="details_container">
          <BsPeople className="details_images" />
          <div>
            <label>email</label>
            <br />
            <input type="text" label="name" value="sowji@gmail.com" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
