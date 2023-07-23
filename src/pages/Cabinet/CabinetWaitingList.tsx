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
                    <CabinetMenu />

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
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11 3V19M3 11H19"
                                    stroke="white"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
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
