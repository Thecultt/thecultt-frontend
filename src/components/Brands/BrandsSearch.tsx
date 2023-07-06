import React from "react";

const BrandsSearch: React.FC = () => {
    return (
        <div className="brands-search">
            <div className="input-light border">
                <input
                    type="text"
                    className="input-light__field"
                    id="name"
                    required
                />

                <label className="input-light__label" htmlFor="name">
                    <svg
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.16667 16.3177C12.8486 16.3177 15.8333 13.3329 15.8333 9.65104C15.8333 5.96914 12.8486 2.98438 9.16667 2.98438C5.48477 2.98438 2.5 5.96914 2.5 9.65104C2.5 13.3329 5.48477 16.3177 9.16667 16.3177Z"
                            stroke="#838383"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M17.5 17.9844L13.875 14.3594"
                            stroke="#838383"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    Поиск брендов
                </label>
            </div>
        </div>
    );
};

export default BrandsSearch;
