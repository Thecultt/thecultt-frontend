import React from "react";

import {
    ProductCover,
    ProductInfo,
    CatalogGoodsSection,
    SellAndSale,
} from "../../components/";

const Product: React.FC = () => {
    return (
        <>
            <section className="product">
                <div className="container">
                    <div className="product-wrapper">
                        <button className="product__back">
                            <svg
                                width="7"
                                height="13"
                                viewBox="0 0 7 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6 11.5L1 6.5L6 1.5"
                                    stroke="#202020"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            Вернуться назад
                        </button>

                        <div className="product-content">
                            <ProductCover
                                images={[
                                    "https://thecultt.com/assets/cache_image/products/5401/51cbb68029a037c5d5b32fbbe9cb5c5069a37f0a_1000x1330_254.jpg",
                                    "https://thecultt.com/assets/cache_image/products/5401/a32cc6b090b419bdef3c8b4eeca96076fbb58df1_1000x1330_254.jpg",
                                    "https://thecultt.com/assets/cache_image/products/5401/69dc611b0f62fdd396777d8dab4782b7afd9a502_1000x1330_254.jpg",
                                    "https://thecultt.com/assets/cache_image/products/5401/8f15497cec1a81639f170c2c2c03d9beb15e7d9d_1000x1330_254.jpg",
                                    "https://thecultt.com/assets/cache_image/products/5401/5067e68bceeb168a0ca840ca0cd41abbb20b8929_1000x1330_254.jpg",
                                    "https://thecultt.com/assets/cache_image/products/5401/8a5d022ba2388cb6d2496ae81ce90b70f2c661c9_1000x1330_254.jpg",
                                ]}
                            />

                            <ProductInfo />
                        </div>
                    </div>
                </div>
			</section>
			
			<CatalogGoodsSection />

			<SellAndSale />
        </>
    );
};

export default Product;
