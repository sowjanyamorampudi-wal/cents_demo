import LeftCard from "./leftCard/leftCard";
import MiddleCard from "./middleCard/middleCard";
import RightCard from "./rightCard/rightCard";
import Sidebar from "./sideBar/sideBar";

const MainComponent = () => {
  return (
    <>
      <div className="main_container">
        <Sidebar />
        <div className="left_container">
          <MiddleCard />
          <div className="main_container">
            <LeftCard />
            <RightCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainComponent;
