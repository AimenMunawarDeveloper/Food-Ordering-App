import React, { useEffect, useState } from "react";
import dish1 from "../images/dish1.jpg";
import dish2 from "../images/dish2.jpg";
import dish3 from "../images/dish3.jpg";

// Carousel component
export default function CustomCarousel() {
  const [currentImageId, setCurrentImageId] = useState(0);
  const images = [dish1, dish2, dish3];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageId((prevId) =>
        prevId === images.length - 1 ? 0 : prevId + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentImageId ? "active" : ""
            } d-flex justify-content-center align-items-center`}
            style={{ height: "95vh" }}
          >
            <img
              src={image}
              className="d-block w-100 object-fit-cover"
              alt={`Slide ${index + 1}`}
              style={{ filter: "brightness(40%)" }}
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
        onClick={() =>
          setCurrentImageId((prevId) =>
            prevId === 0 ? images.length - 1 : prevId - 1
          )
        }
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
        onClick={() =>
          setCurrentImageId((prevId) =>
            prevId === images.length - 1 ? 0 : prevId + 1
          )
        }
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
