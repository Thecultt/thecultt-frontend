import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../../../hooks/useTypedSelector";

import { CabinetSellTypes, CabinetSellStepKeys } from "../../../redux/types/ICabinetSell";

import { setCabinetSellCurrentType, setCabinetSellCurrentStep } from "../../../redux/actions/cabinet_sell";

import SellBlockCooperationConciergeImage from "../../../assets/images/sell/sell-block-cooperation-concierge-service.jpg";

const SellCooperation: React.FC = () => {
	const dispatch = useDispatch()

	const { currentType } = useTypedSelector(({ cabinet_sell }) => cabinet_sell)

	const types = [
		{
			title: "Продажа",
			description: `Вы получаете выплату за аксессуар сразу после
			согласования условий и проверки на подлинность или
			после продажи товара за комиссию.`,
			type: CabinetSellTypes.SELL
		},

		{
			title: "Обмен",
			description: `Мы оценим ваш лот и предложим депозит в размере его
			стоимости на покупку нового лота на нашем сайте.`,
			type: CabinetSellTypes.EXCHANGE
		}
	]

	return (
		<div className="sell-block-cooperation-wrapper">
			<div className="sell-block sell-block-cooperation">
				<h3 className="sell-block__title">Вариант сотрудничества</h3>
				<p className="sell-block__subtitle">
					Выберите вариант сотрудничества, который вам интересен.
				</p>

				<div className="sell-block-cooperation-type-block-wrapper">
					{types.map((type, index) => (
						<button
							className={`sell-block-cooperation-type-block ${type.type === currentType ? "active" : ""}`}
							key={`sell-block-cooperation-type-block-${index}`}
							onClick={() => dispatch(setCabinetSellCurrentType(type.type))}
						>
							<h4 className="sell-block-cooperation-type-block__title">
								{type.title}
							</h4>
							<p className="sell-block-cooperation-type-block__description">
								{type.description}
							</p>
						</button>
					))}
				</div>

				<button className="btn sell-block__btn" onClick={() => {
					if (localStorage.getItem("accessToken")) {
						dispatch(setCabinetSellCurrentStep(CabinetSellStepKeys.INFO))
					} else {
						window.location.hash = "reglog"
					}
				}}>
					Продолжить
				</button>
			</div>

			<Link
				to="/concierge"
				className="sell-block-cooperation-concierge-service"
				style={{
					backgroundImage: `url("${SellBlockCooperationConciergeImage}")`,
				}}
			>
				<h3 className="sell-block-cooperation-concierge-service__title">
					Консьерж-сервис
				</h3>
				<p className="sell-block-cooperation-concierge-service__subtitle">
					Премиальная услуга для продажи более 10 товаров
				</p>

				<span
					className="sell-block-cooperation-concierge-service__link"
				>
					Подробнее
				</span>
			</Link>
		</div>
	);
};

export default SellCooperation;
