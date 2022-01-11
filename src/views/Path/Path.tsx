import React from "react";
import { Typography } from "@mui/material";
import Layout from "../../layout";
import "./Path.scss";
import { IconNet } from "../../assets/desktop/svg";
import MobileBottomBtn from "../../components/atoms/MobileBottomBtn";
import BtnBackHome from "../../components/atoms/BtnBackHome";
import { Link } from "react-router-dom";

function Papers() {
  return (
    <Layout>
      <div className="path-content">
        <BtnBackHome />
        <MobileBottomBtn title='Path' />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-auto">
              <div className="path-block d-flex flex-column justify-content-start align-items-center">
                <Typography className="block-title">Textnet</Typography>
                <Typography className="block-date">Oct 2021</Typography>
              </div>
            </div>
            <div className="col-md-auto">
              <div className="path-block d-flex flex-column justify-content-start align-items-center">
                <img src={IconNet} alt="icon-net" className='icon-net' />
              </div>
            </div>
            <div className="col-md-auto">
              <div className="path-block d-flex flex-column justify-content-start align-items-center">
                <Typography className="block-title">Textnet</Typography>
                <Typography className="block-date">Oct 2021</Typography>
              </div>
            </div>
            <div className="col-md-auto d-sm-none">
              <div className="path-block d-flex flex-column justify-content-start align-items-center">
                <img src={IconNet} alt="icon-net" className='icon-net' />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-auto">
              <div className="path-block d-flex flex-column justify-content-start align-items-center">
                <Typography className="block-title">
                  Full decentralized
                </Typography>
                <Typography className="block-date">Jun 2026</Typography>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-auto">
              <Link to='/see-more' className='btn-more'>See more</Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Papers;
