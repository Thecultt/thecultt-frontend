import React from 'react'

const NotificationsSuccess: React.FC = () => {
	return (
		<div className='notifications'>
			<svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect x="0.5" width="20" height="20" rx="10" fill="#0E402C" />
				<path d="M14.25 7.5L9.09375 12.6562L6.75 10.3125" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
			</svg>

			<div className="notifications-text">
				<p className='notifications-text__title'>
					Изминения созранены успешно
				</p>
			</div>

			<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M6.5 18L18.5 6M18.5 18L6.5 6" stroke="#838383" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		</div>
	)
}

export default NotificationsSuccess