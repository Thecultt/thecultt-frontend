import axios from 'axios';

import store from 'src/redux/store';
import { setIsNotificationServerError } from 'src/redux/actions/notifications_server';

const $api = axios.create({
    withCredentials: false,
    baseURL: process.env.REACT_APP_API_DOMEN,
});

$api.interceptors.request.use((config: any) => {
    config.headers.Authorization = `${localStorage.getItem('accessToken')}`;

    return config;
});

$api.interceptors.response.use(
    (config: any) => {
        return config;
    },
    async (error: any) => {
        const originalRequest = error.config;

        if (error.response) {
            if (error.response.status == 500) {
                store.dispatch(setIsNotificationServerError(true, 'Ошибка сервера') as any);
            }

            if (error.response.status == 401 && error.config && !error.config._isRetry) {
                originalRequest._isRetry = true;

                try {
                    // const response = await axios.post(
                    // 	`${process.env.REACT_APP_API_DOMEN}/users/token/refresh`,
                    // 	{},
                    // 	{ withCredentials: true }
                    // );
                    // localStorage.setItem(
                    // 	"accessToken",
                    // 	response.data.accessToken
                    // );
                    // return $api.request(originalRequest);
                    // localStorage.removeItem('accessToken');
                    // window.location.reload();
                } catch (e) {
                    // if (localStorage.getItem("accessToken")) {
                    // 	await $api.post("/users/revoke")
                    // 	localStorage.removeItem("accessToken");
                    // 	window.location.reload();
                    // }
                }
            }
        }

        throw error;
    },
);

export default $api;
