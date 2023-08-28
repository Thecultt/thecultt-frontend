import React from "react";
import { Link } from "react-router-dom";

import { WaitingListItem } from '../../models/IWaitingListItem'

interface CabinetWaitingListItemProps extends WaitingListItem {
	index: number
}

const CabinetWaitingListItem: React.FC<CabinetWaitingListItemProps> = ({ category, subcategory, model_name, num_products, index }) => {
	return (
		<div className="cabinet-waiting-list-item-wrapper">
			<div className="cabinet-waiting-list-item">
				<button className="cabinet-waiting-list-item__remove">
					Отписаться
				</button>
				<div className="cabinet-waiting-list-item-title">
					<h3 className="cabinet-waiting-list-item-title__title">
						Подписка №{index+1}
					</h3>
					{num_products ?
						<Link to="/" className="cabinet-waiting-list-item-title__subtitle">Доступно товаров на сайте {num_products}шт.</Link>
						:
						null
					}
				</div>
				<div className="cabinet-waiting-list-item-info">
					<div className="cabinet-waiting-list-item-info-item">
						<p className="cabinet-waiting-list-item-info-item__title">
							Категория:
						</p>
						<p className="cabinet-waiting-list-item-info-item__value">
							{category}
						</p>
					</div>
					<div className="cabinet-waiting-list-item-info-item">
						<p className="cabinet-waiting-list-item-info-item__title">
							Тип:
						</p>
						<p className="cabinet-waiting-list-item-info-item__value">
							{subcategory}
						</p>
					</div>
					<div className="cabinet-waiting-list-item-info-item">
						<p className="cabinet-waiting-list-item-info-item__title">
							Название модели:
						</p>
						<p className="cabinet-waiting-list-item-info-item__value">
							{model_name}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CabinetWaitingListItem;
