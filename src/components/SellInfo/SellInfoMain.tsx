import React from 'react';
import CountUp from 'react-countup';
import { useMediaQuery } from 'usehooks-ts';

import { MEDIA_SIZES } from 'src/constants/styles';

import { Select } from 'src/components';

import SellInfoMainImage from 'src/assets/images/sell-info/sell-info-main.jpg';
import Logo from 'src/assets/images/logo.svg';
import { Link } from 'react-router-dom';

const SellInfoMain: React.FC = () => {
    const isMobile = useMediaQuery(`(max-width: ${MEDIA_SIZES.tablet})`);

    const [currentModel, setCurrentModel] = React.useState<string>('Hermes Kelly');
    const [currentCondition, setCurrentCondition] = React.useState<string>('Новое');

    const models: {
        [key: string]: {
            image: string;
            prices: { [key: string]: number };
        };
    } = {
        'Hermes Kelly': {
            image: '',
            prices: {
                Новое: 2601000,
                Отличное: 1530000,
                Хорошее: 1105000,
            },
        },
        'Celine Classic': {
            image: '',
            prices: {
                Новое: 165000,
                Отличное: 150000,
                Хорошее: 120000,
            },
        },
    };

    return (
        <div className="sell-info-main">
            <div className="sell-info-main-text">
                <h2 className="sell-info-main-text__title">
                    Продайте свои товары с
                    <img src={Logo} alt="THE CULTT" />
                </h2>

                <div className="sell-info-main-text-form">
                    <div className="sell-info-main-text-form-title">
                        <h4 className="sell-info-main-text-form-title__subtitle">
                            {isMobile ? (
                                <>
                                    Продавайте свои товары
                                    <br />и зарабатывайте
                                </>
                            ) : (
                                <>Вы можете заработать</>
                            )}
                        </h4>

                        <h3 className="sell-info-main-text-form-title__price">
                            <CountUp end={models[currentModel].prices[currentCondition]} separator=" " duration={0.5} />
                            ₽
                        </h3>
                    </div>

                    <div className="sell-info-main-text-form-selects">
                        <div className="sell-info-main-text-form-selects-block">
                            <h4 className="sell-info-main-text-form-selects-block__title">Модель товара</h4>

                            <Select
                                label="Модель"
                                items={Object.keys(models)}
                                onChange={(value) => setCurrentModel(value)}
                            />
                        </div>

                        <div className="sell-info-main-text-form-selects-block">
                            <h4 className="sell-info-main-text-form-selects-block__title">Состояние</h4>

                            <Select
                                label="Состояние"
                                items={['Новое', 'Отличное', 'Хорошее']}
                                onChange={(value) => setCurrentCondition(value)}
                            />
                        </div>
                    </div>

                    <Link to="/cabinet/sell" className="btn sell-info-main-text-form__btn">
                        Узнать стоимость своего товара
                    </Link>
                </div>
            </div>

            <div className="sell-info-main-image" style={{ backgroundImage: `url('${SellInfoMainImage}')` }}></div>
        </div>
    );
};

export default SellInfoMain;
