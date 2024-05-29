import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { Loader, RenderInput } from 'src/components';

import validate from './validate';

const ReglogLogin: React.FC<{} & InjectedFormProps<{}, {}>> = ({ handleSubmit, invalid, pristine, submitting }) => {
    const { isSend } = useTypedSelector(({ login }) => login);

    return (
        <form className="reglog-content-form reglog-content-form-login" onSubmit={handleSubmit}>
            <Link to="#reglog" className="reglog-content-form-back">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15 18L9 12L15 6"
                        stroke="#202020"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </Link>

            <h3 className="reglog-content-form__title">Вход</h3>
            {/* 
			<p className="reglog-content-form__message">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#202020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				</svg>

				При первичной авторизации на новой версии сайта воспользуйтесь функцией восстановления пароля через кнопку "Забыли пароль".
			</p> */}

            <div className="reglog-content-form-input-wrapper">
                <div className="reglog-content-form-input">
                    <h4 className="reglog-content-form-input__title">Пароль</h4>

                    <Field component={RenderInput} label="Пароль" name="password" type="password" />
                </div>
            </div>

            <div className="reglog-content-form-btn">
                {isSend ? (
                    <button className="btn disabled loader reglog-content-form-btn__btn" disabled>
                        <Loader />
                    </button>
                ) : (
                    <button
                        className={`btn ${invalid || submitting || pristine ? 'disabled' : ''} reglog-content-form-btn__btn`}
                        disabled={invalid || submitting || pristine}
                    >
                        Продолжить
                    </button>
                )}
                <Link to="#recovery_password" className="reglog-content-form-btn__link">
                    Забыли пароль?
                </Link>
            </div>

            <p className="reglog-content-form__subtitle">
                В личном кабинете вы сможете отследить статус вашей продажи/заказа
            </p>
        </form>
    );
};

export default reduxForm<{}, {}>({
    form: 'login-form',
    validate,
})(ReglogLogin);
