import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.svg";

const Footer: React.FC = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-wrapper">
					<Link to="/" className="footer-logo">
						<img
							src={Logo}
							alt="TheCultt"
							className="footer-logo__image"
						/>
					</Link>

					<div className="footer-block">
						<nav className="footer-block-menu">
							<div className="footer-block-menu-block">
								<h5 className="footer-block-menu-block__title">
									Покупателям
								</h5>
								<Link
									to={"/auth"}
									className="footer-block-menu-block__link"
								>
									Гарантия подлинности
								</Link>
								<Link
									to={"/help-return"}
									className="footer-block-menu-block__link"
								>
									Возврат
								</Link>
								<Link
									to={"/help-delivery"}
									className="footer-block-menu-block__link"
								>
									Доставка и оплата
								</Link>
								<Link
									to={""}
									className="footer-block-menu-block__link"
								>
									Лист ожидания
								</Link>
								<Link
									to={"/brands"}
									className="footer-block-menu-block__link"
								>
									Бренды
								</Link>
							</div>

							<div className="footer-block-menu-block">
								<h5 className="footer-block-menu-block__title">
									Продавцам
								</h5>
								<Link
									to={"/sell"}
									className="footer-block-menu-block__link"
								>
									Продать товар
								</Link>
								<Link
									to={"/exchange"}
									className="footer-block-menu-block__link"
								>
									Обменять товар
								</Link>
								<Link
									to={"/concierge"}
									className="footer-block-menu-block__link"
								>
									Консьерж-сервис
								</Link>
								<Link
									to={""}
									className="footer-block-menu-block__link"
								>
									Бренд-лист
								</Link>
							</div>

							<div className="footer-block-menu-block">
								<h5 className="footer-block-menu-block__title">
									О компании
								</h5>
								<Link
									to={"/about"}
									className="footer-block-menu-block__link"
								>
									О компании
								</Link>
								<a
									href="https://www.notion.so/9a26fcf2ac2049feb782bcd967eed574"
									className="footer-block-menu-block__link"
								>
									Карьера
								</a>
								{/* <Link
									to={""}
									className="footer-block-menu-block__link"
								>
									Устойчивое развитие
								</Link> */}
								<a
									href="https://resalereport2023.ru"
									className="footer-block-menu-block__link"
									target="_blank"
								>
									Resale report 2023
								</a>
							</div>

							<div className="footer-block-menu-block">
								<h5 className="footer-block-menu-block__title">
									Связь с нами
								</h5>
								<Link
									to={"/help/all"}
									className="footer-block-menu-block__link"
								>
									Центр помощи
								</Link>
								<Link
									to={"/contact"}
									className="footer-block-menu-block__link"
								>
									Контакты
								</Link>
								<Link
									to={"/visit"}
									className="footer-block-menu-block__link"
								>
									Попасть в офис
								</Link>
							</div>
						</nav>
						<div className="footer-block-telegram">
							<h5 className="footer-block-telegram__title">
								Подписывайтесь на THE CULTT <br /> в Telegram
							</h5>
							<p className="footer-block-telegram__subtitle">
								Ничего лишнего, только лоты мечты, которые вы
								увидите первыми 🤫
							</p>

							<a
								href="https://t.me/thecultt"
								className="btn-regular footer-block-telegram__btn"
							>
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M10 0C15.523 0 20 4.47696 20 10C20 15.523 15.523 20 10 20C4.47696 20 0 15.523 0 10C0 4.47696 4.47696 0 10 0ZM13.4496 14.0761C13.6335 13.5117 14.4952 7.88739 14.6017 6.77913C14.6339 6.44348 14.5278 6.22043 14.32 6.12087C14.0687 6 13.6965 6.06043 13.2648 6.21609C12.6726 6.42957 5.10217 9.64391 4.66478 9.83C4.25 10.0061 3.85783 10.1983 3.85783 10.4765C3.85783 10.6722 3.97391 10.7822 4.29391 10.8965C4.62696 11.0152 5.46565 11.2696 5.96087 11.4061C6.43783 11.5378 6.98087 11.4235 7.28522 11.2343C7.60783 11.0339 11.3309 8.54261 11.5983 8.32435C11.8652 8.10609 12.0783 8.38565 11.86 8.60435C11.6417 8.82261 9.08609 11.303 8.74913 11.6465C8.34 12.0635 8.63043 12.4957 8.90478 12.6687C9.21826 12.8661 11.4726 14.3783 11.8122 14.6209C12.1517 14.8635 12.4961 14.9735 12.8113 14.9735C13.1265 14.9735 13.2926 14.5583 13.4496 14.0761Z" />
								</svg>


								Перейти
							</a>
						</div>
					</div>

					<div className="footer-block footer-block-bottom">
						<p className="footer-block-bottom__copyright">
							© Все права защищены {new Date().getFullYear()}, THE
							CULTT
						</p>
						<div className="footer-block-bottom-link">
							<Link
								to="/help/public-offerte"
								className="footer-block-bottom-link__link"
							>
								Публичная оферта
							</Link>
							<Link
								to="/help/user-agreement"
								className="footer-block-bottom-link__link"
							>
								Пользовательсткое соглашение
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
