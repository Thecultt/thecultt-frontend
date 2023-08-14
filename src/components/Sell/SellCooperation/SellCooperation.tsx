import React from "react";
import {Link} from "react-router-dom";

import SellBlockCooperationConciergeServiceImage from "../../../assets/images/sell/sell-block-cooperation-concierge-service.jpg";

interface SellCooperationProps {
    next: any;
}

const SellCooperation: React.FC<SellCooperationProps> = ({next}) => {
    return (
        <div className="sell-block-cooperation-wrapper">
            <div className="sell-block sell-block-cooperation">
                <h3 className="sell-block__title">Вариант сотрудничества</h3>
                <p className="sell-block__subtitle">
                    Выберите вариант сотрудничества, который вам интересен.
                </p>

                <div className="sell-block-cooperation-type-block-wrapper">
                    <div className="sell-block-cooperation-type-block active">
                        <h4 className="sell-block-cooperation-type-block__title">
                            Продажа
                        </h4>
                        <p className="sell-block-cooperation-type-block__description">
                            Вы получаете выплату за аксессуар сразу после
                            согласования условий и проверки на подлинность или
                            после продажи товара за комиссию.
                        </p>
                    </div>

                    <div className="sell-block-cooperation-type-block">
                        <h4 className="sell-block-cooperation-type-block__title">
                            Обмен
                        </h4>
                        <p className="sell-block-cooperation-type-block__description">
                            Мы оценим ваш лот и предложим депозит в размере его
                            стоимости на покупку нового лота на нашем сайте.
                        </p>
                    </div>
                </div>

                <button className="btn sell-block__btn" onClick={next}>
                    Продолжить
                </button>
            </div>

            <div
                className="sell-block-cooperation-concierge-service"
                style={{
                    backgroundImage: `url("${SellBlockCooperationConciergeServiceImage}")`,
                }}
            >
                <h3 className="sell-block-cooperation-concierge-service__title">
                    Консьерж-сервис
                </h3>
                <p className="sell-block-cooperation-concierge-service__subtitle">
                    Премиальная услуга для продажи более 10 товаров
                </p>

                <Link
                    to="/"
                    className="sell-block-cooperation-concierge-service__link"
                >
                    Подробнее
                </Link>
            </div>
        </div>
    );
};

export default SellCooperation;
