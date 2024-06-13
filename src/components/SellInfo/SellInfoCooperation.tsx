import React from 'react';
import { Link } from 'react-router-dom';

const SellInfoCooperation: React.FC = () => {
    return (
        <div className="sell-info-cooperation">
            <h2 className="sell-info__title">
                Подайте заявку любым удобным <br /> для вас способом
            </h2>

            <div className="sell-info-cooperation-types">
                <div className="sell-info-cooperation-types-block">
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="56" height="56" rx="28" fill="white" />
                        <path
                            d="M28 12C19.168 12 12 19.168 12 28C12 36.832 19.168 44 28 44C36.832 44 44 36.832 44 28C44 19.168 36.832 12 28 12ZM35.424 22.88C35.184 25.408 34.144 31.552 33.616 34.384C33.392 35.584 32.944 35.984 32.528 36.032C31.6 36.112 30.896 35.424 30 34.832C28.592 33.904 27.792 33.328 26.432 32.432C24.848 31.392 25.872 30.816 26.784 29.888C27.024 29.648 31.12 25.92 31.2 25.584C31.2111 25.5331 31.2096 25.4803 31.1957 25.4301C31.1818 25.3799 31.1558 25.3339 31.12 25.296C31.024 25.216 30.896 25.248 30.784 25.264C30.64 25.296 28.4 26.784 24.032 29.728C23.392 30.16 22.816 30.384 22.304 30.368C21.728 30.352 20.64 30.048 19.824 29.776C18.816 29.456 18.032 29.28 18.096 28.72C18.128 28.432 18.528 28.144 19.28 27.84C23.952 25.808 27.056 24.464 28.608 23.824C33.056 21.968 33.968 21.648 34.576 21.648C34.704 21.648 35.008 21.68 35.2 21.84C35.36 21.968 35.408 22.144 35.424 22.272C35.408 22.368 35.44 22.656 35.424 22.88Z"
                            fill="#202020"
                        />
                    </svg>

                    <h3 className="sell-info-cooperation-types-block__title">Через Telegram-bot</h3>

                    <a
                        href="https://t.me/thecultt_bot"
                        onClick={() => {
                            window.dataLayer.push({
                                ecommerce: null,
                            }); // Clear the previous ecommerce object.
                            window.dataLayer.push({
                                event: 'send_application_click',
                                ecommerce: {
                                    timestamp: Math.floor(Date.now() / 1000),
                                    application_method_type: 'TelegramBot',
                                },
                            });
                        }}
                        className="sell-info-cooperation-types-block__btn"
                    >
                        Оформить заявку
                    </a>
                </div>

                <div className="sell-info-cooperation-types-block">
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="56" height="56" rx="28" fill="white" />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.27002 28.5032V27.7936H8.98871V28.5032H7.95623V31.3015H7.03189V28.5032H6.27002ZM9.48558 31.291V27.8162H10.4099V29.2319H11.9V27.8162H12.8076V31.291H11.9V29.8143H10.4099V31.291H9.48558ZM13.4854 31.2758V27.7936H16.3312V28.5282H14.3873V29.1857H15.8439V29.8432H14.3873V30.6291H16.4209V31.2758H13.4854Z"
                            fill="#202020"
                        />
                        <path
                            d="M20.5592 31.3507C19.8579 31.3507 19.2523 31.2107 18.7426 30.9309C18.236 30.651 17.8448 30.2595 17.5688 29.7563C17.296 29.2531 17.1597 28.6681 17.1597 28.0011C17.1597 27.3342 17.296 26.7492 17.5688 26.246C17.8448 25.7428 18.236 25.3513 18.7426 25.0714C19.2523 24.7915 19.8579 24.6516 20.5592 24.6516C21.3645 24.6516 22.0398 24.8347 22.5853 25.2009C23.1341 25.5672 23.5204 26.0629 23.7445 26.6881L22.41 27.0275C22.2801 26.6375 22.0609 26.3353 21.7525 26.1209C21.444 25.9036 21.0463 25.7949 20.5592 25.7949C20.1144 25.7949 19.7426 25.8857 19.4439 26.0673C19.1484 26.249 18.926 26.505 18.7766 26.8355C18.6273 27.166 18.5526 27.5545 18.5526 28.0011C18.5526 28.4478 18.6273 28.8363 18.7766 29.1668C18.926 29.4973 19.1484 29.7533 19.4439 29.9349C19.7426 30.1166 20.1144 30.2074 20.5592 30.2074C21.0463 30.2074 21.444 30.0987 21.7525 29.8814C22.0609 29.664 22.2801 29.3618 22.41 28.9747L23.7445 29.3142C23.5204 29.9394 23.1341 30.4351 22.5853 30.8014C22.0398 31.1676 21.3645 31.3507 20.5592 31.3507Z"
                            fill="#202020"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18.6269 31.1058L18.6266 31.1057C18.0824 30.805 17.6625 30.3839 17.3683 29.8474L17.3681 29.847L17.3678 29.8466C17.0771 29.3101 16.9353 28.6927 16.9353 28C16.9353 27.3072 17.0771 26.6898 17.3678 26.1533L17.3681 26.1529L17.3683 26.1525C17.6625 25.6161 18.0824 25.1949 18.6266 24.8942L18.6269 24.8941L18.6272 24.8939C19.1775 24.5918 19.8244 24.4449 20.5589 24.4449C21.4023 24.4449 22.1264 24.6373 22.7171 25.0338C23.306 25.4268 23.7193 25.9592 23.9571 26.6228L24.0304 26.8274L22.2592 27.2779L22.1954 27.0864C22.0771 26.7313 21.8823 26.468 21.6168 26.2835L21.6162 26.2831L21.6157 26.2827C21.3553 26.0992 21.0093 25.9992 20.5589 25.9992C20.1477 25.9992 19.8219 26.0829 19.5679 26.2371C19.3129 26.394 19.1174 26.6163 18.9834 26.913C18.8477 27.2132 18.7764 27.5739 18.7764 28C18.7764 28.426 18.8477 28.7867 18.9834 29.0869C19.1174 29.3836 19.3129 29.6059 19.5679 29.7628C19.8218 29.917 20.1477 30.0007 20.5589 30.0007C21.0093 30.0007 21.3553 29.9007 21.6157 29.7172C21.8824 29.5293 22.0774 29.2652 22.1955 28.9131L22.2596 28.7221L24.0304 29.1725L23.9571 29.3771C23.7193 30.0407 23.306 30.5731 22.7171 30.9661C22.1264 31.3627 21.4023 31.555 20.5589 31.555C19.8244 31.555 19.1775 31.4081 18.6272 31.106L18.6269 31.1058Z"
                            fill="#202020"
                        />
                        <path
                            d="M28.2906 31.3509C27.7256 31.3509 27.2288 31.2466 26.8002 31.0382C26.3716 30.8268 26.0372 30.5306 25.7969 30.1495C25.5567 29.7684 25.4365 29.3203 25.4365 28.8052V24.7947L26.7808 24.7858V28.7963C26.7808 29.0077 26.8197 29.1997 26.8976 29.3724C26.9756 29.5451 27.0827 29.694 27.2191 29.819C27.3587 29.944 27.5194 30.0408 27.7013 30.1093C27.8863 30.1748 28.0828 30.2075 28.2906 30.2075C28.5049 30.2075 28.703 30.1733 28.8848 30.1048C29.0699 30.0363 29.2306 29.9396 29.367 29.8145C29.5033 29.6895 29.6089 29.5406 29.6835 29.3679C29.7615 29.1952 29.8004 29.0047 29.8004 28.7963V24.7858H31.1447V28.8052C31.1447 29.3203 31.0245 29.7684 30.7842 30.1495C30.544 30.5306 30.2095 30.8268 29.7809 31.0382C29.3523 31.2466 28.8556 31.3509 28.2906 31.3509Z"
                            fill="#202020"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M26.6944 31.2176L26.6938 31.2173C26.2291 30.9881 25.864 30.665 25.6027 30.2504C25.3395 29.8331 25.2122 29.3483 25.2122 28.8033V24.5888L27.0046 24.5769V28.7944C27.0046 28.9823 27.0391 29.1472 27.1044 29.2919C27.1716 29.4407 27.2624 29.5663 27.3763 29.671C27.4944 29.7765 27.6298 29.8582 27.7839 29.9165C27.9414 29.9719 28.1096 30.0002 28.2903 30.0002C28.4781 30.0002 28.6469 29.9703 28.7994 29.9129L28.8 29.9126L28.8006 29.9124C28.9588 29.8539 29.0939 29.7722 29.2082 29.6673C29.3219 29.5631 29.411 29.4383 29.4749 29.2903L29.4756 29.2889L29.4762 29.2875C29.5417 29.1424 29.5761 28.9789 29.5761 28.7944V24.5784H31.3685V28.8033C31.3685 29.3483 31.2411 29.8331 30.978 30.2504C30.7166 30.665 30.3515 30.9881 29.8868 31.2173L29.8862 31.2176L29.8856 31.2179C29.4198 31.4444 28.8858 31.5544 28.2903 31.5544C27.6948 31.5544 27.1609 31.4444 26.695 31.2179L26.6944 31.2176Z"
                            fill="#202020"
                        />
                        <path d="M33.1526 31.2169V24.7858H34.4773V30.0825H37.497V31.2169H33.1526Z" fill="#202020" />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M32.9285 31.419V24.5769H34.7014V29.8736H37.721V31.419H32.9285Z"
                            fill="#202020"
                        />
                        <path
                            d="M39.4436 31.2169V25.9201H37.2324V24.7858H42.9795V25.9201H40.7683V31.2169H39.4436Z"
                            fill="#202020"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M39.2202 31.4232V26.1265H37.009V24.5812H43.2043V26.1265H40.9931V31.4232H39.2202ZM45.7458 31.4232V26.1265H43.7909V24.5812H49.7299V26.1265H47.5187V31.4232H45.7458Z"
                            fill="#202020"
                        />
                    </svg>

                    <h3 className="sell-info-cooperation-types-block__title">Через сайт</h3>

                    <Link
                        to="/cabinet/sell"
                        onClick={() => {
                            window.dataLayer.push({
                                ecommerce: null,
                            }); // Clear the previous ecommerce object.
                            window.dataLayer.push({
                                event: 'send_application_click',
                                ecommerce: {
                                    timestamp: Math.floor(Date.now() / 1000),
                                    application_method_type: 'Site',
                                },
                            });
                        }}
                        className="sell-info-cooperation-types-block__btn"
                    >
                        Оформить заявку
                    </Link>
                </div>

                <div className="sell-info-cooperation-types-block">
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="56" height="56" rx="28" fill="white" />
                        <path
                            d="M39.4545 25.4545C39.4545 34.3636 28 42 28 42C28 42 16.5454 34.3636 16.5454 25.4545C16.5454 22.4166 17.7522 19.5031 19.9004 17.355C22.0485 15.2068 24.962 14 28 14C31.0379 14 33.9514 15.2068 36.0995 17.355C38.2477 19.5031 39.4545 22.4166 39.4545 25.4545Z"
                            stroke="#202020"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M27.9998 29.278C30.1085 29.278 31.818 27.5686 31.818 25.4598C31.818 23.3511 30.1085 21.6417 27.9998 21.6417C25.8911 21.6417 24.1816 23.3511 24.1816 25.4598C24.1816 27.5686 25.8911 29.278 27.9998 29.278Z"
                            stroke="#202020"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    <h3 className="sell-info-cooperation-types-block__title">В офисе</h3>

                    <a
                        href="https://calendly.com/thecultt_2023/visitsellers"
                        onClick={() => {
                            window.dataLayer.push({
                                ecommerce: null,
                            }); // Clear the previous ecommerce object.
                            window.dataLayer.push({
                                event: 'send_application_click',
                                ecommerce: {
                                    timestamp: Math.floor(Date.now() / 1000),
                                    application_method_type: 'Office',
                                },
                            });
                        }}
                        className="sell-info-cooperation-types-block__btn"
                    >
                        Выбрать дату и время
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SellInfoCooperation;