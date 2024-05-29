import React from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { setIsNotificationServerSuccess, setIsNotificationServerError } from 'src/redux/actions/notifications_server';
import { NotificationsServerError, NotificationsServerSuccess } from 'src/components';

const NotificationsServer: React.FC = () => {
    const dispatch = useDispatch();

    const {
        isNotificationServerError,
        notificationServerErrorText,
        isNotificationServerSuccess,
        notificationServerSuccessText,
    } = useTypedSelector(({ notifications_server }) => notifications_server);

    const onClickCloseSuccess = () => {
        dispatch(setIsNotificationServerSuccess(false) as any);
    };

    const onClickCloseError = () => {
        dispatch(setIsNotificationServerError(false) as any);
    };

    return (
        <div
            className={`notifications-server ${isNotificationServerError || isNotificationServerSuccess ? 'active' : ''}`}
        >
            <NotificationsServerSuccess
                active={isNotificationServerSuccess}
                text={notificationServerSuccessText}
                onClickClose={onClickCloseSuccess}
            />
            <NotificationsServerError
                active={isNotificationServerError}
                text={notificationServerErrorText}
                onClickClose={onClickCloseError}
            />
        </div>
    );
};

export default NotificationsServer;
