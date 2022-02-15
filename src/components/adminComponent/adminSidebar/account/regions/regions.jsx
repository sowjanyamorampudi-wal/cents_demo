import { BsToggle2Off } from "react-icons/bs";
import { VscReport } from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux";
import { showRegions } from "../../../../../redux/regions/regionsActions";

const Regions = () => {
  const regions = useSelector((state) => state.regions);
  const isShown = useSelector((state) => state.regions);
  // console.log("ssss", isShown);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="regions-head-container">
        <VscReport />
        <h2>Regions & Districts</h2>
        <BsToggle2Off
          onClick={(e) => dispatch(showRegions(!regions.isShown))}
        />
      </div>
      {regions.isShown &&
        regions.regions.map((item) => (
          <div>
            <div className="region-item">
              <p className="region-name">{item.region}</p>
              <p className="districts">{item.district}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Regions;
