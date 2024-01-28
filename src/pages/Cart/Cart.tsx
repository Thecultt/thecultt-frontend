import React from 'react'
import { useDispatch } from 'react-redux'
import { NumericFormat } from "react-number-format";
import { Link } from "react-router-dom";

import { useTypedSelector } from "../../hooks/useTypedSelector";

import { changeCheckCartItem, removeCartItem } from "../../redux/actions/cart";

import { CartItemBlock } from '../../components/'

const Cart: React.FC = () => {
	const dispatch = useDispatch();

	const isLoadedUser = useTypedSelector(({ user }) => user.isLoaded);
	const { items } = useTypedSelector(({ cart }) => cart);

	const changeCheck = (article: string, status: boolean) => {
		dispatch(changeCheckCartItem(article, status));
	};

	const removeItem = (article: string) => {
		dispatch(removeCartItem(article, items[article]));
	};

	return (
		<div className='cart'>
			<div className="container">
				<div className="cart-wrapper">
					<h2 className="cart__title">
						Корзина
					</h2>

					{Object.keys(items).length ? (
						<>
							<div className="cart-items-wrapper">
								{Object.keys(items).map((key, index) => (
									<CartItemBlock
										{...items[key]}
										key={`cart-item-${index}`}
										changeCheck={() =>
											changeCheck(key, !items[key].checked)
										}
										removeItem={() => removeItem(key)}
									/>
								))}
							</div>

							<div className="cart-btn">
								<div className="cart-btn-title">
									<p className="cart-btn-title__description">
										Товары - {Object.keys(items).map((article) => items[article]).filter((item) => item.availability && item.checked).length} шт.
									</p>

									<p className="cart-btn-title__sum">
										<NumericFormat
											value={Object.keys(items).map((article) => items[article]).filter((item) => item.availability && item.checked).map(item => item.price).length ? Object.keys(items).map((article) => items[article]).filter((item) => item.availability && item.checked).map(item => item.price).reduce((a: number, b: number) => a + b) : 0}
											displayType={"text"}
											thousandSeparator={" "}
											renderText={(formattedValue: string) => (
												<>
													{parseInt(
														formattedValue
															.split(" ")
															.join("")
													) >= 10000
														? formattedValue
														: parseInt(
															formattedValue
																.split(" ")
																.join("")
														)}
												</>
											)}
										/>{" "}
										₽
									</p>
								</div>

								{isLoadedUser ?
									(
										<Link
											to="/order"
											className={`btn ${Object.keys(items).filter(key => items[key].checked === true).length ? "" : "disabled"} cart-btn__btn`}
										>
											Перейти к заказу
										</Link>
									) : (
										<Link
											to="/?redirect=/order#reglog"
											className={`btn ${Object.keys(items).filter(key => items[key].checked === true).length ? "" : "disabled"} cart-btn__btn`}
										>
											Перейти к заказу
										</Link>
									)}
							</div>
						</>
					) : (
						<div className="cart-null">
							<p className="cart-null__title">
								Ваша корзина пока пуста
							</p>

							<button className="btn disabled cart-null__btn">
								Перейти к заказу
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Cart