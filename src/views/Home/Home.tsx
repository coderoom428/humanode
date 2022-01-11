import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import Layout from "../../layout";
import { ImgPapers, ImgPapersM, ImgPath, ImgPathM, ImgTestnet, ImgTestnetM } from "../../assets/desktop/svg";

export default function Home() {
  return (
    <Layout>
      <div className="home">
        <div className="home-content container d-flex justify-content-center align-items-center">
          <Link to="/papers">
            <div className="link-paper">
              <img src={ImgPapers} alt="img-paper" className='d-none d-sm-block' />
              <img src={ImgPapersM} alt="img-paper" className='d-sm-none' />
            </div>
          </Link>
          <Link to="/path">
            <div className="link-path">
              <img src={ImgPath} alt="img-path" className='d-none d-sm-block' />
              <img src={ImgPathM} alt="img-path" className='d-sm-none' />
            </div>
          </Link>
          <a
            className="about-network"
            target={"_blank"}
            rel="noreferrer noopener"
            href="https://desktop-app.testnet2.stages.humanode.io/"
          >
            <div className="link-testnet">
              <img src={ImgTestnet} alt="img-testnet" className='d-none d-sm-block' />
              <img src={ImgTestnetM} alt="img-testnet" className='d-sm-none' />
            </div>
          </a>
        </div>
      </div>
    </Layout>
  );
}
