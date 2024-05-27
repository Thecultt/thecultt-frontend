import React from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from '../../hooks/useTypedSelector';

import {
    fetchBuyerTheCulttCategories,
    sendBuyerTheCulttProductCustomApplication,
    setBuyerTheCulttProductIsSendFormCustomProduct,
} from '../../redux/actions/buyer_thecultt';

import {
    BuyerTheCulttMainBanner,
    BuyerTheCulttMainSteps,
    BuyerTheCulttMainCategory,
    BuyerTheCulttMainFaq,
    PageLoader,
    Popup,
    BuyerTheCulttMainCustomForm,
} from '../../components/';

const BuyerTheCulttMain: React.FC = () => {
    const dispatch = useDispatch();

    const [isOpenCustomForm, setIsOpenCustomForm] = React.useState<boolean>(false);

    const { isLoadedCategories, categories, isSendFormCustomProductSuccess } = useTypedSelector(
        ({ buyer_thecultt }) => buyer_thecultt,
    );

    React.useEffect(() => {
        dispatch(fetchBuyerTheCulttCategories() as any);
    }, []);

    const onSubmitProductCustomApplication = (data: any) => {
        dispatch(sendBuyerTheCulttProductCustomApplication(data) as any);

        setIsOpenCustomForm(false);
    };

    const onClickOpenCustomForm = () => {
        setIsOpenCustomForm(true);
    };

    return (
        <section className="buyer-thecultt">
            <Popup state={isOpenCustomForm} setState={() => setIsOpenCustomForm(false)}>
                <BuyerTheCulttMainCustomForm onSubmit={onSubmitProductCustomApplication} />
            </Popup>

            <Popup
                state={isSendFormCustomProductSuccess}
                setState={() => dispatch(setBuyerTheCulttProductIsSendFormCustomProduct(false))}
            >
                <div className="buyer-thecultt-product-success">
                    <h4 className="buyer-thecultt-product-success__title">Спасибо! Ваша заявка принята</h4>
                    <p className="buyer-thecultt-product-success__subtitle">
                        Скоро мы свяжемся с вами в WhatsApp <br /> по указанному номеру телефона.
                    </p>
                </div>
            </Popup>

            <div className="container">
                <div className="buyer-thecultt-wrapper">
                    <BuyerTheCulttMainBanner onClickOpenCustomForm={onClickOpenCustomForm} />

                    <BuyerTheCulttMainSteps />

                    {isLoadedCategories ? (
                        Object.keys(categories).map((category, index) => (
                            <BuyerTheCulttMainCategory
                                title={category}
                                {...categories[category]}
                                key={`buyer-thecultt-category-${category}-${index}`}
                                onClickOpenCustomForm={onClickOpenCustomForm}
                            />
                        ))
                    ) : (
                        <PageLoader />
                    )}

                    <BuyerTheCulttMainFaq />
                </div>
            </div>
        </section>
    );
};

export default BuyerTheCulttMain;
