import React from "react";

import {CabinetMenu, GoodsBlock} from "../../components/";

const CabinetFavorites: React.FC = () => {
    return (
        <section className="cabinet">
            <div className="container">
                <div className="cabinet-wrapper">
                    <CabinetMenu title="Избранное" />

                    <div className="cabinet-content cabinet-favorites">
                        <h2 className="cabinet__title">Избранное</h2>

                        <div className="cabinet-favorites-block-wrapper">
                            <GoodsBlock
                                style={{width: "24%", marginRight: "15px"}}
                                isFavorite
                            />
                            <GoodsBlock
                                style={{width: "24%", marginRight: "15px"}}
                                isFavorite
                            />
                            <GoodsBlock
                                style={{width: "24%", marginRight: "15px"}}
                                isFavorite
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CabinetFavorites;
