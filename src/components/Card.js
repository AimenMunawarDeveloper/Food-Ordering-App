import React from "react";
import dish1 from "../images/dish1.jpg";

export default function Card() {
  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem" }}>
        <img src={dish1} className="card-img-top" alt="Dish" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text</p>
          <div className="d-flex align-items-center">
            <select className="m-2 bg-success rounded">
              {Array.from(Array(6), (e, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select className="m-2 bg-success rounded">
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>
            <div className="fs-5 ms-2">Total Price</div>
          </div>
        </div>
      </div>
    </div>
  );
}
