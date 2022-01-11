import React from "react";
import "./BtnBackHome.scss";
import { Link } from "react-router-dom";
import { ArrowBackIos } from "@mui/icons-material";

function BtnBackHome() {
  return (
    <Link to="/home" className="btn-back d-none d-sm-flex">
      <ArrowBackIos /> HOME
    </Link>
  );
}

export default BtnBackHome;
