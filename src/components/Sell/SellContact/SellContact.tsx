import React from 'react';
import { useDispatch } from 'react-redux';
import { reduxForm, InjectedFormProps, Field } from 'redux-form';

import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { CabinetSellTypes, CabinetSellStepKeys } from 'src/redux/types/ICabinetSell';
import { setCabinetSellCurrentStep } from 'src/redux/actions/cabinet_sell';
import { SellBackBtn, RenderInput } from 'src/components';

import validate from './validate';

const SellContact: React.FC<{} & InjectedFormProps<{}, {}>> = ({ handleSubmit, invalid, submitting, initialize }) => {
    const dispatch = useDispatch();

    const { currentType } = useTypedSelector(({ cabinet_sell }) => cabinet_sell);
    const {
        user: { name, lastname, email, phone },
    } = useTypedSelector(({ user }) => user);

    React.useEffect(() => {
        initialize({
            name,
            surname: lastname,
            email,
            phone,
        });

        // const data: any = localStorage.getItem("sell-contact-form")

        // initialize(JSON.parse(data))
    }, []);

    return (
        <form onSubmit={handleSubmit} className="sell-block sell-block-contact">
            <SellBackBtn
                onClick={() =>
                    dispatch(
                        setCabinetSellCurrentStep(
                            currentType === CabinetSellTypes.EXCHANGE
                                ? CabinetSellStepKeys.PRODUCT
                                : CabinetSellStepKeys.IMAGES,
                        ),
                    )
                }
            />

            <h3 className="sell-block__title">Контактные данные</h3>

            <p className="sell-block__subtitle">
                Заполните контактные данные в соответствие с паспортными, укажите актуальные номер телефона и почту для
                связи.
            </p>

            <div className="sell-block-input-wrapper-wrapper">
                <div className="sell-block-input-wrapper">
                    <div className="sell-block-input" style={{ width: '49%' }}>
                        <Field component={RenderInput} label="Ваше имя" name="name" bgWhite />
                    </div>

                    <div className="sell-block-input" style={{ width: '49%' }}>
                        <Field component={RenderInput} label="Ваша фамилия" name="surname" bgWhite />
                    </div>

                    <div className="sell-block-input" style={{ width: '100%' }}>
                        <Field component={RenderInput} label="Ваша почта" name="email" disabled bgWhite />
                    </div>

                    <div className="sell-block-input" style={{ width: '100%' }}>
                        <Field
                            component={RenderInput}
                            label="Ваш номер телефона"
                            name="phone"
                            bgWhite
                            // {...createTextMask({
                            // 	pattern: "+9 999 999 99-99",
                            // 	guide: false,
                            // 	stripMask: false,
                            // })}
                        />
                    </div>

                    <div className="sell-block-input" style={{ width: '100%' }}>
                        <Field component={RenderInput} label="Ваш ник в телеграмм" name="telegram" bgWhite />
                    </div>
                </div>
            </div>

            <button className={`btn ${submitting ? 'disabled' : ''} sell-block__btn`} disabled={submitting}>
                Продолжить
            </button>
        </form>
    );
};

export default reduxForm<{}, {}>({
    form: 'sell-contact-form',
    validate,
})(SellContact);
