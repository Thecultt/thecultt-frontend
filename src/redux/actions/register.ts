import axios from 'axios';
import { Dispatch } from 'react';

import { RegisterActions, RegisterActionTypes } from '../types/IRegister';
import { LS_KEYS } from 'src/constants/keys';
import { localStorageService } from 'src/services/storage';
import { sendMindbox } from 'src/functions/mindbox';

export const sendRegister = (info: {
    name: string;
    lastname: string;
    email: string;
    password: string;
    promoCheckbox: boolean;
}) => {
    return async (dispatch: Dispatch<RegisterActions>) => {
        dispatch({
            type: RegisterActionTypes.SET_REGISTER_IS_SEND,
            payload: true,
        });

        axios.post(`${process.env.REACT_APP_API_DOMEN}/register/`, info).then(({ data }) => {
            localStorageService.setItem(LS_KEYS.accessToken, data.access as string, { value: 1, unit: 'month' });

            window.dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
            window.dataLayer.push({
                event: 'registration',
                ecommerce: {
                    timestamp: Math.floor(Date.now() / 1000),
                },
            });

            if (info.promoCheckbox) {
                try {
                    const mindboxOperation =
                        localStorage.getItem('redirect_reglog') === '/order'
                            ? 'KlientImportPriPodpiskeVZakaze'
                            : 'KlientImportPriPodpiskeRegaLK';
                    sendMindbox(mindboxOperation, {
                        customer: {
                            ids: {
                                websiteID: data.id,
                            },
                            discountCard: {
                                ids: {
                                    number: '',
                                },
                            },
                            birthDate: '',
                            sex: '',
                            timeZone: '',
                            lastName: '',
                            firstName: info.name,
                            middleName: info.lastname,
                            fullName: '',
                            area: {
                                ids: {
                                    externalId: '',
                                },
                            },
                            customFields: {
                                tipKlienta: '',
                                gorod: '',
                                istochnikPodpiski: 'PriRegistraciiLK',
                            },
                            email: info.email,
                            mobilePhone: '',
                            subscriptions: [
                                {
                                    pointOfContact: 'Email',
                                    isSubscribed: true,
                                },
                            ],
                        },
                        executionDateTimeUtc: new Date(),
                    });
                } catch (e) {
                    console.log(e);
                }
            }

            if (localStorage.getItem('redirect_reglog')) {
                window.location.href = localStorage.getItem('redirect_reglog') as string;
                window.location.hash = 'welcome';
            } else {
                window.location.hash = 'welcome';
                window.location.reload();
            }

            dispatch({
                type: RegisterActionTypes.SET_REGISTER_IS_SEND,
                payload: false,
            });
        });
    };
};
