import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { removeCartItem } from 'src/redux/actions/cart';
import { HeaderCartModalItem } from 'src/components';

interface HeaderCartModalAddMessageProps {
    state: boolean;
    setState: () => void;
    openCart: () => void;
}

const HeaderCartModalAddMessage: React.FC<HeaderCartModalAddMessageProps> = ({ state, setState, openCart }) => {
    const dispatch = useDispatch();

    const isLoadedUser = useTypedSelector(({ user }) => user.isLoaded);
    const { items } = useTypedSelector(({ cart }) => cart);

    const removeItem = (article: string) => {
        dispatch(removeCartItem(article, items[article]));
    };

    return (
        <div className={`header-block-cart-modal ${state ? 'active' : ''}`}>
            <div className="header-block-cart-modal-close" onClick={setState}>
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        id="Vector"
                        d="M20 4.5L4 20.5M4 4.5L20 20.5"
                        stroke="#202020"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            <p className="header-block-cart-modal__title">Добавлено:</p>
            <div className="header-block-cart-modal-items-wrapper">
                <HeaderCartModalItem
                    {...items[Object.keys(items)[Object.keys(items).length - 1]]}
                    removeItem={() => {
                        setState();

                        setTimeout(() => {
                            removeItem(items[Object.keys(items)[Object.keys(items).length - 1]].article);
                        }, 300);
                    }}
                    hiddenCheck
                />
            </div>
            <div className="header-block-cart-modal-btn-more">
                <button
                    className="btn-regular gray header-block-cart-modal-btn-more__btn"
                    onClick={() => {
                        setState();

                        setTimeout(() => {
                            openCart();
                        }, 300);
                    }}
                >
                    Посмотреть всё
                </button>

                {isLoadedUser ? (
                    <Link to="/order" className="btn header-block-cart-modal-btn-more__btn" onClick={setState}>
                        Оформить
                    </Link>
                ) : (
                    <Link
                        to="/?redirect=/order#reglog"
                        className="btn header-block-cart-modal-btn-more__btn"
                        onClick={setState}
                    >
                        Оформить
                    </Link>
                )}
                {/* <Link
					to="/order"
					className="btn header-block-cart-modal-btn-more__btn"
					onClick={setState}
				>
					Оформить
				</Link> */}
            </div>
        </div>
    );
};

export default HeaderCartModalAddMessage;
