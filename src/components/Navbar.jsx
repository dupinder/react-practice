import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.appName}
        </Link>
        <button id="navBarButton"
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
          <ul className="navbar-nav" id="navbar-ul">
            {props.navItems.map((item, index) => {
              return (
                <>
                  <li className="nav-item" id={index}>
                    <Link className="nav-link active" aria-current="page" to={item.url}>
                      {item.name}
                    </Link>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
