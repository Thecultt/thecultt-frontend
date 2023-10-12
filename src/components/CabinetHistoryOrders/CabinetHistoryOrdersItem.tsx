import React from "react";
import AnimateHeight from "react-animate-height";

import { Order } from '../../models/IOrder'

interface CabinetHistoryOrdersItemProps extends Order {
	status: string;
}

const CabinetHistoryOrdersItem: React.FC<CabinetHistoryOrdersItemProps> = ({
	num,
	createdon,
	cost,
	client_name,
	client_phone,
	delivery_address,
	delivery_type,
	payment_type,
	status,
}) => {
	const [isOpen, setIsOpen] = React.useState<boolean>(false);

	const toggleOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div
			className="cabinet-history-orders-item-wrapper"
			onClick={toggleOpen}
		>
			<div className="cabinet-history-orders-item">
				<div className="cabinet-history-orders-item-topinfo">
					<div className="cabinet-history-orders-item-topinfo-block">
						<h3 className="cabinet-history-orders-item-topinfo-block__title">
							Заказ: #{num}
						</h3>

						<p className="cabinet-history-orders-item-topinfo-block__date">
							от {createdon}
						</p>

						<p className="cabinet-history-orders-item-topinfo-block__sum">
							{cost} ₽
						</p>
					</div>
					<div className="cabinet-history-orders-item-topinfo-block">
						{status === "success" ? (
							<p className="cabinet-history-orders-item-topinfo-block__status success">
								Заказ отправлен СДЭК

								<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clipPath="url(#clip0_7335_16329)">
										<path d="M9 12V9M9 6H9.0075M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z" stroke="#285141" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</g>
									<defs>
										<clipPath id="clip0_7335_16329">
											<rect width="18" height="18" fill="white" />
										</clipPath>
									</defs>
								</svg>
							</p>
						) : (
							<p className="cabinet-history-orders-item-topinfo-block__status error">
								Возврат

								<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<g clipPath="url(#clip0_7335_16329)">
										<path d="M9 12V9M9 6H9.0075M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z" stroke="#202020" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</g>
									<defs>
										<clipPath id="clip0_7335_16329">
											<rect width="18" height="18" fill="white" />
										</clipPath>
									</defs>
								</svg>
							</p>
						)}

						<div
							className={`cabinet-history-orders-item-topinfo-block-icon ${isOpen ? "rotate" : ""
								}`}
						>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g id="Icons">
									<path
										id="Vector"
										d="M5 8L12 15L19 8"
										stroke="#202020"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</g>
							</svg>
						</div>
					</div>
				</div>

				<AnimateHeight duration={300} height={isOpen ? "auto" : 1}>
					<div className="cabinet-history-orders-item-info">
						<div className="cabinet-history-orders-item-info-blocks-wrapper">
							<div className="cabinet-history-orders-item-info-block">
								<h3 className="cabinet-history-orders-item-info-block__title">
									Получатель
								</h3>
								<p className="cabinet-history-orders-item-info-block__subtitle">
									<span>Имя:</span> {client_name}
								</p>

								<p className="cabinet-history-orders-item-info-block__subtitle">
									<span>Телефон:</span> {client_phone}
								</p>
							</div>
							<div className="cabinet-history-orders-item-info-block">
								<h3 className="cabinet-history-orders-item-info-block__title">
									Доставка
								</h3>
								<p className="cabinet-history-orders-item-info-block__subtitle">
									<span>Вариант доставки:</span> {delivery_type}
								</p>

								<p className="cabinet-history-orders-item-info-block__subtitle">
									<span>Адрес доставки:</span> {delivery_address}
								</p>
							</div>
							<div className="cabinet-history-orders-item-info-block">
								<h3 className="cabinet-history-orders-item-info-block__title">
									Оплата
								</h3>

								<p className="cabinet-history-orders-item-info-block__subtitle">
									<span>Тип оплаты:</span> {payment_type}
								</p>

								{/* <p className="cabinet-history-orders-item-info-block__subtitle">
									<span>Статус оплаты:</span>{" "}
									<p className="payment">
										Оплачено{" "}
										<svg
											width="16"
											height="15"
											viewBox="0 0 16 15"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<g id="Group">
												<path
													id="Vector"
													d="M7.50781 14.5C11.3738 14.5 14.5078 11.366 14.5078 7.5C14.5078 3.63401 11.3738 0.5 7.50781 0.5C3.64182 0.5 0.507812 3.63401 0.507812 7.5C0.507812 11.366 3.64182 14.5 7.50781 14.5Z"
													stroke="#285141"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													id="Vector_2"
													d="M4.39844 7.50477L6.73177 9.83811L10.6207 5.94922"
													stroke="#285141"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</g>
										</svg>
									</p>
								</p> */}
							</div>
						</div>
						{/* <div className="cabinet-history-orders-item-info-product-wrapper">
							<div className="cabinet-history-orders-item-info-good">
								<div
									className="cabinet-history-orders-item-info-good-image"
									style={{
										backgroundImage:
											"url('https://thecultt.com/assets/cache_image/products/5703/3a62c0f2389228fdfb0474c35d4d2cb98a24df52_1000x1330_254.jpg')",
									}}
								></div>
								<div className="cabinet-history-orders-item-info-good-text">
									<p className="cabinet-history-orders-item-info-good-text__brand">
										Gucci
									</p>
									<p className="cabinet-history-orders-item-info-good-text__model">
										MINI BUCKET BAG
									</p>
									<p className="cabinet-history-orders-item-info-good-text__option">
										<span>Цвет:</span> Белый
									</p>
									<p className="cabinet-history-orders-item-info-good-text__option">
										<span>Комплект:</span> Пыльник и ремешок
									</p>

									<div className="cabinet-history-orders-item-info-good-text-state">
										<span className="cabinet-history-orders-item-info-good-text-state__subtitle">
											Состояние
										</span>

										<span className="cabinet-history-orders-item-info-good-text-state__title">
											<svg
												viewBox="0 0 11 12"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M5.50781 11C8.26924 11 10.5078 8.76142 10.5078 6C10.5078 3.23858 8.26924 1 5.50781 1C2.74639 1 0.507812 3.23858 0.507812 6C0.507812 8.76142 2.74639 11 5.50781 11Z"
													stroke="#285141"
													strokeWidth="0.716034"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M3.28516 6.00369L4.95182 7.67036L7.7296 4.89258"
													stroke="#285141"
													strokeWidth="0.716034"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
											Отличное
										</span>
									</div>

									<p className="cabinet-history-orders-item-info-good-text-state__price">
										12,892 ₽
									</p>
								</div>
							</div>

							<div className="cabinet-history-orders-item-info-good">
								<div
									className="cabinet-history-orders-item-info-good-image"
									style={{
										backgroundImage:
											"url('https://thecultt.com/assets/cache_image/products/5703/3a62c0f2389228fdfb0474c35d4d2cb98a24df52_1000x1330_254.jpg')",
									}}
								></div>
								<div className="cabinet-history-orders-item-info-good-text">
									<p className="cabinet-history-orders-item-info-good-text__brand">
										Gucci
									</p>
									<p className="cabinet-history-orders-item-info-good-text__model">
										MINI BUCKET BAG
									</p>
									<p className="cabinet-history-orders-item-info-good-text__option">
										<span>Цвет:</span> Белый
									</p>
									<p className="cabinet-history-orders-item-info-good-text__option">
										<span>Комплект:</span> Пыльник и ремешок
									</p>

									<div className="cabinet-history-orders-item-info-good-text-state">
										<span className="cabinet-history-orders-item-info-good-text-state__subtitle">
											Состояние
										</span>

										<span className="cabinet-history-orders-item-info-good-text-state__title">
											<svg
												viewBox="0 0 11 12"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M5.50781 11C8.26924 11 10.5078 8.76142 10.5078 6C10.5078 3.23858 8.26924 1 5.50781 1C2.74639 1 0.507812 3.23858 0.507812 6C0.507812 8.76142 2.74639 11 5.50781 11Z"
													stroke="#285141"
													strokeWidth="0.716034"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M3.28516 6.00369L4.95182 7.67036L7.7296 4.89258"
													stroke="#285141"
													strokeWidth="0.716034"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
											Отличное
										</span>
									</div>

									<p className="cabinet-history-orders-item-info-good-text-state__price">
										12,892 ₽
									</p>
								</div>
							</div>
						</div> */}
					</div>
				</AnimateHeight>
			</div>
		</div>
	);
};

export default CabinetHistoryOrdersItem;
