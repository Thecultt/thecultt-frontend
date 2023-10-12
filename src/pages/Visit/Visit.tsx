import React from "react";

import VisitImage from "../../assets/images/visit.jpg";

const Visit: React.FC = () => {
	return (
		<section className="visit">
			<div className="container">
				<div className="visit-wrapper">
					<a href="/" className="visit-back__btn">
						<svg
							width="8"
							height="15"
							viewBox="0 0 8 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M7 1.5L1 7.5L7 13.5"
								stroke="#202020"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
						Вернуться
					</a>

					<div className="visit-main hover-scale">
						<div
							className="visit-main-image"
							style={{
								backgroundImage: `url('${VisitImage}')`,
							}}
						></div>

						<div className="visit-main-text">
							<h2 className="visit-main-text__title">
								Забронируйте свой визит <br /> в THE CULTT!
							</h2>

							<p className="visit-main-text__subtitle">
								Ждем вас в нашем офисе в Москве!
							</p>

							<p className="visit-main-text__description">
								Благодаря услуге бронирования визита вы сможете
								примерить заинтересовавшие вас аксессуары или
								обсудить варианты продажи своих лотов через наш
								сервис в спокойной обстановке. Наш менеджер
								проконсультирует вас и ответит на любые вопросы.
							</p>

							<a
								href="https://calendly.com/thecultt/visit"
								className="btn visit-main-text__btn"
							>
								Выбрать время
							</a>
						</div>
					</div>

					<div className="visit-service">
						<div className="visit-service-block hover-scale">
							<h2 className="visit-service-block__title">
								Для покупателя
							</h2>
							<p className="visit-service-block__subtitle">
								Если вы покупатель - примерьте сумки и
								аксессуары лучших дизайнеров из коллекции THE
								CULTT.
							</p>
							<p className="visit-service-block__description">
								*Для примерки доступно до 5 аксессуаров из
								актуального на момент визита наличия
							</p>
						</div>

						<div className="visit-service-block hover-scale">
							<h2 className="visit-service-block__title">
								Для продавца
							</h2>

							<p className="visit-service-block__subtitle">
								<ul>
									<li>
										Обратите внимание на критерии отбора и{" "}
										<a href="https://thecultt.com/prodat">
											бренд-лист
										</a>{" "}
										— какие аксессуары мы принимаем.
									</li>

									<li>
										<a
											href="https://calendly.com/thecultt/visit?month=2023-05"
											target="_blank">
											Выберите время
										</a>{" "}
										для визита к нам в офис.
									</li>

									<li>
										Возьмите с собой паспорт для оформления
										сделки.
									</li>

									<li>
										Наши эксперты оценят лоты, проведут
										аутентификацию и согласуют с вами
										условия.
									</li>

									<li>
										Весь остальной процесс продажи мы
										возьмем на себя — вам останется только
										получить деньги на карту.
									</li>
								</ul>
							</p>
							{/* <p className="visit-service-block__subtitle">
                                Если вы продавец - встретьтесь с нашим
                                экспертом, чтобы узнать, сколько вы сможете
                                заработать на своих аксессуарах, и оставьте их
                                для продажи через наш сервис.
                            </p> */}
							{/* <p className="visit-service-block__description">
                                Услуга доступна для передачи на продажу
                                аксессуаров, соответсвующих нашему бренд-листу{" "}
                                <a href="https://thecultt.com/prodat">
                                    https://thecultt.com/prodat
                                </a>
                            </p>
                            <p className="visit-service-block__description">
                                **Для оформления сделки понадобятся паспортные
                                данные
                            </p> */}
						</div>
					</div>

					<div className="visit-office hover-scale">
						<div className="visit-office-block">
							<h2 className="visit-office-block__title">
								Адрес офиса
							</h2>
							<p className="visit-office-block__subtitle">
								Мы находимся по адресу Трубная 25с3 (3 этаж,
								офис THE CULTT).
								<br />
								Ежедневно с 10:00 до 18:00 пн-пт. Для посещения необходима регистрация!
							</p>
							<a
								href="https://calendly.com/thecultt/visit"
								className="btn visit-office-block__btn"
							>
								Выбрать время
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Visit;
