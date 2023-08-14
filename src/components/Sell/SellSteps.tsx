import React from "react";

interface SellStepsProps {
    currentIndex: number;
}

const SellSteps: React.FC<SellStepsProps> = ({currentIndex}) => {
    const steps = [
        "1. Вариант сотрудничества",
        "2. Информация о товаре",
        "3. Фотографии",
        "4. Контактные данные",
        "5. Способ отправки товара",
    ];

    return (
        <div className="sell-steps">
            {steps.map((step, index) => (
                <div
                    className={`sell-steps-item ${
                        index + 1 === currentIndex
                            ? "active"
                            : index + 1 < currentIndex
                            ? "success"
                            : ""
                    } `}
                    key={`sell-steps-item-${index}`}
                >
                    <div className="sell-steps-item-circle">
                        {index + 1 < currentIndex ? (
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    width="20"
                                    height="20"
                                    rx="10"
                                    fill="#285141"
                                />
                                <path
                                    d="M14.7273 7L8.72727 13L6 10.2727"
                                    stroke="#F1EDE8"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        ) : null}
                    </div>

                    <p className="sell-steps-item__title">{step}</p>
                </div>
            ))}
        </div>
    );
};

export default SellSteps;
