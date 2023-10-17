import React from "react";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../../hooks/useTypedSelector";

import { fetchHistoryOrders } from "../../redux/actions/history_orders";

import { CabinetMenu, CabinetHistoryOrdersItem } from "../../components/";

const CabinetHistoryOrders: React.FC = () => {
	const dispatch = useDispatch()

	const { items, isLoaded } = useTypedSelector(({ history_orders }) => history_orders)

	React.useEffect(() => {
		dispatch(fetchHistoryOrders() as any)
	}, [])

	return (
		<section className="cabinet">
			<div className="container">
				<div className="cabinet-wrapper">
					<CabinetMenu />

					{isLoaded ? (
						<div className="cabinet-content cabinet-history-orders">
							{items.map((item, index) => (
								<CabinetHistoryOrdersItem {...item} key={`cabinet-history-orders-${index}`} />
							))}
						</div>
					) : null}
				</div>
			</div>
		</section>
	);
};

export default CabinetHistoryOrders;
