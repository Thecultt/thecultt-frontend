import React from "react";

import {
    CabinetMenu,
    CabinetSettingInfoBlock,
    CabinetSettingContactBlock,
    CabinetSettingPasswordRecovery,
    CabinetSettingBrandBlock,
    CabinetSettingAddressBlock,
    CabinetSettingPaymentBlock,
} from "../../components/";

const CabinetSetting: React.FC = () => {
    return (
        <section className="cabinet">
            <div className="container">
                <div className="cabinet-wrapper">
                    <CabinetMenu />

                    <div className="cabinet-content cabinet-setting">
                        <CabinetSettingInfoBlock />
                        <CabinetSettingContactBlock />
                        <CabinetSettingPasswordRecovery />
                        <CabinetSettingBrandBlock />
                        <CabinetSettingAddressBlock />
                        <CabinetSettingPaymentBlock />

                        <button className="cabinet-setting__logout">
                            Выйти из профиля
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CabinetSetting;