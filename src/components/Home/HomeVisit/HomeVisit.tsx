import React from 'react';
import { Link } from 'react-router-dom';

import { VISIT_AVAILABLE } from 'src/constants/app';

import VisitImage from 'src/assets/images/home/home-visit.jpg';
import VisitImageMedia from 'src/assets/images/home/home-visit-media.jpg';

const title = VISIT_AVAILABLE ? 'Забронируйте свой визит в THE CULTT!' : 'Визит в THE CULTT';
const description = VISIT_AVAILABLE ? (
    'Примерьте сумки и аксессуары лучших дизайнеров из коллекции THE CULTT или встретьтесь с нашим экспертом, чтобы узнать, сколько вы сможете заработать на своих украшениях.'
) : (
    <>
        Внимание! Клиентская зона закрыта с 10.07. Это временно — мы обновляем пространство. Как только запись в
        клиентскую зону откроется снова, мы пришлем зарегистрированным пользователям уведомление.
        <br />
        <br />
        Пока мы обновляемся, остальные опции работают как обычно. Закажите доставку и примерку понравившихся лотов на
        дом или оформите заявку на продажу своих аксессуаров.
    </>
);

const HomeVisit: React.FC = () => {
    return (
        <>
            <div className="home-visit hover-scale">
                <div className="home-visit-text">
                    <h2 className="home-visit-text__title">{title}</h2>
                    <p className="home-visit-text__description">{description}</p>

                    {VISIT_AVAILABLE && (
                        <Link to="/visit" className="btn home-visit-text__btn">
                            Перейти
                        </Link>
                    )}
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
                    <h2 className="home-visit-media-text__title">{title}</h2>
                    <p className="home-visit-media-text__description">{description}</p>

                    {VISIT_AVAILABLE && (
                        <Link to="/visit" className="btn-regular white home-visit-media-text__btn">
                            Перейти
                        </Link>
                    )}
                </div>
            </div>
        </>
    );
};

export default HomeVisit;
