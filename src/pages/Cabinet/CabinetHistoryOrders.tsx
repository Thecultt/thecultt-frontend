import React from "react";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../../hooks/useTypedSelector";

import { fetchHistoryOrders } from "../../redux/actions/history_orders";

import { CabinetMenu, CabinetHistoryOrdersItem, CabinetHistoryOrdersNull, PageLoader } from "../../components/";

import { CartItem } from "../../models/ICartItem";

import { sendSubmitOrder } from "../../redux/actions/order";

import orderPay from '../../components/Order/orderPay'

const CabinetHistoryOrders: React.FC = () => {
	const dispatch = useDispatch()

	const { isLoaded } = useTypedSelector(({ history_orders }) => history_orders)
	const historyOrdersItems = useTypedSelector(({ history_orders }) => history_orders.items)

	React.useEffect(() => {
		dispatch(fetchHistoryOrders() as any)
	}, [])

	const statuses: { [key: string]: string } = {
		"Заказ оформлен": "black",
		"Ожидает оплаты": "red",
		"Закза в обработке": "green",
		"Сборка": "green",
		"Заказ собран": "green",
		"Готов к выдаче": "green",
		"В доставке": "green",
		"Заказ не выкуплен": "red",
		"Заказ завершен": "green",
		"Заказ отменен": "red",
		"Оформлен возврат": "black",
	}

	const { items } = useTypedSelector(({ cart }) => cart);
	const { promocode, currentDelivery, isValid } = useTypedSelector(({ order }) => order)

	// const { order: { payment_type, id, cost, products, client_name, client_phone, delivery_type, delivery_address, yandex_split_link } } = useTypedSelector(({ order }) => order)

	const successPayment = (orderId: number) => {
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

	const onClickPay = ({ payment_type, id, cost, delivery_price, products }: {
		payment_type: string, id: number, cost: string, delivery_price: string, products: { model_name: string, price: number }[]
	}) => {
		orderPay({
			type: payment_type,
			orderId: id,
			totalPrice: parseInt(cost),
			deliveryPrice: parseInt(delivery_price),
			products: products.map((product) => ({ name: product.model_name, price: product.price })),
			onSuccessCallback: () => successPayment(id)
		})
	}

	return (
		<section className="cabinet">
			<div className="container">
				<div className="cabinet-wrapper">
					<CabinetMenu />

					{isLoaded ? (
						<div className="cabinet-content cabinet-history-orders">
							{historyOrdersItems.length ? (
								historyOrdersItems.map((item, index) => (
									<CabinetHistoryOrdersItem
										{...item}
										statusColor={statuses[item.status]}
										key={`cabinet-history-orders-${index}`}
										onClickPay={() => onClickPay({
											payment_type: item.payment_type,
											id: item.id,
											cost: item.cost,
											delivery_price: item.delivery_price,
											products: item.products,
										})}
									/>
								))
							) : (
								<CabinetHistoryOrdersNull />
							)}
						</div>
					) : (
						<PageLoader />
					)}
				</div>
			</div>
		</section>
	);
};

export default CabinetHistoryOrders;
