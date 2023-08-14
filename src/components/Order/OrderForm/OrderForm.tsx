import React from "react";

import {
    OrderFormContact,
    OrderFormCountry,
    OrderFormDelivery,
    OrderFormAddress,
    OrderFormPayments,
} from "../../";

const OrderForm: React.FC = () => {
    return (
        <div className="order-form">
            <OrderFormContact />

            <OrderFormCountry />

            <OrderFormDelivery />

			<OrderFormAddress />
			
			<OrderFormPayments />
        </div>
    );
};

export default OrderForm;
