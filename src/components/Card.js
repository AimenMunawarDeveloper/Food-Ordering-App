import React from "react";

export default function Card({
  catgoryName,
  name,
  img,
  options = [],
  description,
}) {
  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem" }}>
        <img
          src={img}
          className="card-img-top"
          alt="Dish"
          style={{ height: "18em" }}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{catgoryName}</p>
          <p className="card-text">{description}</p>
          <div className="d-flex align-items-center">
            <select className="m-2 bg-success rounded">
              {Array.from(Array(6), (e, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select className="m-2 bg-success rounded">
              {options.map((option) => {
                return (
                  <>
                    {option?.half && (
                      <option value={option?.half}>half-{option?.half}</option>
                    )}
                    {option?.full && (
                      <option value={option?.full}>full-{option?.full}</option>
                    )}
                    {option?.regular && (
                      <option value={option?.regular}>
                        regular-{option?.regular}
                      </option>
                    )}
                    {option?.medium && (
                      <option value={option?.medium}>
                        medium-{option?.medium}
                      </option>
                    )}
                    {option?.large && (
                      <option value={option?.large}>
                        regular-{option?.large}
                      </option>
                    )}
                  </>
                );
              })}
            </select>
            <div className="fs-5 ms-2">Total Price</div>
          </div>
        </div>
      </div>
    </div>
  );
}
