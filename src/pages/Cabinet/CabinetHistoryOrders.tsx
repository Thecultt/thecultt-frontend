import React from "react";

import {CabinetMenu, CabinetHistoryOrdersItem} from "../../components/";

const CabinetHistoryOrders: React.FC = () => {
    return (
        <section className="cabinet">
            <div className="container">
                <div className="cabinet-wrapper">
                    <CabinetMenu />

                    <div className="cabinet-content cabinet-history-orders">
                        <CabinetHistoryOrdersItem status="success" />
                        <CabinetHistoryOrdersItem status="error" />
                        <CabinetHistoryOrdersItem status="success" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CabinetHistoryOrders;
