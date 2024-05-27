import React from 'react';

interface WaitingListCreateSuccessProps {
    closeFunc: () => void;
    onSumbit: () => void;
}

const WaitingListCreateSuccess: React.FC<WaitingListCreateSuccessProps> = ({ closeFunc, onSumbit }) => {
    return (
        <div className="cabinet-waiting-list-delete">
            <h2 className="cabinet-waiting-list-delete__title">Отписка</h2>

            <p className="cabinet-waiting-list-delete__description">
                Вы уверены, что хотите отменить подписку на этот твоар?
            </p>

            <div className="cabinet-waiting-list-delete-btn">
                <button className="btn-regular cabinet-waiting-list-delete-btn__btn" onClick={closeFunc}>
                    Нет
                </button>
                <button className="btn cabinet-waiting-list-delete-btn__btn" onClick={onSumbit}>
                    Да
                </button>
            </div>
        </div>
    );
};

export default WaitingListCreateSuccess;
