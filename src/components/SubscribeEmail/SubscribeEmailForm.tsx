import React from 'react'
import { Link } from 'react-router-dom'

import { Field, reduxForm, InjectedFormProps } from "redux-form";

import { Input, RenderRadioSelect } from '../'

const SubscribeEmailForm: React.FC<{} & InjectedFormProps<{}, {}>> = ({
	handleSubmit,
	invalid,
	pristine,
	submitting,
}) => {
	return (
		<form className='subscribe-email-text-form'>
			<div className="subscribe-email-text-form-input-wrapper">
				<div className="subscribe-email-text-form-input">
					<Input name='email' label='Ваша почта' type='text' />
				</div>

				<button className="btn subscribe-email-text-form-input__btn">Я с вами!</button>
			</div>

			<div className="subscribe-email-text-form-type-wrapper">
				<div className="subscribe-email-text-form-type">
					<Field
						component={RenderRadioSelect}
						name="type"
						label="Продавец"
						small
					/>
				</div>

				<div className="subscribe-email-text-form-type">
					<Field
						component={RenderRadioSelect}
						name="type"
						label="Покупатель"
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
	// validate,
})(SubscribeEmailForm);
