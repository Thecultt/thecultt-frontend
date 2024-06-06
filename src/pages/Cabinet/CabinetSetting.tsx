import React from 'react';
import { useDispatch } from 'react-redux';

import { sendUpdateUser } from 'src/redux/actions/user';
import {
    CabinetMenu,
    PageLoader,
    CabinetSettingInfoBlock,
    CabinetSettingContactBlock,
    CabinetSettingAddressBlock,
    CabinetSettingPaymentBlock,
} from 'src/components';
import { useAuthUser } from 'src/hooks/useAuthUser';

const CabinetSetting: React.FC = () => {
    const dispatch = useDispatch();

    const { isLoaded, logout } = useAuthUser();

    const onSubmit = (data: any) => {
        if (data.gender && data.gender === 'Женский') {
            data.gender = 1;
        }

        if (data.gender && data.gender === 'Мужской') {
            data.gender = 2;
        }

        dispatch(sendUpdateUser(data) as any);
    };

    return (
        <section className="cabinet">
            <div className="container">
                <div className="cabinet-wrapper">
                    <CabinetMenu />

                    {isLoaded ? (
                        <>
                            <div className="cabinet-content cabinet-setting">
                                <CabinetSettingInfoBlock onSubmit={onSubmit} />
                                <CabinetSettingContactBlock onSubmit={onSubmit} />
                                {/* <CabinetSettingPasswordRecovery /> */}
                                {/* <CabinetSettingBrandBlock /> */}
                                <CabinetSettingAddressBlock onSubmit={onSubmit} />
                                <CabinetSettingPaymentBlock onSubmit={onSubmit} />

                                <button className="btn-regular cabinet-setting__logout" onClick={logout}>
                                    Выйти из профиля
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="cabinet-content cabinet-setting">
                                <button className="btn-regular cabinet-setting__logout" onClick={logout}>
                                    Выйти из профиля
                                </button>

                                <PageLoader />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CabinetSetting;
