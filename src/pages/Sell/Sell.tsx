import React from "react";

import {
    SellSteps,
    SellCooperation,
    SellInfo,
    SellImages,
    SellContact,
    SellDelivery,
} from "../../components/";

const Sell: React.FC = () => {
    const [index, setIndex] = React.useState<number>(1);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [index]);

    return (
        <section className="sell">
            <div className="container">
                <div className="sell-wrapper">
                    <SellSteps currentIndex={index} />

                    {index === 1 ? (
                        <SellCooperation next={() => setIndex(index + 1)} />
                    ) : null}

                    {index === 2 ? (
                        <SellInfo
                            next={() => setIndex(index + 1)}
                            prev={() => setIndex(index - 1)}
                        />
                    ) : null}

                    {index === 3 ? (
                        <SellImages
                            next={() => setIndex(index + 1)}
                            prev={() => setIndex(index - 1)}
                        />
                    ) : null}

                    {index === 4 ? (
                        <SellContact
                            next={() => setIndex(index + 1)}
                            prev={() => setIndex(index - 1)}
                        />
                    ) : null}

                    {index === 5 ? (
                        <SellDelivery
                            next={() => setIndex(index + 1)}
                            prev={() => setIndex(index - 1)}
                        />
                    ) : null}
                </div>
            </div>
        </section>
    );
};

export default Sell;
