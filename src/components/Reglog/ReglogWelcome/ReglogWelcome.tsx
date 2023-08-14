import React from "react";
import {Link} from "react-router-dom";

const ReglogWelcome: React.FC = () => {
    return (
        <div className="reglog-content-welcome">
            <h3 className="reglog-content-welcome__title">
                Добро пожаловать в The Cultt 🎉
            </h3>
            <p className="reglog-content-welcome__description">
                Спасибо, что формируете КУЛЬТуру нового потребления вместе с
                нами! Продавайте, покупайте и обменивайте люксовые сумки, обувь
                и аксессуары на платформе THE CULTT
            </p>
            <Link to="/" className="btn reglog-content-welcome__link">
                Начать пользоваться
            </Link>
        </div>
    );
};

export default ReglogWelcome;
