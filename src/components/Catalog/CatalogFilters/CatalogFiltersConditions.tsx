import React from "react";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../../../hooks/useTypedSelector";

import { setFiltersConditionsProduct } from "../../../redux/actions/products";

import { CatalogFiltersBlockWrapper, Checkbox } from "../../";

interface CatalogFiltersConditionsProps {
	conditions: string[];
}

const CatalogFiltersConditions: React.FC<CatalogFiltersConditionsProps> = ({
	conditions,
}) => {
	const dispatch = useDispatch();

	const { filters } = useTypedSelector(({ products }) => products)

	const onClickSetCondition = (condition: string) => {
		dispatch(setFiltersConditionsProduct(condition));
	};

	return (
		<CatalogFiltersBlockWrapper title="Состояние">
			{conditions.map((condition, index) => (
				<div
					className="catalog-filters-block-content-checkbox"
					key={`catalog-filters-block-content-conditions-checkbox-${index}`}
				>
					<Checkbox
						id={`catalog-filters-block-content-conditions-checkbox-${index}`}
						label={condition}
						onChange={() => onClickSetCondition(condition)}
						checked={Object.keys(filters.conditions).find((filtersCondition) => (
							condition === filtersCondition
						)) ? true : false}
					/>
				</div>
			))}
		</CatalogFiltersBlockWrapper>
	);
};

export default CatalogFiltersConditions;
