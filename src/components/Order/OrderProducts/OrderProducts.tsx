import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { NumericFormat } from 'react-number-format';
import { formValueSelector } from 'redux-form';
import dayjs from 'dayjs';

import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { useAuthUser } from 'src/hooks/useAuthUser';
import { CartItem } from 'src/models/ICartItem';
import { changeCheckCartItem, removeCartItem } from 'src/redux/actions/cart';
import { sendCreateOrder, sendSubmitOrder } from 'src/redux/actions/order';
import { sendUpdateUser } from 'src/redux/actions/user';
import { sendOrderApplyPromocode } from 'src/redux/actions/order';
import { Loader, OrderProductsItem, OrderProductsPromocode } from 'src/components';
import { getClassNames } from 'src/functions/getClassNames';

import orderPay from '../orderPay';

const OrderProducts: React.FC = () => {
    const dispatch = useDispatch();

    const [isDisableSendBtn, setIsDisableSendBtn] = React.useState<boolean>(false);

    // const { user } = useTypedSelector(({ user }) => user);
    const { user } = useAuthUser();

    const { items } = useTypedSelector(({ cart }) => cart);
    const { promocode, currentDelivery, isValid } = useTypedSelector(({ order }) => order);

    React.useEffect(() => {
        const products: CartItem[] = [];

        Object.keys(items).map((keyCartItem) => {
            if (items[keyCartItem].checked) {
                products.push(items[keyCartItem]);
            }
        });

        window.dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
        window.dataLayer.push({
            event: 'add_shipping_info',
            ecommerce: {
                timestamp: Math.floor(Date.now() / 1000),
                shipping_tier: `${currentDelivery.title}|${dayjs().format('DD.MM.YYYY')}|${currentDelivery.price}`,
                items: products.map((item, index) => ({
                    item_name: item.name,
                    item_id: `${item.id}`,
                    price: `${item.price}`,
                    item_brand: item.manufacturer,
                    item_category: item.category,
                    item_category2: item.subcategory,
                    item_category3: '-',
                    item_category4: '-',
                    item_list_name: 'Search Results',
                    item_list_id: item.article,
                    index,
                    quantity: 1,
                })),
            },
        });
    }, [currentDelivery.title]);

    const totalPrice = Object.keys(items)
        .map((article) => items[article])
        .filter((item) => item.availability && !item.is_trial && item.checked)
        .map((item) => item.price).length
        ? Object.keys(items)
              .map((article) => items[article])
              .filter((item) => item.availability && !item.is_trial && item.checked)
              .map((item) => item.price)
              .reduce((a: number, b: number) => a + b)
        : 0;

    const changeCheck = (article: string, status: boolean) => {
        dispatch(changeCheckCartItem(article, status));
    };

    const removeItem = (article: string) => {
        dispatch(removeCartItem(article, items[article]));

        if (promocode.name) {
            dispatch(
                sendOrderApplyPromocode(
                    promocode.name,
                    Object.keys(items)
                        .map((article) => items[article])
                        .filter((item) => item.availability && !item.is_trial && item.checked)
                        .map((item) => item.price).length
                        ? Object.keys(items)
                              .map((article) => items[article])
                              .filter((item) => item.availability && !item.is_trial && item.checked)
                              .map((item) => item.price)
                              .reduce((a: number, b: number) => a + b)
                        : 0,
                ) as any,
            );
        }
    };

    const isCheckAll = () => {
        const checkedArr: boolean[] = [];

        Object.keys(items).map((key) => {
            if (items[key].checked) checkedArr.push(true);
        });

        return checkedArr.length === Object.keys(items).length;
    };

    const isCheckNull = () => {
        const checkedArr: boolean[] = [];

        Object.keys(items).map((key) => {
            if (items[key].checked && !items[key].is_trial) checkedArr.push(true);
        });

        return !!checkedArr.length;
    };

    const checkedAllItems = () => {
        Object.keys(items).map((key) => {
            if (!items[key].checked) dispatch(changeCheckCartItem(items[key].article, true));
        });
    };

    const uncheckedAllItems = () => {
        Object.keys(items).map((key) => {
            if (items[key].checked) dispatch(changeCheckCartItem(items[key].article, false));
        });
    };

    const selector = formValueSelector('order-form');

    const {
        emailValue,
        nameValue,
        phoneValue,
        countryValue,
        cityValue,
        deliveryValue,
        paymentValue,
        streetValue,
        houseValue,
        flatValue,
        commentValue,
    } = useTypedSelector((state) => {
        const { emailThecultt, name, phone, country, city, delivery, payment, street, house, flat, comment } = selector(
            state,
            'emailThecultt',
            'name',
            'phone',
            'country',
            'city',
            'delivery',
            'payment',
            'street',
            'house',
            'flat',
            'comment',
        );
        return {
            emailValue: emailThecultt,
            nameValue: name,
            phoneValue: phone,

            countryValue: country,
            cityValue: city,

            deliveryValue: delivery,
            paymentValue: payment,

            streetValue: street,
            houseValue: house,
            flatValue: flat,
            commentValue: comment ? comment : '',
        };
    });

    React.useEffect(() => {
        const products: CartItem[] = [];

        Object.keys(items).map((keyCartItem) => {
            if (items[keyCartItem].checked) {
                products.push(items[keyCartItem]);
            }
        });

        window.dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
        window.dataLayer.push({
            event: 'add_payment_info',
            ecommerce: {
                timestamp: Math.floor(Date.now() / 1000),
                payment_type: `${paymentValue}`,
                items: products.map((item, index) => ({
                    item_name: item.name,
                    item_id: `${item.id}`,
                    price: `${item.price}`,
                    item_brand: item.manufacturer,
                    item_category: item.category,
                    item_category2: item.subcategory,
                    item_category3: '-',
                    item_category4: '-',
                    item_list_name: 'Search Results',
                    item_list_id: item.article,
                    index,
                    quantity: 1,
                })),
            },
        });
    }, [paymentValue]);

    const isPromocode = () => {
        if (
            promocode.isActive &&
            paymentValue !== 'Рассрочка от Тинькофф' &&
            paymentValue !== 'Кредит' &&
            paymentValue !== 'Яндекс Сплит'
        ) {
            return true;
        }

        return false;
    };

    const onClickSendCreateOrder = () => {
        setIsDisableSendBtn(true);

        const products: number[] = [];

        Object.keys(items).map((keyCartItem) => {
            if (items[keyCartItem].checked && items[keyCartItem].availability) {
                products.push(items[keyCartItem].id);
            }
        });

        const middlename = nameValue.split(' ')[0];
        const name = nameValue.split(' ')[1];
        const lastname = nameValue.split(' ')[2];

        if (middlename && user.middlename === '') {
            dispatch(sendUpdateUser({ middlename }) as any);
        }

        if (name && user.name === '') {
            dispatch(sendUpdateUser({ name }) as any);
        }

        if (lastname && user.lastname === '') {
            dispatch(sendUpdateUser({ lastname }) as any);
        }

        let paymentId;

        if (currentDelivery.title === 'Доставка с примеркой (по Москве)') {
            paymentId = 1;
        } else if (paymentValue === 'Кредит') {
            paymentId = 7;
        } else if (paymentValue === 'Рассрочка от Тинькофф') {
            paymentId = 4;
        } else if (paymentValue === 'Яндекс Сплит') {
            paymentId = 9;
        } else {
            paymentId = 6;
        }

        dispatch(
            sendCreateOrder(
                {
                    mail: emailValue,
                    name: nameValue,
                    phone: phoneValue,

                    country: countryValue,
                    city: cityValue,
                    street: streetValue,
                    home: houseValue,
                    room: flatValue,
                    comment: commentValue,

                    products,

                    delivery_type: currentDelivery.id,
                    payment_type: paymentId,

                    coupon_id: promocode.id,
                },
                (orderId: number, orderNum: string) => pay(orderId, orderNum),
            ) as any,
        );
    };

    const successPayment = (orderId: number) => {
        const newCart: { [key: string]: CartItem } = {};

        Object.keys(items).map((article) => {
            if (!items[article].checked) newCart[article] = { ...items[article], checked: true };
        });

        localStorage.setItem('cart', JSON.stringify(newCart));

        const products: CartItem[] = [];

        Object.keys(items).map((keyCartItem) => {
            if (items[keyCartItem].checked) {
                products.push(items[keyCartItem]);
            }
        });

        window.dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
        window.dataLayer.push({
            event: 'purchase',
            ecommerce: {
                timestamp: Math.floor(Date.now() / 1000),
                transaction_id: `${orderId}`,
                value: `${isPromocode() ? totalPrice + currentDelivery.price - promocode.saleSum : totalPrice + currentDelivery.price}`,
                tax: '-',
                shipping: `${promocode.saleSum}`,
                currency: 'RUB',
                coupon: `${promocode.name}`,
                items: products.map((item) => ({
                    item_name: item.name,
                    item_id: `${item.id}`,
                    price: `${item.price}`,
                    item_brand: item.manufacturer,
                    item_category: item.category,
                    quantity: 1,
                })),
            },
        });

        try {
            if (localStorage.getItem('mindboxDeviceUUID')) {
                axios.post(
                    `https://api.mindbox.ru/v3/operations/async?endpointId=thecultt.Website&operation=Website.CreateAuthorizedOrder&deviceUUID=${localStorage.getItem('mindboxDeviceUUID')}`,
                    {
                        customer: {
                            ids: {
                                websiteID: `${user.user_id}`,
                            },
                            discountCard: {
                                ids: {
                                    number: '',
                                },
                            },
                            // "birthDate": "<Дата рождения>",
                            // "sex": "<Пол>",
                            // "timeZone": "<Часовой пояс>",
                            lastName: `${user.middlename}`,
                            firstName: `${user.name}`,
                            // "middleName": "<Отчество>",
                            // "fullName": "<ФИО>",
                            // "area": {
                            // 	"ids": {
                            // 		"externalId": "<Внешний идентификатор зоны>"
                            // 	}
                            // },
                            email: `${user.email}`,
                            mobilePhone: `${phoneValue}`,
                            customFields: {
                                tipKlienta: 'Pokupatel',
                                gorod: `${cityValue}`,
                                // "istochnikPodpiski": "<Источник подписки>"
                            },
                            // "subscriptions": []
                        },
                        order: {
                            ids: {
                                // "mindboxId": "<Идентификатор заказа в Mindbox>",
                                websiteID: `${orderId}`,
                            },
                            // "cashdesk": {
                            // 	"ids": {
                            // 		"externalId": "<Идентификатор кассы>"
                            // 	}
                            // },
                            deliveryCost: `${currentDelivery.price}`,
                            customFields: {
                                deliveryType: `${currentDelivery.title}`,
                            },
                            // "area": {
                            // 	"ids": {
                            // 		"externalId": "<Внешний идентификатор зоны>"
                            // 	}
                            // },
                            // "totalPrice": "<Итоговая сумма, полученная от клиента. Должна учитывать возвраты и отмены. Используется для подсчета среднего чека.>",
                            discounts: promocode.isActive
                                ? [
                                      {
                                          type: 'Промокод',
                                          promoCode: {
                                              ids: {
                                                  code: promocode.name,
                                              },
                                          },
                                          amount: promocode.saleSum,
                                      },
                                  ]
                                : [],
                            lines: products.map((product) => {
                                return {
                                    minPricePerItem: `${product.price}`,
                                    // "costPricePerItem": "<Себестоимость за единицу продукта>",
                                    basePricePerItem: `${product.price}`,
                                    quantity: '1',
                                    quantityType: 'int',
                                    discountedPricePerLine: `${totalPrice}`,
                                    // "lineNumber": "<Порядковый номер позиции заказа>",
                                    lineId: `${product.id}`,
                                    discounts: promocode.isActive
                                        ? [
                                              {
                                                  type: 'Промокод',
                                                  externalPromoAction: {
                                                      ids: {
                                                          externalId: `${promocode.name}`,
                                                      },
                                                  },
                                                  amount: `${promocode.saleSum}`,
                                              },
                                          ]
                                        : [],
                                    product: {
                                        ids: {
                                            website: `${product.id}`,
                                        },
                                    },
                                };
                            }),
                            email: `${user.email}`,
                            mobilePhone: `${phoneValue.replace(/[^0-9]/g, '')}`,
                        },
                        executionDateTimeUtc: new Date(),
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json; charset=utf-8',
                            Accept: 'application/json',
                            Authorization: 'Mindbox secretKey="Lyv5BiL99IxxpHRgOFX0N875s6buFjii"',
                        },
                    },
                );

                axios.post(
                    `https://api.mindbox.ru/v3/operations/async?endpointId=thecultt.Website&operation=Website.ClearCart&deviceUUID=${localStorage.getItem('mindboxDeviceUUID')}`,
                    {
                        executionDateTimeUtc: new Date(),
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json; charset=utf-8',
                            Accept: 'application/json',
                            Authorization: 'Mindbox secretKey="Lyv5BiL99IxxpHRgOFX0N875s6buFjii"',
                        },
                    },
                );
            }
        } catch (e) {
            console.log(e);
        }

        dispatch(sendSubmitOrder(orderId) as any);
    };

    const pay = (orderId: number, orderNum: string) => {
        if (currentDelivery.title === 'Доставка с примеркой (по Москве)') {
            successPayment(orderId);
        } else {
            const products: { name: string; price: number }[] = [];

            Object.keys(items).map((keyCartItem) => {
                if (items[keyCartItem].checked) {
                    products.push({
                        name: items[keyCartItem].name,
                        price: items[keyCartItem].price,
                    });
                }
            });

            orderPay({
                type: paymentValue,
                orderId,
                totalPrice: isPromocode()
                    ? totalPrice + currentDelivery.price - promocode.saleSum
                    : totalPrice + currentDelivery.price,
                deliveryPrice: currentDelivery.price,
                products,
                orderNum,
                onSuccessCallback: () => successPayment(orderId),
            });

            localStorage.removeItem('cart');
        }
    };

    return (
        <div className="order-products">
            <h3 className="order-products__title">Ваш заказ:</h3>

            {isCheckAll() ? (
                <div className="order-products-check-all" onClick={uncheckedAllItems}>
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.5" width="20" height="20" rx="10" fill="#285141" />
                        <path
                            d="M13.636 7.77344L8.63601 12.7734L6.36328 10.5007"
                            stroke="#F7F4F0"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    <p className="order-products-check-all__title">Выделить все</p>
                </div>
            ) : (
                <div className="order-products-check-all" onClick={checkedAllItems}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9" cy="9" r="8.75" stroke="#838383" strokeWidth="0.5" />
                    </svg>

                    <p className="order-products-check-all__title">Выделить все</p>
                </div>
            )}

            <div className="order-products-items-wrapper">
                {Object.keys(items).map((key, index) => (
                    <OrderProductsItem
                        {...items[key]}
                        disabledDelete={Object.keys(items).length === 1 ? true : false}
                        key={`order-products-item-${index}`}
                        changeCheck={() => changeCheck(key, !items[key].checked)}
                        removeItem={() => removeItem(key)}
                    />
                ))}
            </div>

            <OrderProductsPromocode
                disabled={
                    paymentValue === 'Рассрочка от Тинькофф' ||
                    paymentValue === 'Кредит' ||
                    paymentValue === 'Яндекс Сплит'
                }
                totalPrice={totalPrice + currentDelivery.price}
            />

            <div className="order-products-total">
                <div className="order-products-total-item">
                    <p className="order-products-total-item__title">
                        Товары -{' '}
                        {
                            Object.keys(items)
                                .map((article) => items[article])
                                .filter((item) => item.availability && !item.is_trial && item.checked).length
                        }{' '}
                        шт
                    </p>
                    <p className="order-products-total-item__value">
                        <NumericFormat
                            value={totalPrice}
                            displayType={'text'}
                            thousandSeparator={' '}
                            renderText={(formattedValue: string) => (
                                <>
                                    {parseInt(formattedValue.split(' ').join('')) >= 10000
                                        ? formattedValue
                                        : parseInt(formattedValue.split(' ').join(''))}
                                </>
                            )}
                        />{' '}
                        ₽
                    </p>
                </div>

                {isPromocode() ? (
                    <div className="order-products-total-item promocode">
                        <p className="order-products-total-item__title">Скидка в корзине</p>
                        <p className="order-products-total-item__value">
                            -{' '}
                            <NumericFormat
                                value={promocode.saleSum}
                                displayType={'text'}
                                thousandSeparator={' '}
                                renderText={(formattedValue: string) => (
                                    <>
                                        {parseInt(formattedValue.split(' ').join('')) >= 10000
                                            ? formattedValue
                                            : parseInt(formattedValue.split(' ').join(''))}
                                    </>
                                )}
                            />{' '}
                            ₽
                        </p>
                    </div>
                ) : null}

                <div className="order-products-total-item">
                    <p className="order-products-total-item__title">Доставка</p>
                    <p className="order-products-total-item__value">
                        <NumericFormat
                            value={currentDelivery.price}
                            displayType={'text'}
                            thousandSeparator={' '}
                            renderText={(formattedValue: string) => (
                                <>
                                    {parseInt(formattedValue.split(' ').join('')) >= 10000
                                        ? formattedValue
                                        : parseInt(formattedValue.split(' ').join(''))}
                                </>
                            )}
                        />{' '}
                        ₽
                    </p>
                </div>
                <div className="order-products-total-item">
                    <p className="order-products-total-item__title">Итого:</p>
                    <p className="order-products-total-item__value">
                        <NumericFormat
                            value={
                                totalPrice > 0
                                    ? isPromocode()
                                        ? totalPrice + currentDelivery.price - promocode.saleSum
                                        : totalPrice + currentDelivery.price
                                    : 0
                            }
                            displayType={'text'}
                            thousandSeparator={' '}
                            renderText={(formattedValue: string) => (
                                <>
                                    {parseInt(formattedValue.split(' ').join('')) >= 10000
                                        ? formattedValue
                                        : parseInt(formattedValue.split(' ').join(''))}
                                </>
                            )}
                        />{' '}
                        ₽
                    </p>
                </div>

                <p className="order-products__description">
                    Нажимая кнопку, вы принимаете условия{' '}
                    <a href="https://storage.yandexcloud.net/the-cultt-docs/03.05.2024/Положение_об_обработке_персональных_данных_с_Ботом.pdf">
                        обработки персональных данных
                    </a>{' '}
                    и <a href="https://www.thecultt.com/help/thecultt">условия продажи</a>.
                </p>

                <button
                    className={getClassNames('btn order-products__btn', {
                        loader: isDisableSendBtn,
                        disabled: !isCheckNull() || !isValid,
                    })}
                    onClick={onClickSendCreateOrder}
                    disabled={isDisableSendBtn}
                >
                    {isDisableSendBtn ? (
                        <Loader />
                    ) : currentDelivery.title === 'Доставка с примеркой (по Москве)' ? (
                        'Оформить заказ'
                    ) : (
                        'Перейти к оплате'
                    )}
                </button>
            </div>
        </div>
    );
};

export default OrderProducts;
