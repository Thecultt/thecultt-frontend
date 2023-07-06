import React from "react";

import {HeaderCartModalItem} from "../../";

const HeaderCartModal: React.FC = () => {
    return (
        <div className="header-block-cart-modal">
            {/* <div className="header-block-cart-modal-close">
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </div> */}
            <p className="header-block-cart-modal__title">Корзина:</p>
            <div className="header-block-cart-modal-items-wrapper">
                <HeaderCartModalItem />
                <HeaderCartModalItem />
            </div>
            <div className="header-block-cart-modal-btn">
                <div className="header-block-cart-modal-btn-title">
                    <p className="header-block-cart-modal-btn-title__description">
                        Товары - 2шт
                    </p>

                    <p className="header-block-cart-modal-btn-title__sum">
                        80 000 ₽
                    </p>
                </div>

                <button className="btn header-block-cart-modal-btn__btn">
                    Перейти к заказу
                </button>
            </div>
        </div>
    );
};

export default HeaderCartModal;
