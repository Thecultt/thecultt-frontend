import React from "react";
import { NavLink, Link } from "react-router-dom";

const HeaderUserMenu: React.FC = () => {
	return (
		<div className="header-block-user-menu">
			<div className="header-block-user-menu-block">
				{localStorage.getItem("accessToken") ? <>
					<NavLink
						to="/none"
						className={({ isActive }) =>
							`header-block-user-menu-block__link ${isActive ? "active" : ""}`
						}
					>
						Мои продажи
					</NavLink>
					<NavLink
						to="/cabinet/history"
						className={({ isActive }) =>
							`header-block-user-menu-block__link ${isActive ? "active" : ""}`
						}
					>
						Мои заказы
					</NavLink>
					<NavLink
						to="/cabinet/favorites"
						className={({ isActive }) =>
							`header-block-user-menu-block__link ${isActive ? "active" : ""}`
						}
					>
						Избранное
					</NavLink>
					<NavLink
						to="/cabinet/waiting"
						className={({ isActive }) =>
							`header-block-user-menu-block__link ${isActive ? "active" : ""}`
						}
					>
						Лист ожидания
					</NavLink>
					<NavLink
						to="/cabinet/sell"
						className={({ isActive }) =>
							`header-block-user-menu-block__link ${isActive ? "active" : ""}`
						}
					>
						Продать

						<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path id="Vector" d="M7 1.29297L8.854 5.04897L13 5.65497L10 8.57697L10.708 12.705L7 10.755L3.292 12.705L4 8.57697L1 5.65497L5.146 5.04897L7 1.29297Z" stroke="#838383" fill="#F7F4F0" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</NavLink>
					<NavLink
						to="/cabinet/setting"
						className={({ isActive }) =>
							`header-block-user-menu-block__link ${isActive ? "active" : ""}`
						}
					>
						Мой аккаунт
					</NavLink>
				</> : <>
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
				</>}
			</div>

			<div className="header-block-user-menu-block">
				<NavLink
					to="/none"
					className={({ isActive }) =>
						`header-block-user-menu-block__link ${isActive ? "active" : ""}`
					}>
					Помощь
				</NavLink>
				<NavLink to="/about"
					className={({ isActive }) =>
						`header-block-user-menu-block__link ${isActive ? "active" : ""}`
					}>
					О нас
				</NavLink>
			</div>
		</div>
	);
};

export default HeaderUserMenu;
