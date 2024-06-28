import React from 'react';
import { useDispatch } from 'react-redux';
import { getClassNames } from 'src/functions/getClassNames';

import { useTypedSelector } from 'src/hooks/useTypedSelector';

import { setCabinetSellCurrentStep, setCabinetSellAutoDetectedIndex } from 'src/redux/actions/cabinet_sell';

import { CabinetSellStepKeys } from 'src/redux/types/ICabinetSell';

const SellChoiceModel: React.FC = () => {
    const dispatch = useDispatch();

    const {
        autoDetected: { models, selectedIndex },
    } = useTypedSelector(({ cabinet_sell }) => cabinet_sell);

    const onClickNextStep = () => {
        dispatch(setCabinetSellCurrentStep(CabinetSellStepKeys.INFO));
    };

    return (
        <div className="sell-block sell-block-choice-model">
            <div className="sell-block-choice-model-text">
                <h3 className="sell-block-choice-model-text__title">Мы нашли подходящие модели</h3>

                <p className="sell-block-choice-model-text__description">
                    Выберите вариант, который соответствует бренду и модели вашей сумки без привязки к цвету и
                    материалу.
                    <br />
                    Если совпадений нет, нажмите кнопку "Нет моего варианта".
                </p>
            </div>

            <div className="sell-block-choice-model-models">
                {models.map((model, index) => (
                    <div
                        className={getClassNames('sell-block-choice-model-models-block', {
                            active: selectedIndex === index,
                        })}
                        key={`sell-block-choice-model-models-block-${index}`}
                        onClick={() => dispatch(setCabinetSellAutoDetectedIndex(index))}
                    >
                        <div
                            className="sell-block-choice-model-models-block-image"
                            style={{
                                backgroundImage: `url('${model.image}')`,
                            }}
                        ></div>

                        <p className="sell-block-choice-model-models-block__brand">{model.brand}</p>
                        <h4 className="sell-block-choice-model-models-block__name">{model.model}</h4>
                    </div>
                ))}
            </div>

            <div className="sell-block-choice-model-btns">
                <button className="btn sell-block-choice-model-btns__btn" onClick={onClickNextStep}>
                    Выбрать
                </button>

                <button className="btn-regular sell-block-choice-model-btns__btn" onClick={onClickNextStep}>
                    Нет моего варианта
                </button>
            </div>
        </div>
    );
};

export default SellChoiceModel;
