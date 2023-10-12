import React from "react";
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
	initialize
}) => {
	const dispatch = useDispatch()

	const [currentCategory, setCurrentCategory] = React.useState<string>("")
	const [currentBrand, setCurrentBrand] = React.useState<string>("")

	const [brands, setBrands] = React.useState<{ title: string, value: string }[]>([])
	const [models, setModels] = React.useState<{ title: string, value: string }[]>([])

	const { isLoadedParameters, parameters } = useTypedSelector(({ cabinet_sell }) => cabinet_sell)

	React.useEffect(() => {
		const data: any = JSON.parse(localStorage.getItem("sell-info-form") as any)

		if (isLoadedParameters && data) {
			if (data.category) {
				setCurrentCategory(data.category)
			}

			if (data.brand) {
				setCurrentBrand(data.brand)
			}

			initialize(data)
		}
	}, [isLoadedParameters])

	React.useEffect(() => {
		if (currentCategory !== "") {
			initialize({
				category: currentCategory,
				brand: "",
				models: "",
				condition: "",
				defects: "",
				size: "",
				set: "",
				price: "",
				isBuyTheCultt: "",
			})

			setCurrentBrand("")

			// console.log("initialize")

			// initialize({
			// 	category: currentCategory,
			// 	isBuyTheCultt: "",
			// })
		}
	}, [currentCategory])

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

	const onChangeInputBrand = (value: string) => {
		const newBrands: { title: string, value: string }[] = []

		parameters[currentCategory].brands.map(brand => {
			if (brand.name.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
				newBrands.push({ title: brand.name, value: brand.name })
			}
		})

		setCurrentBrand(value)
		setBrands(newBrands)
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

	return (
		<form onSubmit={handleSubmit} className="sell-block sell-block-info">
			<SellBackBtn onClick={() => dispatch(setCabinetSellCurrentStep(CabinetSellStepKeys.COOPERATION))} />

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
						onChangeCutsom={(value: string) => setCurrentCategory(value)}
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

						<svg
							width="18"
							height="18"
							viewBox="0 0 18 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clipPath="url(#clip0_6785_19443)">
								<path
									d="M9 12V9M9 6H9.0075M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z"
									stroke="#202020"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</g>
							<defs>
								<clipPath id="clip0_6785_19443">
									<rect width="18" height="18" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</h4>

					<Field
						component={RenderSelect}
						name="condition"
						label="Состояние товара"
						items={parameters[currentCategory] ? parameters[currentCategory].conditions.map(condition => condition.name) : []}
						disabled={parameters[currentCategory] ? false : true}
					/>
				</div>

				{/* <div className="sell-block-select">
					<h4 className="sell-block-select__title">Наличие дефектов</h4>

					<Field
						component={RenderSelectArray}
						name="defects"
						label="Наличие дефектов"
						items={parameters[currentCategory] ? ["Нет дефектов", ...parameters[currentCategory].defects.map(defect => defect.name)] : []}
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

						<svg
							width="18"
							height="18"
							viewBox="0 0 18 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clipPath="url(#clip0_6785_19443)">
								<path
									d="M9 12V9M9 6H9.0075M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z"
									stroke="#202020"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</g>
							<defs>
								<clipPath id="clip0_6785_19443">
									<rect width="18" height="18" fill="white" />
								</clipPath>
							</defs>
						</svg>
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
						<svg
							width="18"
							height="18"
							viewBox="0 0 18 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clipPath="url(#clip0_6785_19443)">
								<path
									d="M9 12V9M9 6H9.0075M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z"
									stroke="#202020"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</g>
							<defs>
								<clipPath id="clip0_6785_19443">
									<rect width="18" height="18" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</h4>

					<Field
						component={RenderSelect}
						name="isBuyTheCultt"
						label="Товар приобретен в THE CULTT"
						items={["Да", "Нет"]} />
				</div> */}
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
