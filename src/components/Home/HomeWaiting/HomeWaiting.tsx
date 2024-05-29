import React from 'react';
import { Link } from 'react-router-dom';

import HomeWaitingImage from 'src/assets/images/home/home-waiting.jpg';

const HomeWaiting: React.FC = () => {
    return (
        <div className="home-waiting hover-scale">
            <div className="home-waiting-text">
                <h2 className="home-waiting-text__title">Не нашли аксессуар мечты?</h2>

                <p className="home-waiting-text__description">
                    Подпишитесь на товар, и мы уведомим вас, когда он будет в наличии.
                </p>

                <Link to="#create_waiting" className="btn home-waiting-text__btn">
                    Оставить заявку
                </Link>
            </div>

            <div
                className="home-waiting-image"
                style={{
                    backgroundImage: `url('${HomeWaitingImage}')`,
                }}
            ></div>
        </div>
    );
};

export default HomeWaiting;
