import { BsPeople, BsToggle2Off } from "react-icons/bs";
import { useSelector } from "react-redux";
const Preferences = () => {
  const preferences = useSelector((state) => state.preferences);
  const { section1, section2 } = preferences;
  return (
    <div>
      <div className="preference-container">
        <div className="preferences-container-row">
          <BsPeople className="preferences-image" />

          <div className="preferences-container-col">
            <big>customer preferences</big>
            <small>
              Enable customers to set custom care preferences based on options
              you provide
            </small>
          </div>
          <BsToggle2Off className="preferences-image" />
        </div>
        <big>
          Which options would you like to offer to your customers when setting
          their custom preferences?
        </big>
        {section1.map((item) => (
          <div className="preferences-container-row">
            <p>{item}</p>
            <p>x</p>
          </div>
        ))}
        {section2.map((item) => (
          <div className="preferences-container-row">
            <p>{item}</p>
            <p>x</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Preferences;
