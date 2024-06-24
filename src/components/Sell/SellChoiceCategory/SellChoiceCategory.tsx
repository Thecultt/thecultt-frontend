import React from 'react';
import { useDispatch } from 'react-redux';
import { reduxForm, InjectedFormProps, formValueSelector, Field } from 'redux-form';

import { CabinetSellStepKeys } from 'src/redux/types/ICabinetSell';
import { setCabinetSellCurrentStep } from 'src/redux/actions/cabinet_sell';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { RenderSelect, SellBackBtn } from 'src/components';

import validate from './validate';

const SellChoiceCategory: React.FC<{} & InjectedFormProps<{}, {}>> = ({ handleSubmit, submitting }) => {
    const dispatch = useDispatch();

    const { parameters } = useTypedSelector(({ cabinet_sell }) => cabinet_sell);

    const onClickBack = () => {
        dispatch(setCabinetSellCurrentStep(CabinetSellStepKeys.COOPERATION));
    };

    return (
        <form onSubmit={handleSubmit} className="sell-block sell-block-choice-category">
            <SellBackBtn onClick={onClickBack} />

            <h3 className="sell-block__title">Выберите категорию</h3>

            <p className="sell-block__subtitle">Выберите категорию вашего товара</p>

            <div className="sell-block-input-wrapper-wrapper">
                <div className="sell-block-select">
                    <h4 className="sell-block-select__title">Категория</h4>

                    <Field component={RenderSelect} name="category" label="Категория" items={Object.keys(parameters)} />
                </div>
            </div>

            <button className={`btn ${submitting ? 'disabled' : ''} sell-block__btn`} disabled={submitting}>
                Продолжить
            </button>
        </form>
    );
};

export default reduxForm<{}, {}>({
    form: 'sell-choice-category-form',
    validate,
})(SellChoiceCategory);
