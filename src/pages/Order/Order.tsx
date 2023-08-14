import React from "react";

import {OrderForm, OrderProducts} from "../../components/";

const Order: React.FC = () => {
    return (
        <section className="order">
            <div className="container">
                <div className="order-wrapper">
                    <OrderForm />

                    <OrderProducts />
                </div>
            </div>
        </section>
    );
};

export default Order;
