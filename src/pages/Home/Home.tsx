import React from 'react'
import { Helmet } from 'react-helmet'

import { HomeMainBanner, HomeCategories, CatalogProductsSection, HomeVisit, HomeSell, HomeSellPartners, HomeAbout, HomeWaiting } from '../../components/'

const Home: React.FC = () => {
	return (
		<>
			<Helmet>
				{/* <script src="//code.jivo.ru/widget/zAUiclp1Hy" async></script> */}
			</Helmet>

			<section className="home">
				<div className="container">
					<div className="home-wrapper">
						<HomeMainBanner />

						<HomeCategories />

						<CatalogProductsSection title='Новинки' />

						<HomeVisit />

						<HomeSell />

						<HomeSellPartners />

						<HomeAbout />

						<HomeWaiting />
					</div>
				</div>
			</section>
		</>
	)
}

export default Home