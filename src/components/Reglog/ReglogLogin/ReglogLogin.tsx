import React from "react";
import { Link } from "react-router-dom";

import { Field, reduxForm, InjectedFormProps } from "redux-form";

import { useTypedSelector } from "../../../hooks/useTypedSelector";

import { Loader, RenderInput } from "../../";

import validate from "./validate"

const ReglogLogin: React.FC<{} & InjectedFormProps<{}, {}>> = ({
	handleSubmit,
	invalid,
	pristine,
	submitting,
}) => {
	const { isSend } = useTypedSelector(({ login }) => login);

	return (
		<form
			className="reglog-content-form reglog-content-form-login"
			onSubmit={handleSubmit}
		>
			<h3 className="reglog-content-form__title">Вход</h3>

			<div className="reglog-content-form-input-wrapper">
				<div className="reglog-content-form-input">
					<h4 className="reglog-content-form-input__title">Пароль</h4>

					<Field
						component={RenderInput}
						label="Пароль"
						name="password"
						type="password"
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
						Продолжить
					</button>
				)}
				<Link to="" className="reglog-content-form-btn__link">
					Забыли пароль?
				</Link>
			</div>

			<p className="reglog-content-form__subtitle">
				В личном кабинете вы сможете отследить статус вашей
				продажи/заказа
			</p>
		</form>
	);
};

export default reduxForm<{}, {}>({
	form: "login-form",
	validate,
})(ReglogLogin);
