import React from "react";
import { useDispatch } from "react-redux";
import { reduxForm, InjectedFormProps, formValueSelector } from "redux-form";

import { useTypedSelector } from '../../../hooks/useTypedSelector'

import { setOrderIsValid } from '../../../redux/actions/order'

import {
	OrderFormContact,
	OrderFormCountry,
	OrderFormDelivery,
	OrderFormAddress,
	OrderFormPayments,
} from "../../";

import validate from './validate'

const OrderForm: React.FC<{} & InjectedFormProps<{}, {}>> = ({
	handleSubmit,
	invalid,
	pristine,
	submitting,
	initialize
}) => {
	const dispatch = useDispatch()

	const [indexForm, setIndexForm] = React.useState<number>(0)

	const { isLoaded, user } = useTypedSelector(({ user }) => user)
	const { address: { country, city, street } } = useTypedSelector(({ order }) => order)

	const selector = formValueSelector("order-form");

	const { emailValue, nameValue, phoneValue, deliveryValue, houseValue, flatValue } =
		useTypedSelector((state) => {
			const { email, name, phone, delivery, house, flat } = selector(
				state,
				"email",
				"name",
				"phone",
				"delivery",
				"house",
				"flat"
			);
			return {
				emailValue: email,
				nameValue: name,
				phoneValue: phone,
				deliveryValue: delivery,

				houseValue: house,
				flatValue: flat,
			};
		});

	React.useEffect(() => {
		if (emailValue && nameValue && phoneValue) {
			setIndexForm(1)
		}

		if (country.value !== "" && city.value !== "") {
			setIndexForm(2)
		}

		if (deliveryValue) {
			setIndexForm(3)
		}

		if (street.value !== "" && houseValue && flatValue) {
			setIndexForm(4)
		}
	}, [emailValue, nameValue, phoneValue, country, city, street, deliveryValue, houseValue, flatValue])

	React.useEffect(() => {
		if (invalid || pristine || submitting) {
			dispatch(setOrderIsValid(false) as any)
		} else {
			dispatch(setOrderIsValid(true) as any)
		}
	}, [invalid, pristine, submitting])

	React.useEffect(() => {
		if (isLoaded) {
			initialize({ ...user, name: `${user.middlename} ${user.name} ${user.lastname}`})
		}
	}, [isLoaded])

	return (
		<form className="order-form" onSubmit={handleSubmit}>
			<OrderFormContact />

			{indexForm >= 1 ? <OrderFormCountry /> : null}

			{indexForm >= 2 ? <OrderFormDelivery /> : null}

			{indexForm >= 3 && deliveryValue !== "Самовывоз" ? <OrderFormAddress /> : null}

			{indexForm >= 4 ? (
				deliveryValue !== "Примерка" ? (
					<OrderFormPayments />
				) : (
					null
				)
			) : (
				deliveryValue == "Самовывоз" ? <OrderFormPayments /> : null
			)}
		</form>
	);
};


export default reduxForm<{}, {}>({
	form: "order-form",
	validate,
})(OrderForm);
