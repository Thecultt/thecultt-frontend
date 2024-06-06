import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

import { getClassNames } from 'src/functions/getClassNames';
import { useAuthUser } from 'src/hooks/useAuthUser';

interface HeaderUserMenuInterface {
    state: boolean;
}

const HeaderUserMenu: React.FC<HeaderUserMenuInterface> = ({ state }) => {
    const { search } = useLocation();

    const { isLoggedIn, logout } = useAuthUser();

    return (
        <div
            className={getClassNames('header-block-user-menu', {
                active: state,
            })}
        >
            <div className="header-block-user-menu-block">
                {isLoggedIn ? (
                    <>
                        <NavLink
                            to="/cabinet/history"
                            className={({ isActive }) =>
                                getClassNames('header-block-user-menu-block__link', {
                                    active: isActive,
                                })
                            }
                        >
                            История заказов
                        </NavLink>
                        <NavLink
                            to="/cabinet/sells"
                            className={({ isActive }) =>
                                getClassNames('header-block-user-menu-block__link', {
                                    active: isActive,
                                })
                            }
                        >
                            Мои продажи
                        </NavLink>
                        <NavLink
                            to="/cabinet/favorites"
                            className={({ isActive }) =>
                                getClassNames('header-block-user-menu-block__link', {
                                    active: isActive,
                                })
                            }
                        >
                            Избранное
                        </NavLink>
                        <NavLink
                            to="/cabinet/waiting"
                            className={({ isActive }) =>
                                getClassNames('header-block-user-menu-block__link', {
                                    active: isActive,
                                })
                            }
                        >
                            Лист ожидания
                        </NavLink>
                        <NavLink
                            to="/cabinet/setting"
                            className={({ isActive }) =>
                                getClassNames('header-block-user-menu-block__link', {
                                    active: isActive,
                                })
                            }
                        >
                            Профиль
                        </NavLink>
                    </>
                ) : (
                    <>
                        <Link to={`${search}#reglog`} className="header-block-user-menu-block__link">
                            Войти
                        </Link>
                        <Link to={`${search}#reglog`} className="header-block-user-menu-block__link">
                            Зарегистрироваться
                        </Link>
                    </>
                )}
            </div>

            <div className="header-block-user-menu-block">
                <NavLink
                    to="/help/all"
                    className={({ isActive }) =>
                        getClassNames('header-block-user-menu-block__link', {
                            active: isActive,
                        })
                    }
                >
                    Вопросы и ответы
                </NavLink>

                {isLoggedIn ? (
                    <span className="header-block-user-menu-block__link" onClick={logout}>
                        Выйти
                    </span>
                ) : null}
            </div>
        </div>
    );
};

export default HeaderUserMenu;
