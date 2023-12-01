import React from "react";
import AnimateHeight from "react-animate-height";
import { NumericFormat } from "react-number-format";
import moment from "moment";

const CabinetSellsListItem: React.FC<any> = ({
	id,
	time,
	status,
	category,
	vendor,
	model,
	condition,
	defects,
	price,
	status_description
}) => {
	const [isOpen, setIsOpen] = React.useState<boolean>(false);

	const toggleOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div
			className="cabinet-sells-list-item-wrapper"
			onClick={toggleOpen}
		>
			<div className="cabinet-sells-list-item">
				<div className="cabinet-sells-list-item-topinfo">
					<div className="cabinet-sells-list-item-topinfo-block">
						<h3 className="cabinet-sells-list-item-topinfo-block__title">
							Заказ: #{id}
						</h3>

						<p className="cabinet-sells-list-item-topinfo-block__date">
							от {moment(time).format("DD.MM.YYYY, hh:ss")}
						</p>

						<p className="cabinet-sells-list-item-topinfo-block__status__media">
							{status}

							<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M8.19987 11.1654V8.4987M8.19987 5.83203H8.20376M14.8665 8.4987C14.8665 12.1806 11.8818 15.1654 8.19987 15.1654C4.51797 15.1654 1.5332 12.1806 1.5332 8.4987C1.5332 4.8168 4.51797 1.83203 8.19987 1.83203C11.8818 1.83203 14.8665 4.8168 14.8665 8.4987Z" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" />
							</svg>

							<span className="message-info-wrapper">
								<span className="message-info">
									{status_description}
								</span>
							</span>
						</p>
					</div>
					<div className="cabinet-sells-list-item-topinfo-block">
						{/* {status === "success" ? (
							<p className="cabinet-sells-list-item-topinfo-block__status success">
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
							<p className="cabinet-sells-list-item-topinfo-block__status error">
								{status}

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
						)} */}

						<p className="cabinet-sells-list-item-topinfo-block__status">
							{status}

							<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M8.19987 11.1654V8.4987M8.19987 5.83203H8.20376M14.8665 8.4987C14.8665 12.1806 11.8818 15.1654 8.19987 15.1654C4.51797 15.1654 1.5332 12.1806 1.5332 8.4987C1.5332 4.8168 4.51797 1.83203 8.19987 1.83203C11.8818 1.83203 14.8665 4.8168 14.8665 8.4987Z" stroke="#202020" strokeLinecap="round" strokeLinejoin="round" />
							</svg>

							<span className="message-info-wrapper">
								<span className="message-info">
									{status_description}
								</span>
							</span>
						</p>

						<div
							className={`cabinet-sells-list-item-topinfo-block-icon ${isOpen ? "rotate" : ""
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
					<div className="cabinet-sells-list-item-info">
						<div className="cabinet-sells-list-item-info-block">
							<h4 className="cabinet-sells-list-item-info-block__title">
								Информация о товаре
							</h4>

							<div className="cabinet-sells-list-item-info-block-value-wrapper bb">
								<div className="cabinet-sells-list-item-info-block-value">
									<p className="cabinet-sells-list-item-info-block-value__value">
										<span>Категория:</span> {category}
									</p>

									<p className="cabinet-sells-list-item-info-block-value__value">
										<span>Бренд:</span> {vendor}
									</p>

									{model !== "" && model ? (
										<p className="cabinet-sells-list-item-info-block-value__value">
											<span>Модель:</span> {model}
										</p>
									) : null}
								</div>

								<div className="cabinet-sells-list-item-info-block-value ml">
									<p className="cabinet-sells-list-item-info-block-value__value">
										<span>Статус обновлен:</span> 26.06.2023 21:39
									</p>

									<p className="cabinet-sells-list-item-info-block-value__value">
										<span>Дата оформления:</span> 26.06.2023 21:39
									</p>
								</div>
							</div>

							<div className="cabinet-sells-list-item-info-block-value">
								<p className="cabinet-sells-list-item-info-block-value__value">
									<span>Состояние:</span> {condition}
								</p>

								<p className="cabinet-sells-list-item-info-block-value__value">
									<span>Дефекты:</span> {defects}
								</p>

								<p className="cabinet-sells-list-item-info-block-value__value">
									<span>Ожидание по цене:</span> 	<NumericFormat
										value={price}
										displayType={"text"}
										thousandSeparator={" "}
										renderText={(formattedValue: string) => (
											<>
												{parseInt(
													formattedValue.split(" ").join("")
												) >= 10000
													? formattedValue
													: parseInt(
														formattedValue
															.split(" ")
															.join("")
													)}
											</>
										)}
									/>{" "}
									₽
								</p>
							</div>
						</div>
					</div>
				</AnimateHeight>
			</div>
		</div>
	);
};

export default CabinetSellsListItem;
