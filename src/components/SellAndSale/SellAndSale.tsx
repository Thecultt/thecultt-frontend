import React from "react";
import {Link} from "react-router-dom";

import Bag1 from "../../assets/images/sell-and-sale/bag1.png";
import Bag2 from "../../assets/images/sell-and-sale/bag2.png";

const SellAndSale: React.FC = () => {
    return (
        <section className="sell-and-sale">
            <div className="container">
                <div className="sell-and-sale-wrapper">
                    <img
                        src={Bag1}
                        alt=""
                        className="sell-and-sale__bag left"
                    />
                    <img
                        src={Bag2}
                        alt=""
                        className="sell-and-sale__bag right"
                    />

                    <div className="sell-and-sale-text">
                        <h2 className="sell-and-sale-text__title">
                            Продай свою сумку и получи скидку
                        </h2>
                        <p className="sell-and-sale-text__description">
                            Rebag specialists inspect and certify every item
                            before listing on our site. That way you can trust
                            you're always receiving the most incredible luxury
                            product.
                        </p>
                        <Link to="/" className="btn sell-and-sale-text__btn">
                            Начать продавать
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SellAndSale;
