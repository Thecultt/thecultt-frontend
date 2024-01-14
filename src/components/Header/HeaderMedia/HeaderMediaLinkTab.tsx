import React from 'react'
import { Link } from 'react-router-dom'

interface HeaderMediaLinkTabProps {
	title: string
	linkTitle?: string
	children: React.ReactNode
}

const HeaderMediaLinkTab: React.FC<HeaderMediaLinkTabProps> = ({ title, linkTitle, children }) => {
	const [state, setState] = React.useState<boolean>(false)

	return (
		<div className={`header-media-modal-menu-links-tab ${state ? "active" : ""}`} onClick={() => setState(!state)}>
			<div className="header-media-modal-menu-links-tab-top">
				{linkTitle ? (
					<Link to={linkTitle} className="header-media-modal-menu-links-tab-top__title" onClick={() => setState(!state)}>{title}</Link>
				) : (
					<p className="header-media-modal-menu-links-tab-top__title">
						{title}
					</p>
				)}

				<div className="header-media-modal-menu-links-tab-top__arrow">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M6 9L12 15L18 9" stroke="#838383" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</div>
			</div>

			{state ? (
				<div className="header-media-modal-menu-links-tab-bottom">
					{children}
				</div>
			) : null}
		</div>
	)
}

export default HeaderMediaLinkTab