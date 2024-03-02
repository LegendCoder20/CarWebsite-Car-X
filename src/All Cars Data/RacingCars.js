import racingCarsData from "../All Cars JSON files/racing.json";
import {useParams} from "react-router-dom";

function RacingCars() {
  const {car} = useParams();

  const carData = racingCarsData.find((e) => e.car === car);

  if (!carData || !carData.submodels) {
    return <p>Car not found</p>;
  }

  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-2 m-2">
          {carData.submodels.map((e, index) => (
            <div className="col mb-3" key={index}>
              <div className="card shadow-sm">
                <img
                  src={e.image_url}
                  className="card-img-top img-fluid"
                  alt="Car"
                  style={{
                    maxWidth: "100%",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <p className="card-text text-center">{e.car_name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default RacingCars;
