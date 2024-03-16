import React from "react";
import { useDispatch } from "react-redux";

import { useTypedSelector } from '../../hooks/useTypedSelector'

import { sendUpdateUser } from '../../redux/actions/user'

import {
	CabinetMenu,
	PageLoader,
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
		if (data.gender && data.gender === "Женский") {
			data.gender = 1
		}

		if (data.gender && data.gender === "Мужской") {
			data.gender = 2
		}

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

					{isLoaded ? (
						<>
							<div className="cabinet-content cabinet-setting">
								<CabinetSettingInfoBlock onSubmit={onSubmit} />
								<CabinetSettingContactBlock onSubmit={onSubmit} />
								{/* <CabinetSettingPasswordRecovery /> */}
								{/* <CabinetSettingBrandBlock /> */}
								<CabinetSettingAddressBlock onSubmit={onSubmit} />
								<CabinetSettingPaymentBlock onSubmit={onSubmit} />

								<button className="btn-regular cabinet-setting__logout" onClick={onClickLogout}>
									Выйти из профиля
								</button>
							</div>
						</>
					) : (
						<>
							<div className="cabinet-content cabinet-setting">
								<button className="btn-regular cabinet-setting__logout" onClick={onClickLogout}>
									Выйти из профиля
								</button>

								<PageLoader />
							</div>
						</>
					)
					}
				</div>
			</div>
		</section>
	);
};

export default CabinetSetting;
