import "./middleCard.css";
const MiddleCard = () => {
  return (
    <>
      <div className="card_shadow">
        <div className="middle_card">
          <div className="direction">
            <h2>Orders</h2>
          </div>
          <div className="direction">
            <h1>5</h1>
            <p>Total orders this month</p>
          </div>
          <div className="direction">
            <h1>$51</h1>
            <p>Total order value this month</p>
          </div>
          <div className="direction">
            <h1>$10</h1>
            <p>Average order value this month</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiddleCard;
