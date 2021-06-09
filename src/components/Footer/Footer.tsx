import React from 'react';
import className from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = className.bind(styles);
const Footer: React.FC = () => {
    return (
        <div className={cx('wrapper')}>
            <a href="/">Home</a>
            <a href="/about-us">About Us</a>
            <a href="/">Tools</a>
            <a href="/">Guideline</a>
            <a href="/">Payment</a>
        </div>
    )
}

export default Footer;