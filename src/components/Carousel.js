import React from "react";
import dish1 from "../images/dish1.jpg";
import dish2 from "../images/dish2.jpg";
import dish3 from "../images/dish3.jpg";

export default function CustomCarousel() {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={dish1}
            className="d-block w-100"
            alt="First slide"
            style={{ filter: "brightness(40%)" }}
          />
          <div className="carousel-caption d-none d-md-block">
            <form className="d-flex flex-column align-items-start">
              <input
                className="form-control mb-3"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success text-white bg-success"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={dish2}
            className="d-block w-100"
            alt="Second slide"
            style={{ filter: "brightness(40%)" }}
          />
          <div className="carousel-caption d-none d-md-block">
            <form className="d-flex flex-column align-items-start">
              <input
                className="form-control mb-3"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success text-white bg-success"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={dish3}
            className="d-block w-100"
            alt="Third slide"
            style={{ filter: "brightness(40%)" }}
          />
          <div className="carousel-caption d-none d-md-block">
            <form className="d-flex flex-column align-items-start">
              <input
                className="form-control mb-3"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success text-white bg-success"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
