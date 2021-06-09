import React from 'react';
import styles from './NavigationBar.module.scss';
import className from 'classnames/bind';
import logo from '../../assets/logo-vps.png';
const cx = className.bind(styles);
const NavigationBar: React.FC = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo')}>
                <div className={cx('logo-img')}>
                    <img alt="logo" src={logo} />
                </div>
                VPS
            </div>
            <div className={cx('menu')}>
                <a href="/">Home</a>
                <a href="/about-us">About Us</a>
                <a href="/">Tools</a>
                <a href="/">Guideline</a>
                <a href="/">Payment</a>
            </div>

        </div>
    )
}

export default NavigationBar;