import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { sendDeleteWaitingListItem } from '../../redux/actions/waiting'

import { Popup, WaitingListDeleteConfirm } from '../'

const WaitingListDeleteForm: React.FC = () => {
	const dispatch = useDispatch()

	const { hash, pathname } = useLocation();
	const navigate = useNavigate();

	const [state, setState] = React.useState<boolean>(false);
	const [type, setType] = React.useState<string>(
		"delete_waiting"
	);
	const [isChange, setIsChange] = React.useState<boolean>(false);

	React.useEffect(() => {
		const type_hash: string = hash.split("#")[1];

		if (type_hash === "delete_waiting") {
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

	const closeFunc = () => {
		setState(false);

		navigate({
			pathname: window.location.pathname,
			search: window.location.search,
			hash: "",
		});
	};

	const onSumbit = () => {
		const id: string = new URLSearchParams(window.location.search).get("id") as string

		dispatch(sendDeleteWaitingListItem(id) as any)
	}

	return (
		<Popup
			state={state}
			setState={closeFunc}
			stateContent={!isChange}
		>
			{type === "delete_waiting" ? <WaitingListDeleteConfirm onSumbit={onSumbit} closeFunc={closeFunc} /> : null}
		</Popup>
	)
}

export default WaitingListDeleteForm