import React from "react";
import { Link } from "react-router-dom";
import { NumericFormat } from "react-number-format";

import { ProductPage } from "../../../models/IProduct";

interface ProductInfoTitleProps extends ProductPage { }

const ProductInfoTitle: React.FC<ProductInfoTitleProps> = ({
	article,
	manufacturer,
	name,
	price,
	description,
}) => {
	return (
		<div className="product-content-info-title">
			<p className="product-content-info-title__vendor">Артикул: C178</p>
			<h2 className="product-content-info-title__model">{name}</h2>
			<Link to="/" className="product-content-info-title__brand">
				{manufacturer}
			</Link>
			<h3 className="product-content-info-title__price">
				{" "}
				<NumericFormat
					value={price}
					displayType={"text"}
					thousandSeparator={" "}
					renderText={(formattedValue: string) => (
						<>
							{parseInt(formattedValue.split(" ").join("")) >=
								10000
								? formattedValue
								: parseInt(formattedValue.split(" ").join(""))}
						</>
					)}
				/>{" "}
				₽
			</h3>
			{/* <p className="product-content-info-title__description">
                {description}
            </p> */}
			<div className="product-content-info-title-btn">
				<button className="btn product-content-info-title-btn__btn add">
					Добавить в корзину
				</button>

				<button className="btn-regular product-content-info-title-btn__btn fav">
					В избранное
					<svg
						width="20"
						height="16"
						viewBox="0 0 20 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M14.0188 0C12.2976 0 10.7905 0.740174 9.85116 1.9913C8.91177 0.740174 7.40475 0 5.68351 0C4.31338 0.00154431 2.9998 0.546512 2.03097 1.51534C1.06214 2.48418 0.517169 3.79775 0.515625 5.16789C0.515625 11.0026 9.16683 15.7254 9.53525 15.9204C9.63236 15.9727 9.7409 16 9.85116 16C9.96142 16 10.07 15.9727 10.1671 15.9204C10.5355 15.7254 19.1867 11.0026 19.1867 5.16789C19.1852 3.79775 18.6402 2.48418 17.6714 1.51534C16.7025 0.546512 15.3889 0.00154431 14.0188 0ZM9.85116 14.5701C8.32913 13.6832 1.84927 9.64311 1.84927 5.16789C1.8506 4.15139 2.25498 3.1769 2.97376 2.45813C3.69253 1.73936 4.66701 1.33497 5.68351 1.33365C7.30473 1.33365 8.66588 2.19718 9.23435 3.58418C9.28459 3.70648 9.37005 3.81109 9.47988 3.88471C9.58971 3.95832 9.71894 3.99763 9.85116 3.99763C9.98338 3.99763 10.1126 3.95832 10.2224 3.88471C10.3323 3.81109 10.4177 3.70648 10.468 3.58418C11.0364 2.19468 12.3976 1.33365 14.0188 1.33365C15.0353 1.33497 16.0098 1.73936 16.7286 2.45813C17.4473 3.1769 17.8517 4.15139 17.853 5.16789C17.853 9.63644 11.3715 13.6824 9.85116 14.5701Z"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default ProductInfoTitle;
