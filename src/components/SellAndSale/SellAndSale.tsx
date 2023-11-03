import React from "react";
import { Link } from "react-router-dom";

import Bag1 from "../../assets/images/sell-and-sale/bag1.png";
import Bag2 from "../../assets/images/sell-and-sale/bag2.png";
import SellAndSaleMedia from "../../assets/images/sell-and-sale/sell-and-sale-media.jpg";

const SellAndSale: React.FC = () => {
	return (
		<>
			{window.innerWidth > 1200 ? (
				<section className="sell-and-sale">
					<div className="container">
						<div className="sell-and-sale-wrapper">
							<img
								src={Bag1}
								alt=""
								className="sell-and-sale__bag left"
							/>
							<img
								src={Bag2}
								alt=""
								className="sell-and-sale__bag right"
							/>

							<div className="sell-and-sale-text">
								<h2 className="sell-and-sale-text__title">
									Запускай Круговорот сумок с THE CULTT
								</h2>
								<p className="sell-and-sale-text__description">
									Мы оценим ваш лот и предложим депозит в размере его стоимости на покупку нового лота на нашем сайте
								</p>
								<Link to="/sell" className="btn sell-and-sale-text__btn">
									Начать продавать
								</Link>
							</div>
						</div>
					</div>
				</section>
			) : (
				<section className="sell-and-sale-media">
					<div className="container">
						<div className="sell-and-sale-media-wrapper" style={{ backgroundImage: `url("${SellAndSaleMedia}")` }}>
							<div className="sell-and-sale-media-text">
								<h2 className="sell-and-sale-media-text__title">
									Запускай Круговорот сумок с THE CULTT
								</h2>
								<p className="sell-and-sale-media-text__description">
									Мы оценим ваш лот и предложим депозит в размере его стоимости на покупку нового лота на нашем сайте
								</p>
								<Link to="/sell" className="btn-regular white sell-and-sale-media-text__btn">
									Начать продавать
								</Link>
							</div>
						</div>
					</div>
				</section>
			)}
		</>
	);
};

export default SellAndSale;
