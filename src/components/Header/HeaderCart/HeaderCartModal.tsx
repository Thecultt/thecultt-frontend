import React from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {NumericFormat} from "react-number-format";

import {useTypedSelector} from "../../../hooks/useTypedSelector";

import {changeCheckCartItem, removeCartItem} from "../../../redux/actions/cart";

import {HeaderCartModalItem} from "../../";

interface HeaderCartModalProps {
    state: boolean;
    setState: () => void;
}

const HeaderCartModal: React.FC<HeaderCartModalProps> = ({state, setState}) => {
    const dispatch = useDispatch();

    const {items, totalCount, totalPrice} = useTypedSelector(({cart}) => cart);

    const changeCheck = (article: string, status: boolean) => {
        dispatch(changeCheckCartItem(article, status));
    };

    const removeItem = (article: string) => {
        dispatch(removeCartItem(article));
    };

    return (
        <div className={`header-block-cart-modal ${state ? "active" : ""}`}>
            <div className="header-block-cart-modal-close" onClick={setState}>
                <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        id="Vector"
                        d="M20 4.5L4 20.5M4 4.5L20 20.5"
                        stroke="#202020"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            <p className="header-block-cart-modal__title">Корзина:</p>

            {Object.keys(items).length ? (
                <>
                    <div className="header-block-cart-modal-items-wrapper">
                        {Object.keys(items).map((key, index) => (
                            <HeaderCartModalItem
                                {...items[key]}
                                key={`header-block-cart-modal-item-${index}`}
                                changeCheck={() =>
                                    changeCheck(key, !items[key].checked)
                                }
                                removeItem={() => removeItem(key)}
                            />
                        ))}
                    </div>

                    <div className="header-block-cart-modal-btn">
                        <div className="header-block-cart-modal-btn-title">
                            <p className="header-block-cart-modal-btn-title__description">
                                Товары - {totalCount} шт.
                            </p>

                            <p className="header-block-cart-modal-btn-title__sum">
                                <NumericFormat
                                    value={totalPrice}
                                    displayType={"text"}
                                    thousandSeparator={" "}
                                    renderText={(formattedValue: string) => (
                                        <>
                                            {parseInt(
                                                formattedValue
                                                    .split(" ")
                                                    .join("")
                                            ) >= 10000
                                                ? formattedValue
                                                : parseInt(
                                                      formattedValue
                                                          .split(" ")
                                                          .join("")
                                                  )}
                                        </>
                                    )}
                                />{" "}
                                ₽
                            </p>
                        </div>

                        <Link
                            to="/order"
                            className={`btn ${Object.keys(items).filter(key => items[key].checked === true).length ? "" : "disabled"} header-block-cart-modal-btn__btn`}
                            onClick={setState}
                        >
                            Перейти к заказу
                        </Link>
                    </div>
                </>
            ) : (
                <div className="header-block-cart-modal-null">
                    <p className="header-block-cart-modal-null__title">
                        Ваша корзина пока пуста
                    </p>
                    <button className="btn disabled header-block-cart-modal-null__btn">
                        Перейти к заказу
                    </button>
                </div>
            )}
        </div>
    );
};

export default HeaderCartModal;
