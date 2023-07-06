import React from "react";
import {NavLink} from "react-router-dom";

interface CabinetMenuProps {
	title: string
}

const CabinetMenu: React.FC<CabinetMenuProps> = ({title}) => {
    return (
        <div className="cabinet-menu">
            <h4 className="cabinet-menu__title">{title}</h4>
            <div className="cabinet-menu-items">
                <NavLink
                    to="/cabinet/history"
                    className={({isActive}) =>
                        `cabinet-menu-items__item ${isActive && "active"}`
                    }
                >
                    История Заказов
                </NavLink>
                <NavLink
                    to="/cabinet/"
                    className={({isActive}) =>
                        `cabinet-menu-items__item ${isActive && "active"}`
                    }
                >
                    Мои Продажи
                </NavLink>
                <NavLink
                    to="/cabinet/favorites"
                    className={({isActive}) =>
                        `cabinet-menu-items__item ${isActive && "active"}`
                    }
                >
                    Избранное
                </NavLink>
                <NavLink
                    to="/cabinet/waiting"
                    className={({isActive}) =>
                        `cabinet-menu-items__item ${isActive && "active"}`
                    }
                >
                    Лист ожидания
                </NavLink>
                <NavLink
                    to="/cabinet/"
                    className={({isActive}) =>
                        `cabinet-menu-items__item ${isActive && "active"}`
                    }
                >
                    Мой аккаунт
                </NavLink>
            </div>
        </div>
    );
};

export default CabinetMenu;
