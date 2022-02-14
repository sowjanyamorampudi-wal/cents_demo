import { BsPeople, BsToggle2Off } from "react-icons/bs";
import { useSelector } from "react-redux";
const Preferences = () => {
  const preferences = useSelector((state) => state.preferences);
  return (
    <div>
      <div className="preferences-container-row">
        <BsPeople className="preferences-image" />

        <div className="preferences-container-col">
          <big>{preferences.title}</big>
          <small>{preferences.details}</small>
        </div>
        <BsToggle2Off className="preferences-image" />
      </div>
    </div>
  );
};

export default Preferences;
