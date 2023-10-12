import React from 'react'

import { HomeMainBanner, HomeCategories, CatalogProductsSection, HomeVisit, HomeSell, HomeSellPartners, HomeAbout, HomeWaiting } from '../../components/'

const Home: React.FC = () => {
	return (
		<section className="home">
			<div className="container">
				<div className="home-wrapper">
					<HomeMainBanner />

					<HomeCategories />

					{/* <CatalogProductsSection title='Новое' /> */}

					<HomeVisit />

					<HomeSell />

					<HomeSellPartners />

					<HomeAbout />

					<HomeWaiting />
				</div>
			</div>
		</section>
	)
}

export default Home