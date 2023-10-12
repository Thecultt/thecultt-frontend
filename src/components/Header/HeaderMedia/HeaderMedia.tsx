import React from "react";
import { Link } from "react-router-dom";

import { useTypedSelector } from "../../../hooks/useTypedSelector";

import Logo from "../../../assets/images/logo.svg";

const HeaderMedia: React.FC = () => {
	const [state, setState] = React.useState<boolean>(false);

	const ModalRef = React.useRef<HTMLDivElement>(null);

	const { categories } = useTypedSelector(({ products_filters }) => products_filters)

	React.useEffect(() => {
		document.addEventListener("mousedown", hiddeModal);
		document.addEventListener("touchstart", hiddeModal);

		return () => {
			document.removeEventListener("mousedown", hiddeModal);
			document.removeEventListener("touchstart", hiddeModal);
		};
	}, [ModalRef]);

	const hiddeModal = (e: any) => {
		if (ModalRef.current && !ModalRef.current.contains(e.target)) {
			setState(false);
		}
	};

	const toggleState = () => {
		setState(!state);
	};

	return (
		<header className="header-media" ref={ModalRef}>
			<div className="container">
				<div className="header-media-wrapper">
					<div className="header-media-menu" onClick={toggleState}>
						<svg
							width="24"
							height="18"
							viewBox="0 0 24 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M23 1H1"
								stroke="#202020"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M23 9H1"
								stroke="#202020"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M23 17H1"
								stroke="#202020"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>

					<Link to="/" className="header-media-logo">
						<img
							src={Logo}
							alt="THECULTT"
							className="header-media-logo__image"
						/>
					</Link>
				</div>
			</div>

			<div className={`header-media-modal-menu ${state ? "active" : ""}`}>
				<p className="header-media-modal-menu__title">
					Меню
				</p>

				<div className="header-media-modal-menu-links">
					<div className="header-media-modal-menu-link">
						<Link to="/catalog" className="header-media-modal-menu-link__link">Новинки</Link>
					</div>

					{Object.keys(categories).map((key, index) => (
						<div className="header-media-modal-menu-link" key={`header-media-modal-menu-link-${index}`}>
							<a href="#" className="header-media-modal-menu-link__link">{key}</a>

							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M6 9L12 15L18 9" stroke="#838383" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</div>
					))}

					<div className="header-media-modal-menu-link">
						<Link to="/brands" className="header-media-modal-menu-link__link">Бренды</Link>
					</div>

					<div className="header-media-modal-menu-link">
						<Link to="/auth" className="header-media-modal-menu-link__link">Подлинность</Link>
					</div>

					<div className="header-media-modal-menu-link">
						<Link to="/cabinet/setting" className="header-media-modal-menu-link__link">Профиль</Link>
					</div>
				</div>

				<div className="header-media-modal-menu-btn">
					<Link to="/sell" className="btn header-media-modal-menu-btn__btn">
						Продать
					</Link>

					<Link to="/sell" className="btn-regular header-media-modal-menu-btn__btn">
						Обменять
					</Link>
				</div>
			</div>
		</header>
	);
};

export default HeaderMedia;
