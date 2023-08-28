import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {
	CabinetMenu,
	CabinetWaitingListItem,
} from "../../components/";

import { fetchWaitingList } from '../../redux/actions/waiting'

import { useTypedSelector } from '../../hooks/useTypedSelector'

const CabinetWaitingList: React.FC = () => {
	const dispatch = useDispatch()

	const { items } = useTypedSelector(({ waiting }) => waiting)

	React.useEffect(() => {
		dispatch(fetchWaitingList() as any)
	}, [])

	return (
		<section className="cabinet">
			<div className="container">
				<div className="cabinet-wrapper">
					<CabinetMenu />

					<div className="cabinet-content cabinet-waiting-list">
						<Link to="#create_waiting" className="btn cabinet-waiting-list__add">
							Подать новую заявку
							<svg
								width="22"
								height="22"
								viewBox="0 0 22 22"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M11 3V19M3 11H19"
									stroke="white"
									strokeWidth="1.2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</Link>

						<div className="cabinet-waiting-list-items-wrapper">
							{items.map((item, index) => (
								<CabinetWaitingListItem {...item} index={index} key={`cabinet-waiting-list-items-${index}`} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CabinetWaitingList;
