import sportsCarData from "../All Cars JSON files/sports.json";
import {useParams} from "react-router-dom";

function SportsCar() {
  // Access the route parameter using useParams()
  const {car} = useParams();

  // Find the car object in sportsCarData that matches the route parameter
  const carData = sportsCarData.find((e) => e.car === car);

  // If carData is not found, render a message or handle the error accordingly
  if (!carData || !carData.submodels) {
    return <p>Car not found</p>;
  }

  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-2 m-2">
          {/* Map over the submodels of the selected car */}
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

export default SportsCar;
