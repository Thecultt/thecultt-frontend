import React from "react";

import { checkDeclension } from "../../../functions/checkDeclension";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

import { CatalogFiltersTopSort } from "../../";

const CatalogFiltersTop: React.FC = () => {
	const { filters, itemsCount } = useTypedSelector(({ products }) => products);

	return (
		<div className="catalog-filters-top">
			<div className="catalog-filters-top-media-btn">
				<button className="catalog-filters-top-media-btn__btn">
					Фильтры
					<svg
						width="10"
						height="10"
						viewBox="0 0 10 10"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clipPath="url(#clip0_3650_56178)">
							<path
								d="M1.66406 8.74967V5.83301"
								stroke="#202020"
								strokeWidth="0.6"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M1.66406 4.16667V1.25"
								stroke="#202020"
								strokeWidth="0.6"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M5 8.75V5"
								stroke="#202020"
								strokeWidth="0.6"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M5 3.33333V1.25"
								stroke="#202020"
								strokeWidth="0.6"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M8.33594 8.75033V6.66699"
								stroke="#202020"
								strokeWidth="0.6"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M8.33594 5V1.25"
								stroke="#202020"
								strokeWidth="0.6"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M0.414062 5.83301H2.91406"
								stroke="#202020"
								strokeWidth="0.6"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M3.75 3.33301H6.25"
								stroke="#202020"
								strokeWidth="0.6"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M7.08594 6.66699H9.58594"
								stroke="#202020"
								strokeWidth="0.6"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</g>
						<defs>
							<clipPath id="clip0_3650_56178">
								<rect width="10" height="10" fill="white" />
							</clipPath>
						</defs>
					</svg>
				</button>

				<button className="catalog-filters-top-media-btn__btn">
					Сортировать
					<svg
						width="9"
						height="6"
						viewBox="0 0 9 6"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							id="Vector"
							d="M1 1.25L4.5 4.75L8 1.25"
							stroke="#202020"
							strokeWidth="0.6"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>
			</div>

			<div className="catalog-filters-top-title">
				<p className="catalog-filters-top-title__title">
					{Object.keys(filters.categories).length ? Object.keys(filters.categories).map((category, index) => `${category}${Object.keys(filters.categories).length === index+1 ? "" : ", "}`) : "Новинки"}
				</p>

				<p className="catalog-filters-top-title__count">
					{
						checkDeclension(itemsCount, [
							"товар",
							"товара",
							"товаров",
						]).title
					}
				</p>
			</div>

			<CatalogFiltersTopSort />
		</div>
	);
};

export default CatalogFiltersTop;
