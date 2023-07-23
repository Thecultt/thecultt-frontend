import React from "react";
import {
    Field,
    reduxForm,
    InjectedFormProps,
    formValueSelector,
} from "redux-form";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {RenderInput, RenderCheckbox} from "../../";

import {validate} from "./validate";

const ReglogRegister: React.FC<{} & InjectedFormProps<{}, {}>> = ({
    handleSubmit,
    initialize,
    invalid,
    pristine,
    submitting,
}) => {
    const {email} = useTypedSelector(({check_email}) => check_email);

    const selector = formValueSelector("reglog-register-form");

    const {nameValue, surnameValue, emailValue, passwordValue} =
        useTypedSelector((state) => {
            const {name, surname, email, password} = selector(
                state,
                "name",
                "surname",
                "email",
                "password"
            );
            return {
                nameValue: name,
                surnameValue: surname,
                emailValue: email,
                passwordValue: password,
            };
        });

    React.useEffect(() => {
        initialize({
            email,
            name: nameValue,
            surname: surnameValue,
            password: passwordValue,
        });
    }, []);

    return (
        <form
            className="reglog-content-form reglog-content-form-register"
            onSubmit={handleSubmit}
        >
            <h3 className="reglog-content-form__title">
                Завершить регистрацию
            </h3>

            <div className="reglog-content-form-input-wrapper">
                <div className="reglog-content-form-input">
                    <h4 className="reglog-content-form-input__title">Имя</h4>

                    <Field
                        component={RenderInput}
                        label="Ваше имя"
                        name="name"
                        type="text"
                    />
                </div>

                <div className="reglog-content-form-input">
                    <h4 className="reglog-content-form-input__title">
                        Фамилия
                    </h4>

                    <Field
                        component={RenderInput}
                        label="Ваша фамилия"
                        name="surname"
                        type="text"
                    />
                </div>

                <div className="reglog-content-form-input">
                    <h4 className="reglog-content-form-input__title">Почта</h4>

                    <Field
                        component={RenderInput}
                        label="Ваша почта"
                        name="email"
                        type="text"
                    />
                </div>

                <div className="reglog-content-form-input">
                    <h4 className="reglog-content-form-input__title">Пароль</h4>

                    <Field
                        component={RenderInput}
                        label="Придумайте пароль"
                        name="password"
                        type="password"
                    />
                </div>
            </div>

            <div className="reglog-content-form-checkbox-wrapper">
                <div className="reglog-content-form-checkbox">
                    <Field
                        component={RenderCheckbox}
                        name="policyCheckbox"
                        label="Я принимаю условия Публичной оферты и согласен (-а) на обработку своих персональных данных"
                        small
                    />
                </div>

                <div className="reglog-content-form-checkbox">
                    <Field
                        component={RenderCheckbox}
                        name="promoCheckbox"
                        label="Согласен (-а) на получение рекламной рассылки и обработки своих персональных данных"
                        small
                    />
                </div>
            </div>

            <div className="reglog-content-form-btn">
                <button
                    className="btn reglog-content-form-btn__btn"
                    disabled={invalid || submitting || pristine}
                >
                    Согласиться и продолжить
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
    form: "reglog-register-form",
    validate,
})(ReglogRegister);
