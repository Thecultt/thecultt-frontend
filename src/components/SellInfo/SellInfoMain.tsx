import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { useMediaQuery } from 'usehooks-ts';

import { MEDIA_SIZES } from 'src/constants/styles';

import { Select } from 'src/components';

import { Conditions } from 'src/types/product';

import SellInfoMainImage from 'src/assets/images/sell-info/sell-info-main.jpg';
import Logo from 'src/assets/images/logo.svg';

const models: {
    [key: string]: {
        title: string;
        image: string;
        prices: Record<Conditions, number>;
    };
} = {
    hermesKelly: {
        title: 'Hermes Kelly',
        image: 'https://storage.yandexcloud.net/prod-thecultt/22870/0db4859d192bd57bbd11362584092b07df5cc547.png',
        prices: {
            Новое: 2601000,
            Отличное: 1530000,
            Хорошее: 1105000,
        },
    },
    celineClassic: {
        title: 'Celine Classic',
        image: 'https://storage.yandexcloud.net/prod-thecultt/72929/2Mf1Ct33hSuPXo3WdwpboPMMdGHbkmHytRRDVdJ8.jpg',
        prices: {
            Новое: 165000,
            Отличное: 150000,
            Хорошее: 120000,
        },
    },
};

const SellInfoMain: React.FC = () => {
    const isMobile = useMediaQuery(`(max-width: ${MEDIA_SIZES.tablet})`);

    const [currentModel, setCurrentModel] = React.useState('hermesKelly');
    const [currentCondition, setCurrentCondition] = React.useState<Conditions>('Новое');

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
                                items={Object.keys(models).map((key) => ({
                                    title: models[key].title,
                                    image: models[key].image,
                                }))}
                                onChange={(value) =>
                                    Object.keys(models).map(
                                        (key) => models[key].title === value.title && setCurrentModel(key),
                                    )
                                }
                            />
                        </div>

                        <div className="sell-info-main-text-form-selects-block">
                            <h4 className="sell-info-main-text-form-selects-block__title">Состояние</h4>

                            <Select
                                label="Состояние"
                                items={[{ title: 'Новое' }, { title: 'Отличное' }, { title: 'Хорошее' }]}
                                onChange={(value) => setCurrentCondition(value.title as Conditions)}
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
