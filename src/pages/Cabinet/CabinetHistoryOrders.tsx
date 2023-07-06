import React from "react";

import {CabinetMenu, CabinetHistoryOrdersItem} from "../../components/";

const CabinetHistoryOrders: React.FC = () => {
    return (
        <section className="cabinet">
            <div className="container">
                <div className="cabinet-wrapper">
                    <CabinetMenu title="История Заказов" />

                    <div className="cabinet-content cabinet-history-orders">
                        <CabinetHistoryOrdersItem />
                        <CabinetHistoryOrdersItem />
                        <CabinetHistoryOrdersItem />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CabinetHistoryOrders;
