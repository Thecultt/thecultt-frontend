import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { useMediaQuery } from 'usehooks-ts';

import { MEDIA_SIZES } from 'src/constants/styles';

import { Select } from 'src/components';

import { Conditions } from 'src/types/product';

import SellInfoMainImage from 'src/assets/images/sell-info/sell-info-main.jpg';
import Logo from 'src/assets/images/logo.svg';

import HermesKellyImage from 'src/assets/images/sell-info/products/hermesKelly.jpg';
import CelineClassicImage from 'src/assets/images/sell-info/products/celineClassic.jpg';
import PradaReNylonImage from 'src/assets/images/sell-info/products/pradaReNylon.jpg';
import HermesShoesImage from 'src/assets/images/sell-info/products/hermesShoes.jpg';
import ChanelShoesImage from 'src/assets/images/sell-info/products/chanelShoes.jpg';
import LouisVuittonWalletImage from 'src/assets/images/sell-info/products/louisVuittonWallet.jpg';
import GucciBeltImage from 'src/assets/images/sell-info/products/gucciBelt.jpg';
import CelineKnotBraceletImage from 'src/assets/images/sell-info/products/celineKnotBracelet.jpg';
import CartierPanthereImage from 'src/assets/images/sell-info/products/cartierPanthere.jpg';

const models: {
    [key: string]: {
        title: string;
        image: string;
        prices: Record<Conditions, number>;
    };
} = {
    hermesKelly: {
        title: 'Hermes Kelly',
        image: HermesKellyImage,
        prices: {
            Новое: 2601000,
            Отличное: 1530000,
            Хорошее: 1105000,
        },
    },
    celineClassic: {
        title: 'Celine Classic',
        image: CelineClassicImage,
        prices: {
            Новое: 165000,
            Отличное: 150000,
            Хорошее: 120000,
        },
    },
    pradaReNylon: {
        title: 'Prada Re-Nylon',
        image: PradaReNylonImage,
        prices: {
            Новое: 112500,
            Отличное: 63000,
            Хорошее: 49000,
        },
    },
    hermesShoes: {
        title: 'Hermes Shoes',
        image: HermesShoesImage,
        prices: {
            Новое: 82500,
            Отличное: 78750,
            Хорошее: 56000,
        },
    },
    chanelShoes: {
        title: 'Chanel Shoes',
        image: ChanelShoesImage,
        prices: {
            Новое: 127500,
            Отличное: 105000,
            Хорошее: 63000,
        },
    },
    louisVuittonWallet: {
        title: 'Louis Vuitton Wallet',
        image: LouisVuittonWalletImage,
        prices: {
            Новое: 38500,
            Отличное: 26000,
            Хорошее: 18300,
        },
    },
    gucciBelt: {
        title: 'Gucci Belt',
        image: GucciBeltImage,
        prices: {
            Новое: 26000,
            Отличное: 22750,
            Хорошее: 18300,
        },
    },
    celineKnotBracelet: {
        title: 'Celine Knot Bracelet',
        image: CelineKnotBraceletImage,
        prices: {
            Новое: 32200,
            Отличное: 26000,
            Хорошее: 18300,
        },
    },
    cartierPanthere: {
        title: 'Panthère de Cartier',
        image: CartierPanthereImage,
        prices: {
            Новое: 440000,
            Отличное: 345000,
            Хорошее: 300000,
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

                    <span className="sell-info-main-text-form__and">или</span>

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
