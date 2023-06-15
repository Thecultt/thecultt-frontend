import React from "react";

const CatalogFiltersTop: React.FC = () => {
    return (
        <div className="catalog-filters-top">
            <p className="catalog-filters-top__count">1,022 товара</p>

            <div className="catalog-filters-top-sort">
                <p className="catalog-filters-top-sort__title">
					Сортировать по: Самые новоые
					
                    <svg
                        width="14"
                        height="9"
                        viewBox="0 0 14 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 1.5L7 7.5L13 1.5"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </p>
            </div>
        </div>
    );
};

export default CatalogFiltersTop;
