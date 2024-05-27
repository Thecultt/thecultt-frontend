import React from 'react';
import { useDispatch } from 'react-redux';

import { sendOrderApplyPromocode } from '../../../redux/actions/order';

import { useTypedSelector } from '../../../hooks/useTypedSelector';

interface OrderProductsPromocodeProps {
    disabled?: boolean;
    totalPrice: number;
}

const OrderProductsPromocode: React.FC<OrderProductsPromocodeProps> = ({ disabled, totalPrice }) => {
    const dispatch = useDispatch();

    const {
        promocode: { isActive, isError, isSend, errorMessage },
    } = useTypedSelector(({ order }) => order);

    const [currentPromocode, setCurrentPromocode] = React.useState<string>('');

    const sendApplyPromocode = () => {
        dispatch(sendOrderApplyPromocode(currentPromocode, totalPrice) as any);
    };

    return (
        <>
            {isActive ? (
                <div
                    className={`order-products-promocode ${isActive && disabled ? 'error_disabled' : disabled ? 'disabled' : ''}`}
                >
                    <div className="order-products-promocode-input">
                        <input
                            type="text"
                            name="promocode"
                            placeholder="Промокод"
                            className={`order-products-promocode-input__field active`}
                            value={currentPromocode}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setCurrentPromocode(e.target.value.replace(' ', '').toUpperCase())
                            }
                        />

                        {isActive && disabled ? (
                            <p className="order-products-promocode-input__error">
                                Промокод не действителен для выбранного типа оплаты
                            </p>
                        ) : null}
                    </div>

                    {isActive && disabled ? null : (
                        <button className={`order-products-promocode__btn edit`} onClick={sendApplyPromocode}>
                            Изменить
                        </button>
                    )}
                </div>
            ) : (
                <div className={`order-products-promocode ${disabled ? 'disabled' : ''} ${isError ? 'error' : ''}`}>
                    <div className="order-products-promocode-input">
                        <input
                            type="text"
                            name="promocode"
                            placeholder="Промокод"
                            className={`order-products-promocode-input__field ${currentPromocode === '' ? 'disabled' : isError ? 'error' : ''}`}
                            value={currentPromocode}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setCurrentPromocode(e.target.value.replace(' ', '').toUpperCase())
                            }
                        />

                        {isError ? <p className="order-products-promocode-input__error">{errorMessage}</p> : null}
                    </div>

                    <button
                        className={`order-products-promocode__btn ${currentPromocode === '' ? 'disabled' : ''}`}
                        onClick={sendApplyPromocode}
                    >
                        Применить
                    </button>
                </div>
            )}
        </>
    );
};

export default OrderProductsPromocode;
