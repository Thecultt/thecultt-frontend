import React from 'react';

import { Field, reduxForm, InjectedFormProps } from 'redux-form';

import { useTypedSelector } from '../../../hooks/useTypedSelector';

import { Loader, RenderInput } from '../../';

import validate from './validate';

const ReglogCheckEmail: React.FC<{} & InjectedFormProps<{}, {}>> = ({
    handleSubmit,
    initialize,
    invalid,
    submitting,
}) => {
    const { isSend, email } = useTypedSelector(({ check_email }) => check_email);

    React.useEffect(() => {
        if (email) {
            initialize({
                email,
            });
        }
    }, []);

    return (
        <form className="reglog-content-form reglog-content-form-register" onSubmit={handleSubmit}>
            {new URLSearchParams(window.location.search).get('redirect') === '/order' ? (
                <>
                    <h3 className="reglog-content-form__title">Войдите в аккаунт, чтобы продолжить</h3>

                    <p className="reglog-content-form__description">
                        Для завершения процедуры оформления заказа необходима авторизация или регистрация на сайте.
                    </p>
                </>
            ) : (
                <h3 className="reglog-content-form__title">Вход/Регистрация</h3>
            )}

            <div className="reglog-content-form-input-wrapper">
                <div className="reglog-content-form-input">
                    <h4 className="reglog-content-form-input__title">Ваша почта</h4>

                    <Field component={RenderInput} label="Ваша почта" name="email" type="text" />
                </div>
            </div>

            <div className="reglog-content-form-btn">
                {isSend ? (
                    <button className="btn disabled loader reglog-content-form-btn__btn" disabled>
                        <Loader />
                    </button>
                ) : (
                    <button
                        className={`btn ${invalid || submitting ? 'disabled' : ''} reglog-content-form-btn__btn`}
                        disabled={invalid || submitting}
                    >
                        Продолжить
                    </button>
                )}
            </div>

            <p className="reglog-content-form__subtitle">
                В личном кабинете вы сможете отследить статус вашей продажи/заказа
            </p>
        </form>
    );
};

export default reduxForm<{}, {}>({
    form: 'reglog-check-email-form',
    validate,
})(ReglogCheckEmail);
