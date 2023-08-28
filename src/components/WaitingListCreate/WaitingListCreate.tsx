import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { sendNewWaitingListItem } from '../../redux/actions/waiting'

import { Popup, WaitingListCreateForm, WaitingListCreateSuccess } from '../'

const WaitingListCreate: React.FC = () => {
	const dispatch = useDispatch()

	const { hash, pathname } = useLocation();
	const navigate = useNavigate();

	const [state, setState] = React.useState<boolean>(false);
	const [type, setType] = React.useState<string>(
		"create_waiting"
	);
	const [isChange, setIsChange] = React.useState<boolean>(false);

	React.useEffect(() => {
		const type_hash: string = hash.split("#")[1];

		if (type_hash === "create_waiting" || type_hash === "create_waiting_success") {
			if (state) {
				setIsChange(true);

				setTimeout(() => {
					setType(type_hash);
					setIsChange(false);
				}, 190);
			} else {
				setState(true);
				setIsChange(false);
				setType(type_hash);
			}
		} else {
			setState(false);
		}
	}, [hash, pathname]);

	const onSubmit = (data: any) => {
		dispatch(sendNewWaitingListItem({
			subcategory: data.type,
			category: data.category,
			model_name: data.brand,
			comment: ""
		}) as any)
	};

	const closeFunc = () => {
		setState(false);

		navigate({
			pathname: window.location.pathname,
			search: window.location.search,
			hash: "",
		});
	};

	return (
		<Popup
			state={state}
			setState={closeFunc}
			stateContent={!isChange}
		>
			{type === "create_waiting" ? <WaitingListCreateForm onSubmit={onSubmit} /> : null}

			{type === "create_waiting_success" ? <WaitingListCreateSuccess /> : null}
		</Popup>
	)
}

export default WaitingListCreate