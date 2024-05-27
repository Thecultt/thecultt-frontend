import React from 'react';
import { NavLink, Link } from 'react-router-dom';

interface HeaderUserMenuInterface {
    state: boolean;
}

const HeaderUserMenu: React.FC<HeaderUserMenuInterface> = ({ state }) => {
    const onClickLogout = () => {
        localStorage.removeItem('accessToken');

        window.location.reload();
    };

    return (
        <div className={`header-block-user-menu ${state ? 'active' : ''}`}>
            <div className="header-block-user-menu-block">
                {localStorage.getItem('accessToken') ? (
                    <>
                        <NavLink
                            to="/cabinet/history"
                            className={({ isActive }) =>
                                `header-block-user-menu-block__link ${isActive ? 'active' : ''}`
                            }
                        >
                            История заказов
                        </NavLink>
                        <NavLink
                            to="/cabinet/sells"
                            className={({ isActive }) =>
                                `header-block-user-menu-block__link ${isActive ? 'active' : ''}`
                            }
                        >
                            Мои продажи
                        </NavLink>
                        <NavLink
                            to="/cabinet/favorites"
                            className={({ isActive }) =>
                                `header-block-user-menu-block__link ${isActive ? 'active' : ''}`
                            }
                        >
                            Избранное
                        </NavLink>
                        <NavLink
                            to="/cabinet/waiting"
                            className={({ isActive }) =>
                                `header-block-user-menu-block__link ${isActive ? 'active' : ''}`
                            }
                        >
                            Лист ожидания
                        </NavLink>
                        <NavLink
                            to="/cabinet/setting"
                            className={({ isActive }) =>
                                `header-block-user-menu-block__link ${isActive ? 'active' : ''}`
                            }
                        >
                            Профиль
                        </NavLink>
                    </>
                ) : (
                    <>
                        <Link to="#reglog" className="header-block-user-menu-block__link">
                            Войти
                        </Link>
                        <Link to="#reglog" className="header-block-user-menu-block__link">
                            Зарегистрироваться
                        </Link>
                    </>
                )}
            </div>

            <div className="header-block-user-menu-block">
                <NavLink
                    to="/help/all"
                    className={({ isActive }) => `header-block-user-menu-block__link ${isActive ? 'active' : ''}`}
                >
                    Вопросы и ответы
                </NavLink>

                {localStorage.getItem('accessToken') ? (
                    <>
                        <span className="header-block-user-menu-block__link" onClick={onClickLogout}>
                            Выйти
                        </span>
                    </>
                ) : null}
            </div>
        </div>
    );
};

export default HeaderUserMenu;
