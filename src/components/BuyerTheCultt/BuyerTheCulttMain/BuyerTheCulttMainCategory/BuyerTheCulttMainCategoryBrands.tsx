import React from 'react'

interface BuyerTheCulttMainCategoryBrandsProps {
	brands: string[]
	currentFilterBrand: string
	setCurrentFilterBrand: (brand: string) => void
}

const BuyerTheCulttMainCategoryBrands: React.FC<BuyerTheCulttMainCategoryBrandsProps> = ({ brands, currentFilterBrand, setCurrentFilterBrand }) => {
	return (
		<div className='buyer-thecultt-category-brands'>
			{brands.map((brand, index) => (
				<button onClick={() => setCurrentFilterBrand(brand)} className={`buyer-thecultt-category-brands__brand ${currentFilterBrand === brand ? "active" : ""}`} key={`buyer-thecultt-category-brands__brand-${brand}-${index}`}>
					{brand}
				</button>
			))}
		</div>
	)
}

export default BuyerTheCulttMainCategoryBrands