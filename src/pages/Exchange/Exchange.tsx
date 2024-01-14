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
							</div>

							<div className="exchange-steps-block">
								<img src={ExchangeStepsImage2} alt="" className="exchange-steps-block__image" />

								<h3 className="exchange-steps-block__title">
									Шаг 2
								</h3>

								<p className="exchange-steps-block__description">
									Подайте заявку на обмен старой <br /> сумки на новую, указав ссылку на нее
								</p>
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

								<div className="exchange-option-block-option">
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
								</div>

								<Link
									to=""
									className="btn-regular exchange-option-block__btn"
								>
									Подробнее
								</Link>

								<Link
									to="/cabinet/sell?type=exchange"
									className="btn exchange-option-block__btn__media"
								>
									Отправить заявку
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

						<Link to="/cabinet/sell?type=exchange" className="btn exchange-thecycle__btn">Отправить заявку</Link>
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