import React from "react";
import {Link} from "react-router-dom";

const ReglogWelcome: React.FC = () => {
    return (
        <div className="reglog-content-welcome">
            <h3 className="reglog-content-welcome__title">
                Добро пожаловать в The Cultt 🎉
            </h3>
            <p className="reglog-content-welcome__description">
                Спасибо, что меняете культуру потребления вместе с нами! Ваш
                аккаунт готов, осталось только подтвердить e-mail. Письмо от THE
                CULTT уже ждет вас на почте.
            </p>
            <Link to="/" className="btn reglog-content-welcome__link">
                Начать пользоваться
            </Link>
        </div>
    );
};

export default ReglogWelcome;
