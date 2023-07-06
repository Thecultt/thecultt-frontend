import React from "react";

import {BrandsSearch, BrandsList} from "../../components/";

const Brands: React.FC = () => {
    return (
        <section className="brands">
            <div className="container">
				<div className="brands-wrapper">
					<BrandsSearch />

					<BrandsList />
				</div>
            </div>
        </section>
    );
};

export default Brands;
