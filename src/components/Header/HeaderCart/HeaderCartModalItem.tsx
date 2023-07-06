import React from "react";

const HeaderCartModalItem: React.FC = () => {
    return (
        <div className="header-block-cart-modal-item">
            <div className="header-block-cart-modal-item-content">
                <div className="header-block-cart-modal-item-content-stock">
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width="18" height="17.97" rx="4" fill="#285141" />
                        <path
                            d="M5.5 8.54688L8.125 11.1719L12.5 6.79688"
                            stroke="#F1EDE8"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
                <div
                    className="header-block-cart-modal-item-content-image"
                    style={{
                        backgroundImage:
                            "url('https://thecultt.com/assets/cache_image/products/5703/3a62c0f2389228fdfb0474c35d4d2cb98a24df52_1000x1330_254.jpg')",
                    }}
                ></div>
                <div className="header-block-cart-modal-item-content-text">
                    <p className="header-block-cart-modal-item-content-text__brand">
                        Gucci
                    </p>
                    <p className="header-block-cart-modal-item-content-text__model">
                        ACNE STUDIOS SCARF
                    </p>
                    <p className="header-block-cart-modal-item-content-text__sum">
                        32 000 ₽
                    </p>
                </div>
            </div>

            <div className="header-block-cart-modal-item-remove">
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
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

export default HeaderCartModalItem;
