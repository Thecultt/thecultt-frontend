import React from 'react'

const NotificationsError: React.FC = () => {
	return (
		<div className='notifications'>
			<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect x="20" y="20.5" width="20" height="20" rx="10" transform="rotate(-180 20 20.5)" fill="#9A1A1A" />
				<path d="M10.0067 5.14613L10.0067 10.5008M10.0067 15.8555H9.99333" stroke="#F1EDE8" strokeWidth="2.4096" strokeLinecap="round" strokeLinejoin="round" />
			</svg>

			<div className="notifications-text">
				<p className='notifications-text__title'>
					Ошибка сервера
				</p>

				<p className='notifications-text__subtitle'>
					Пожалуйста, перезагрузите страницу
				</p>
			</div>


			<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M6.5 18L18.5 6M18.5 18L6.5 6" stroke="#838383" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		</div>
	)
}

export default NotificationsError