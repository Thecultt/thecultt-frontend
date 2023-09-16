import React from "react";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../../hooks/useTypedSelector";

import { fetchBrands } from "../../redux/actions/brands";

import { BrandsSearch, BrandsList } from "../../components/";

const Brands: React.FC = () => {
	const dispatch = useDispatch()

	const { isLoaded } = useTypedSelector(({ brands }) => brands)

	React.useEffect(() => {
		dispatch(fetchBrands() as any)
	}, [])

	return (
		<>
			{isLoaded ? (
				<section className="brands">
					<div className="container">
						<div className="brands-wrapper">
							<BrandsSearch />

							<BrandsList />
						</div>
					</div>
				</section>
			) : null}
		</>
	);
};

export default Brands;
