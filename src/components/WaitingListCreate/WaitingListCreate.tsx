import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { sendNewWaitingListItem } from 'src/redux/actions/waiting';
import { Popup, WaitingListCreateForm, WaitingListCreateSuccess } from 'src/components';
import { useWaitingData } from 'src/hooks/catalog/useWaitingData';
import { WaitingPopupType } from 'src/types/waiting';

const WaitingListCreate: React.FC = () => {
    const dispatch = useDispatch();

    const { hash, pathname } = useLocation();
    const navigate = useNavigate();

    const [state, setState] = React.useState(false);
    const [type, setType] = React.useState(WaitingPopupType.Form);
    const [isChange, setIsChange] = React.useState(false);

    const { removeWaitingData } = useWaitingData();

    React.useEffect(() => {
        const type_hash: string = hash.split('#')[1];

        if (type_hash === WaitingPopupType.Form || type_hash === WaitingPopupType.Success) {
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
        dispatch(
            sendNewWaitingListItem({
                category: data.category,
                subcategory: data.type,
                brand: data.brand,
                model_name: data.model,
                size: data.size,
            }) as any,
        );
    };

    const closeFunc = () => {
        setState(false);
        removeWaitingData();
        navigate({
            pathname: window.location.pathname,
            hash: '',
            search: window.location.search,
        });
    };

    const content: Record<WaitingPopupType, React.ReactNode> = {
        [WaitingPopupType.Form]: <WaitingListCreateForm onSubmit={onSubmit} />,
        [WaitingPopupType.Success]: <WaitingListCreateSuccess />,
    };

    return (
        <Popup state={state} setState={closeFunc} stateContent={!isChange}>
            {content[type]}
        </Popup>
    );
};

export default WaitingListCreate;
