import React from "react";
import "./Header.scss";
import images from "../../assets/images";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* Logo */}
        <a className="navbar-brand" href="/">
          <img src={images.logo} alt="Envision Logo" height="30" /> iSight
        </a>

        {/* Hamburger Menu */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Section */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* Home Link */}
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>

            {/* Other Links */}
            <li className="nav-item">
              <a className="nav-link" href="/glasses">
                Glasses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/app">
                App
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/enterprise">
                Enterprise
              </a>
            </li>

            {/* Dropdown Menu */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/action1">
                  Action
                </a>
                <a className="dropdown-item" href="/action2">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/other">
                  Something else here
                </a>
              </div>
            </li>
          </ul>

          {/* Search Form */}
          {/* <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form> */}
        </div>
      </nav>
    </>
  );
};

export default Header;
