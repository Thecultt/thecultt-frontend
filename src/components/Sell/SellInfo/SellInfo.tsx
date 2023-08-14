import React from "react";

import {Select, SellBackBtn} from "../../";

interface SellInfoProps {
    next: any;
    prev?: any;
}

const SellInfo: React.FC<SellInfoProps> = ({next, prev}) => {
    return (
        <div className="sell-block sell-block-info">
            <SellBackBtn prev={prev} />

            <h3 className="sell-block__title">Информация о товаре</h3>
            <p className="sell-block__subtitle">
                Заполните детальную информацию о продаваемом товаре.
            </p>

            <div className="sell-block-select">
                <h4 className="sell-block-select__title">Категория товара</h4>

                <Select label="Категория товара" items={[]} />
            </div>

            <div className="sell-block-select">
                <h4 className="sell-block-select__title">Бренд товара</h4>

                <Select label="Бренд товара" items={[]} />
            </div>

            <div className="sell-block-select">
                <h4 className="sell-block-select__title">Модель товара</h4>

                <Select label="Модель товара" items={[]} />
            </div>

            <div className="sell-block-select">
                <h4 className="sell-block-select__title">
                    Состояние товара
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_6785_19443)">
                            <path
                                d="M9 12V9M9 6H9.0075M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z"
                                stroke="#202020"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_6785_19443">
                                <rect width="18" height="18" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </h4>

                <Select label="Состояние товара" items={[]} />
            </div>

            <div className="sell-block-select">
                <h4 className="sell-block-select__title">Наличие дефектов</h4>

                <Select label="Наличие дефектов" items={[]} />
            </div>

            <div className="sell-block-select">
                <h4 className="sell-block-select__title">Размер</h4>

                <Select label="Размер" items={[]} />
            </div>

            <div className="sell-block-select">
                <h4 className="sell-block-select__title">Комплект</h4>

                <Select
                    label="Комплект"
                    items={[
                        "Карточка",
                        "Пыльник",
                        "Ремень",
                        "Коробка",
                        "Брелок",
                        "Кошелек",
                        "Ключ",
                        "Отсутствует",
                    ]}
                />
            </div>

            <div className="sell-block-select">
                <h4 className="sell-block-select__title">
                    Ожидание по цене
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_6785_19443)">
                            <path
                                d="M9 12V9M9 6H9.0075M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z"
                                stroke="#202020"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_6785_19443">
                                <rect width="18" height="18" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </h4>

                <Select label="Ожидание по цене" items={[]} />
            </div>

            <div className="sell-block-select">
                <h4 className="sell-block-select__title">
                    Товар приобретен в THE CULTT
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0_6785_19443)">
                            <path
                                d="M9 12V9M9 6H9.0075M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z"
                                stroke="#202020"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_6785_19443">
                                <rect width="18" height="18" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </h4>

                <Select label="Товар приобретен в THE CULTT" items={[]} />
            </div>

            <button className="btn sell-block__btn" onClick={next}>
                Продолжить
            </button>
        </div>
    );
};

export default SellInfo;
