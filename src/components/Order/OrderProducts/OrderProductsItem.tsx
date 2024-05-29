import React from 'react';
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';

import { CartItem } from 'src/models/ICartItem';

interface OrderProductsItemProps extends CartItem {
    disabledDelete: boolean;
    hiddenCheck?: boolean;

    changeCheck?: () => void;
    removeItem: () => void;
}

const OrderProductsItem: React.FC<OrderProductsItemProps> = ({
    disabledDelete,
    hiddenCheck,
    checked,
    article,
    image,
    manufacturer,
    name,
    price,
    availability,
    is_trial,
    changeCheck,
    removeItem,
}) => {
    return (
        <div
            className={`order-products-item ${checked ? '' : 'disabled'} ${availability ? (is_trial ? 'notAvailability' : '') : 'notAvailability'}`}
        >
            <div className="order-products-item-content">
                {hiddenCheck ? null : (
                    <div className="order-products-item-content-check" onClick={changeCheck}>
                        {checked ? (
                            <svg
                                width="20"
                                height="21"
                                viewBox="0 0 20 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect y="0.5" width="20" height="20" rx="10" fill="#285141" />
                                <path
                                    d="M13.636 7.77344L8.63601 12.7734L6.36328 10.5007"
                                    stroke="#F7F4F0"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        ) : (
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="9" cy="9" r="8.75" stroke="#838383" strokeWidth="0.5" />
                            </svg>
                        )}
                    </div>
                )}

                <Link to={`/product/${article}`}>
                    <div
                        className="order-products-item-content-image"
                        style={{
                            backgroundImage: `url('${image}')`,
                        }}
                    ></div>
                </Link>

                <Link to={`/product/${article}`}>
                    <div className="order-products-item-content-text">
                        <p className="order-products-item-content-text__brand">{manufacturer}</p>
                        <p className="order-products-item-content-text__model">{name}</p>

                        {availability ? (
                            is_trial ? (
                                <p className="order-products-item-content-text__availability">На примерке</p>
                            ) : (
                                <p className="order-products-item-content-text__sum">
                                    <NumericFormat
                                        value={price}
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
                            )
                        ) : (
                            <p className="order-products-item-content-text__availability">Нет в наличии</p>
                        )}
                    </div>
                </Link>
            </div>

            <div className={`order-products-item-remove ${disabledDelete ? 'disabled' : ''}`} onClick={removeItem}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3 5.2H4.6M4.6 5.2H17.4M4.6 5.2V16.4C4.6 16.8243 4.76857 17.2313 5.06863 17.5314C5.36869 17.8314 5.77565 18 6.2 18H14.2C14.6243 18 15.0313 17.8314 15.3314 17.5314C15.6314 17.2313 15.8 16.8243 15.8 16.4V5.2M7 5.2V3.6C7 3.17565 7.16857 2.76869 7.46863 2.46863C7.76869 2.16857 8.17565 2 8.6 2H11.8C12.2243 2 12.6313 2.16857 12.9314 2.46863C13.2314 2.76869 13.4 3.17565 13.4 3.6V5.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </div>
    );
};

export default OrderProductsItem;
