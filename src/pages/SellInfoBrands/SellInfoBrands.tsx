import React from 'react'

import { useTypedSelector } from '../../hooks/useTypedSelector'

const SellInfoBrands: React.FC = () => {
	const { categories } = useTypedSelector(
		({ products_filters }) => products_filters
	);

	return (
		<section className='sell-info-brands'>
			<div className="container">
				<div className="sell-info-brands-wrapper">
					{Object.keys(categories).map((category) => (
						<div className={`sell-info-brands-block`} key={`sell-info-brands-block-${category}`}>
							<h3 className="sell-info-brands-block__title">
								{category}
							</h3>

							{Object.keys(categories[category].subsubcategories).map((subsubcategory) => (
								<div className={`sell-info-brands-block-subblock`} key={`sell-info-brands-block-${category}-subblock-${subsubcategory}`}>
									<h4 className="sell-info-brands-block-subblock__title">
										{subsubcategory}
									</h4>

									<div className="sell-info-brands-block-subblock-item-wrapper">
										{Object.keys(categories[category].subsubcategories[subsubcategory]).map((brand) => (
											<p className={`sell-info-brands-block-subblock__item`} key={`sell-info-brands-block-${category}-subblock-${subsubcategory}__item-${brand}`}>
												{brand}
											</p>
										))}
									</div>
								</div>
							))}

						</div>
					))}

				</div>
			</div>
		</section>
	)
}

export default SellInfoBrands