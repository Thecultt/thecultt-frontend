import React from 'react';
import { useDispatch } from 'react-redux';
import { reduxForm, InjectedFormProps, formValueSelector, Field } from 'redux-form';

import { CabinetSellStepKeys } from 'src/redux/types/ICabinetSell';
import { setCabinetSellCurrentStep } from 'src/redux/actions/cabinet_sell';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { RenderSelect, SellBackBtn } from 'src/components';

import validate from './validate';

const SellChoiceCategory: React.FC<{} & InjectedFormProps<{}, {}>> = ({
	handleSubmit,
	submitting,
	initialize,
}) => {
	const dispatch = useDispatch();

	const initCategory: any = localStorage.getItem('sell-info-global-category');

	const [currentCategory, setCurrentCategory] = React.useState<string>('');

	const { parameters } = useTypedSelector(({ cabinet_sell }) => cabinet_sell);
	const selector = formValueSelector('sell-info-form');

	const { brandValue, conditionValue, defectsValue, categoryValue, modelValue, priceValue, isBuyTheCulttValue } =
		useTypedSelector((state) => {
			const { brand, condition, defects, category, model, price, isBuyTheCultt } = selector(
				state,
				'brand',
				'condition',
				'defects',
				'category',
				'model',
				'price',
				'isBuyTheCultt',
			);
			return {
				brandValue: brand,
				conditionValue: condition,
				defectsValue: defects,
				categoryValue: category,
				modelValue: model,
				priceValue: price,
				isBuyTheCulttValue: isBuyTheCultt,
			};
		});

	React.useEffect(() => {
		if (initCategory) {
			setCurrentCategory(initCategory);
			initialize({ category: initCategory });
		}
	}, []);

	React.useEffect(() => {
		localStorage.setItem(
			'sell-info-form',
			JSON.stringify({
				brand: brandValue,
				condition: conditionValue,
				defects: defectsValue,
				category: categoryValue,
				model: modelValue,
				price: priceValue,
				isBuyTheCultt: isBuyTheCulttValue,
			}),
		);
	}, [brandValue, conditionValue, defectsValue, categoryValue, modelValue, priceValue, isBuyTheCulttValue]);

	const onChangeCategory = (value: string) => {
		if (currentCategory === '') {
			setCurrentCategory(value);
		} else if (value !== currentCategory) {
			setCurrentCategory(value);

			initialize({
				category: value,
			});

			localStorage.removeItem('sell-images-form');
		} else {
			setCurrentCategory(value);
		}
	};
	const onClickBack = () => {
		dispatch(setCabinetSellCurrentStep(CabinetSellStepKeys.COOPERATION));
	};

	return (
		<form onSubmit={handleSubmit} className="sell-block sell-block-choice-category">
			<SellBackBtn onClick={onClickBack} />

			<h3 className="sell-block__title">Выберите категорию</h3>

			<p className="sell-block__subtitle">Выберите категорию вашего товара</p>

			<div className="sell-block-input-wrapper-wrapper">
				<div className="sell-block-select">
					<h4 className="sell-block-select__title">Категория</h4>

					<Field
						component={RenderSelect}
						name="category"
						label="Категория"
						items={Object.keys(parameters)}
						onChangeCutsom={onChangeCategory}
					/>
				</div>
			</div>

			<button className={`btn ${submitting ? 'disabled' : ''} sell-block__btn`} disabled={submitting}>
				Продолжить
			</button>
		</form>
	);
};

export default reduxForm<{}, {}>({
	form: 'sell-choice-category-form',
	validate,
})(SellChoiceCategory);
