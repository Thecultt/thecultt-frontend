import React from 'react';

import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { useAuthUser } from 'src/hooks/useAuthUser';
import { PageLoader, OrderForm, OrderProducts } from 'src/components';

const Order: React.FC = () => {
    const { isLoggedIn, isLoaded: isLoadedUser } = useAuthUser();

    const { items } = useTypedSelector(({ cart }) => cart);

    React.useEffect(() => {
        window.dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
        window.dataLayer.push({
            event: 'begin_checkout',
            ecommerce: {
                timestamp: Math.floor(Date.now() / 1000),
                items: Object.keys(items).map((article, index) => ({
                    item_name: items[article].name,
                    item_id: `${items[article].id}`,
                    price: `${items[article].price}`,
                    item_brand: items[article].manufacturer,
                    item_category: items[article].category,
                    item_category2: items[article].subcategory,
                    item_category3: '-',
                    item_category4: '-',
                    item_list_name: 'Search Results',
                    item_list_id: article,
                    index,
                    quantity: 1,
                })),
            },
        });
    }, []);

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <section className="order">
            <div className="container">
                <div className="order-wrapper">
                    {isLoggedIn && !isLoadedUser ? (
                        <div className="order-loader">
                            <PageLoader />
                        </div>
                    ) : (
                        <OrderForm onSubmit={onSubmit} />
                    )}

                    <OrderProducts />
                </div>
            </div>
        </section>
    );
};

export default Order;
