import React from 'react'
import { Link } from 'react-router-dom';
import { Field, reduxForm, InjectedFormProps } from "redux-form";
import { createTextMask } from "redux-form-input-masks";

import { useTypedSelector } from "../../hooks/useTypedSelector";

import { RenderInput, Loader } from "../";

import validate from "./validate";

const ConciergeFormTop: React.FC<{} & InjectedFormProps<{}, {}>> = ({
	handleSubmit,
	invalid,
	pristine,
	submitting,
}) => {
	const { isSending } = useTypedSelector(({ concierge }) => concierge)

	return (
		<form className="concierge-main-text-form" onSubmit={handleSubmit}>
			<div className="concierge-main-text-form-input-wrapper">
				<div className="concierge-main-text-form-input">
					<Field
						component={RenderInput}
						label="Ваш телефон"
						name="phone"
						type="text"
						// {...createTextMask({
						// 	pattern: "+9 999 999 99-99",
						// 	guide: false,
						// 	stripMask: false,
						// })}
					/>
				</div>
				<div className="concierge-main-text-form-input">
					<Field
						component={RenderInput}
						label="Ваше имя"
						name="name"
						type="text"
					/>
				</div>
			</div>

			<p className="concierge-main-text-form__description">
				Нажимая на кнопку, вы принимаете условия <Link to="/help/user-agreement">пользовательского соглашения</Link> и <Link to="/help/public-offerte">публичной оферты</Link>.
			</p>
			{isSending ? (
				<button className="btn disabled loader concierge-main-text-form__btn" disabled>
					<Loader />
				</button>
			) : (
				<button
					className={`btn ${invalid || submitting || pristine ? "disabled" : ""} concierge-main-text-form__btn`}
					disabled={invalid || submitting || pristine}
				>
					Отправить заявку
				</button>
			)}
		</form>
	)
}

export default reduxForm<{}, {}>({
	form: "concierge-form-top",
	validate,
})(ConciergeFormTop);