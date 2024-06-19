import React from 'react';
import { Link } from 'react-router-dom';

import SellInfoVipServiceImage from 'src/assets/images/sell-info/sell-info-vip-service.jpg';

const SellInfoVipService: React.FC = () => {
    return (
        <div className="sell-info-vip-service">
            <div className="sell-info-vip-service-text">
                <h2 className="sell-info-vip-service-text__title">
                    Хотите продать 7&nbsp;и&nbsp;больше лотов? Закажите бесплатный VIP-сервис.
                </h2>
                <p className="sell-info-vip-service-text__description">
                    Не&nbsp;нужно тратить время на&nbsp;заполнение заявок на&nbsp;каждый лот и&nbsp;поиск покупателей.
                    Просто отправьте общую фотографию всех товаров, и&nbsp;наш консьерж заберет ваши вещи.
                </p>

                <Link to="/vipservice" className="btn sell-info-vip-service-text__btn">
                    Перейти на&nbsp;VIP-сервис
                </Link>
            </div>
            <div
                className="sell-info-vip-service-image"
                style={{
                    backgroundImage: `url("${SellInfoVipServiceImage}")`,
                }}
            />
        </div>
    );
};

export default SellInfoVipService;
