import React from 'react'
import { Link } from 'react-router-dom'

import { Field, reduxForm, InjectedFormProps } from "redux-form";

import { useTypedSelector } from "../../hooks/useTypedSelector";

import { Loader, RenderInput, RenderRadioSelect } from '../'

import validate from './validate'

const SubscribeEmailForm: React.FC<{} & InjectedFormProps<{}, {}>> = ({
	handleSubmit,
	initialize,
	invalid,
	pristine,
	submitting,
}) => {
	const { isSending } = useTypedSelector(({ subscribe_email }) => subscribe_email);

	React.useEffect(() => {
		initialize({ type: "Prodavec" })
	}, [])

	return (
		<form className='subscribe-email-text-form' onSubmit={handleSubmit}>
			<div className="subscribe-email-text-form-input-wrapper">
				<div className="subscribe-email-text-form-input">
					<Field component={RenderInput} name='email' label='Ваша почта' type='text' />
				</div>

				{isSending ? (

					<button
						className={`btn subscribe-email-text-form-input__btn`}
						disabled
					>
						<Loader />
					</button>
				) : (
					<button
						className={`btn ${invalid || pristine || submitting ? "disabled" : ""} subscribe-email-text-form-input__btn`}
						disabled={invalid || pristine || submitting}
					>
						Получить гайд
					</button>
				)}
			</div>

			<div className="subscribe-email-text-form-type-wrapper">
				<div className="subscribe-email-text-form-type">
					<Field
						component={RenderRadioSelect}
						type='radio'
						name="type"
						label="Продавец"
						value="Prodavec"
						small
					/>
				</div>

				<div className="subscribe-email-text-form-type">
					<Field
						component={RenderRadioSelect}
						type='radio'
						name="type"
						label="Покупатель"
						value="Pokupatel"
						small
					/>
				</div>
			</div>

			<p className="subscribe-email-text-form__text">
				Подписываясь на рассылку, вы соглашаетесь с условиями <Link to="/help/user-agreement">пользовательского соглашения</Link>
			</p>
		</form>
	)
}


export default reduxForm<{}, {}>({
	form: "subscribe-email-form",
	validate,
})(SubscribeEmailForm);
