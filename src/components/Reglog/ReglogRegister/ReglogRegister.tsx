import React from "react";
import { Link } from "react-router-dom";
import {
	Field,
	reduxForm,
	InjectedFormProps,
} from "redux-form";

import { useTypedSelector } from "../../../hooks/useTypedSelector";

import { RenderInput, RenderCheckbox, Loader } from "../../";

import { validate } from "./validate";

const ReglogRegister: React.FC<{} & InjectedFormProps<{}, {}>> = ({
	handleSubmit,
	initialize,
	invalid,
	pristine,
	submitting,
}) => {
	const { email } = useTypedSelector(({ check_email }) => check_email);
	const { isSend } = useTypedSelector(({ register }) => register);

	React.useEffect(() => {
		if (email) {
			initialize({
				email,
				policyCheckbox: true,
				promoCheckbox: true
			});
		} else {
			window.location.hash = ""
		}
	}, []);

	return (
		<>
			<form
				className="reglog-content-form reglog-content-form-register"
				onSubmit={handleSubmit}
			>
				<Link to="#reglog" className="reglog-content-form-back">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M15 18L9 12L15 6" stroke="#202020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</Link>

				<h3 className="reglog-content-form__title">
					Завершить регистрацию
				</h3>

				<p className="reglog-content-form__description">
					Аккаунт, зарегистрированный на указанную почту, не найден. Завершите регистрацию для использования платформы.
				</p>

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
							name="lastname"
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
							disabled
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
							label={`
								Я принимаю условия <a href="https://storage.yandexcloud.net/the-cultt-docs/Офферта /Оферта для продавца 210324.pdf">агентского договора</a>, договора <a href="https://storage.yandexcloud.net/the-cultt-docs/Офферта /Оферта для покупателя 210324.pdf ">купли-продажи</a> и даю свое согласие на <a href="https://drive.google.com/file/d/1BK_TzD4u4z7iBIbc7Gw-hCb54-q-ilFW/view">обработку персональных данных</a>.
							`}
							small
						/>
					</div>

					<div className="reglog-content-form-checkbox">
						<Field
							component={RenderCheckbox}
							name="promoCheckbox"
							label={`
								Согласен (-а) <a href="https://drive.google.com/file/d/1boXYWorAMhCifykbhO3UPu4iybSrEZNB/view">получать</a> информационные письма и персональные предложения на указанную почту
							`}
							small
						/>
					</div>
				</div>

				<div className="reglog-content-form-btn">
					{isSend ? (
						<button className="btn disabled loader reglog-content-form-btn__btn" disabled>
							<Loader />
						</button>
					) : (
						<button
							className={`btn ${invalid || submitting || pristine ? "disabled" : ""} reglog-content-form-btn__btn`}
							disabled={invalid || submitting || pristine}
						>
							Согласиться и продолжить
						</button>
					)}
				</div>

				<p className="reglog-content-form__subtitle">
					В личном кабинете вы сможете отследить статус вашей
					продажи/заказа
				</p>
			</form>
		</>
	);
};

export default reduxForm<{}, {}>({
	form: "reglog-register-form",
	validate,
})(ReglogRegister);
