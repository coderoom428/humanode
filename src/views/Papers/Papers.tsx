import React from "react";
import { Typography } from "@mui/material";
import Layout from "../../layout";
import { papersLinks } from "./Papers.util";
import "./Papers.scss";
import MobileBottomBtn from "../../components/atoms/MobileBottomBtn";
import BtnBackHome from "../../components/atoms/BtnBackHome";

function Papers() {
  return (
    <Layout>
      <div className="papers-content">
        <BtnBackHome />
        <MobileBottomBtn title='PAPERS' />
        <div className="container">
          <div className="row justify-content-md-center">
            {papersLinks.map((_item, _i) => (
              <div className="col-md-auto">
                <div className="papers-block d-flex flex-column justify-content-start align-items-start">
                  <Typography className="block-title">
                    {_item.title}:
                  </Typography>
                  {_item.items.map((_link) => (
                    <a
                      target={"_blank"}
                      rel="noreferrer noopener"
                      href={_link.link}
                      className={`block-item`}
                    >
                      {_link.title}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Papers;
