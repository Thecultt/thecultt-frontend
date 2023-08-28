import React from "react";
import {NavLink} from "react-router-dom";

const CabinetMenu: React.FC = () => {
    return (
        <div className="cabinet-menu">
            <NavLink
                to="/cabinet/history"
                className={({isActive}) =>
                    `cabinet-menu__item ${isActive && "active"}`
                }
            >
                История Заказов
            </NavLink>
            <NavLink
                to="/cabinet/"
                className={({isActive}) =>
                    `cabinet-menu__item ${isActive && "active"}`
                }
            >
                Мои Продажи
            </NavLink>
            <NavLink
                to="/cabinet/favorites"
                className={({isActive}) =>
                    `cabinet-menu__item ${isActive && "active"}`
                }
            >
                Избранное
            </NavLink>
            <NavLink
                to="/cabinet/waiting"
                className={({isActive}) =>
                    `cabinet-menu__item ${isActive && "active"}`
                }
            >
                Лист ожидания
            </NavLink>
            <NavLink
                to="/cabinet/setting"
                className={({isActive}) =>
                    `cabinet-menu__item ${isActive && "active"}`
                }
            >
                Профиль
            </NavLink>
        </div>
    );
};

export default CabinetMenu;
