import React from "react";

import {Field, reduxForm, InjectedFormProps} from "redux-form";

import {RenderInput} from "../../";

const ReglogCheckEmail: React.FC<{} & InjectedFormProps<{}, {}>> = ({
    handleSubmit,
}) => {
    return (
        <form
            className="reglog-content-form reglog-content-form-register"
            onSubmit={handleSubmit}
        >
            <h3 className="reglog-content-form__title">Вход/Регистрация</h3>

            <div className="reglog-content-form-input-wrapper">
                <div className="reglog-content-form-input">
                    <h4 className="reglog-content-form-input__title">
                        Ваша почта
                    </h4>

                    <Field
                        component={RenderInput}
                        label="Ваша почта"
                        name="email"
                        type="text"
                    />
                </div>
            </div>

            <div className="reglog-content-form-btn">
                <button className="btn reglog-content-form-btn__btn">
                    Продолжить
                </button>
            </div>

            <p className="reglog-content-form__subtitle">
                В личном кабинете вы сможете отследить статус вашей
                продажи/заказа
            </p>
        </form>
    );
};

export default reduxForm<{}, {}>({
    form: "reglog-check-email-form",
    // validate,
})(ReglogCheckEmail);
