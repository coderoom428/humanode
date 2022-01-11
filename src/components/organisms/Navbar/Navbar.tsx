import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { Logo, LogoM } from "../../../assets/desktop/svg";
import { Hidden } from "@material-ui/core";

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar navbar-expand-lg navbar-light bg-light h-100">
        <Link className="logo" to="/home">
          <Hidden xsDown>
            <img src={Logo} alt="logo" className="img-logo" />
          </Hidden>
          <Hidden smUp>
            <img src={LogoM} alt="logo" className="img-logo" />
          </Hidden>
        </Link>
        <div className="w-100 d-flex justify-content-between align-items-center">
          <a
            className="about-network"
            rel="noreferrer noopener"
            href="https://papers.humanode.io/deck.pdf"
          >
            ABOUT
          </a>
          <Link className="about-network" to="/network">
            NETWORK
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
