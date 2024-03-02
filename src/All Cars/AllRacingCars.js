import racingCarsData from "../All Cars JSON files/racing.json";
import {Link} from "react-router-dom";

function AllRacingCars() {
  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-2 m-2">
          {racingCarsData.map((e) => (
            <Link to={`/racingcars/${e.car}`} key={e.car}>
              <div className="col mb-3">
                <div className="card shadow-sm">
                  <img
                    src={e.image}
                    className="card-img-top img-fluid"
                    alt="Car"
                    style={{
                      maxWidth: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body">
                    <p className="card-text text-center">{e.car}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default AllRacingCars;
