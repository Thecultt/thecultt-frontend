import React from 'react'
import { Link } from 'react-router-dom'

import ExchangeMainImage from '../../assets/images/exchange/exchange-main-image.png'

import ExchangeStepsImage1 from '../../assets/images/exchange/exchange-steps-image-1.png'
import ExchangeStepsImage2 from '../../assets/images/exchange/exchange-steps-image-2.png'
import ExchangeStepsImage3 from '../../assets/images/exchange/exchange-steps-image-3.png'

import ExchangeExampleImage from '../../assets/images/exchange/exchange-example-image.jpg'

const Exchange: React.FC = () => {
	return (
		<section className="exchange">
			<div className="container">
				<div className="exchange-wrapper">
					<div className="exchange-main hover-scale">
						<div className="exchange-main-text">
							<h2 className="exchange-main-text__title">
								Меняем старую сумку на новую
							</h2>

							<p className="exchange-main-text__description">
								Хотите расстаться со своими вещами - просто обменяйте их на новые в THE CULTT.  Вы можете продать нам свои сумку, обувь или аксессуары в счет новых.
							</p>

							<Link to="/cabinet/sell?type=exchange" className="btn exchange-main-text__btn">
								Обменять
							</Link>
						</div>

						<div
							className="exchange-main-image"
							style={{
								backgroundImage: `url("${ExchangeMainImage}")`,
							}}
						></div>
					</div>

					<div className="exchange-steps">
						<h2 className="exchange__title exchange-steps__title">
							Как это работает?
						</h2>

						<p className="exchange__description mb exchange-steps__description">
							Всего три шага, и у вас новая сумка
						</p>

						<div className="exchange-steps-blocks-wrapper">
							<div className="exchange-steps-block">
								<img src={ExchangeStepsImage1} alt="" className="exchange-steps-block__image" />

								<h3 className="exchange-steps-block__title">
									Шаг 1
								</h3>
								<p className="exchange-steps-block__description">
									Выберите сумку <br /> на нашем сайте
								</p>

								<div className="exchange-steps-block-arrow first">
									<svg viewBox="0 0 166 8" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M165.231 4.34574C165.426 4.15048 165.426 3.8339 165.231 3.63863L162.049 0.456654C161.854 0.261391 161.537 0.261391 161.342 0.456654C161.146 0.651916 161.146 0.968498 161.342 1.16376L164.17 3.99219L161.342 6.82061C161.146 7.01588 161.146 7.33246 161.342 7.52772C161.537 7.72298 161.854 7.72298 162.049 7.52772L165.231 4.34574ZM0.225342 4.49219H2.18548V3.49219H0.225342V4.49219ZM6.10577 4.49219H10.0261V3.49219H6.10577V4.49219ZM13.9463 4.49219H17.8666V3.49219H13.9463V4.49219ZM21.7869 4.49219H25.7072V3.49219H21.7869V4.49219ZM29.6275 4.49219H33.5478V3.49219H29.6275V4.49219ZM37.468 4.49219H41.3883V3.49219H37.468V4.49219ZM45.3086 4.49219H49.2289V3.49219H45.3086V4.49219ZM53.1492 4.49219H57.0695V3.49219H53.1492V4.49219ZM60.9897 4.49219H64.91V3.49219H60.9897V4.49219ZM68.8303 4.49219H72.7506V3.49219H68.8303V4.49219ZM76.6709 4.49219H80.5911V3.49219H76.6709V4.49219ZM84.5114 4.49219H88.4317V3.49219H84.5114V4.49219ZM92.352 4.49219H96.2723V3.49219H92.352V4.49219ZM100.193 4.49219H104.113V3.49219H100.193V4.49219ZM108.033 4.49219H111.953V3.49219H108.033V4.49219ZM115.874 4.49219H119.794V3.49219H115.874V4.49219ZM123.714 4.49219H127.635V3.49219H123.714V4.49219ZM131.555 4.49219H135.475V3.49219H131.555V4.49219ZM139.395 4.49219H143.316V3.49219H139.395V4.49219ZM147.236 4.49219H151.156V3.49219H147.236V4.49219ZM155.077 4.49219H158.997V3.49219H155.077V4.49219ZM162.917 4.49219H164.877V3.49219H162.917V4.49219Z" fill="#838383" />
									</svg>
								</div>
							</div>

							<div className="exchange-steps-block">
								<img src={ExchangeStepsImage2} alt="" className="exchange-steps-block__image" />

								<h3 className="exchange-steps-block__title">
									Шаг 2
								</h3>

								<p className="exchange-steps-block__description">
									Подайте заявку на обмен старой <br /> сумки на новую, указав ссылку на нее
								</p>

								<div className="exchange-steps-block-arrow">
									<svg viewBox="0 0 166 8" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M165.231 4.34574C165.426 4.15048 165.426 3.8339 165.231 3.63863L162.049 0.456654C161.854 0.261391 161.537 0.261391 161.342 0.456654C161.146 0.651916 161.146 0.968498 161.342 1.16376L164.17 3.99219L161.342 6.82061C161.146 7.01588 161.146 7.33246 161.342 7.52772C161.537 7.72298 161.854 7.72298 162.049 7.52772L165.231 4.34574ZM0.225342 4.49219H2.18548V3.49219H0.225342V4.49219ZM6.10577 4.49219H10.0261V3.49219H6.10577V4.49219ZM13.9463 4.49219H17.8666V3.49219H13.9463V4.49219ZM21.7869 4.49219H25.7072V3.49219H21.7869V4.49219ZM29.6275 4.49219H33.5478V3.49219H29.6275V4.49219ZM37.468 4.49219H41.3883V3.49219H37.468V4.49219ZM45.3086 4.49219H49.2289V3.49219H45.3086V4.49219ZM53.1492 4.49219H57.0695V3.49219H53.1492V4.49219ZM60.9897 4.49219H64.91V3.49219H60.9897V4.49219ZM68.8303 4.49219H72.7506V3.49219H68.8303V4.49219ZM76.6709 4.49219H80.5911V3.49219H76.6709V4.49219ZM84.5114 4.49219H88.4317V3.49219H84.5114V4.49219ZM92.352 4.49219H96.2723V3.49219H92.352V4.49219ZM100.193 4.49219H104.113V3.49219H100.193V4.49219ZM108.033 4.49219H111.953V3.49219H108.033V4.49219ZM115.874 4.49219H119.794V3.49219H115.874V4.49219ZM123.714 4.49219H127.635V3.49219H123.714V4.49219ZM131.555 4.49219H135.475V3.49219H131.555V4.49219ZM139.395 4.49219H143.316V3.49219H139.395V4.49219ZM147.236 4.49219H151.156V3.49219H147.236V4.49219ZM155.077 4.49219H158.997V3.49219H155.077V4.49219ZM162.917 4.49219H164.877V3.49219H162.917V4.49219Z" fill="#838383" />
									</svg>
								</div>
							</div>

							<div className="exchange-steps-block">
								<img src={ExchangeStepsImage3} alt="" className="exchange-steps-block__image" />

								<h3 className="exchange-steps-block__title">
									Шаг 3
								</h3>
								<p className="exchange-steps-block__description">
									Готово! Вы осознанно <br /> обновили гардероб
								</p>
							</div>
						</div>
					</div>

					<div className="exchange-option">
						<h2 className="exchange__title">
							Что еще мне нужно знать?
						</h2>
						<p className="exchange__description exchange-option__description">
							У нас есть две программы
						</p>

						<div className="exchange-option-blocks-wrapper">
							<div className="exchange-option-block hover-scale">
								<h3 className="exchange-option-block__title">
									Обмен
								</h3>
								<p className="exchange-option-block__description">
									Мы принимаем к обмену сумки, необязательно купленные у нас. Оцениваем ваш лот и предлагаем депозит в размере его стоимости. На эту сумму вы можете выбрать себе новую сумку на нашем сайте.
								</p>

								<Link
									to="/cabinet/sell?type=exchange"
									className="btn-regular exchange-option-block__btn"
								>
									Обменять
								</Link>
							</div>

							<div className="exchange-option-block hover-scale">
								<h3 className="exchange-option-block__title">
									Круговорот
								</h3>

								<p className="exchange-option-block__description">
									По этой программе мы принимаем только сумки, купленные на нашей платформе, снова в свою коллекцию. А вам предлагаем альтернативу на специальных условиях.
								</p>

								{/* <div className="exchange-option-block-option">
									<div className="exchange-option-block-option-block">
										<h4 className="exchange-option-block-option-block__title">
											{`<`}1 месяца
										</h4>

										<p className="exchange-option-block-option-block__description">
											90% от изначальной стоимости
										</p>
									</div>

									<div className="exchange-option-block-option-block">
										<h4 className="exchange-option-block-option-block__title">
											от 1 до 3 месяцев
										</h4>

										<p className="exchange-option-block-option-block__description">
											85% от изначальной стоимости
										</p>
									</div>

									<div className="exchange-option-block-option-block">
										<h4 className="exchange-option-block-option-block__title">
											от 4 до 6 месяцев
										</h4>

										<p className="exchange-option-block-option-block__description">
											80% от изначальной стоимости
										</p>
									</div>

									<div className="exchange-option-block-option-block">
										<p className="exchange-option-block-option-block__description">
										На сумки Hermes (Birkin, Kelly, Constance) распространяется фиксированный размер депозита — 85%, если ее состояние не изменилось.
										</p>
									</div>
								</div> */}

								<Link
									to=""
									className="btn-regular exchange-option-block__btn"
								>
									Подробнее
								</Link>
							</div>
						</div>
					</div>

					<div className="exchange-thecycle">
						<h2 className="exchange__title">
							О Круговороте
						</h2>
						<p className="exchange__description exchange-thecycle__description">
							Участвовать могут только лоты, купленные у нас не более, чем 6 месяцев назад. <br />
							Депозит на новую сумку зависит от того, сколько времени вы провели вместе со старой.
						</p>

						<div className="exchange-thecycle-blocks-wrapper">
							<div className="exchange-thecycle-block">
								<h3 className="exchange-thecycle-block__title">
									{`<`} 1 месяца
								</h3>
								<p className="exchange-thecycle-block__description">
									90% от изначальной стоимости
								</p>
							</div>

							<div className="exchange-thecycle-block">
								<h3 className="exchange-thecycle-block__title">
									от 1 до 3 месяцев
								</h3>
								<p className="exchange-thecycle-block__description">
									85% от изначальной стоимости
								</p>
							</div>

							<div className="exchange-thecycle-block">
								<h3 className="exchange-thecycle-block__title">
									от 4 до 6 месяцев
								</h3>
								<p className="exchange-thecycle-block__description">
									80% от изначальной стоимости
								</p>
							</div>
						</div>

						<p className="exchange-thecycle__subtitle">
							На сумки Hermes (Birkin, Kelly, Constance) распространяется фиксированный размер депозита — 85%, если ее состояние не изменилось.
						</p>

						<Link to="/cabinet/sell" className="btn exchange-thecycle__btn">Отправить заявку</Link>
					</div>

					<div className="exchange-example">
						<h2 className="exchange-example__title">
							Пример расчета депозита по программе Круговорот
						</h2>

						<p className="exchange-example__description">
							Например, вы купили сумку Bottega Venetta за 100.000р на нашем сайте и теперь хотите ее обменять. Так будет рассчитан депозит на покупку новой сумки:
						</p>

						<div className="exchange-example-block-wrapper">
							<div className="exchange-example-block-product">
								<h3 className="exchange-example-block-product__title">
									Стоимость товара
								</h3>

								<img src={ExchangeExampleImage} alt="" className="exchange-example-block-product__image" />
							</div>

							<div className="exchange-example-block-price">
								<h3 className="exchange-example-block-price__title">
									Стоимость депозита
								</h3>

								<p className="exchange-example-block-price__value">Фиксированный процент 90/85/80 от стоимости лота</p>

								<p className="exchange-example-block-price__subvalue">
									<span>90.000₽</span> - при обмене сумки менее чем через месяц после покупки
								</p>
								<p className="exchange-example-block-price__subvalue">
									<span>85.000₽</span> - при обмене сумки в период от 1 до 3 месяцев
								</p>
								<p className="exchange-example-block-price__subvalue">
									<span>80.000₽</span> - при обмене сумки в период от 4 до 6 месяцев
								</p>

								<p className="exchange-example-block-price__subtitle">
									*в случае изменения состояния может быть произведена переоценка лота — этот вопрос решается в индивидуально порядке с менеджером
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section >
	)
}

export default Exchange