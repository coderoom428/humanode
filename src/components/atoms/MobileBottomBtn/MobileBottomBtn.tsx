import React from "react";
import "./MobileBottomBtn.scss";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

interface Props {
  title: string;
  icon?: string;
}

function MobileBottomBtn({ title, icon = "close" }: Props) {
  return (
    <Link to="/home" className="btn-close-page d-sm-none">
      <Typography letterSpacing="0.3em">{title}</Typography>
      {icon === "close" ? (
        <CloseOutlinedIcon sx={{ fontSize: 30 }} />
      ) : (
        <ArrowBackIos sx={{ fontSize: 30 }} />
      )}
    </Link>
  );
}

export default MobileBottomBtn;
