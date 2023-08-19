import React from "react"
import { useDispatch } from "react-redux"

import { sendOrderApplyPromocode } from "../../../redux/actions/order"

import { useTypedSelector } from "../../../hooks/useTypedSelector"

const OrderProductsPromocode: React.FC = () => {
	const dispatch = useDispatch()

	const { promocode: { isActive, isError, isSend } } = useTypedSelector(({ order }) => order)

	const [currentPromocode, setCurrentPromocode] = React.useState<string>("")

	const sendApplyPromocode = () => {
		dispatch(sendOrderApplyPromocode(currentPromocode) as any)
	}

	return (
		<>
			{isActive ?
				<div className="order-products-promocode">
					<div className="order-products-promocode-input">
						<input
							type="text"
							name="promocode"
							placeholder="Промокод"
							className={`order-products-promocode-input__field active`}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCurrentPromocode(e.target.value.replace(" ", ""))}
						/>
					</div>

					<button className={`order-products-promocode__btn edit`} onClick={sendApplyPromocode}>
						Изменить
					</button>
				</div>
				:
				<div className={`order-products-promocode ${isError ? "error" : ""}`}>
					<div className="order-products-promocode-input">
						<input
							type="text"
							name="promocode"
							placeholder="Промокод"
							className={`order-products-promocode-input__field ${currentPromocode === "" ? "disabled" : isError ? "error" : ""}`}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCurrentPromocode(e.target.value.replace(" ", ""))}
						/>

						{isError ?
							<p className="order-products-promocode-input__error">
								Неверный промокод
							</p>
							: null
						}
					</div>

					<button className={`order-products-promocode__btn ${currentPromocode === "" ? "disabled" : ""}`} onClick={sendApplyPromocode}>
						Применить
					</button>
				</div>
			}
		</>
	);
}

export default OrderProductsPromocode