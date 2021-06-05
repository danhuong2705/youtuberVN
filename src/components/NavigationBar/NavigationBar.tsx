import React from 'react';
import styles from './NavigationBar.module.scss';
import className from 'classnames/bind';
const cx = className.bind(styles);
const NavigationBar: React.FC = () => {
 return(
     <div className={cx('wrapper')}>
         <a href="/">Home</a>
         <a href="/about-us">About Us</a>
         <div>Tools</div>
         <div>Guideline</div>
         <div>Payment</div>   
     </div>
 )   
}

export default NavigationBar;