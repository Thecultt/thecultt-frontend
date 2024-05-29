import React from 'react';
import { useDispatch } from 'react-redux';
import { reduxForm, InjectedFormProps, formValueSelector } from 'redux-form';

import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { setOrderIsValid } from 'src/redux/actions/order';
import {
    OrderFormContact,
    OrderFormCountry,
    OrderFormDelivery,
    OrderFormAddress,
    OrderFormPayments,
} from 'src/components';

import validate from './validate';

const OrderForm: React.FC<{} & InjectedFormProps<{}, {}>> = ({
    handleSubmit,
    invalid,
    pristine,
    submitting,
    initialize,
}) => {
    const dispatch = useDispatch();

    const [indexForm, setIndexForm] = React.useState<number>(0);

    const { isLoaded, user } = useTypedSelector(({ user }) => user);
    const {
        address: { country, city, street },
    } = useTypedSelector(({ order }) => order);

    const selector = formValueSelector('order-form');

    const { nameValue, phoneValue, deliveryValue, houseValue, paymentValue } = useTypedSelector((state) => {
        const { name, phone, delivery, house, payment } = selector(
            state,
            'name',
            'phone',
            'delivery',
            'house',
            'payment',
        );
        return {
            nameValue: name,
            phoneValue: phone,
            deliveryValue: delivery,

            houseValue: house,

            paymentValue: payment,
        };
    });

    React.useEffect(() => {
        if (nameValue && phoneValue) {
            setIndexForm(1);
        }

        if (country.value !== '' && city.value !== '') {
            setIndexForm(2);
        }

        if (deliveryValue) {
            setIndexForm(3);
        }

        if (street.value !== '' && houseValue) {
            setIndexForm(4);
        }
    }, [nameValue, phoneValue, country, city, street, deliveryValue, houseValue]);

    React.useEffect(() => {
        if (invalid || pristine || submitting) {
            dispatch(setOrderIsValid(false) as any);
        } else {
            dispatch(setOrderIsValid(true) as any);
        }
    }, [invalid, pristine, submitting]);

    React.useEffect(() => {
        if (isLoaded) {
            initialize({
                name: `${user.lastname ? `${user.lastname} ` : ''}${user.name ? `${user.name} ` : ''}${user.middlename ? `${user.middlename} ` : ''}`,
                phone: user.phone,
            });
        }
    }, [isLoaded]);

    return (
        <form className="order-form" onSubmit={handleSubmit}>
            <OrderFormContact email={user.email} />

            {indexForm >= 1 ? <OrderFormCountry /> : null}

            {indexForm >= 2 ? <OrderFormDelivery /> : null}

            {indexForm >= 3 && deliveryValue !== 'Самовывоз' ? <OrderFormAddress /> : null}

            {indexForm >= 4 ? (
                deliveryValue !== 'Доставка с примеркой (по Москве)' ? (
                    <OrderFormPayments paymentValue={paymentValue} />
                ) : null
            ) : deliveryValue == 'Самовывоз' ? (
                <OrderFormPayments paymentValue={paymentValue} />
            ) : null}
        </form>
    );
};

export default reduxForm<{}, {}>({
    form: 'order-form',
    validate,
})(OrderForm);
