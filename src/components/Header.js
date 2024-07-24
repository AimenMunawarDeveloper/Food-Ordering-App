import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-2" to="/">
            FoodHub
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
// first letter capital of each file
// to prevent page reload, use react router to make it Link single page application.becuase to ,mean to go to Link new page
