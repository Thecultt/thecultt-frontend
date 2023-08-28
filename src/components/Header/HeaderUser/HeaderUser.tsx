import React from "react";
import { useLocation } from "react-router-dom";

import { HeaderUserMenu } from "../../";

const HeaderUser: React.FC = () => {
	const { pathname } = useLocation()

	const [state, setState] = React.useState<boolean>(false);

	const PopupRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		document.addEventListener("mousedown", togglePopup);
		document.addEventListener("touchstart", togglePopup);

		return () => {
			document.removeEventListener("mousedown", togglePopup);
			document.removeEventListener("touchstart", togglePopup);
		};
	}, [PopupRef]);

	React.useEffect(() => {
		setState(false)
	}, [pathname])

	const openModarCart = () => {
		if (!state) {
			setState(true);
		}
	};

	const togglePopup = (e: any) => {
		if (PopupRef.current && !PopupRef.current.contains(e.target)) {
			setState(false);
		}
	};

	return (
		<div className="header-block-user" ref={PopupRef}>
			<button className={`header-block-user__icon ${state ? "active" : ""}`} onClick={openModarCart}>
				<svg
					width="38"
					height="39"
					viewBox="0 0 38 39"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect
						y="0.984375"
						width="38"
						height="37.9979"
						rx="18.9989"
						fill="#F7F4F0"
					/>
					<path
						d="M19.0015 18.9844C21.2106 18.9844 23.0015 17.1935 23.0015 14.9844C23.0015 12.7752 21.2106 10.9844 19.0015 10.9844C16.7923 10.9844 15.0015 12.7752 15.0015 14.9844C15.0015 17.1935 16.7923 18.9844 19.0015 18.9844Z"
						stroke="#202020"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M27 28.9844V26.9844C27 25.9235 26.5786 24.9061 25.8284 24.1559C25.0783 23.4058 24.0609 22.9844 23 22.9844H15C13.9391 22.9844 12.9217 23.4058 12.1716 24.1559C11.4214 24.9061 11 25.9235 11 26.9844V28.9844"
						stroke="#202020"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</button>

			<HeaderUserMenu state={state} />
		</div>
	);
};

export default HeaderUser;
