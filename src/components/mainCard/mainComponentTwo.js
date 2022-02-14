import LeftCard from "./leftCard/leftCard";
import MiddleCard from "./middleCard/middleCard";
import RightCard from "./rightCard/rightCard";
import Sidebar from "./sideBar/sideBar";

const MainComponentTwo = () => {
  return (
    <div>
      <div className="main_container">
        <Sidebar />
        <div className="over_flow">
          <div className="left_container">
            <MiddleCard />
            <div className="main_container">
              <LeftCard />
              <RightCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponentTwo;
