import React from "react";
import { Link } from "react-router-dom";

const ReglogWelcome: React.FC = () => {
	return (
		<div className="reglog-content-text">
			<h3 className="reglog-content-text__title">
				Добро пожаловать в THE CULTT  🎉
			</h3>
			<p className="reglog-content-text__description">
				Спасибо, что формируете КУЛЬТуру нового потребления вместе с нами! Продавайте, покупайте и обменивайте люксовые сумки, обувь и аксессуары на платформе THE CULTT
			</p>
			<Link to="/" className="btn reglog-content-text__link">
				Начать пользоваться
			</Link>
		</div>
	);
};

export default ReglogWelcome;
