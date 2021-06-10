import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "./HomePage.module.scss";
import classnames from "classnames/bind";
import logo from "../../assets/logo-vps.png";
import fea1 from '../../assets/icons/fea1-3.png';
import fea2 from '../../assets/icons/fea2-3.png';
import fea3 from '../../assets/icons/fea3-3.png';
import fea4 from '../../assets/icons/fea4-3.png';

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
            All backed by our <span className={cx('hight-light')}>300%</span> Renewable Energy Commitment
          </div>
          <div className={cx('features')}>
            <div className={cx('feature')}>
              <div className={cx('fea-img')}>
                <img src={fea1} alt="fea1" />
              </div>
              <div className={cx('fea-content')}>
                <div className={cx('fea-title')}>UNLIMITED POSSIBILITIES</div>
                <div>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</div>
              </div>
            </div>
            <div className={cx('feature')}>
              <div className={cx('fea-img')}>
                <img src={fea2} alt="fea2" />
              </div>
              <div className={cx('fea-content')}>
                <div className={cx('fea-title')}>USER FRIENDLY ACCOUNT & WEBSITE ACCESS</div>
                <div>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui.</div>
              </div>
            </div>
            <div className={cx('feature')}>
              <div className={cx('fea-img')}>
                <img src={fea3} alt="fea3" />
              </div>
              <div className={cx('fea-content')}>
                <div className={cx('fea-title')}>DRAG & DROP WEBSITE BUILDER</div>
                <div>Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat.</div>
              </div>
            </div>
            <div className={cx('feature')}>
              <div className={cx('fea-img')}>
                <img src={fea4} alt="fea4" />
              </div>
              <div className={cx('fea-content')}>
                <div className={cx('fea-title')}>SECURE & RELIABLE EMAIL</div>
                <div>Suspendisse luctus dui fringilla, congue tellus ut, luctus sapien. Etiam sit amet ipsum fringilla, auctor dui sed, dapibus est</div>
              </div>
            </div>
          </div>
          <div className={cx('plan-wrapper')}>
            <h2 className={cx('title')}>
              Choose Your Perfect Plan
            </h2>
            <div className={cx('sub-title')}>
              CHECK OUT OUR SECTION TO FIND A SERVICE THAT WORKS FOR YOU.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
