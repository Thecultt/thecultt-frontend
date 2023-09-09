import React from 'react'
import { useDispatch } from "react-redux";
import { reduxForm, InjectedFormProps, Field } from "redux-form";

import { CabinetSellStepKeys } from "../../../redux/types/ICabinetSell";

import { setCabinetSellCurrentStep } from "../../../redux/actions/cabinet_sell";

import { SellBackBtn, RenderInput } from "../../";

import validate from './validate'

const SellProduct: React.FC<{} & InjectedFormProps<{}, {}>> = ({
	handleSubmit,
	invalid,
	submitting,
	initialize,
}) => {
	const dispatch = useDispatch()

	React.useEffect(() => {
		const data: any = localStorage.getItem("sell-product-form")

		initialize(JSON.parse(data))
	}, [])

	return (
		<form onSubmit={handleSubmit} className="sell-block sell-block-info">
			<SellBackBtn onClick={() => dispatch(setCabinetSellCurrentStep(CabinetSellStepKeys.IMAGES))} />

			<h3 className="sell-block__title">Выбор товара для обмена</h3>
			<p className="sell-block__subtitle">
				1. Перейдите в <a href="/catalog" target='_blank'>Каталог</a> в новой вкладке. <br />
				2. Выберите товар на который вы хотели бы обменять свой старый лот. <br />
				3. Скопируйте ссылку на товар и вставьте в поле для ввода ниже. <br />
			</p>

			<div className="sell-block-input">
				<Field
					component={RenderInput}
					label="Укажите ссылку на товар, который хотели бы приобрести взамен"
					name="link"
					bgWhite
				/>
			</div>

			<button
				className={`btn ${invalid || submitting ? "disabled" : ""} sell-block__btn`}
				disabled={invalid || submitting}
			>
				Продолжить
			</button>
		</form>
	)
}


export default reduxForm<{}, {}>({
	form: "sell-product-form",
	validate,
})(SellProduct);