import React from "react";
import { Link } from "react-router-dom";

import { Field, reduxForm, InjectedFormProps } from "redux-form";

import { useTypedSelector } from "../../../hooks/useTypedSelector";

import { Loader, RenderInput } from "../../";

const ReglogRecoveryPassword: React.FC<{} & InjectedFormProps<{}, {}>> = ({
	handleSubmit,
	initialize,
	invalid,
	submitting,
}) => {
	const { email } = useTypedSelector(({ check_email }) => check_email);
	const { isSend } = useTypedSelector(({ recovery_password }) => recovery_password);

	React.useEffect(() => {
		initialize({ email })
	}, [])

	return (
		<form
			className="reglog-content-form reglog-content-form-login"
			onSubmit={handleSubmit}
		>
			<Link to="#login" className="reglog-content-form-back">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M15 18L9 12L15 6" stroke="#202020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			</Link>

			<h3 className="reglog-content-form__title">Забыли пароль?</h3>

			<p className="reglog-content-form__description">Подтвердите адрес эл. почты, связанный с вашим аккаунтом, на который мы вышлем ссылку для изменения пароля.</p>

			<div className="reglog-content-form-input-wrapper">
				<div className="reglog-content-form-input">
					<h4 className="reglog-content-form-input__title">Ваша почта</h4>

					<Field
						component={RenderInput}
						label="Ваша почта"
						name="email"
						type="text"
						disabled
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
						className={`btn ${invalid || submitting ? "disabled" : ""} reglog-content-form-btn__btn`}
						disabled={invalid || submitting}
					>
						Отправить ссылку для сброса
					</button>
				)}
			</div>

			<p className="reglog-content-form__subtitle">
				В личном кабинете вы сможете отследить статус вашей
				продажи/заказа
			</p>
		</form>
	);
};

export default reduxForm<{}, {}>({
	form: "recovery-password-form",
})(ReglogRecoveryPassword);
