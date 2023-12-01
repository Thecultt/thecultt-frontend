import React from 'react'

import { useTypedSelector } from '../../hooks/useTypedSelector'

const SellInfoBrands: React.FC = () => {
	const { categories, isLoaded } = useTypedSelector(
		({ products_filters }) => products_filters
	);

	const [brands, setBrands] = React.useState<{ [key: string]: { [key: string]: string } }>({})

	React.useEffect(() => {
		if (isLoaded) {
			const newBrands: { [key: string]: { [key: string]: string } } = {}

			Object.keys(categories).map((category) => {
				Object.keys(categories[category].subsubcategories).map(subsubcategory => (
					Object.keys(categories[category].subsubcategories[subsubcategory]).map(brand => {
						newBrands[category] = { ...newBrands[category], [brand]: brand }
					})
				))
			})

			setBrands(newBrands)
		}
	}, [isLoaded])

	return (
		<section className='sell-info-brands'>
			<div className="container">
				<div className="sell-info-brands-wrapper">
					{Object.keys(brands).map((category) => (
						<div className={`sell-info-brands-block`} key={`sell-info-brands-block-${category}`}>
							<h3 className="sell-info-brands-block__title">
								{category}
							</h3>

							<div className="sell-info-brands-block-subblock-item-wrapper">
								{Object.keys(brands[category]).map((brand) => (
									<p className={`sell-info-brands-block-subblock__item`} key={`sell-info-brands-block-${category}__item-${brand}`}>
										{brand}
									</p>
								))}
							</div>
						</div>
					))}

				</div>
			</div>
		</section>
	)
}

export default SellInfoBrands