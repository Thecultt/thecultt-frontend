import React from "react";
import { useDispatch } from "react-redux";

import { useTypedSelector } from '../../hooks/useTypedSelector'

import { sendUpdateUser } from '../../redux/actions/user'

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
	const dispatch = useDispatch()

	const { isLoaded } = useTypedSelector(({ user }) => user)

	const onSubmit = (data: any) => {
		dispatch(sendUpdateUser(data) as any)
	}

	const onClickLogout = () => {
		localStorage.removeItem("accessToken")

		window.location.reload()
	}

	return (
		<section className="cabinet">
			<div className="container">
				<div className="cabinet-wrapper">
					<CabinetMenu />

					{isLoaded ? <div className="cabinet-content cabinet-setting">
						<CabinetSettingInfoBlock onSubmit={onSubmit} />
						<CabinetSettingContactBlock onSubmit={onSubmit} />
						<CabinetSettingPasswordRecovery />
						<CabinetSettingBrandBlock />
						<CabinetSettingAddressBlock onSubmit={onSubmit} />
						<CabinetSettingPaymentBlock />

						<button className="btn-regular cabinet-setting__logout" onClick={onClickLogout}>
							Выйти из профиля
						</button>
					</div> : null}
				</div>
			</div>
		</section>
	);
};

export default CabinetSetting;
