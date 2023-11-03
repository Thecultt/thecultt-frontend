import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

import SellInfoMainImage from "../../assets/images/sell-info/sell-info-main-image.jpg";

const SellInfo: React.FC = () => {
	return (
		<section className="sell-info">
			<div className="container">
				<div className="sell-info-wrapper">
					<div className="sell-info-main hover-scale">
						<div className="sell-info-main-text">
							<h2 className="sell-info-main-text__title">
								Продать Лот
							</h2>

							<p className="sell-info-main-text__description">
								У вас в гардеробе, вероятно, есть вещи, которые
								когда-то были любимее, чем сейчас. Самое время
								дать им вторую жизнь. Мы поможем найти
								покупателей для ваших сумок, обуви и
								аксессуаров.
							</p>

							<LinkScroll
								to="sell-choice"
								spy={true}
								smooth={true}
								offset={-150}
								duration={1000}
							>
								<button className="btn sell-info-main-text__btn">
									Отправить заявку
								</button>
							</LinkScroll>
						</div>
						<div
							className="sell-info-main-image"
							style={{
								backgroundImage: `url("${SellInfoMainImage}")`,
							}}
						></div>
					</div>

					<div className="sell-info-cooperation">
						<h2 className="sell-info__title sell-info-cooperation__title">
							Варианты сотрудничества
						</h2>
						<div className="sell-info-cooperation-text hover-scale">
							<h3 className="sell-info-cooperation-text__title">
								Продажа
							</h3>
							<p className="sell-info-cooperation-text__subtitle">
								Мы оценим ваш лот и предложим один из вариантов
								продажи:
							</p>

							<div className="sell-info-cooperation-text-list">
								<h4 className="sell-info-cooperation-text-list__title">
									Выкуп
								</h4>
								<p className="sell-info-cooperation-text-list__subtitle">
									мы согласуем условия, заберем лот и проверим его
									на подлинность в нашем офисе, затем сделаем
									выплату на карту.
								</p>
							</div>

							<div className="sell-info-cooperation-text-list">
								<h4 className="sell-info-cooperation-text-list__title">
									Продажа c комиссией
								</h4>
								<p className="sell-info-cooperation-text-list__subtitle">
									мы согласуем с вами стоимость лота и заберем его
									для дальнейшей продажи на нашем сайте. Вы
									получите выплату на карту после того, как ваш
									товар приобретут.
								</p>
							</div>
						</div>

						<div className="sell-info-cooperation-types">
							<div className="sell-info-cooperation-types-block hover-scale">
								<h3 className="sell-info-cooperation-types-block__title">
									Обмен
								</h3>
								<p className="sell-info-cooperation-types-block__description">
									На нашем сайте старый лот можно не только
									продать, но и обменять на новый. Мы оценим лот и
									предложим депозит, соответствующий стоимости
									вашей вещи. Его можно будет потратить при
									покупке любого товара на нашей платформе.
								</p>

								<Link
									to="/exchange"
									className="sell-info-cooperation-types-block__link"
								>
									Подробнее
								</Link>
							</div>

							<div className="sell-info-cooperation-types-block hover-scale">
								<h3 className="sell-info-cooperation-types-block__title">
									Консьерж-сервис
								</h3>
								<p className="sell-info-cooperation-types-block__description">
									Премиальная услуга для продажи от 10 товаров за
									раз. Личный менеджер THE CULTT приедет по
									удобному вам адресу для оценки аксессуаров,
									оформления документов и доставки.
								</p>

								<Link
									to="/concierge"
									className="sell-info-cooperation-types-block__link"
								>
									Подробнее
								</Link>
							</div>
						</div>
					</div>

					<div className="sell-info-steps">
						<h2 className="sell-info__title sell-info-steps__title">
							Как это работает?
						</h2>

						<div className="sell-info-steps-blocks-wrapper">
							<div className="sell-info-steps-block">
								<div className="sell-info-steps-block-icon">
									<svg
										width="59"
										height="61"
										viewBox="0 0 59 61"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M58.072 30.0234C58.072 46.592 45.0721 60.0234 29.0358 60.0234C12.9995 60.0234 -0.000488281 46.592 -0.000488281 30.0234C-0.000488281 13.4549 12.9995 0.0234375 29.0358 0.0234375C45.0721 0.0234375 58.072 13.4549 58.072 30.0234Z"
											fill="#F7F4F0"
										/>
										<path
											d="M27.3898 38.0234V24.7134L24.5046 26.5284V23.9654L27.3898 22.1834H29.6576V38.0234H27.3898Z"
											fill="#202020"
										/>
									</svg>

									<div className="sell-info-steps-block-icon-arrow">
										<svg
											width="323"
											height="8"
											viewBox="0 0 323 8"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M321.959 4.37699C322.154 4.18173 322.154 3.86515 321.959 3.66988L318.777 0.487904C318.582 0.292641 318.265 0.292641 318.07 0.487904C317.875 0.683166 317.875 0.999748 318.07 1.19501L320.899 4.02344L318.07 6.85186C317.875 7.04713 317.875 7.36371 318.07 7.55897C318.265 7.75423 318.582 7.75423 318.777 7.55897L321.959 4.37699ZM0.580811 4.52344H2.58722V3.52344H0.580811V4.52344ZM6.60003 4.52344H10.6128V3.52344H6.60003V4.52344ZM14.6256 4.52344H18.6385V3.52344H14.6256V4.52344ZM22.6513 4.52344H26.6641V3.52344H22.6513V4.52344ZM30.6769 4.52344H34.6897V3.52344H30.6769V4.52344ZM38.7025 4.52344H42.7153V3.52344H38.7025V4.52344ZM46.7281 4.52344H50.7409V3.52344H46.7281V4.52344ZM54.7537 4.52344H58.7666V3.52344H54.7537V4.52344ZM62.7794 4.52344H66.7922V3.52344H62.7794V4.52344ZM70.805 4.52344H74.8178V3.52344H70.805V4.52344ZM78.8306 4.52344H82.8434V3.52344H78.8306V4.52344ZM86.8562 4.52344H90.869V3.52344H86.8562V4.52344ZM94.8818 4.52344H98.8946V3.52344H94.8818V4.52344ZM102.907 4.52344H106.92V3.52344H102.907V4.52344ZM110.933 4.52344H114.946V3.52344H110.933V4.52344ZM118.959 4.52344H122.972V3.52344H118.959V4.52344ZM126.984 4.52344H130.997V3.52344H126.984V4.52344ZM135.01 4.52344H139.023V3.52344H135.01V4.52344ZM143.036 4.52344H147.048V3.52344H143.036V4.52344ZM151.061 4.52344H155.074V3.52344H151.061V4.52344ZM159.087 4.52344H163.1V3.52344H159.087V4.52344ZM167.112 4.52344H171.125V3.52344H167.112V4.52344ZM175.138 4.52344H179.151V3.52344H175.138V4.52344ZM183.164 4.52344H187.177V3.52344H183.164V4.52344ZM191.189 4.52344H195.202V3.52344H191.189V4.52344ZM199.215 4.52344H203.228V3.52344H199.215V4.52344ZM207.241 4.52344H211.253V3.52344H207.241V4.52344ZM215.266 4.52344H219.279V3.52344H215.266V4.52344ZM223.292 4.52344H227.305V3.52344H223.292V4.52344ZM231.318 4.52344H235.33V3.52344H231.318V4.52344ZM239.343 4.52344H243.356V3.52344H239.343V4.52344ZM247.369 4.52344H251.382V3.52344H247.369V4.52344ZM255.394 4.52344H259.407V3.52344H255.394V4.52344ZM263.42 4.52344H267.433V3.52344H263.42V4.52344ZM271.446 4.52344H275.459V3.52344H271.446V4.52344ZM279.471 4.52344H283.484V3.52344H279.471V4.52344ZM287.497 4.52344H291.51V3.52344H287.497V4.52344ZM295.523 4.52344H299.535V3.52344H295.523V4.52344ZM303.548 4.52344H307.561V3.52344H303.548V4.52344ZM311.574 4.52344H315.587V3.52344H311.574V4.52344ZM319.6 4.52344H321.606V3.52344H319.6V4.52344Z"
												fill="#838383"
											/>
										</svg>
									</div>
								</div>
								<h3 className="sell-info-steps-block__title">
									Подайте заявку
								</h3>
								<p className="sell-info-steps-block__description">
									На сайте, в Telegram-боте THE CULTT или в нашей
									клиентской зоне в Москве.
								</p>
							</div>

							<div className="sell-info-steps-block">
								<div className="sell-info-steps-block-icon">
									<svg
										width="59"
										height="61"
										viewBox="0 0 59 61"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M58.6148 30.0234C58.6148 46.592 45.6148 60.0234 29.5785 60.0234C13.5422 60.0234 0.542236 46.592 0.542236 30.0234C0.542236 13.4549 13.5422 0.0234375 29.5785 0.0234375C45.6148 0.0234375 58.6148 13.4549 58.6148 30.0234Z"
											fill="#F7F4F0"
										/>
										<path
											d="M24.0907 38.0124L24.1014 35.9664L30.7768 29.7844C31.3163 29.2931 31.6818 28.8238 31.8734 28.3764C32.0722 27.9291 32.1715 27.4818 32.1715 27.0344C32.1715 26.4698 32.0509 25.9638 31.8095 25.5164C31.5682 25.0618 31.2346 24.7024 30.8088 24.4384C30.3829 24.1744 29.8932 24.0424 29.3395 24.0424C28.7717 24.0424 28.2642 24.1818 27.8171 24.4604C27.377 24.7318 27.0328 25.0948 26.7843 25.5494C26.5359 26.0041 26.4153 26.4954 26.4224 27.0234H24.144C24.144 25.9968 24.3676 25.0984 24.8147 24.3284C25.269 23.5511 25.89 22.9461 26.6779 22.5134C27.4657 22.0734 28.3671 21.8534 29.3821 21.8534C30.3474 21.8534 31.2133 22.0808 31.9799 22.5354C32.7465 22.9828 33.3498 23.5988 33.7898 24.3834C34.237 25.1681 34.4606 26.0628 34.4606 27.0674C34.4606 27.7934 34.3683 28.4094 34.1838 28.9154C33.9992 29.4214 33.7224 29.8908 33.3533 30.3234C32.9842 30.7561 32.5229 31.2254 31.9692 31.7314L26.8163 36.4834L26.5714 35.8234H34.4606V38.0124H24.0907Z"
											fill="#202020"
										/>
									</svg>

									<div className="sell-info-steps-block-icon-arrow">
										<svg
											width="323"
											height="8"
											viewBox="0 0 323 8"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M321.959 4.37699C322.154 4.18173 322.154 3.86515 321.959 3.66988L318.777 0.487904C318.582 0.292641 318.265 0.292641 318.07 0.487904C317.875 0.683166 317.875 0.999748 318.07 1.19501L320.899 4.02344L318.07 6.85186C317.875 7.04713 317.875 7.36371 318.07 7.55897C318.265 7.75423 318.582 7.75423 318.777 7.55897L321.959 4.37699ZM0.580811 4.52344H2.58722V3.52344H0.580811V4.52344ZM6.60003 4.52344H10.6128V3.52344H6.60003V4.52344ZM14.6256 4.52344H18.6385V3.52344H14.6256V4.52344ZM22.6513 4.52344H26.6641V3.52344H22.6513V4.52344ZM30.6769 4.52344H34.6897V3.52344H30.6769V4.52344ZM38.7025 4.52344H42.7153V3.52344H38.7025V4.52344ZM46.7281 4.52344H50.7409V3.52344H46.7281V4.52344ZM54.7537 4.52344H58.7666V3.52344H54.7537V4.52344ZM62.7794 4.52344H66.7922V3.52344H62.7794V4.52344ZM70.805 4.52344H74.8178V3.52344H70.805V4.52344ZM78.8306 4.52344H82.8434V3.52344H78.8306V4.52344ZM86.8562 4.52344H90.869V3.52344H86.8562V4.52344ZM94.8818 4.52344H98.8946V3.52344H94.8818V4.52344ZM102.907 4.52344H106.92V3.52344H102.907V4.52344ZM110.933 4.52344H114.946V3.52344H110.933V4.52344ZM118.959 4.52344H122.972V3.52344H118.959V4.52344ZM126.984 4.52344H130.997V3.52344H126.984V4.52344ZM135.01 4.52344H139.023V3.52344H135.01V4.52344ZM143.036 4.52344H147.048V3.52344H143.036V4.52344ZM151.061 4.52344H155.074V3.52344H151.061V4.52344ZM159.087 4.52344H163.1V3.52344H159.087V4.52344ZM167.112 4.52344H171.125V3.52344H167.112V4.52344ZM175.138 4.52344H179.151V3.52344H175.138V4.52344ZM183.164 4.52344H187.177V3.52344H183.164V4.52344ZM191.189 4.52344H195.202V3.52344H191.189V4.52344ZM199.215 4.52344H203.228V3.52344H199.215V4.52344ZM207.241 4.52344H211.253V3.52344H207.241V4.52344ZM215.266 4.52344H219.279V3.52344H215.266V4.52344ZM223.292 4.52344H227.305V3.52344H223.292V4.52344ZM231.318 4.52344H235.33V3.52344H231.318V4.52344ZM239.343 4.52344H243.356V3.52344H239.343V4.52344ZM247.369 4.52344H251.382V3.52344H247.369V4.52344ZM255.394 4.52344H259.407V3.52344H255.394V4.52344ZM263.42 4.52344H267.433V3.52344H263.42V4.52344ZM271.446 4.52344H275.459V3.52344H271.446V4.52344ZM279.471 4.52344H283.484V3.52344H279.471V4.52344ZM287.497 4.52344H291.51V3.52344H287.497V4.52344ZM295.523 4.52344H299.535V3.52344H295.523V4.52344ZM303.548 4.52344H307.561V3.52344H303.548V4.52344ZM311.574 4.52344H315.587V3.52344H311.574V4.52344ZM319.6 4.52344H321.606V3.52344H319.6V4.52344Z"
												fill="#838383"
											/>
										</svg>
									</div>
								</div>
								<h3 className="sell-info-steps-block__title">
									Передайте лот нам
								</h3>
								<p className="sell-info-steps-block__description">
									Мы возьмем весь процесс продажи на себя:
									подготовку лота к продаже, съемку, публикацию и
									поиск покупателя.
								</p>
							</div>

							<div className="sell-info-steps-block">
								<div className="sell-info-steps-block-icon">
									<svg
										width="59"
										height="61"
										viewBox="0 0 59 61"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M58.9986 30.0234C58.9986 46.592 45.9986 60.0234 29.9623 60.0234C13.926 60.0234 0.926025 46.592 0.926025 30.0234C0.926025 13.4549 13.926 0.0234375 29.9623 0.0234375C45.9986 0.0234375 58.9986 13.4549 58.9986 30.0234Z"
											fill="#F7F4F0"
										/>
										<path
											d="M28.9668 38.3204C28.2073 38.3204 27.494 38.1738 26.8268 37.8804C26.1596 37.5798 25.5811 37.1544 25.0914 36.6044C24.6087 36.0544 24.2574 35.4054 24.0374 34.6574L26.188 34.0414C26.3938 34.7234 26.7523 35.2478 27.2633 35.6144C27.7743 35.9738 28.3422 36.1498 28.9668 36.1424C29.5275 36.1351 30.0208 35.9994 30.4466 35.7354C30.8725 35.4714 31.2061 35.1158 31.4474 34.6684C31.6887 34.2138 31.8094 33.6931 31.8094 33.1064C31.8094 32.2264 31.5432 31.5004 31.0109 30.9284C30.4857 30.3564 29.7972 30.0704 28.9455 30.0704C28.7041 30.0704 28.4557 30.1071 28.2002 30.1804C27.9518 30.2538 27.7176 30.3491 27.4975 30.4664L26.4542 28.6514L31.8626 23.7124L32.0969 24.3724H24.6442V22.1834H33.8642V24.3724L29.3713 28.8384L29.35 28.0904C30.3153 28.0904 31.1529 28.3141 31.8626 28.7614C32.5724 29.2014 33.1189 29.8028 33.5022 30.5654C33.8926 31.3208 34.0878 32.1678 34.0878 33.1064C34.0878 34.1184 33.8571 35.0168 33.3958 35.8014C32.9415 36.5861 32.3275 37.2021 31.5539 37.6494C30.7873 38.0968 29.925 38.3204 28.9668 38.3204Z"
											fill="#202020"
										/>
									</svg>
								</div>
								<h3 className="sell-info-steps-block__title">
									Получите выплату
								</h3>
								<p className="sell-info-steps-block__description">
									Как только товар будет продан, вы получите
									выплату на указанные в личном кабинете
									реквизиты.
								</p>
							</div>
						</div>
					</div>

					<div className="sell-info-steps-media">
						<h2 className="sell-info__title sell-info-steps-media__title">
							Как это работает?
						</h2>

						<div className="sell-info-steps-media-blocks-wrapper">
							<div className="sell-info-steps-media-block">
								<div className="sell-info-steps-media-block-icon">
									<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="20" cy="20.5" r="20" fill="#285141" />
										<path d="M20.301 28.5V14.827L17.32 16.631V14.442L20.301 12.66H22.292V28.5H20.301Z" fill="#F1EDE8" />
									</svg>
								</div>

								<h3 className="sell-info-steps-media-block__title">
									Подайте заявку
								</h3>
								<p className="sell-info-steps-media-block__description">
									На сайте, в Telegram-боте THE CULTT или в нашей
									клиентской зоне в Москве.
								</p>

								<div className="sell-info-steps-media-block-arrow">
									<svg width="8" height="33" viewBox="0 0 8 33" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M3.64645 32.8536C3.84171 33.0488 4.15829 33.0488 4.35355 32.8536L7.53553 29.6716C7.7308 29.4763 7.7308 29.1597 7.53553 28.9645C7.34027 28.7692 7.02369 28.7692 6.82843 28.9645L4 31.7929L1.17157 28.9645C0.976311 28.7692 0.659728 28.7692 0.464466 28.9645C0.269204 29.1597 0.269204 29.4763 0.464466 29.6716L3.64645 32.8536ZM3.5 0.5V2.5H4.5V0.5L3.5 0.5ZM3.5 6.5V10.5H4.5L4.5 6.5H3.5ZM3.5 14.5V18.5H4.5V14.5H3.5ZM3.5 22.5L3.5 26.5H4.5V22.5H3.5ZM3.5 30.5V32.5H4.5V30.5H3.5Z" fill="#838383" />
									</svg>
								</div>
							</div>

							<div className="sell-info-steps-media-block">
								<div className="sell-info-steps-media-block-icon">
									<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="20" cy="20.5" r="20" fill="#285141" />
										<path d="M15.1 28.489L15.111 26.729L22.14 20.404C22.7267 19.876 23.119 19.3773 23.317 18.908C23.5223 18.4313 23.625 17.9437 23.625 17.445C23.625 16.8363 23.4857 16.2863 23.207 15.795C22.9283 15.3037 22.547 14.915 22.063 14.629C21.5863 14.343 21.0437 14.2 20.435 14.2C19.8043 14.2 19.2433 14.3503 18.752 14.651C18.2607 14.9443 17.872 15.3367 17.586 15.828C17.3073 16.3193 17.1717 16.8547 17.179 17.434H15.177C15.177 16.4367 15.408 15.5567 15.87 14.794C16.332 14.024 16.959 13.4227 17.751 12.99C18.5503 12.55 19.456 12.33 20.468 12.33C21.4507 12.33 22.3307 12.5573 23.108 13.012C23.8853 13.4593 24.4977 14.0717 24.945 14.849C25.3997 15.619 25.627 16.4917 25.627 17.467C25.627 18.1563 25.539 18.754 25.363 19.26C25.1943 19.766 24.9303 20.2353 24.571 20.668C24.2117 21.0933 23.7607 21.548 23.218 22.032L17.377 27.279L17.124 26.619H25.627V28.489H15.1Z" fill="#F1EDE8" />
									</svg>
								</div>

								<h3 className="sell-info-steps-media-block__title">
									Передайте лот нам
								</h3>
								<p className="sell-info-steps-media-block__description">
									Мы возьмем весь процесс продажи на себя: подготовку лота к продаже, съемку, публикацию и поиск покупателя.
								</p>

								<div className="sell-info-steps-media-block-arrow">
									<svg width="8" height="33" viewBox="0 0 8 33" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M3.64645 32.8536C3.84171 33.0488 4.15829 33.0488 4.35355 32.8536L7.53553 29.6716C7.7308 29.4763 7.7308 29.1597 7.53553 28.9645C7.34027 28.7692 7.02369 28.7692 6.82843 28.9645L4 31.7929L1.17157 28.9645C0.976311 28.7692 0.659728 28.7692 0.464466 28.9645C0.269204 29.1597 0.269204 29.4763 0.464466 29.6716L3.64645 32.8536ZM3.5 0.5V2.5H4.5V0.5L3.5 0.5ZM3.5 6.5V10.5H4.5L4.5 6.5H3.5ZM3.5 14.5V18.5H4.5V14.5H3.5ZM3.5 22.5L3.5 26.5H4.5V22.5H3.5ZM3.5 30.5V32.5H4.5V30.5H3.5Z" fill="#838383" />
									</svg>
								</div>
							</div>

							<div className="sell-info-steps-media-block">
								<div className="sell-info-steps-media-block-icon">
									<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="20" cy="20.5" r="20" fill="#285141" />
										<path d="M19.885 28.808C19.1003 28.808 18.3707 28.665 17.696 28.379C17.0213 28.0857 16.4383 27.675 15.947 27.147C15.463 26.6117 15.1073 25.9773 14.88 25.244L16.761 24.705C17.003 25.4383 17.4063 25.9957 17.971 26.377C18.5357 26.7583 19.17 26.9453 19.874 26.938C20.5193 26.9233 21.0767 26.7767 21.546 26.498C22.0227 26.212 22.3893 25.8233 22.646 25.332C22.91 24.8407 23.042 24.2723 23.042 23.627C23.042 22.6443 22.7487 21.8487 22.162 21.24C21.5753 20.624 20.8053 20.316 19.852 20.316C19.588 20.316 19.3093 20.3527 19.016 20.426C18.73 20.4993 18.4623 20.602 18.213 20.734L17.267 19.183L23.141 13.87L23.394 14.53H15.507V12.66H24.846V14.541L19.841 19.337L19.819 18.644C20.8677 18.5707 21.7843 18.743 22.569 19.161C23.3537 19.579 23.9623 20.1767 24.395 20.954C24.835 21.7313 25.055 22.6223 25.055 23.627C25.055 24.639 24.8277 25.5337 24.373 26.311C23.9183 27.0883 23.3023 27.7007 22.525 28.148C21.7477 28.588 20.8677 28.808 19.885 28.808Z" fill="#F1EDE8" />
									</svg>
								</div>

								<h3 className="sell-info-steps-media-block__title">
									Получите выплату
								</h3>
								<p className="sell-info-steps-media-block__description">
									Как только товар будет продан, вы получите выплату на указанные в личном кабинете реквизиты.
								</p>
							</div>
						</div>
					</div>

					<div className="sell-info-contact" id="sell-choice">
						<h2 className="sell-info__title">
							Выберите удобный для вас способ подачи заявки на продажу
						</h2>

						<div className="sell-info-contact-blocks-wrapper">
							<div className="sell-info-contact-block hover-scale">
								<div className="sell-info-contact-block-top">
									<div className="sell-info-contact-block-top-icon">
										<svg
											width="47"
											height="45"
											viewBox="0 0 47 45"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M23.5 1.52344L30.3233 15.3468L45.582 17.5771L34.541 28.331L37.1467 43.5234L23.5 36.3468L9.8533 43.5234L12.459 28.331L1.41797 17.5771L16.6766 15.3468L23.5 1.52344Z"
												stroke="#202020"
												strokeWidth="2.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</div>
									<h3 className="sell-info-contact-block-top__title">
										Через сайт
									</h3>
									<p className="sell-info-contact-block-top__subtitle">
										Подайте заявку, не покидая сайт
									</p>
								</div>

								<Link
									to="/cabinet/sell"
									className="btn-regular sell-info-contact-block__btn"
								>
									Оформить заявку
								</Link>
							</div>

							<div className="sell-info-contact-block hover-scale">
								<div className="sell-info-contact-block-top">
									<div className="sell-info-contact-block-top-icon">
										<svg
											width="43"
											height="43"
											viewBox="0 0 43 43"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M21.5 0.523438C9.908 0.523438 0.5 9.93144 0.5 21.5234C0.5 33.1154 9.908 42.5234 21.5 42.5234C33.092 42.5234 42.5 33.1154 42.5 21.5234C42.5 9.93144 33.092 0.523438 21.5 0.523438ZM31.244 14.8034C30.929 18.1214 29.564 26.1854 28.871 29.9024C28.577 31.4774 27.989 32.0024 27.443 32.0654C26.225 32.1704 25.301 31.2674 24.125 30.4904C22.277 29.2724 21.227 28.5164 19.442 27.3404C17.363 25.9754 18.707 25.2194 19.904 24.0014C20.219 23.6864 25.595 18.7934 25.7 18.3524C25.7146 18.2856 25.7126 18.2163 25.6943 18.1504C25.676 18.0846 25.6419 18.0241 25.595 17.9744C25.469 17.8694 25.301 17.9114 25.154 17.9324C24.965 17.9744 22.025 19.9274 16.292 23.7914C15.452 24.3584 14.696 24.6524 14.024 24.6314C13.268 24.6104 11.84 24.2114 10.769 23.8544C9.446 23.4344 8.417 23.2034 8.501 22.4684C8.543 22.0904 9.068 21.7124 10.055 21.3134C16.187 18.6464 20.261 16.8824 22.298 16.0424C28.136 13.6064 29.333 13.1864 30.131 13.1864C30.299 13.1864 30.698 13.2284 30.95 13.4384C31.16 13.6064 31.223 13.8374 31.244 14.0054C31.223 14.1314 31.265 14.5094 31.244 14.8034Z"
												fill="#202020"
											/>
										</svg>
									</div>
									<h3 className="sell-info-contact-block-top__title">
										Через Telegram-bot
									</h3>
									<p className="sell-info-contact-block-top__subtitle">
										Подайте заявку через удобный мессенджер
									</p>
								</div>

								<a
									href="https://t.me/thecultt_bot"
									className="btn-regular sell-info-contact-block__btn"
								>
									Оформить заявку
								</a>
							</div>

							<div className="sell-info-contact-block hover-scale">
								<div className="sell-info-contact-block-top">
									<div className="sell-info-contact-block-top-icon">
										<svg
											width="37"
											height="45"
											viewBox="0 0 37 45"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M35.6818 18.7053C35.6818 32.0689 18.4999 43.5234 18.4999 43.5234C18.4999 43.5234 1.31812 32.0689 1.31812 18.7053C1.31812 14.1484 3.12834 9.77809 6.35055 6.55588C9.57277 3.33366 13.943 1.52344 18.4999 1.52344C23.0568 1.52344 27.4271 3.33366 30.6493 6.55588C33.8715 9.77809 35.6818 14.1484 35.6818 18.7053Z"
												stroke="#202020"
												strokeWidth="2.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
											<path
												d="M18.4997 24.4405C21.6628 24.4405 24.227 21.8763 24.227 18.7132C24.227 15.5501 21.6628 12.9859 18.4997 12.9859C15.3366 12.9859 12.7724 15.5501 12.7724 18.7132C12.7724 21.8763 15.3366 24.4405 18.4997 24.4405Z"
												stroke="#202020"
												strokeWidth="2.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</div>
									<h3 className="sell-info-contact-block-top__title">
										В офисе
									</h3>
									<p className="sell-info-contact-block-top__subtitle">
										Передайте лично свои лоты на продажу без
										заполнения заявки
									</p>
								</div>

								<Link
									to="/visit"
									className="btn-regular sell-info-contact-block__btn"
								>
									Выбрать дату и время
								</Link>
							</div>
						</div>
					</div>

					<div className="sell-info-service-one">
						<div className="sell-info-service-one-blocks-wrapper">
							<div className="sell-info-service-one-block sell-info-service-one-block-brands hover-scale">
								<div className="sell-info-service-one-block-top">
									<div className="sell-info-service-one-block-top-icon">
										<svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.52857C0 1.25578 0.108367 0.994156 0.301261 0.801261C0.494156 0.608367 0.755777 0.5 1.02857 0.5H22.9714C23.2442 0.5 23.5058 0.608367 23.6987 0.801261C23.8916 0.994156 24 1.25578 24 1.52857C24 1.80137 23.8916 2.06299 23.6987 2.25588C23.5058 2.44878 23.2442 2.55714 22.9714 2.55714H1.02857C0.755777 2.55714 0.494156 2.44878 0.301261 2.25588C0.108367 2.06299 0 1.80137 0 1.52857ZM0 8.38571C0 8.11292 0.108367 7.8513 0.301261 7.6584C0.494156 7.46551 0.755777 7.35714 1.02857 7.35714H16.1143C16.3871 7.35714 16.6487 7.46551 16.8416 7.6584C17.0345 7.8513 17.1429 8.11292 17.1429 8.38571C17.1429 8.65851 17.0345 8.92013 16.8416 9.11302C16.6487 9.30592 16.3871 9.41429 16.1143 9.41429H1.02857C0.755777 9.41429 0.494156 9.30592 0.301261 9.11302C0.108367 8.92013 0 8.65851 0 8.38571ZM0 15.2429C0 14.9701 0.108367 14.7084 0.301261 14.5155C0.494156 14.3227 0.755777 14.2143 1.02857 14.2143H7.88571C8.15851 14.2143 8.42013 14.3227 8.61302 14.5155C8.80592 14.7084 8.91429 14.9701 8.91429 15.2429C8.91429 15.5157 8.80592 15.7773 8.61302 15.9702C8.42013 16.1631 8.15851 16.2714 7.88571 16.2714H1.02857C0.755777 16.2714 0.494156 16.1631 0.301261 15.9702C0.108367 15.7773 0 15.5157 0 15.2429Z" fill="#285141" />
										</svg>
									</div>

									<h3 className="sell-info-service-one-block-top__title">
										Бренд-лист и актуальность
									</h3>
									<p className="sell-info-service-one-block-top__description">
										Мы работаем с определенным списком брендов.
										Наш селекционный подход помогает продать
										ваши лоты максимально быстро. Команда THE
										CULTT оставляет за собой право кураторского
										отбора.
									</p>
								</div>
								<Link
									to="/"
									className="sell-info-service-one-block__link"
								>
									Открыть бренд-лист
								</Link>
							</div>

							<div className="sell-info-service-one-block sell-info-service-one-block-original hover-scale">
								<div className="sell-info-service-one-block-top">
									<div className="sell-info-service-one-block-top-icon">
										<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M22 11.3513V12.2713C21.9988 14.4278 21.3005 16.526 20.0093 18.2532C18.7182 19.9803 16.9033 21.2438 14.8354 21.8552C12.7674 22.4667 10.5573 22.3932 8.53447 21.6459C6.51168 20.8986 4.78465 19.5174 3.61096 17.7084C2.43727 15.8994 1.87979 13.7594 2.02168 11.6077C2.16356 9.45591 2.99721 7.40768 4.39828 5.76842C5.79935 4.12917 7.69279 2.98673 9.79619 2.51149C11.8996 2.03626 14.1003 2.25369 16.07 3.13135" stroke="#285141" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
											<path d="M22 4.26953L12 14.2795L9 11.2795" stroke="#285141" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</div>

									<h3 className="sell-info-service-one-block-top__title">
										Оригинал
									</h3>
									<p className="sell-info-service-one-block-top__description">
										Мы не принимаем неоригинальные товары на
										продажу. Все лоты проходят проверку на
										подлинность. Если оригинальность лота не
										подтвердится, то вам придется уплатить штраф
										в размере стоимости аутентификации и
										самостоятельно забрать его.
									</p>
								</div>
							</div>

							<div className="sell-info-service-one-block sell-info-service-one-block-state hover-scale">
								<div className="sell-info-service-one-block-top">
									<div className="sell-info-service-one-block-top-icon">
										<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M13 1.26953L16.708 8.83946L25 10.0608L19 15.9499L20.416 24.2695L13 20.3395L5.584 24.2695L7 15.9499L1 10.0608L9.292 8.83946L13 1.26953Z" stroke="#285141" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</div>

									<h3 className="sell-info-service-one-block-top__title">
										Состояние
									</h3>
									<p className="sell-info-service-one-block-top__description">
										Мы принимаем аксессуары в хорошем или
										отличном состоянии. Это означает, что
										изделие должно быть без сильных потертостей,
										дыр и пятен, все элементы — в рабочем
										состоянии.
									</p>
								</div>
							</div>
						</div>

						<div className="sell-info-service-one-faq">
							<h3 className="sell-info-service-one-faq__title">
								Какие лоты мы принимаем?
							</h3>
							<p className="sell-info-service-one-faq__description">
								У нас действует селекционный подход. Сумки, обувь и
								аксессуары должны соответствовать трем ключевым
								критериям. Мы трепетно относимся к нашей селекции и
								надеемся на понимание, если предложенный товар не
								подойдет.
							</p>

							<Link
								to="/"
								className="btn sell-info-service-one-faq__btn"
							>
								Подробнее в FAQ
							</Link>
						</div>
					</div>

					<div className="sell-info-service-two">
						<h2 className="sell-info__title sell-info-service-two__title">
							Преимущества продажи на THE CULTT
						</h2>
						<div className="sell-info-service-two-blocks-wrapper">
							<div className="sell-info-service-two-block hover-scale">
								<h3 className="sell-info-service-two-block__title">
									Удобный сервис
								</h3>
								<p className="sell-info-service-two-block__description">
									Вам не придется думать об отправке товаров —
									курьер приедет за ними в любое удобное время и
									место. В личном кабинете вы можете отслеживать
									статус продаж, а также консультироваться с нами
									по любым вопросам в реальном времени.
								</p>
							</div>

							<div className="sell-info-service-two-block hover-scale">
								<h3 className="sell-info-service-two-block__title">
									Безопасность
								</h3>
								<p className="sell-info-service-two-block__description">
									Мы заключаем с вами договор и гарантируем
									безопасность банковских операций, хранения и
									доставки ваших аксессуаров.
								</p>
							</div>

							<div className="sell-info-service-two-block hover-scale">
								<h3 className="sell-info-service-two-block__title">
									Экономия времени
								</h3>
								<p className="sell-info-service-two-block__description">
									Мы оценим ваш лот, согласуем с вами его
									стоимость и заберем для дальнейшей продажи.
									Съемка товара, замеры, размещение на сайте,
									коммуникация с покупателями — все это мы берем
									на себя. Покупателям мы предлагаем
									дополнительные сервисы, например, примерку или
									покупку в рассрочку — это помогает ускорить
									сделку.
								</p>
							</div>

							<div className="sell-info-service-two-block hover-scale">
								<h3 className="sell-info-service-two-block__title">
									Скорость продажи
								</h3>
								<p className="sell-info-service-two-block__description">
									Мы поможем установить конкурентную цену, по
									которой товар найдет покупателя в наиболее
									короткие сроки. При формировании цены мы
									ориентируемся на индекс оценки предметов роскоши
									для повторной продажи (comprehensive luxury
									appraisal index for resale) и согласовываем
									финальную стоимость с продавцом.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SellInfo;
