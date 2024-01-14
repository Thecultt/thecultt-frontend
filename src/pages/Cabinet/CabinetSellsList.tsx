import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { useTypedSelector } from '../../hooks/useTypedSelector'

import { fetchCabinetSellsList } from '../../redux/actions/cabinet_sell'

import { CabinetMenu, CabinetSellsListPaymentInfoMessage, CabinetSellsListItem } from '../../components/'

const CabinetSellsList: React.FC = () => {
	const dispatch = useDispatch()

	const { user } = useTypedSelector(({ user }) => user)
	const { sellsList } = useTypedSelector(({ cabinet_sell }) => cabinet_sell)

	React.useEffect(() => {
		dispatch(fetchCabinetSellsList() as any)
	}, [])

	return (
		<section className="cabinet">
			<div className="container">
				<div className="cabinet-wrapper">
					<CabinetMenu />

					<div className="cabinet-content cabinet-sells-list">
						{user.bik === "" || user.bik === null || user.inn === "" || user.inn === null || user.passport === "" || user.passport === null || user.rs === "" || user.rs === null ? (
							<CabinetSellsListPaymentInfoMessage />
						) : null}


						<div className="cabinet-sells-list-top">
							<Link to="/cabinet/sell" className="btn cabinet-sells-list-top__add">
								Оставить заявку

								<svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M11.2487 4.58203V17.4154M4.83203 10.9987H17.6654" stroke="#F7F4F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>

							</Link>
						</div>

						{sellsList.map((sell, index) => (
							<CabinetSellsListItem {...sell} key={`cabinet-sells-list-item-${index}`} />
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default CabinetSellsList