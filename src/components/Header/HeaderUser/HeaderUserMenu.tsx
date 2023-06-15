import React from "react";
import {Link} from "react-router-dom";

const HeaderUserMenu: React.FC = () => {
    return (
        <div className="header-block-user-menu">
            <div className="header-block-user-menu-block">
                <Link
                    to="#reglog"
                    className="header-block-user-menu-block__link"
                >
                    Войти
                </Link>
                <Link
                    to="#reglog"
                    className="header-block-user-menu-block__link"
                >
                    Зарегистрироваться
                </Link>
            </div>

            <div className="header-block-user-menu-block">
                <Link to="/" className="header-block-user-menu-block__link">
                    Помощь
                </Link>
                <Link to="/" className="header-block-user-menu-block__link">
                    О нас
                </Link>
            </div>
        </div>
    );
};

export default HeaderUserMenu;
