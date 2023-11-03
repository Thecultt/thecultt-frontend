import React from "react";
import { NumericFormat } from "react-number-format";

import { CartItem } from "../../models/ICartItem";

interface CartItemBlockProps extends CartItem {
	hiddenCheck?: boolean;

	changeCheck?: () => void;
	removeItem: () => void;
}

const CartItemBlock: React.FC<CartItemBlockProps> = ({
	hiddenCheck,
	checked,
	image,
	manufacturer,
	name,
	price,
	changeCheck,
	removeItem,
}) => {
	return (
		<div className={`cart-item ${checked ? "" : "disabled"}`}>
			<div className="cart-item-content">
				{hiddenCheck ? null : (
					<div
						className="cart-item-content-check"
						onClick={changeCheck}
					>
						{checked ? (
							<svg
								width="18"
								height="18"
								viewBox="0 0 18 18"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect
									width="18"
									height="17.97"
									rx="4"
									fill="#285141"
								/>
								<path
									d="M5.5 8.54688L8.125 11.1719L12.5 6.79688"
									stroke="#F1EDE8"
									strokeLinecap="round"
								/>
							</svg>
						) : (
							<svg
								width="18"
								height="18"
								viewBox="0 0 18 18"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect
									x="0.25"
									y="0.265625"
									width="17.5"
									height="17.47"
									rx="3.75"
									stroke="#838383"
									strokeWidth="0.5"
								/>
							</svg>
						)}
					</div>
				)}

				<div
					className="cart-item-content-image"
					style={{
						backgroundImage: `url('${image}')`,
					}}
				></div>

				<div className="cart-item-content-text">
					<p className="cart-item-content-text__brand">
						{manufacturer}
					</p>
					<p className="cart-item-content-text__model">
						{name}
					</p>
					<p className="cart-item-content-text__sum">
						<NumericFormat
							value={price}
							displayType={"text"}
							thousandSeparator={" "}
							renderText={(formattedValue: string) => (
								<>
									{parseInt(
										formattedValue.split(" ").join("")
									) >= 10000
										? formattedValue
										: parseInt(
											formattedValue.split(" ").join("")
										)}
								</>
							)}
						/>{" "}
						₽
					</p>
				</div>
			</div>

			<div
				className="cart-item-remove"
				onClick={removeItem}
			>
				<svg
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M3 5.2H4.6M4.6 5.2H17.4M4.6 5.2V16.4C4.6 16.8243 4.76857 17.2313 5.06863 17.5314C5.36869 17.8314 5.77565 18 6.2 18H14.2C14.6243 18 15.0313 17.8314 15.3314 17.5314C15.6314 17.2313 15.8 16.8243 15.8 16.4V5.2M7 5.2V3.6C7 3.17565 7.16857 2.76869 7.46863 2.46863C7.76869 2.16857 8.17565 2 8.6 2H11.8C12.2243 2 12.6313 2.16857 12.9314 2.46863C13.2314 2.76869 13.4 3.17565 13.4 3.6V5.2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>
		</div>
	);
};

export default CartItemBlock;
