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
									Клиентам
								</h5>
								<Link
									to={"/auth"}
									className="footer-block-menu-block__link"
								>
									Гарантия подлинности
								</Link>
								<Link
									to={"/faq-return"}
									className="footer-block-menu-block__link"
								>
									Возврат
								</Link>
								<Link
									to={"/faq-delivery"}
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
									to={""}
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
								<Link
									to={""}
									className="footer-block-menu-block__link"
								>
									Карьера
								</Link>
								<Link
									to={""}
									className="footer-block-menu-block__link"
								>
									Устойчивое развитие
								</Link>
								<a
									href="https://resalereport2023.ru"
									className="footer-block-menu-block__link"
								>
									Resale report 2023
								</a>
							</div>

							<div className="footer-block-menu-block">
								<h5 className="footer-block-menu-block__title">
									Связь с нами
								</h5>
								<Link
									to={""}
									className="footer-block-menu-block__link"
								>
									FAQ
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
								className="btn footer-block-telegram__btn"
							>
								<svg
									width="23"
									height="23"
									viewBox="0 0 23 23"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g clipPath="url(#clip0_6906_57)">
										<path
											d="M11.5003 1.86719C5.93433 1.86719 1.41699 6.38452 1.41699 11.9505C1.41699 17.5165 5.93433 22.0339 11.5003 22.0339C17.0663 22.0339 21.5837 17.5165 21.5837 11.9505C21.5837 6.38452 17.0663 1.86719 11.5003 1.86719ZM16.179 8.72386C16.0277 10.317 15.3723 14.189 15.0396 15.9738C14.8984 16.73 14.6161 16.9821 14.3539 17.0124C13.7691 17.0628 13.3254 16.6292 12.7607 16.2561C11.8734 15.6713 11.3692 15.3083 10.5122 14.7436C9.51391 14.0882 10.1592 13.7252 10.734 13.1404C10.8852 12.9891 13.4666 10.6397 13.517 10.4279C13.524 10.3959 13.5231 10.3626 13.5143 10.3309C13.5055 10.2993 13.4891 10.2703 13.4666 10.2464C13.4061 10.196 13.3254 10.2162 13.2548 10.2263C13.1641 10.2464 11.7524 11.1842 8.99966 13.0395C8.59633 13.3118 8.23333 13.4529 7.91066 13.4429C7.54766 13.4328 6.86199 13.2412 6.34774 13.0698C5.71249 12.8681 5.21841 12.7572 5.25874 12.4043C5.27891 12.2228 5.53099 12.0413 6.00491 11.8497C8.94924 10.5691 10.9054 9.72211 11.8835 9.31877C14.6867 8.14911 15.2614 7.94744 15.6446 7.94744C15.7252 7.94744 15.9168 7.9676 16.0378 8.06844C16.1387 8.1491 16.1689 8.26002 16.179 8.34069C16.1689 8.40119 16.1891 8.58269 16.179 8.72386Z"
											fill="#F7F4F0"
										/>
									</g>
									<defs>
										<clipPath id="clip0_6906_57">
											<rect
												width="22"
												height="22"
												fill="white"
												transform="translate(0.5 0.953125)"
											/>
										</clipPath>
									</defs>
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
								to="/"
								className="footer-block-bottom-link__link"
							>
								Публичная оферта
							</Link>
							<Link
								to="/"
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
