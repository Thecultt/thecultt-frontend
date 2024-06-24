import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { reduxForm, InjectedFormProps, formValueSelector, Field } from 'redux-form';

import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { CabinetSellStepKeys } from 'src/redux/types/ICabinetSell';
import { setCabinetSellCurrentStep, setCabinetSellFormValuesInfo } from 'src/redux/actions/cabinet_sell';
import { getClassNames } from 'src/functions/getClassNames';

import { RenderInput, RenderInputHints, RenderSelect, RenderSelectArray, SellBackBtn } from 'src/components';

import validate from './validate';

const SellInfo: React.FC<{} & InjectedFormProps<{}, {}>> = ({
    handleSubmit,
    invalid,
    submitting,
    initialize,
    initialized,
}) => {
    const dispatch = useDispatch();

    const [brands, setBrands] = React.useState<{ title: string; value: string }[]>([]);
    const [models, setModels] = React.useState<{ title: string; value: string }[]>([]);

    const {
        parameters,
        formValues: { category },
    } = useTypedSelector(({ cabinet_sell }) => cabinet_sell);

    const selector = formValueSelector('sell-info-form');

    const {
        brandValue,
        modelValue,
        conditionValue,
        defectsValue,
        sizeValue,
        kitValue,
        priceValue,
        isBuyTheCulttValue,
    } = useTypedSelector((state) => {
        const { brand, model, condition, defects, size, kit, price, isBuyTheCultt } = selector(
            state,
            'brand',
            'model',
            'condition',
            'defects',
            'size',
            'kit',
            'price',
            'isBuyTheCultt',
        );
        return {
            brandValue: brand,
            modelValue: model,
            conditionValue: condition,
            defectsValue: defects,
            sizeValue: size,
            kitValue: kit,
            priceValue: price,
            isBuyTheCulttValue: isBuyTheCultt,
        };
    });

    // React.useEffect(() => {
    // 	if (data) {
    // 		if (data.category) {
    // 			setCurrentCategory(data.category);
    // 		}

    // 		if (data.brand) {
    // 			setCurrentBrand(data.brand);
    // 		}

    // 		initialize(data);
    // 	}
    // }, []);

    React.useEffect(() => {
        dispatch(
            setCabinetSellFormValuesInfo({
                brand: brandValue,
                model: modelValue,
                condition: conditionValue,
                defects: defectsValue,
                size: sizeValue,
                kit: kitValue,
                price: priceValue,
                isBuyTheCultt: isBuyTheCulttValue,
            }),
        );
    }, [brandValue, conditionValue, defectsValue, modelValue, priceValue, isBuyTheCulttValue]);

    // React.useEffect(() => {
    // 	if (parameters[currentCategory]) {
    // 		parameters[currentCategory].brands.map((brand) => {
    // 			if (brand.name === currentBrand) {
    // 				setModels(
    // 					brand.models.map((model) => ({
    // 						title: model.name,
    // 						value: model.name,
    // 					})),
    // 				);
    // 			}
    // 		});

    // 		setBrands(
    // 			parameters[currentCategory].brands.map((brand) => ({
    // 				title: brand.name,
    // 				value: brand.name,
    // 			})),
    // 		);
    // 	}
    // }, [currentCategory]);

    // const onChangeCategory = (value: string) => {
    // 	if (currentCategory === '') {
    // 		setCurrentCategory(value);
    // 	} else if (value !== currentCategory) {
    // 		setCurrentCategory(value);

    // 		initialize({
    // 			brand: '',
    // 			models: '',
    // 			condition: '',
    // 			defects: '',
    // 			size: '',
    // 			set: '',
    // 			price: '',
    // 			isBuyTheCultt: '',
    // 		});

    // 		localStorage.removeItem('sell-images-form');

    // 		setCurrentBrand('');
    // 	} else {
    // 		setCurrentCategory(value);
    // 	}
    // };

    const onChangeInputBrand = (value: string) => {
        const newBrands: { title: string; value: string }[] = [];

        parameters[category].brands.map((brand) => {
            if (brand.name.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
                newBrands.push({ title: brand.name, value: brand.name });
            }
        });

        // setCurrentBrand(value);
        setBrands(newBrands);

        const newModels: { title: string; value: string }[] = [];

        parameters[category].brands.map((brand) => {
            if (brand.name === value) {
                brand.models.map((model) => {
                    newModels.push({ title: model.name, value: model.name });
                });
            }
        });

        setModels(newModels);
    };

    const onChangeInputModel = (value: string) => {
        const newModels: { title: string; value: string }[] = [];

        parameters[category].brands.map((brand) => {
            if (brand.name === brandValue) {
                brand.models.map((model) => {
                    if (model.name.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
                        newModels.push({
                            title: model.name,
                            value: model.name,
                        });
                    }
                });
            }
        });

        setModels(newModels);
    };

    const onClickBack = () => {
        dispatch(setCabinetSellCurrentStep(CabinetSellStepKeys.COOPERATION));

        // localStorage.removeItem('sell-images-form');
    };

    return (
        <form onSubmit={handleSubmit} className="sell-block sell-block-info">
            <SellBackBtn onClick={onClickBack} />

            <h3 className="sell-block__title">Информация о товаре</h3>

            <p className="sell-block__subtitle">Заполните детальную информацию о продаваемом товаре.</p>

            <div className="sell-block-input-wrapper-wrapper">
                <div className="sell-block-select">
                    <h4 className="sell-block-select__title">Бренд товара</h4>

                    <Field
                        component={RenderInputHints}
                        name="brand"
                        label="Бренд товара"
                        hints={brands}
                        onChangeCustom={(value: string) => onChangeInputBrand(value)}
                        bgWhite
                        ifFreeField
                    />
                </div>

                {category === 'Мужские сумки' || category === 'Женские сумки' ? (
                    <div className="sell-block-select">
                        <h4 className="sell-block-select__title">Модель товара</h4>

                        <Field
                            component={RenderInputHints}
                            name="model"
                            label="Модель товара"
                            hints={models}
                            disabled={brandValue !== '' || !models.length ? false : true}
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
                            <path
                                d="M8.19987 11.1654V8.4987M8.19987 5.83203H8.20376M14.8665 8.4987C14.8665 12.1806 11.8818 15.1654 8.19987 15.1654C4.51797 15.1654 1.5332 12.1806 1.5332 8.4987C1.5332 4.8168 4.51797 1.83203 8.19987 1.83203C11.8818 1.83203 14.8665 4.8168 14.8665 8.4987Z"
                                stroke="#202020"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <span className="message-info-wrapper">
                            <span className="message-info">
                                <ul>
                                    <li>
                                        <span>Новое</span>: лот не был в носке и не имеет повреждений или нюансов. Форма
                                        аксессуара сохранена.
                                    </li>
                                    <li>
                                        <span>Отличное</span>: лот внешне выглядит отлично, аксессуар носился мало и
                                        бережно. Могут присутствовать следующие нюансы: минимальное изменение формы у
                                        сумки, потертость без конкретных видимых дефектов, локальные небольшие
                                        восстановления.
                                    </li>
                                    <li>
                                        <span>Хорошее</span>: присутствуют значительные следы носки. Могут
                                        присутствовать следующие нюансы: отсутствие элементов полного комплекта, загар,
                                        потертости или царапины на коже, пятна на материале, следы носки на подкладке,
                                        потертости на фурнитуре, сумка была в спа
                                    </li>
                                </ul>
                            </span>
                        </span>
                    </h4>

                    <Field
                        component={RenderSelect}
                        name="condition"
                        label="Состояние товара"
                        items={
                            parameters[category]
                                ? parameters[category].conditions.map((condition) => condition.name)
                                : []
                        }
                        // disabled={parameters[category] ? false : true}
                    />
                </div>

                <div className="sell-block-select">
                    <h4 className="sell-block-select__title">Наличие дефектов</h4>

                    <Field
                        component={RenderSelectArray}
                        name="defects"
                        label="Наличие дефектов"
                        items={parameters[category] ? parameters[category].defects.map((defect) => defect.name) : []}
                        // disabled={parameters[currentCategory] ? false : true}
                    />
                </div>

                {category === 'Обувь' ? (
                    <div className="sell-block-select">
                        <h4 className="sell-block-select__title">Размер</h4>

                        <Field component={RenderInput} name="size" label="Размер" bgWhite />
                    </div>
                ) : null}

                <div className="sell-block-select">
                    <h4 className="sell-block-select__title">Комплект</h4>

                    <Field
                        component={RenderSelectArray}
                        name="kit"
                        label="Комплект"
                        items={parameters[category] ? parameters[category].kits.map((kit) => kit.name) : []}
                        // disabled={parameters[currentCategory] ? false : true}
                    />
                </div>

                <div className="sell-block-select">
                    <h4 className="sell-block-select__title">
                        Ожидание по цене
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.19987 11.1654V8.4987M8.19987 5.83203H8.20376M14.8665 8.4987C14.8665 12.1806 11.8818 15.1654 8.19987 15.1654C4.51797 15.1654 1.5332 12.1806 1.5332 8.4987C1.5332 4.8168 4.51797 1.83203 8.19987 1.83203C11.8818 1.83203 14.8665 4.8168 14.8665 8.4987Z"
                                stroke="#202020"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <span className="message-info-wrapper">
                            <span className="message-info">
                                Напишите цену, которую хотели бы получить на руки при продаже товара.
                            </span>
                        </span>
                    </h4>

                    <Field component={RenderInput} name="price" label="Ожидание по цене" bgWhite />
                </div>

                <div className="sell-block-select">
                    <h4 className="sell-block-select__title">
                        Товар приобретен в THE CULTT
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.19987 11.1654V8.4987M8.19987 5.83203H8.20376M14.8665 8.4987C14.8665 12.1806 11.8818 15.1654 8.19987 15.1654C4.51797 15.1654 1.5332 12.1806 1.5332 8.4987C1.5332 4.8168 4.51797 1.83203 8.19987 1.83203C11.8818 1.83203 14.8665 4.8168 14.8665 8.4987Z"
                                stroke="#202020"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <span className="message-info-wrapper">
                            <span className="message-info">
                                Укажите, если ранее товар был приобретен на нашей платформе, на него будут действовать
                                особые условия. <Link to="/exchange">Подробнее</Link>
                            </span>
                        </span>
                    </h4>

                    <Field
                        component={RenderSelect}
                        name="isBuyTheCultt"
                        label="Товар приобретен в THE CULTT"
                        items={['Да', 'Нет']}
                    />
                </div>
            </div>

            <button
                className={getClassNames('btn sell-block__btn', {
                    disabled: submitting,
                })}
                disabled={submitting}
            >
                Продолжить
            </button>
        </form>
    );
};

export default reduxForm<{}, {}>({
    form: 'sell-info-form',
    validate,
})(SellInfo);
