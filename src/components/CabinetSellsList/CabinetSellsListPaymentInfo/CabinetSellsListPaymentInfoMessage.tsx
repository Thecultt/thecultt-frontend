import React from 'react'
import { useDispatch } from 'react-redux'

import { Popup, CabinetSellsListPaymentInfoPopupForm } from '../../'

import { sendUpdateUser } from '../../../redux/actions/user'

const CabinetSellsListPaymentInfoMessage: React.FC = () => {
	const dispatch = useDispatch()

	const [isOpenPopup, setIsOpenPopup] = React.useState<boolean>(false)

	const onSubmit = (data: any) => {
		dispatch(sendUpdateUser({ ...data }, () => setIsOpenPopup(false)) as any)
	}

	return (
		<>
			<div className='cabinet-sells-list-payment-info-message'>
				<h4 className="cabinet-sells-list-payment-info-message__title">
					Введите реквизиты для выплат
				</h4>

				<p className="cabinet-sells-list-payment-info-message__description">
					Для проведения выплаты за проданные товары необходимо заполнить анкету с паспортными данными и банковскими реквизитами.
				</p>

				<button className="cabinet-sells-list-payment-info-message__btn" onClick={() => setIsOpenPopup(true)}>Заполнить данные</button>
			</div>

			<Popup state={isOpenPopup} setState={() => setIsOpenPopup(!isOpenPopup)}>
				<CabinetSellsListPaymentInfoPopupForm onSubmit={onSubmit} />
			</Popup>
		</>
	)
}

export default CabinetSellsListPaymentInfoMessage