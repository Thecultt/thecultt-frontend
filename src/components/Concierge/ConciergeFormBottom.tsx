import React from 'react'
import { Link } from 'react-router-dom';
import { Field, reduxForm, InjectedFormProps } from "redux-form";
import { createTextMask } from "redux-form-input-masks";

import { useTypedSelector } from "../../hooks/useTypedSelector";

import { RenderInput, Loader } from "../";

import validate from "./validate";

const ConciergeFormBottom: React.FC<{} & InjectedFormProps<{}, {}>> = ({
	handleSubmit,
	invalid,
	pristine,
	submitting
}) => {
	const { isSending } = useTypedSelector(({ concierge }) => concierge)

	return (
		<form className="concierge-form" onSubmit={handleSubmit}>
			<div className="concierge-form-content">
				<h2 className="concierge-form-content__title">
					Закажите консьерж-сервис в один клик
				</h2>

				<div className="concierge-form-content-input-wrapper">
					<div className="concierge-form-content-input">
						<Field
							component={RenderInput}
							label="Ваш телефон"
							name="phone"
							type="text"
							{...createTextMask({
								pattern: "+9 999 999 99-99",
								guide: false,
								stripMask: false,
							})}
						/>
					</div>
					<div className="concierge-form-content-input">
						<Field
							component={RenderInput}
							label="Ваше имя"
							name="name"
							type="text"
						/>
					</div>
				</div>

				<p className="concierge-form-content__description">
					Нажимая на кнопку, вы принимаете условия <Link to="/help/user-agreement">пользовательского соглашения</Link> и <Link to="/help/public-offerte">публичной оферты</Link>.
				</p>

				{isSending ? (
					<button className="btn disabled loader concierge-form-content__btn" disabled>
						<Loader />
					</button>
				) : (
					<button
						className={`btn ${invalid || submitting || pristine ? "disabled" : ""} concierge-form-content__btn`}
						disabled={invalid || submitting || pristine}
					>
						Отправить заявку
					</button>
				)}
			</div>
		</form>
	)
}

export default reduxForm<{}, {}>({
	form: "concierge-form-bottom",
	validate,
})(ConciergeFormBottom);