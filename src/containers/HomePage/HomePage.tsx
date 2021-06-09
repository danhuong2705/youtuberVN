import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "./HomePage.module.scss";
import classnames from "classnames/bind";
import logo from "../../assets/logo-vps.png";

const cx = classnames.bind(styles);
const HomePage: React.FC = () => {
  return (
    <div className={cx("homepage")}>
      <Carousel
        className={cx("carousel")}
        showThumbs={false}
        infiniteLoop
        autoPlay
      >
        <div>
          <img src={logo} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={logo} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={logo} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
      <div className={cx("introduce-section")}>
        <div className={cx("container")}>
          <div className={cx("title")}>
            INTERNET SOLUTIONS FOR WEB HOSTING AND BEYOND
          </div>
          <div className={cx("sub-title")}>
            All backed by our 300% Renewable Energy Commitment
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
