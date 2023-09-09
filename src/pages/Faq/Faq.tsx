import React from 'react'
import { useParams, NavLink } from 'react-router-dom'

import { FaqAll, FaqBuyers } from '../../components/'

const Faq: React.FC = () => {
	const { block } = useParams()

	return (
		<section className='faq-main'>
			<div className="container">
				<div className="faq-main-wrapper">
					<div className="faq-main-menu">
						<NavLink to="/help/all" className={(({ isActive }) => `faq-main-menu__link ${isActive ? "active" : ""}`)}>Общее</NavLink>
						<NavLink to="/help/buyers" className={(({ isActive }) => `faq-main-menu__link ${isActive ? "active" : ""}`)}>Покупателям</NavLink>
						<NavLink to="/help/sellers" className={(({ isActive }) => `faq-main-menu__link ${isActive ? "active" : ""}`)}>Продавцам</NavLink>
					</div>

					<div className="faq-main-content">
						{block === "all" ? (
							<FaqAll />
						) : null}

						{block === "buyers" ? (
							<FaqBuyers />
						) : null}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Faq