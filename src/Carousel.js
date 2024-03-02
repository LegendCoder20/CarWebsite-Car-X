import {Link} from "react-router-dom";

function Carousel() {
  const carousal = [
    {
      carousalText: [
        "Welcome to Car-X Website",
        "One of the Best Car Website World-Wide",
        "This Website Displays you The Best Cars",
      ],
      carousalImages: [
        "https://source.unsplash.com/1200x350/?f1 car",
        "https://source.unsplash.com/1200x350/?racing car",
        "https://source.unsplash.com/1200x350/?drifting",
      ],
    },
  ];

  return (
    <div className="container">
      {/* Carousel */}
      {carousal.map((e, index) => (
        <div
          id="carouselExampleCaptions"
          className="carousel slide carousel-fade"
          key={index}
        >
          {/* Carousel indicators */}
          <div className="carousel-indicators">
            {e.carousalImages.map((_, i) => (
              <button
                key={i}
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={i.toString()}
                className={i === 0 ? "active" : ""}
                aria-current={i === 0 ? "true" : "false"}
                aria-label={`Slide ${i + 1}`}
              ></button>
            ))}
          </div>
          {/* Carousel inner */}
          <div className="carousel-inner">
            {e.carousalImages.map((image, i) => (
              <div
                key={i}
                className={`carousel-item ${i === 0 ? "active" : ""}`}
              >
                <img
                  src={image}
                  className="d-block w-100 img-fluid"
                  alt={`Slide ${i + 1}`}
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{e.carousalText[i]}</h5>
                </div>
              </div>
            ))}
          </div>
          {/* Previous and Next buttons */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      ))}

      {/* Buttons */}
      <center>
        <div className="buttons-container">
          <Link to={"/allsportscar"} className="btn btn-danger" role="button">
            Sports Cars
          </Link>
          <Link
            to={"/allluxuarycars"}
            className="btn btn-primary"
            role="button"
          >
            Luxury Cars
          </Link>
          <Link to={"/allracingcars"} className="btn btn-success" role="button">
            Racing Cars
          </Link>
          <Link to={"/"} className="btn btn-warning" role="button">
            Car Games
          </Link>
        </div>
      </center>
    </div>
  );
}

export default Carousel;
