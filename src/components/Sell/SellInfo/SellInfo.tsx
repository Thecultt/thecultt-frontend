import React from "react";
import { useDispatch } from "react-redux";
import { reduxForm, InjectedFormProps, Field } from "redux-form";

import { CabinetSellStepKeys } from "../../../redux/types/ICabinetSell";

import { setCabinetSellCurrentStep } from "../../../redux/actions/cabinet_sell";

import { useTypedSelector } from "../../../hooks/useTypedSelector";

import { RenderInput, RenderSelect, RenderSelectArray, SellBackBtn } from "../../";

import validate from './validate'

const SellInfo: React.FC<{} & InjectedFormProps<{}, {}>> = ({
	handleSubmit,
	invalid,
	submitting,
	initialize,
}) => {
	const dispatch = useDispatch()

	const [currentCategory, setCurrentCategory] = React.useState<string>("")

	const { categories, isLoaded } = useTypedSelector(({ products_filters }) => products_filters)

	React.useEffect(() => {
		if (isLoaded) {
			const data: any = localStorage.getItem("sell-info-form")

			initialize(JSON.parse(data))
		}
	}, [isLoaded])

	return (
		<form onSubmit={handleSubmit} className="sell-block sell-block-info">
			<SellBackBtn onClick={() => dispatch(setCabinetSellCurrentStep(CabinetSellStepKeys.COOPERATION))} />

			<h3 className="sell-block__title">Информация о товаре</h3>
			<p className="sell-block__subtitle">
				Заполните детальную информацию о продаваемом товаре.
			</p>

			<div className="sell-block-select">
				<h4 className="sell-block-select__title">Категория товара</h4>

				<Field
					component={RenderSelect}
					name="category"
					label="Категория товара"
					items={Object.keys(categories)}
					onChangeCutsom={(value: string) => setCurrentCategory(value)}
				/>
			</div>

			<div className="sell-block-select">
				<h4 className="sell-block-select__title">Бренд товара</h4>

				<Field
					component={RenderSelect}
					name="brand"
					label="Бренд товара"
					items={categories[currentCategory] ? categories[currentCategory].manufacturer : []}
					disabled={categories[currentCategory] ? false : true}
				/>
			</div>

			<div className="sell-block-select">
				<h4 className="sell-block-select__title">Модель товара</h4>

				<Field component={RenderInput} name="model" label="Модель товара" bgWhite />
			</div>

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

				<Field component={RenderSelect} name="condition" label="Состояние товара" items={["Новое", "Отличное", "Хорошее", "Винтиаж"]} />
			</div>

			<div className="sell-block-select">
				<h4 className="sell-block-select__title">Наличие дефектов</h4>

				<Field component={RenderSelectArray} name="deffects" label="Наличие дефектов" items={["Деффект 1", "Деффект 2", "Деффект 3"]} />
			</div>

			{currentCategory === "Обувь" ? <div className="sell-block-select">
				<h4 className="sell-block-select__title">Размер</h4>

				<Field component={RenderInput} name="size" label="Размер" bgWhite />
			</div> : null}

			<div className="sell-block-select">
				<h4 className="sell-block-select__title">Комплект</h4>

				<Field
					component={RenderSelectArray}
					name="set"
					label="Комплект"
					items={[
						"Карточка",
						"Пыльник",
						"Ремень",
						"Коробка",
						"Брелок",
						"Кошелек",
						"Ключ",
						"Отсутствует",
					]}
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
			</div>

			<button
				className={`btn ${invalid || submitting ? "disabled" : ""} sell-block__btn`}
				disabled={invalid ||  submitting}
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
