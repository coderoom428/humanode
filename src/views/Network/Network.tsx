import React from "react";
import { Typography } from "@mui/material";
import Layout from "../../layout";
import { networkLinks } from "./Network.util";
import "./Network.scss";
import MobileBottomBtn from "../../components/atoms/MobileBottomBtn";
import BtnBackHome from "../../components/atoms/BtnBackHome";

function Network() {
  return (
    <Layout>
      <div className="network-content">
        <BtnBackHome />
        <MobileBottomBtn title='Network' />
        <div className="container">
          <div className="row justify-content-md-center">
            {networkLinks.map((_item, _i) => (
              <div className="col-md-auto">
                <div className="network-block d-flex flex-column justify-content-start align-items-start">
                  <Typography className="block-title">
                    {_item.title}:
                  </Typography>
                  {_item.items.map((_link) => (
                    <a
                      target={"_blank"}
                      rel="noreferrer noopener"
                      href={_link.link}
                      className={`block-item ${
                        _item.title === "Whirite to" && "email"
                      }`}
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

export default Network;
