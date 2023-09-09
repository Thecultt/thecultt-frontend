import React from 'react'
import { Link } from 'react-router-dom';

import { Input } from '../../components';

import ConciergeMainImage from "../../assets/images/concierge/concierge-main-image.jpg";

const Concierge: React.FC = () => {
	return (
		<section className="concierge">
			<div className="container">
				<div className='concierge-wrapper'>
					<div className="concierge-main">
						<div className="concierge-main-text">
							<h2 className="concierge-main-text__title">
								Консьерж-сервис
							</h2>

							<p className="concierge-main-text__description">
								Закажите консьерж-сервис с выездом на дом для продажи более 10 лотов, соответствующих нашему <Link to="">бренд-листу</Link>.
							</p>

							<div className="concierge-main-text-form">
								<div className="concierge-main-text-form-input-wrapper">
									<div className="concierge-main-text-form-input">
										<Input label='Ваш телефон' type='text' name='phone' />
									</div>
									<div className="concierge-main-text-form-input">
										<Input label='Ваше имя' type='text' name='name' />
									</div>
								</div>

								<p className="concierge-main-text-form__description">
									Нажимая на кнопку, вы принимаете условия <Link to="/help/user-agreement">пользовательского соглашения</Link> и <Link to="/help/public-offerte">публичной оферты</Link>.
								</p>


								<button className="btn concierge-main-text-form__btn">
									Отправить заявку
								</button>
							</div>
						</div>
						<div
							className="concierge-main-image"
							style={{
								backgroundImage: `url("${ConciergeMainImage}")`,
							}}
						></div>
					</div>

					<div className="concierge-steps">
						<h2 className="concierge__title concierge-steps__title">
							Как это работает?
						</h2>

						<p className="concierge__description mb concierge-steps__description">
							Мы создали удобный сервис, доступный для всех, кто хочет продать от 10 лотов - это могут быть сумки, аксессуары, обувь. Услуга доступна только для жителей Москвы.
						</p>

						<div className="concierge-steps-blocks-wrapper">
							<div className="concierge-steps-block">
								<div className="concierge-steps-block-icon">
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

									<div className="concierge-steps-block-icon-arrow">
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
								<h3 className="concierge-steps-block__title">
									Оставьте одну заявку
								</h3>
								<p className="concierge-steps-block__description">
									Вам не придется тратить время на заполнение заявки для каждого лота - это мы берем на себя.
								</p>
							</div>

							<div className="concierge-steps-block">
								<div className="concierge-steps-block-icon">
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

									<div className="concierge-steps-block-icon-arrow">
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
								<h3 className="concierge-steps-block__title">
									Согласуйте условия
								</h3>
								<p className="concierge-steps-block__description">
									Представитель THE CULTT приедет к вам, чтобы согласовать условия продажи аксессуаров и подписать документы.
								</p>
							</div>

							<div className="concierge-steps-block">
								<div className="concierge-steps-block-icon">
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
								<h3 className="concierge-steps-block__title">
									Получайте выплаты
								</h3>
								<p className="concierge-steps-block__description">
									Вам останется только получать выплаты на карту!
								</p>
							</div>
						</div>
					</div>

					<div className="concierge-services">
						<h2 className="concierge__title mb">
							Преимущества консьерж-сервиса
						</h2>

						<div className="concierge-services-blocks-wrapper">
							<div className="concierge-services-block">
								<div className="concierge-services-block-icon">
									<svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g id="Icons">
											<path id="Vector" d="M34.8816 8.35547C31.2957 8.35547 28.1561 9.8975 26.199 12.504C24.242 9.8975 21.1023 8.35547 17.5164 8.35547C14.662 8.35869 11.9254 9.49404 9.90697 11.5124C7.88857 13.5308 6.75322 16.2674 6.75 19.1219C6.75 31.2775 24.7733 41.1167 25.5409 41.523C25.7432 41.6318 25.9693 41.6888 26.199 41.6888C26.4287 41.6888 26.6549 41.6318 26.8572 41.523C27.6247 41.1167 45.6481 31.2775 45.6481 19.1219C45.6448 16.2674 44.5095 13.5308 42.4911 11.5124C40.4727 9.49404 37.7361 8.35869 34.8816 8.35547ZM26.199 38.7098C23.0281 36.8622 9.52843 28.4453 9.52843 19.1219C9.53119 17.0042 10.3737 14.974 11.8711 13.4766C13.3685 11.9791 15.3987 11.1367 17.5164 11.1339C20.894 11.1339 23.7297 12.9329 24.914 15.8225C25.0187 16.0773 25.1967 16.2952 25.4255 16.4486C25.6543 16.602 25.9236 16.6839 26.199 16.6839C26.4745 16.6839 26.7437 16.602 26.9725 16.4486C27.2013 16.2952 27.3794 16.0773 27.4841 15.8225C28.6684 12.9277 31.5041 11.1339 34.8816 11.1339C36.9993 11.1367 39.0295 11.9791 40.527 13.4766C42.0244 14.974 42.8669 17.0042 42.8696 19.1219C42.8696 28.4314 29.3664 36.8605 26.199 38.7098Z" fill="#202020" />
										</g>
									</svg>

								</div>
								<h3 className="concierge-services-block__title">
									Экономия <br /> времени
								</h3>
								<p className="concierge-services-block__subtitle">
									Мы берем на себя весь процесс продажи. Выделите один час на встречу с представителем THE CULTT, и вам останется только получить выплаты на карту.
								</p>
							</div>

							<div className="concierge-services-block">
								<div className="concierge-services-block-icon">
									<svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g id="Icons">
											<path id="Vector" d="M25.8502 8.02344L31.2114 18.8846L43.2003 20.637L34.5252 29.0865L36.5726 41.0234L25.8502 35.3846L15.1278 41.0234L17.1751 29.0865L8.5 20.637L20.489 18.8846L25.8502 8.02344Z" stroke="#202020" strokeWidth="2.08333" strokeLinecap="round" strokeLinejoin="round" />
										</g>
									</svg>

								</div>
								<h3 className="concierge-services-block__title">
									Премиум <br /> Сервис
								</h3>
								<p className="concierge-services-block__subtitle">
									Мы предоставим вам персонального менеджера, который будет сопровождать вас на всех этапах.
								</p>
							</div>

							<div className="concierge-services-block">
								<div className="concierge-services-block-icon">
									<svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g id="Icons">
											<path id="Vector" d="M42.1666 12.5234L19.25 35.4401L8.83331 25.0234" stroke="#202020" strokeWidth="3.125" strokeLinecap="round" strokeLinejoin="round" />
										</g>
									</svg>

								</div>
								<h3 className="concierge-services-block__title">
									Без дополнительных <br /> расходов
								</h3>
								<p className="concierge-services-block__subtitle">
									Услуга предоставляется бесплатно и не влияет на размер комиссии.
								</p>
							</div>
						</div>
					</div>

					<div className="concierge-form">
						<div className="concierge-form-content">
							<h2 className="concierge-form-content__title">
								Закажите консьерж-сервис в один клик
							</h2>

							<div className="concierge-form-content-input-wrapper">
								<div className="concierge-form-content-input">
									<Input label='Ваш телефон' type='text' name='phone' />
								</div>
								<div className="concierge-form-content-input">
									<Input label='Ваше имя' type='text' name='name' />
								</div>
							</div>

							<p className="concierge-form-content__description">
								Нажимая на кнопку, вы принимаете условия <Link to="/help/user-agreement">пользовательского соглашения</Link> и <Link to="/help/public-offerte">публичной оферты</Link>.
							</p>

							<button className="btn concierge-form-content__btn">
								Отправить заявку
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Concierge