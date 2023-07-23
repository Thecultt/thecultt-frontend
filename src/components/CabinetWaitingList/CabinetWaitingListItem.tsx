import React from "react";
import { Link } from "react-router-dom";

const CabinetWaitingListItem: React.FC = () => {
    return (
        <div className="cabinet-waiting-list-item-wrapper">
            <div className="cabinet-waiting-list-item">
                <button className="cabinet-waiting-list-item__remove">
                    Отписаться
                </button>
                <div className="cabinet-waiting-list-item-title">
                    <h3 className="cabinet-waiting-list-item-title__title">
                        Подписка №2323
                    </h3>
                    <Link to="/" className="cabinet-waiting-list-item-title__subtitle">Доступно товаров на сайте 2шт.</Link>
                </div>
                <div className="cabinet-waiting-list-item-info">
                    <div className="cabinet-waiting-list-item-info-item">
                        <p className="cabinet-waiting-list-item-info-item__title">
                            Бренд:
                        </p>
                        <p className="cabinet-waiting-list-item-info-item__value">
                            Gucci
                        </p>
                    </div>
                    <div className="cabinet-waiting-list-item-info-item">
                        <p className="cabinet-waiting-list-item-info-item__title">
                            Название модели:
                        </p>
                        <p className="cabinet-waiting-list-item-info-item__value">
                            MINI BUCKET BAG
                        </p>
                    </div>

                    <div className="cabinet-waiting-list-item-info-item">
                        <p className="cabinet-waiting-list-item-info-item__title">
                            Категория:
                        </p>
                        <p className="cabinet-waiting-list-item-info-item__value">
                            Женские сумки
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CabinetWaitingListItem;
