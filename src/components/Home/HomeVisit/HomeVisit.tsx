import React from 'react';
import { Link } from 'react-router-dom';

import VisitImage from '../../../assets/images/home/home-visit.jpg';
import VisitImageMedia from '../../../assets/images/home/home-visit-media.jpg';

const HomeVisit: React.FC = () => {
    return (
        <>
            <div className="home-visit hover-scale">
                <div className="home-visit-text">
                    <h2 className="home-visit-text__title">Забронируйте свой визит в THE CULTT!</h2>

                    <p className="home-visit-text__description">
                        Примерьте сумки и аксессуары лучших дизайнеров из коллекции THE CULTT или встретьтесь с нашим
                        экспертом, чтобы узнать, сколько вы сможете заработать на своих украшениях.
                    </p>

                    <Link to="/visit" className="btn home-visit-text__btn">
                        Перейти
                    </Link>
                </div>

                <div
                    className="home-visit-image"
                    style={{
                        backgroundImage: `url('${VisitImage}')`,
                    }}
                ></div>
            </div>

            <div className="home-visit-media" style={{ backgroundImage: `url('${VisitImageMedia}')` }}>
                <div className="home-visit-media-text">
                    <h2 className="home-visit-media-text__title">Забронируйте свой визит в THE CULTT!</h2>

                    <p className="home-visit-media-text__description">
                        Примерьте сумки и аксессуары лучших дизайнеров из коллекции THE CULTT или встретьтесь с нашим
                        экспертом, чтобы узнать, сколько вы сможете заработать на своих украшениях.
                    </p>

                    <Link to="/visit" className="btn-regular white home-visit-media-text__btn">
                        Перейти
                    </Link>
                </div>
            </div>
        </>
    );
};

export default HomeVisit;
