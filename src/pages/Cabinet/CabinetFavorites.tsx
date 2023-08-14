import React from "react";

import {CabinetMenu, ProductBlock} from "../../components/";

const CabinetFavorites: React.FC = () => {
    return (
        <section className="cabinet">
            <div className="container">
                <div className="cabinet-wrapper">
                    <CabinetMenu />

                    <div className="cabinet-content cabinet-favorites">
                        {/* <div className="cabinet-favorites-blocks-wrapper">
                            <ProductBlock
                                addClass="cabinet-favorites-block"
                                isFavorite
                            />
                            <ProductBlock
                                isFavorite
                                addClass="cabinet-favorites-block"
                            />
                            <ProductBlock
                                isFavorite
                                addClass="cabinet-favorites-block"
                            />
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CabinetFavorites;
