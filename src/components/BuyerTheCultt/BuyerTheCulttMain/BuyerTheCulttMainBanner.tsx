import React from 'react';

import BuyerTheculttMainImage from 'src/assets/images/buyer-thecultt/buyer-thecultt-main.jpg';
import BuyerTheculttMainImageMedia from 'src/assets/images/buyer-thecultt/buyer-thecultt-main-media.jpg';

interface BuyerTheCulttMainBannerProps {
    onClickOpenCustomForm: () => void;
}

const BuyerTheCulttMainBanner: React.FC<BuyerTheCulttMainBannerProps> = ({ onClickOpenCustomForm }) => {
    return (
        <div
            className="buyer-thecultt-main"
            style={{
                backgroundImage: `url("${window.innerWidth > 1200 ? '' : BuyerTheculttMainImageMedia}")`,
            }}
        >
            <div className="buyer-thecultt-main-text">
                <h2 className="title mb buyer-thecultt-main-text__title">Консьерж-сервис</h2>
                <p className="description buyer-thecultt-main-text__description">
                    Доставит для вас из Европы украшения Cartier, Bvlgari, Messika, Van Cleef & Arpels или часы главных
                    часовых брендов. К заказу доступны все позиции с официальных сайтов.
                </p>
                <button
                    className={`${window.innerWidth > 1200 ? 'btn' : 'btn-light'} buyer-thecultt-main-text__btn`}
                    onClick={onClickOpenCustomForm}
                >
                    Отправить заявку
                </button>
            </div>

            <div
                className="buyer-thecultt-main-image"
                style={{
                    backgroundImage: `url("${window.innerWidth > 1200 ? BuyerTheculttMainImage : ''}")`,
                }}
            ></div>
        </div>
    );
};

export default BuyerTheCulttMainBanner;
