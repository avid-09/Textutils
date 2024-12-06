import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  // const clk = (e) => {
  //   document.body.style.backgroundColor = e.target.id;
  //   console.log(e.target.id);
  // };
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  {props.About}
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li> */}
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary mx-2" type="submit">
                Search
              </button>
            </form> */}
            <button
              id="blue"
              type="button"
              className="btn btn-primary mx-2 my-1"
              onClick={props.clk}
            ></button>
            <button
              id="grey"
              type="button"
              className="btn btn-secondary mx-2 my-1"
              onClick={props.clk}
            ></button>
            <button
              id="green"
              type="button"
              className="btn btn-success mx-2 my-1"
              onClick={props.clk}
            ></button>
            <button
              id="red"
              type="button"
              className="btn btn-danger mx-2 my-1"
              onClick={props.clk}
            ></button>
            <button
              id="yellow"
              type="button"
              className="btn btn-warning mx-2 my-1"
              onClick={props.clk}
            ></button>
            <button
              id="cyan"
              type="button"
              className="btn btn-info mx-2 my-1"
              onClick={props.clk}
            ></button>
            <div
              className={`form-check form-switch text-${
                props.Mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {props.Text}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
