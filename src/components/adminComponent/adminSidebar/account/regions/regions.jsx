import { VscReport } from "react-icons/vsc";
import { useSelector } from "react-redux";

const Regions = () => {
  const regions = useSelector((state) => state.regions);
  // const districts = useSelector((state) => state.districts);
  return (
    <div>
      <div className="regions-head-container">
        <VscReport />
        <h2>Regions & Districts</h2>
      </div>
      {regions.map((item) => (
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
