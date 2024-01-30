import React from "react";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../../../hooks/useTypedSelector";

import { setFiltersSortProduct } from "../../../redux/actions/products";

const CatalogFiltersTopSort: React.FC = () => {
	const dispatch = useDispatch();

	const { filters } = useTypedSelector(({ products }) => products);

	const [state, setState] = React.useState<boolean>(false);
	const [currentSortKey, setCurrentSortKey] = React.useState<string>("a");

	const ModalRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		if (filters.isParse && filters.sort !== "") setCurrentSortKey(filters.sort)
	}, [filters.isParse, filters.sort])

	React.useEffect(() => {
		document.addEventListener("mousedown", hiddeModal);
		document.addEventListener("touchstart", hiddeModal);

		return () => {
			document.removeEventListener("mousedown", hiddeModal);
			document.removeEventListener("touchstart", hiddeModal);
		};
	}, [ModalRef]);

	const hiddeModal = (e: any) => {
		if (ModalRef.current && !ModalRef.current.contains(e.target)) {
			setState(false);
		}
	};

	const toggleState = () => {
		setState(!state);
	};

	const sortItems: { [key: string]: string } = {
		"a": "новизне",
		"price": "возрастанию цены",
		"-price": "убыванию цены",
		// "f": "популярности"
	}

	const onClickSetItem = (key: string) => {
		setCurrentSortKey(key);

		dispatch(setFiltersSortProduct(key));

		setTimeout(() => {
			setState(false);
		}, 200);
	};

	return (
		<div className="catalog-filters-top-sort">
			<div
				className="catalog-filters-top-sort-title"
				onClick={toggleState}
			>
				<p className="catalog-filters-top-sort-title__title">

					Сортировать по: {sortItems[currentSortKey]}
					<svg
						width="14"
						height="7"
						viewBox="0 0 14 7"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1 0.5L7 6.5L13 0.5"
							stroke="#202020"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</p>
			</div>

			<div
				className={`catalog-filters-top-sort-modal ${state ? "active" : ""
					}`}
				ref={ModalRef}
			>
				{Object.keys(sortItems).map((key, index) => (
					<div
						className="checkbox-wrapper catalog-filters-top-sort-modal-item"
						key={`catalog-filters-top-sort-modal-item-${index}`}
						onClick={() => onClickSetItem(key)}
					>
						<input
							id={`catalog-filters-top-sort-modal-item-${index}`}
							type="radio"
							className="checkbox"
							name="sort"
							defaultChecked={key === currentSortKey}
						/>

						<label
							htmlFor={`catalog-filters-top-sort-modal-item-${index}`}
							className={`checkbox__label`}
						>
							<p className="checkbox__label__text">
								{sortItems[key]}
							</p>
						</label>
					</div>
				))}
			</div>
		</div>
	);
};

export default CatalogFiltersTopSort;
