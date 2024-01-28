import React from 'react'
import { useDispatch } from "react-redux";

import { OrderStatusProduct } from "../../../components/";

import { useTypedSelector } from "../../../hooks/useTypedSelector";

import { CartItem } from "../../../models/ICartItem";

import { sendSubmitOrder } from "../../../redux/actions/order";

import orderPay from '../orderPay'

const OrderStatusError: React.FC = () => {
	const dispatch = useDispatch();

	const { items } = useTypedSelector(({ cart }) => cart);
	const { promocode, currentDelivery, isValid } = useTypedSelector(({ order }) => order)

	const { order: { payment_type, id, cost, products, client_name, client_phone, delivery_type, delivery_address } } = useTypedSelector(({ order }) => order)

	const successPayment = (orderId: number) => {
		const newCart: { [key: string]: CartItem } = {}

		Object.keys(items).map(article => {
			if (!items[article].checked) newCart[article] = { ...items[article], checked: true }
		})

		localStorage.setItem("cart", JSON.stringify(newCart))

		const products: CartItem[] = []

		Object.keys(items).map((keyCartItem) => {
			if (items[keyCartItem].checked) {
				products.push(items[keyCartItem])
			}
		})

		// window.dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
		// window.dataLayer.push({
		// 	event: "purchase",
		// 	ecommerce: {
		// 		timestamp: Math.floor(Date.now() / 1000),
		// 		transaction_id: `${orderId}`,
		// 		value: `${promocode.isActive ? totalPrice + currentDelivery.price - promocode.saleSum : totalPrice + currentDelivery.price}`,
		// 		tax: "-",
		// 		shipping: `${promocode.saleSum}`,
		// 		currency: "RUB",
		// 		coupon: `${promocode.name}`,
		// 		items: products.map((item) => ({
		// 			item_name: item.name,
		// 			item_id: `${item.id}`,
		// 			price: `${item.price}`,
		// 			item_brand: item.manufacturer,
		// 			item_category: item.category,
		// 			quantity: 1
		// 		}))
		// 	}
		// });

		dispatch(sendSubmitOrder(orderId) as any)
	}

	const onClickPay = () => {
		orderPay({
			type: payment_type,
			orderId: id,
			totalPrice: parseInt(cost),
			products: products.map((product) => ({ name: product.model_name, price: product.price })),
			onSuccessCallback: () => successPayment(id)
		})
	}

	return (
		<section className="order-status">
			<div className="container">
				<div className="order-status-wrapper">
					<div className="order-status-content">
						<div className="order-status-content-info">
							<div className="order-status-content-info-circle left"></div>
							<div className="order-status-content-info-circle right"></div>

							<div className="order-status-content-info-icon">
								<svg
									width="71"
									height="70"
									viewBox="0 0 71 70"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect
										x="0.5"
										width="70"
										height="70"
										rx="35"
										fill="#E46267"
										fillOpacity="0.2"
									/>
									<rect
										x="11"
										y="10"
										width="50"
										height="50"
										rx="25"
										fill="#9A1A1A"
									/>
									<path
										d="M44 27L28 43M28 27L44 43"
										stroke="white"
										strokeWidth="4"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>

							<h2 className="order-status-content-info__title">
								К сожалению, ваша оплата не прошла.
								Попробуйте еще раз.
							</h2>

							<p className="order-status-content-info__subtitle">
								Мы зарезервировали для вас товар на 10
								минут.
							</p>

							<button className="btn-black order-status-content-info__repeatbtn" onClick={onClickPay}>
								Оплатите ещё раз
							</button>
						</div>

						<div className="order-status-content-product-wrapper">
							{products.map((product, index) => (
								<OrderStatusProduct {...product} key={`order-status-content-product-${index}`} />
							))}
						</div>
					</div>

					<div className="order-status-recipient">
						<div className="order-status-recipient-block">
							<h3 className="order-status-recipient-block__title">
								Получатель
							</h3>

							<p className="order-status-recipient-block__subtitle">
								<span>Имя:</span> {client_name}
							</p>

							<p className="order-status-recipient-block__subtitle">
								<span>Телефон:</span> {client_phone}
							</p>
						</div>
						<div className="order-status-recipient-block">
							<h3 className="order-status-recipient-block__title">
								Доставка
							</h3>

							<p className="order-status-recipient-block__subtitle">
								<span>Вариант доставки:</span> {delivery_type}
							</p>

							<p className="order-status-recipient-block__subtitle">
								<span>Адрес доставки:</span> {delivery_address}
							</p>
						</div>
						<div className="order-status-recipient-block">
							<h3 className="order-status-recipient-block__title">
								Оплата
							</h3>

							<p className="order-status-recipient-block__subtitle">
								<span>Тип оплаты:</span> {payment_type}
							</p>
							{/* 
						<p className="order-status-recipient-block__subtitle">
							<span>Статус:</span>{" "}
							<p className="payment">
								Оплачено{" "}
								<svg
									width="16"
									height="15"
									viewBox="0 0 16 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g id="Group">
										<path
											id="Vector"
											d="M7.50781 14.5C11.3738 14.5 14.5078 11.366 14.5078 7.5C14.5078 3.63401 11.3738 0.5 7.50781 0.5C3.64182 0.5 0.507812 3.63401 0.507812 7.5C0.507812 11.366 3.64182 14.5 7.50781 14.5Z"
											stroke="#285141"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											id="Vector_2"
											d="M4.39844 7.50477L6.73177 9.83811L10.6207 5.94922"
											stroke="#285141"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</g>
								</svg>
							</p>
						</p> */}
						</div>
						<div className="order-status-recipient-svg">
							<svg
								width="100%"
								height="76"
								viewBox="0 0 600 76"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M167.857 1.64412e-05C152.078 1.64412e-05 17.9946 -6.54611e-05 0 0.000136335V47.035C0 62.8165 12.7919 75.6099 28.5714 75.6099H32.1429C32.1429 65.7465 40.1378 57.7506 50 57.7506C59.8622 57.7506 67.8571 65.7465 67.8571 75.6099H82.1429C82.1429 65.7465 90.1378 57.7506 100 57.7506C109.862 57.7506 117.857 65.7465 117.857 75.6099H132.143C132.143 65.7465 140.138 57.7506 150 57.7506C159.862 57.7506 167.857 65.7465 167.857 75.6099H182.143C182.143 65.7465 190.138 57.7506 200 57.7506C209.862 57.7506 217.857 65.7465 217.857 75.6099H232.143C232.143 65.7465 240.138 57.7506 250 57.7506C259.862 57.7506 267.857 65.7465 267.857 75.6099H282.143C282.143 65.7465 290.138 57.7506 300 57.7506C309.862 57.7506 317.857 65.7465 317.857 75.6099H332.143C332.143 65.7465 340.138 57.7506 350 57.7506C359.862 57.7506 367.857 65.7465 367.857 75.6099H382.143C382.143 65.7465 390.138 57.7506 400 57.7506C409.862 57.7506 417.857 65.7465 417.857 75.6099H432.143C432.143 65.7465 440.138 57.7506 450 57.7506C459.862 57.7506 467.857 65.7465 467.857 75.6099H482.143C482.143 65.7465 490.138 57.7506 500 57.7506C509.862 57.7506 517.857 65.7465 517.857 75.6099H532.143C532.143 65.7465 540.138 57.7506 550 57.7506C559.862 57.7506 567.857 65.7465 567.857 75.6099H571.429C587.208 75.6099 600 62.8165 600 47.035V0.000136335C571.429 -5.32365e-05 565.78 0.000136335 550 0.000136335L167.857 1.64412e-05Z"
									fill="#F7F4F0"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default OrderStatusError