import React from 'react';
import { useParams, NavLink } from 'react-router-dom';

import { getClassNames } from 'src/functions/getClassNames';

import { FaqAll, FaqBuyers, FaqSellers, FaqTheCultt } from 'src/components';
import FaqMainBannerImage from 'src/assets/images/faq/faq-main-image.jpg';

const Faq: React.FC = () => {
    const { block } = useParams();

    const blocks: Record<string, React.ReactNode> = {
        all: <FaqAll />,
        buyers: <FaqBuyers />,
        sellers: <FaqSellers />,
        thecultt: <FaqTheCultt />,
    };

    return (
        <section className="faq-main">
            <div className="container">
                <div className="faq-main-wrapper">
                    <div
                        className="faq-main-banner"
                        style={{
                            backgroundImage: `url(${FaqMainBannerImage})`,
                        }}
                    >
                        <p className="faq-main-banner__title">
                            Вопросы и ответы <span>THE CULTT</span>
                        </p>
                    </div>

                    <div className="faq-main-menu">
                        <NavLink
                            to="/help/all"
                            className={({ isActive }) =>
                                getClassNames('faq-main-menu__link', {
                                    active: isActive,
                                })
                            }
                        >
                            Общее
                        </NavLink>
                        <NavLink
                            to="/help/buyers"
                            className={({ isActive }) =>
                                getClassNames('faq-main-menu__link', {
                                    active: isActive,
                                })
                            }
                        >
                            Покупателям
                        </NavLink>
                        <NavLink
                            to="/help/sellers"
                            className={({ isActive }) =>
                                getClassNames('faq-main-menu__link', {
                                    active: isActive,
                                })
                            }
                        >
                            Продавцам
                        </NavLink>
                        <NavLink
                            to="/help/thecultt"
                            className={({ isActive }) =>
                                getClassNames('faq-main-menu__link', {
                                    active: isActive,
                                })
                            }
                        >
                            Условия использования сервисов THE CULTT и реквизиты
                        </NavLink>
                    </div>

                    <div className="faq-main-content">{blocks[block || 'all']}</div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
