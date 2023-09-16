import React from 'react'
import { useDispatch } from 'react-redux'

import { useTypedSelector } from '../../hooks/useTypedSelector'

import { fetchCabinetSellsList } from '../../redux/actions/cabinet_sell'

import { CabinetMenu, CabinetSellsListItem } from '../../components/'

const CabinetSellsList: React.FC = () => {
	const dispatch = useDispatch()

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