import React from "react";

import {OrderForm, OrderProducts} from "../../components/";

const Order: React.FC = () => {
	const onSubmit = (data: any) => {
		console.log(data)
	}

    return (
        <section className="order">
            <div className="container">
                <div className="order-wrapper">
                    <OrderForm onSubmit={onSubmit} />

                    <OrderProducts />
                </div>
            </div>
        </section>
    );
};

export default Order;
