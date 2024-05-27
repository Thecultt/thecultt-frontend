import React from 'react';
import { NavLink } from 'react-router-dom';

import { CabinetMenuMedia } from '../';

const CabinetMenu: React.FC = () => {
    return (
        <>
            {window.innerWidth > 1200 ? (
                <div className="cabinet-menu">
                    <NavLink
                        to="/cabinet/history"
                        className={({ isActive }) => `cabinet-menu__item ${isActive && 'active'}`}
                    >
                        История заказов
                    </NavLink>
                    <NavLink
                        to="/cabinet/sells"
                        className={({ isActive }) => `cabinet-menu__item ${isActive && 'active'}`}
                    >
                        Мои продажи
                    </NavLink>
                    <NavLink
                        to="/cabinet/favorites"
                        className={({ isActive }) => `cabinet-menu__item ${isActive && 'active'}`}
                    >
                        Избранное
                    </NavLink>
                    <NavLink
                        to="/cabinet/waiting"
                        className={({ isActive }) => `cabinet-menu__item ${isActive && 'active'}`}
                    >
                        Лист ожидания
                    </NavLink>
                    <NavLink
                        to="/cabinet/setting"
                        className={({ isActive }) => `cabinet-menu__item ${isActive && 'active'}`}
                    >
                        Профиль
                    </NavLink>
                </div>
            ) : (
                <CabinetMenuMedia />
            )}
        </>
    );
};

export default CabinetMenu;
