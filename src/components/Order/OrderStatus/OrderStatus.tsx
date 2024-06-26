import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { fetchOrder } from 'src/redux/actions/order';
import { OrderStatusSuccess, OrderStatusError } from 'src/components';

const OrderStatus: React.FC = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const {
        order: { success_status },
        isLoadedOrder,
    } = useTypedSelector(({ order }) => order);

    React.useEffect(() => {
        dispatch(fetchOrder(parseInt(id as string)) as any);
    }, []);

    return <>{isLoadedOrder ? success_status ? <OrderStatusSuccess /> : <OrderStatusError /> : null}</>;
};

export default OrderStatus;
