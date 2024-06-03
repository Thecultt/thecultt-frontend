import React from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'usehooks-ts';

import { CabinetMenuMedia } from 'src/components';
import { MEDIA_SIZES } from 'src/constants/styles';
import { getClassNames } from 'src/functions/getClassNames';

const CabinetMenu: React.FC = () => {
    const isMobile = useMediaQuery(`(max-width: ${MEDIA_SIZES.tablet})`);

    return (
        <>
            {!isMobile ? (
                <div className="cabinet-menu">
                    <NavLink
                        to="/cabinet/history"
                        className={({ isActive }) => getClassNames('cabinet-menu__item', { active: isActive })}
                    >
                        История заказов
                    </NavLink>
                    <NavLink
                        to="/cabinet/sells"
                        className={({ isActive }) => getClassNames('cabinet-menu__item', { active: isActive })}
                    >
                        Мои продажи
                    </NavLink>
                    <NavLink
                        to="/cabinet/favorites"
                        className={({ isActive }) => getClassNames('cabinet-menu__item', { active: isActive })}
                    >
                        Избранное
                    </NavLink>
                    <NavLink
                        to="/cabinet/waiting"
                        className={({ isActive }) => getClassNames('cabinet-menu__item', { active: isActive })}
                    >
                        Лист ожидания
                    </NavLink>
                    <NavLink
                        to="/cabinet/setting"
                        className={({ isActive }) => getClassNames('cabinet-menu__item', { active: isActive })}
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
