import React from "react";

import {
    Popup,
    CabinetMenu,
    CabinetWaitingListForm,
    CabinetWaitingListSuccess,
    CabinetWaitingListItem,
} from "../../components/";

const CabinetWaitingList: React.FC = () => {
    const [stateAdd, setStateAdd] = React.useState<boolean>(false);
    const [isSend, setIsSend] = React.useState<boolean>(false);
    const [isChange, setIsChange] = React.useState<boolean>(false);

    const onSend = () => {
        setIsChange(true);

        setTimeout(() => {
            setIsSend(true);
            setIsChange(false);
        }, 190);
    };

    const addWaitItem = () => {
        setIsSend(false);
        setStateAdd(true);
    };

    return (
        <section className="cabinet">
            <div className="container">
                <div className="cabinet-wrapper">
                    <CabinetMenu title="Лист ожидания" />

                    <div className="cabinet-content cabinet-waiting-list">
                        <Popup
                            state={stateAdd}
                            setState={() => setStateAdd(false)}
                            stateContent={!isChange}
                        >
                            {isSend ? (
                                <CabinetWaitingListSuccess
                                    setState={() => setStateAdd(false)}
                                />
                            ) : (
                                <CabinetWaitingListForm onSend={onSend} />
                            )}
                        </Popup>

                        <button
                            className="btn cabinet-waiting-list__add"
                            onClick={addWaitItem}
                        >
                            Подать новую заявку
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="Icons" clipPath="url(#clip0_3532_48512)">
                                    <path
                                        id="Vector"
                                        d="M9 1V17M1 9H17"
                                        stroke="#FFFFFF"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3532_48512">
                                        <rect
                                            width="18"
                                            height="18"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>

                        <div className="cabinet-waiting-list-items-wrapper">
                            <CabinetWaitingListItem />
                            <CabinetWaitingListItem />
                            <CabinetWaitingListItem />
                            <CabinetWaitingListItem />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CabinetWaitingList;
