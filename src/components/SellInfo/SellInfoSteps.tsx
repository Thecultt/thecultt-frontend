import React from 'react';

import Step1Image from 'src/assets/images/sell-info/sell-info-step1.jpg';
import Step2Image from 'src/assets/images/sell-info/sell-info-step2.jpg';
import Step3Image from 'src/assets/images/sell-info/sell-info-step3.jpg';
import Step4Image from 'src/assets/images/sell-info/sell-info-step4.jpg';

const SellInfoSteps: React.FC = () => {
    const blocks: { image: string; subtitle: string }[] = [
        {
            image: Step1Image,
            subtitle: 'Оставьте заявку на продажу на нашем сайте, лично в офисе или в Telegram',
        },
        {
            image: Step2Image,
            subtitle: 'Согласуйте условия сделки и забора товара',
        },
        {
            image: Step3Image,
            subtitle: 'Наслаждайтесь свободным временем — мы берём на себя весь процесс продажи',
        },
        {
            image: Step4Image,
            subtitle: 'Готово! Ваш товар продан, а вы заработали деньги',
        },
    ];

    return (
        <div className="sell-info-steps">
            <h2 className="sell-info__title">Как это работает?</h2>

            <p className="sell-info__subtitle">Всего четыре шага, и ваш лот продан</p>

            <div className="sell-info-steps-blocks">
                {blocks.map((block, index) => (
                    <div className="sell-info-steps-blocks-block" key={`sell-info-steps-blocks-block-${index}`}>
                        <img src={block.image} alt="" className="sell-info-steps-blocks-block__img" />

                        <div className="sell-info-steps-blocks-block-text">
                            <h3 className="sell-info-steps-blocks-block-text__title">Шаг {index + 1}</h3>

                            <p className="sell-info-steps-blocks-block-text__subtitle">{block.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SellInfoSteps;
