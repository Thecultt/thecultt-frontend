import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { reduxForm, InjectedFormProps, Field } from 'redux-form';

import { useTypedSelector } from '../../hooks/useTypedSelector';

import { CabinetSellTypes, CabinetSellStepKeys } from '../../redux/types/ICabinetSell';

import { setCabinetSellCurrentType } from '../../redux/actions/cabinet_sell';

import { RenderSelect, RenderInputHints } from '../../components/';

const SellAdmin: React.FC = () => {
    const dispatch = useDispatch();

    const { currentType, parameters } = useTypedSelector(({ cabinet_sell }) => cabinet_sell);

    const [currentCategory, setCurrentCategory] = React.useState<string>('');
    const [currentBrand, setCurrentBrand] = React.useState<string>('');

    const [brands, setBrands] = React.useState<{ title: string; value: string }[]>([]);
    const [models, setModels] = React.useState<{ title: string; value: string }[]>([]);

    const types = [
        {
            title: 'Продажа',
            type: CabinetSellTypes.SELL,
        },

        {
            title: 'Обмен',
            type: CabinetSellTypes.EXCHANGE,
        },
    ];

    React.useEffect(() => {
        if (parameters[currentCategory]) {
            parameters[currentCategory].brands.map((brand) => {
                if (brand.name === currentBrand) {
                    setModels(
                        brand.models.map((model) => ({
                            title: model.name,
                            value: model.name,
                        })),
                    );
                }
            });

            setBrands(
                parameters[currentCategory].brands.map((brand) => ({
                    title: brand.name,
                    value: brand.name,
                })),
            );
        }
    }, [currentCategory]);

    const onChangeCategory = (value: string) => {
        setCurrentCategory(value);
    };

    const onChangeInputBrand = (value: string) => {
        const newBrands: { title: string; value: string }[] = [];

        parameters[currentCategory].brands.map((brand) => {
            if (brand.name.toLowerCase().indexOf(value.toLowerCase()) !== -1) {
                newBrands.push({ title: brand.name, value: brand.name });
            }
        });

        setCurrentBrand(value);
        setBrands(newBrands);

        const newModels: { title: string; value: string }[] = [];

        parameters[currentCategory].brands.map((brand) => {
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

        parameters[currentCategory].brands.map((brand) => {
            if (brand.name === currentBrand) {
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

    return (
        <div className="sell-admin">
            <div className="container">
                <form className="sell-admin-wrapper">
                    <div className="sell-block">
                        <h3 className="sell-block__title">Вариант сотрудничества</h3>
                        <div className="sell-block-cooperation-type-block-wrapper">
                            {types.map((type, index) => (
                                <button
                                    className={`sell-block-cooperation-type-block ${type.type === currentType ? 'active' : ''}`}
                                    key={`sell-block-cooperation-type-block-${index}`}
                                    onClick={() => dispatch(setCabinetSellCurrentType(type.type))}
                                >
                                    <h4 className="sell-block-cooperation-type-block__title">{type.title}</h4>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* <div className="sell-block">
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
					</div> */}
                </form>
            </div>
        </div>
    );
};

export default SellAdmin;
