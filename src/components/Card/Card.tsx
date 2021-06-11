import React from 'react';
import styles from './Card.module.scss';
import className from 'classnames/bind';
const cx = className.bind(styles);
interface CardProps {
    price: number;
    plan: any;
}
const Card: React.FC<CardProps> = ({
    price,
    plan,
}) => {
    return(
        <div className={cx('card-wrapper')}>
           <div className={cx('title')}>* basic *</div> 
            <div>
                Card
                <div>{price}</div>
                <div>{price}</div>
            </div>
            <button>ORDER NOW</button>
        </div>
    );
}

export default Card;