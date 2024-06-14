import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { getCatalogFiltersUrl } from 'src/functions/getCatalogFiltersUrl';

interface ProductInfoBreadCrumbsProps {
    category: string;
    brand: string;
    model: string;
}

const ProductInfoBreadCrumbs: React.FC<ProductInfoBreadCrumbsProps> = ({ category, brand, model }) => {
    const navigate = useNavigate();

    return (
        <div className="product-content-info-bread-crumbs">
            {/* <Link to="/catalog">
				<div className="product-content-info-bread-crumbs-back">
					<svg
						width="26"
						height="27"
						viewBox="0 0 26 27"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect
							y="0.0234375"
							width="26"
							height="26"
							rx="13"
							fill="#F7F4F0"
						/>
						<path
							d="M20 13.0234H6M6 13.0234L13 20.0234M6 13.0234L13 6.02344"
							stroke="#202020"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
			</Link> */}

            <button className="product-content-info-bread-crumbs-back" onClick={() => navigate(-1)}>
                <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.0234375" width="26" height="26" rx="13" fill="#F7F4F0" />
                    <path
                        d="M20 13.0234H6M6 13.0234L13 20.0234M6 13.0234L13 6.02344"
                        stroke="#202020"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            <Link to="/catalog" className="product-content-info-bread-crumbs__item">
                Главная страница
            </Link>

            <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.75 0.5L4.75 4.5L0.75 8.5" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <Link
                to={getCatalogFiltersUrl({
                    categories: [category],
                    sort: 'a',
                })}
                className="product-content-info-bread-crumbs__item"
            >
                {category}
            </Link>

            <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.75 0.5L4.75 4.5L0.75 8.5" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <Link
                to={getCatalogFiltersUrl({
                    categories: [category],
                    brands: [brand],
                    sort: 'a',
                })}
                className="product-content-info-bread-crumbs__item"
            >
                {brand}
            </Link>

            <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.75 0.5L4.75 4.5L0.75 8.5" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <Link
                to={getCatalogFiltersUrl({
                    categories: [category],
                    brands: [brand],
                    models: [model],
                    sort: 'a',
                })}
                className="product-content-info-bread-crumbs__item"
            >
                {model}
            </Link>
        </div>
    );
};

export default ProductInfoBreadCrumbs;
