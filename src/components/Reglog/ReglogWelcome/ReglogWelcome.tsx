import React from "react";
import {Link} from "react-router-dom";

const ReglogWelcome: React.FC = () => {
    return (
        <div className="reglog-content-welcome">
            <h3 className="reglog-content-welcome__title">
                Добро пожаловать в The Cultt 🎉
            </h3>
            <p className="reglog-content-welcome__description">
                Поздравляем вас с вступлением в нашу семью устойчевого развития
                The Cultt! Ваш аккаунт готов, осталось только подтвердить почту.
                Сообщение уже ждёт вас на почте, это займёт минуту вашего
                времени.
            </p>
            <Link to="/" className="btn reglog-content-welcome__link">
                Начать пользоваться
            </Link>
        </div>
    );
};

export default ReglogWelcome;
