import React from "react";
import { useDispatch } from "react-redux";
import { NumericFormat } from "react-number-format";

import { useTypedSelector } from "../../../hooks/useTypedSelector";

import { changeCheckCartItem, removeCartItem } from "../../../redux/actions/cart";

import { OrderProductsItem, OrderProductsPromocode } from "../../";

const OrderProducts: React.FC = () => {
	const dispatch = useDispatch();

	const { items, totalCount, totalPrice } = useTypedSelector(({ cart }) => cart);

	const { promocode } = useTypedSelector(({ order }) => order)

	const changeCheck = (article: string, status: boolean) => {
		dispatch(changeCheckCartItem(article, status));
	};

	const removeItem = (article: string) => {
		dispatch(removeCartItem(article));
	};

	const isCheckAll = () => {
		const checkedArr: boolean[] = [];

		Object.keys(items).map((key) => {
			if (items[key].checked) checkedArr.push(true);
		});

		return checkedArr.length === Object.keys(items).length;
	};

	const isCheckNull = () => {
		const checkedArr: boolean[] = [];

		Object.keys(items).map((key) => {
			if (items[key].checked) checkedArr.push(true);
		});

		return checkedArr.length;
	};

	const checkedAllItems = () => {
		Object.keys(items).map((key) => {
			if (!items[key].checked)
				dispatch(changeCheckCartItem(items[key].article, true));
		});
	};

	const uncheckedAllItems = () => {
		Object.keys(items).map((key) => {
			if (items[key].checked)
				dispatch(changeCheckCartItem(items[key].article, false));
		});
	};

	const pay = () => {
		var widget = new window.cp.CloudPayments();

		widget.pay(
			"auth", // или 'charge'
			{
				//options
				publicId: "pk_e121fab75d40b1ed19854b69df6ff", //id из личного кабинета
				description: "Оплата товаров TheCultt", //назначение
				amount: totalPrice, //сумма
				currency: "RUB", //валюта
				accountId: "user@example.com", //идентификатор плательщика (необязательно)
				invoiceId: "1234567", //номер заказа  (необязательно)
				email: "user@example.com", //email плательщика (необязательно)
				skin: "mini", //дизайн виджета (необязательно)
				autoClose: 3, //время в секундах до авто-закрытия виджета (необязательный)
				data: {
					myProp: "myProp value",
				},
				configuration: {
					common: {
						successRedirectUrl: "/order/success", // адреса для перенаправления
						failRedirectUrl: "", // при оплате по Tinkoff Pay
					},
				},
				payer: {
					firstName: "Тест",
					lastName: "Тестов",
					middleName: "Тестович",
					birth: "1955-02-24",
					address: "тестовый проезд дом тест",
					street: "Lenina",
					city: "MO",
					country: "RU",
					phone: "123",
					postcode: "345",
				},
			},
			{
				onSuccess: function (options: any) {
					console.log(options);
				},
				onFail: function (reason: any, options: any) {
					// fail
					//действие при неуспешной оплате
				},
				onComplete: function (paymentResult: any, options: any) {
					//Вызывается как только виджет получает от api.cloudpayments ответ с результатом транзакции.
					//например вызов вашей аналитики
				},
			}
		);
	};

	return (
		<div className="order-products">
			<h3 className="order-products__title">Ваш заказ:</h3>

			{isCheckAll() ? (
				<div
					className="order-products-check-all"
					onClick={uncheckedAllItems}
				>
					<svg
						width="18"
						height="18"
						viewBox="0 0 18 18"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect width="18" height="17.97" rx="4" fill="#285141" />
						<path
							d="M5.5 8.54688L8.125 11.1719L12.5 6.79688"
							stroke="#F1EDE8"
							strokeLinecap="round"
						/>
					</svg>

					<p className="order-products-check-all__title">
						Выделить всё
					</p>
				</div>
			) : (
				<div
					className="order-products-check-all"
					onClick={checkedAllItems}
				>
					<svg
						width="18"
						height="18"
						viewBox="0 0 18 18"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect
							x="0.25"
							y="0.265625"
							width="17.5"
							height="17.47"
							rx="3.75"
							stroke="#838383"
							strokeWidth="0.5"
						/>
					</svg>

					<p className="order-products-check-all__title">
						Выделить всё
					</p>
				</div>
			)}

			<div className="order-products-items-wrapper">
				{Object.keys(items).map((key, index) => (
					<OrderProductsItem
						{...items[key]}
						key={`order-products-item-${index}`}
						changeCheck={() =>
							changeCheck(key, !items[key].checked)
						}
						removeItem={() => removeItem(key)}
					/>
				))}
			</div>

			<OrderProductsPromocode />

			<div className="order-products-total">
				<div className="order-products-total-item">
					<p className="order-products-total-item__title">
						Товары - {totalCount}шт
					</p>
					<p className="order-products-total-item__value">
						<NumericFormat
							value={totalPrice}
							displayType={"text"}
							thousandSeparator={" "}
							renderText={(formattedValue: string) => (
								<>
									{parseInt(
										formattedValue.split(" ").join("")
									) >= 10000
										? formattedValue
										: parseInt(
											formattedValue.split(" ").join("")
										)}
								</>
							)}
						/>{" "}
						₽
					</p>
				</div>

				{promocode.isActive ?
					<div className="order-products-total-item promocode">
						<p className="order-products-total-item__title">
							Скидка в корзине
						</p>
						<p className="order-products-total-item__value">
							- <NumericFormat
								value={promocode.saleSum}
								displayType={"text"}
								thousandSeparator={" "}
								renderText={(formattedValue: string) => (
									<>
										{parseInt(
											formattedValue.split(" ").join("")
										) >= 10000
											? formattedValue
											: parseInt(
												formattedValue.split(" ").join("")
											)}
									</>
								)}
							/>{" "}
							₽
						</p>
					</div>

					: null
				}

				<div className="order-products-total-item">
					<p className="order-products-total-item__title">Доставка</p>
					<p className="order-products-total-item__value">0 ₽</p>
				</div>
				<div className="order-products-total-item">
					<p className="order-products-total-item__title">Итого:</p>
					<p className="order-products-total-item__value">
						<NumericFormat
							value={totalPrice > 0 ? promocode.isActive ? totalPrice - promocode.saleSum : totalPrice : 0}
							displayType={"text"}
							thousandSeparator={" "}
							renderText={(formattedValue: string) => (
								<>
									{parseInt(
										formattedValue.split(" ").join("")
									) >= 10000
										? formattedValue
										: parseInt(
											formattedValue.split(" ").join("")
										)}
								</>
							)}
						/>{" "}
						₽
					</p>
				</div>

				<p className="order-products__description">
					Нажимая на кнопку, вы принимаете условия пользовательского
					соглашения и публичной оферты.
				</p>

				<button
					className={`btn ${isCheckNull() ? "" : "disabled"
						} order-products__btn`}
					onClick={pay}
				>
					Перейти к оплате
				</button>
			</div>
		</div>
	);
};

export default OrderProducts;
