import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'usehooks-ts';

import { CabinetMenu, CabinetWaitingListItem, PageLoader } from 'src/components';
import { MEDIA_SIZES } from 'src/constants/styles';
import { fetchWaitingList } from 'src/redux/actions/waiting';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { WaitingPopupType } from 'src/types/waiting';

const CabinetWaitingList: React.FC = () => {
    const dispatch = useDispatch();
    const isMobile = useMediaQuery(`(max-width: ${MEDIA_SIZES.tablet})`);

    const { isLoaded, items } = useTypedSelector(({ waiting }) => waiting);

    React.useEffect(() => {
        dispatch(fetchWaitingList() as any);
    }, []);

    return (
        <section className="cabinet">
            <div className="container">
                <div className="cabinet-wrapper">
                    <CabinetMenu />

                    {isLoaded ? (
                        <div className="cabinet-content cabinet-waiting-list">
                            {!isMobile ? (
                                <Link to={`#${WaitingPopupType.Form}`} className="btn cabinet-waiting-list__add">
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
                                </Link>
                            ) : (
                                <Link
                                    to={`#${WaitingPopupType.Form}`}
                                    className="btn-regular cabinet-waiting-list__add"
                                >
                                    Подать новую заявку
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11.998 5V19M4.99805 12H18.998"
                                            stroke="#285141"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </Link>
                            )}

                            {items.length ? (
                                <div className="cabinet-waiting-list-items-wrapper">
                                    {items.map((item, index) => (
                                        <CabinetWaitingListItem
                                            {...item}
                                            num={index + 1}
                                            key={`cabinet-waiting-list-items-${index}`}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <h5 className="cabinet-waiting-list-null__title">Ваш лист ожидания пока пуст</h5>
                            )}
                        </div>
                    ) : (
                        <PageLoader />
                    )}
                </div>
            </div>
        </section>
    );
};

export default CabinetWaitingList;
