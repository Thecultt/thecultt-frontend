import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { CabinetSellTypes, CabinetSellStepKeys } from 'src/redux/types/ICabinetSell';
import { setCabinetSellCurrentType, setCabinetSellCurrentStep } from 'src/redux/actions/cabinet_sell';
import { getClassNames } from 'src/functions/getClassNames';
import { useAuthUser } from 'src/hooks/useAuthUser';

import { pushDataLayer } from 'src/functions/pushDataLayer';

import SellBlockCooperationConciergeImage from 'src/assets/images/sell/sell-block-cooperation-concierge-service.jpg';

const types = [
    {
        title: 'Продажа',
        description: `Вы получаете выплату за аксессуар сразу после
			согласования условий и проверки на подлинность или
			после продажи товара за комиссию.`,
        type: CabinetSellTypes.SELL,
    },

    {
        title: 'Обмен',
        description: `Мы оценим ваш лот и предложим депозит в размере его
			стоимости на покупку нового лота на нашем сайте.`,
        type: CabinetSellTypes.EXCHANGE,
    },
];

const SellCooperation: React.FC = () => {
    const dispatch = useDispatch();

    const initType = new URLSearchParams(window.location.search).get('type');

    const { currentType } = useTypedSelector(({ cabinet_sell }) => cabinet_sell);
    const { isLoggedIn } = useAuthUser();

    React.useEffect(() => {
        if (initType === 'exchange') {
            dispatch(setCabinetSellCurrentType(CabinetSellTypes.EXCHANGE));
        }
    }, [initType]);

    return (
        <div className="sell-block sell-block-cooperation-wrapper">
            <div className="sell-block-cooperation">
                <h3 className="sell-block__title">Вариант сотрудничества</h3>
                <p className="sell-block__subtitle">
                    Выберите вариант сотрудничества, который вам интересен.{' '}
                    <Link to="/sell">Подробнее о способах продажи.</Link>
                </p>

                <div className="sell-block-cooperation-type-block-wrapper">
                    {types.map((type, index) => (
                        <button
                            className={getClassNames('sell-block-cooperation-type-block', {
                                active: type.type === currentType,
                            })}
                            key={`sell-block-cooperation-type-block-${index}`}
                            onClick={() => dispatch(setCabinetSellCurrentType(type.type))}
                        >
                            <h4 className="sell-block-cooperation-type-block__title">{type.title}</h4>
                            <p className="sell-block-cooperation-type-block__description">{type.description}</p>
                        </button>
                    ))}
                </div>

                {isLoggedIn ? (
                    <button
                        className="btn sell-block__btn"
                        onClick={() => {
                            dispatch(setCabinetSellCurrentStep(CabinetSellStepKeys.CHOICE_CATEGORY));

                            pushDataLayer('cooperation_type_complete', {
                                cooperation_type: currentType === 'sell' ? 'sell' : 'swap',
                            });
                        }}
                    >
                        Продолжить
                    </button>
                ) : (
                    <Link
                        to="/cabinet/sell/?redirect=/cabinet/sell?step=choice_category#reglog"
                        className="btn sell-block__btn"
                    >
                        Продолжить
                    </Link>
                )}
            </div>

            <Link
                to="/vipservice"
                className="sell-block-cooperation-concierge-service"
                style={{
                    backgroundImage: `url("${SellBlockCooperationConciergeImage}")`,
                }}
            >
                <h3 className="sell-block-cooperation-concierge-service__title">VIP-сервис</h3>
                <p className="sell-block-cooperation-concierge-service__subtitle">
                    Премиальная услуга для продажи более 7 товаров
                </p>

                <span className="sell-block-cooperation-concierge-service__link">Подробнее</span>
            </Link>
        </div>
    );
};

export default SellCooperation;
