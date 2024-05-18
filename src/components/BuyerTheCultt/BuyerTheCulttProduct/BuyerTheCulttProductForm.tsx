import React from 'react'
import {
	Field,
	reduxForm,
	InjectedFormProps,
} from "redux-form";

import { useTypedSelector } from '../../../hooks/useTypedSelector'

import { Loader, RenderInput } from '../../'

import { validate } from './validate'

const BuyerTheCulttProductForm: React.FC<{} & InjectedFormProps<{}, {}>> = ({
	handleSubmit,
	initialize,
	invalid,
	pristine,
	submitting,
}) => {
	const { isSendFormProductPage } = useTypedSelector(({ buyer_thecultt }) => buyer_thecultt)
	const { user, isLoaded } = useTypedSelector(({ user }) => user)

	React.useEffect(() => {
		if (isLoaded) {
			initialize({ ...user, fio: `${user.fullname}` })
		}
	}, [isLoaded])

	return (
		<form className='buyer-thecultt-product-form' onSubmit={handleSubmit}>
			<h2 className="buyer-thecultt-product-form__title">
				Оформить заявку на изделие
			</h2>

			<p className="buyer-thecultt-product-form__description">
				Отправьте заявку на нужное изделие, и в течение суток мы вернемся к вам с информацией о доступности модели, стоимостью и сроками доставки.
			</p>

			<div className="buyer-thecultt-product-form-input">
				<Field
					component={RenderInput}
					label="ФИО"
					name="fio"
					type="text"
				/>
			</div>

			<div className="buyer-thecultt-product-form-input">
				<Field
					component={RenderInput}
					label="Номер телефона"
					name="phone"
					type="text"
				/>
			</div>

			<div className="buyer-thecultt-product-form-input">
				<Field
					component={RenderInput}
					label="Email"
					name="email"
					type="text"
				/>
			</div>

			<button className={`btn ${isSendFormProductPage ? "loader" : ""} buyer-thecultt-product-form__btn`} disabled={isSendFormProductPage || invalid || pristine || submitting}>
				{isSendFormProductPage ? <Loader /> : "Отправить заявку"}
			</button>
		</form>
	)
}


export default reduxForm<{}, {}>({
	form: "buyer-thecultt-product-form",
	validate,
})(BuyerTheCulttProductForm);
