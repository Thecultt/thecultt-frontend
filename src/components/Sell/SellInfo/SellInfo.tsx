import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { reduxForm, InjectedFormProps, Field } from "redux-form";

import { CabinetSellStepKeys } from "../../../redux/types/ICabinetSell";

import { setCabinetSellCurrentStep } from "../../../redux/actions/cabinet_sell";

import { useTypedSelector } from "../../../hooks/useTypedSelector";

import { RenderInput, RenderInputHints, RenderSelect, RenderSelectArray, SellBackBtn } from "../../";

import validate from './validate'

const SellInfo: React.FC<{} & InjectedFormProps<{}, {}>> = ({
	handleSubmit,
	invalid,
	submitting,
	initialize,
	initialized
}) => {
	const dispatch = useDispatch()

	const data: any = JSON.parse(localStorage.getItem("sell-info-form") as any)

	const [currentCategory, setCurrentCategory] = React.useState<string>("")
	const [currentBrand, setCurrentBrand] = React.useState<string>("")

	const [brands, setBrands] = React.useState<{ title: string, value: string }[]>([])
	const [models, setModels] = React.useState<{ title: string, value: string }[]>([])

	const { parameters } = useTypedSelector(({ cabinet_sell }) => cabinet_sell)

	React.useEffect(() => {
		if (data) {
			if (data.category) {
				setCurrentCategory(data.category)
			}

			if (data.brand) {
				setCurrentBrand(data.brand)
			}

			initialize(data)
		}
	}, [])

	React.useEffect(() => {
		if (parameters[currentCategory]) {
			parameters[currentCategory].brands.map((brand) => {
				if (brand.name === currentBrand) {
					setModels(brand.models.map(model => ({ title: model.name, value: model.name })))
				}
			})

			setBrands(parameters[currentCategory].brands.map((brand) => ({ title: brand.name, value: brand.name })))
		}
	}, [currentCategory])

	const onChangeCategory = (value: string) => {
		if (currentCategory === "") {
			setCurrentCategory(value)
		} else if (value !== currentCategory) {
			setCurrentCategory(value)

			initialize({
				category: value,
				brand: "",
				models: "",
				condition: "",
				defects: "",
				size: "",
				set: "",
				price: "",
				isBuyTheCultt: "",
			})

			localStorage.removeItem("sell-images-form")

			setCurrentBrand("")
		} else {
			setCurrentCategory(value)
		}
	}

	const onChangeInputBrand = (value: string) => {
		const newBrands: { title: string, value: string }[] = []

		parameters[currentCategory].brands.map(brand => {
			if (brand.name.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
				newBrands.push({ title: brand.name, value: brand.name })
			}
		})

		setCurrentBrand(value)
		setBrands(newBrands)

		const newModels: { title: string, value: string }[] = []

		parameters[currentCategory].brands.map((brand) => {
			if (brand.name === value) {
				brand.models.map(model => {
					newModels.push({ title: model.name, value: model.name })
				})
			}
		})

		setModels(newModels)
	}

	const onChangeInputModel = (value: string) => {
		const newModels: { title: string, value: string }[] = []

		parameters[currentCategory].brands.map((brand) => {
			if (brand.name === currentBrand) {
				brand.models.map(model => {
					if (model.name.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
						newModels.push({ title: model.name, value: model.name })
					}
				})
			}
		})

		setModels(newModels)
	}

	const onClickBack = () => {
		dispatch(setCabinetSellCurrentStep(CabinetSellStepKeys.COOPERATION))

		localStorage.removeItem("sell-images-form")
	}

	return (
		<form onSubmit={handleSubmit} className="sell-block sell-block-info">
			<SellBackBtn onClick={onClickBack} />

			<h3 className="sell-block__title">Информация о товаре</h3>

			<p className="sell-block__subtitle">
				Заполните детальную информацию о продаваемом товаре.
			</p>

			<div className="sell-block-input-wrapper-wrapper">
				<div className="sell-block-select">
					<h4 className="sell-block-select__title">Категория товара</h4>

					<Field
						component={RenderSelect}
						name="category"
						label="Категория товара"
						items={Object.keys(parameters)}
						onChangeCutsom={onChangeCategory}
					/>
				</div>

				<div className="sell-block-select">
					<h4 className="sell-block-select__title">Бренд товара</h4>

					<Field
						component={RenderInputHints}
						name="brand"
						label="Бренд товара"
						hints={brands}
						disabled={parameters[currentCategory] ? false : true}
						onChangeCustom={(value: string) => onChangeInputBrand(value)}
						bgWhite
						ifFreeField
					/>
				</div>

				{currentCategory === "Мужские сумки" || currentCategory === "Женские сумки" ? (
					<div className="sell-block-select">
						<h4 className="sell-block-select__title">Модель товара</h4>

						<Field
							component={RenderInputHints}
							name="model"
							label="Модель товара"
							hints={models}
							disabled={currentBrand !== "" ? false : true}
							onChangeCustom={(value: string) => onChangeInputModel(value)}
							bgWhite
							ifFreeField
						/>
					</div>
				) : null}

				<div className="sell-block-select">
					<h4 className="sell-block-select__title">
						Состояние товара

						<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.19987 11.1654V8.4987M8.19987 5.83203H8.20376M14.8665 8.4987C14.8665 12.1806 11.8818 15.1654 8.19987 15.1654C4.51797 15.1654 1.5332 12.1806 1.5332 8.4987C1.5332 4.8168 4.51797 1.83203 8.19987 1.83203C11.8818 1.83203 14.8665 4.8168 14.8665 8.4987Z" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" />
						</svg>

						<span className="message-info-wrapper">
							<span className="message-info">
								<ul>
									<li><span>C биркой</span>: аксессуар не был в носке, фирменные бирки присутствуют.</li>
									<li><span>Новое</span>: аксессуар не был в носке, фирменные  бирки отсутствуют.</li>
									<li><span>Отличное</span>: видимые следы носки отсутствуют, аксессуар носился мало и бережно.</li>
									<li><span>Хорошее</span>: присутствуют видимые глазу следы носки, без грубых дефектов.</li>
								</ul>
							</span>
						</span>
					</h4>

					<Field
						component={RenderSelect}
						name="condition"
						label="Состояние товара"
						items={parameters[currentCategory] ? parameters[currentCategory].conditions.map(condition => condition.name) : []}
						disabled={parameters[currentCategory] ? false : true}
					/>
				</div>

				<div className="sell-block-select">
					<h4 className="sell-block-select__title">Наличие дефектов</h4>

					<Field
						component={RenderSelectArray}
						name="defects"
						label="Наличие дефектов"
						items={parameters[currentCategory] ? parameters[currentCategory].defects.map(defect => defect.name) : []}
						disabled={parameters[currentCategory] ? false : true}
					/>
				</div>

				{currentCategory === "Обувь" ? (
					<div className="sell-block-select">
						<h4 className="sell-block-select__title">Размер</h4>

						<Field component={RenderInput} name="size" label="Размер" bgWhite />
					</div>
				) : null}

				<div className="sell-block-select">
					<h4 className="sell-block-select__title">Комплект</h4>

					<Field
						component={RenderSelectArray}
						name="set"
						label="Комплект"
						items={parameters[currentCategory] ? parameters[currentCategory].kits.map(kit => kit.name) : []}
						disabled={parameters[currentCategory] ? false : true}
					/>
				</div>

				<div className="sell-block-select">
					<h4 className="sell-block-select__title">
						Ожидание по цене

						<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.19987 11.1654V8.4987M8.19987 5.83203H8.20376M14.8665 8.4987C14.8665 12.1806 11.8818 15.1654 8.19987 15.1654C4.51797 15.1654 1.5332 12.1806 1.5332 8.4987C1.5332 4.8168 4.51797 1.83203 8.19987 1.83203C11.8818 1.83203 14.8665 4.8168 14.8665 8.4987Z" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" />
						</svg>

						<span className="message-info-wrapper">
							<span className="message-info">
								Напишите цену, которую хотели бы получить на руки при продаже товара.
							</span>
						</span>
					</h4>

					<Field
						component={RenderInput}
						name="price"
						label="Ожидание по цене"
						bgWhite
					/>
				</div>

				<div className="sell-block-select">
					<h4 className="sell-block-select__title">
						Товар приобретен в THE CULTT

						<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.19987 11.1654V8.4987M8.19987 5.83203H8.20376M14.8665 8.4987C14.8665 12.1806 11.8818 15.1654 8.19987 15.1654C4.51797 15.1654 1.5332 12.1806 1.5332 8.4987C1.5332 4.8168 4.51797 1.83203 8.19987 1.83203C11.8818 1.83203 14.8665 4.8168 14.8665 8.4987Z" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" />
						</svg>

						<span className="message-info-wrapper">
							<span className="message-info">
								Укажите, если ранее товар был приобретен на нашей платформе, на него будут действовать особые условия. <Link to="/exchange">Подробнее</Link>
							</span>
						</span>
					</h4>

					<Field
						component={RenderSelect}
						name="isBuyTheCultt"
						label="Товар приобретен в THE CULTT"
						items={["Да", "Нет"]}
					/>
				</div>
			</div>

			<button
				className={`btn ${invalid || submitting ? "disabled" : ""} sell-block__btn`}
				disabled={invalid || submitting}
			>
				Продолжить
			</button>
		</form>
	);
};

export default reduxForm<{}, {}>({
	form: "sell-info-form",
	validate,
})(SellInfo);
