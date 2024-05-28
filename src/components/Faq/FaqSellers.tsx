import React from 'react';

import { FaqTabItem } from '../';

const FaqSellers: React.FC = () => {
    const tabs: { title: string; description: string }[] = [
        {
            title: 'В чем преимущество продажи на платформе THE CULTT?',
            description: `
			Мы предоставляем премиальный сервис и берем весь процесс продажи на себя. От вас лишь требуется оставить заявку на сайте, согласовать вариант сотрудничества и сумму продажи с менеджером THE CULTT, а затем передать вещь  нашему курьеру. 
			<br />
			<br />
			Самое сложное — доставку, бережное хранение, проверку подлинности, реставрацию при необходимости, профессиональную съемку, публикацию на сайте и в социальных сетях и коммуникацию с потенциальными покупателями — мы берем на себя! Вам останется только получить деньги на карту после того, как ваш лот приобретут.
			`,
        },
        {
            title: 'Какие варианты сотрудничества возможны для продавцов? ',
            description: `
			<h4>Выкуп</h4>
			Мы оценим ваш лот, согласуем условия, заберем и проверим на подлинность в нашем офисе и сделаем выплату вам на карту.

			<br />
			<br />
			<br />

			<h4>Продажа с комиссией</h4>
			Мы оценим ваш лот, согласуем с вами его стоимость и заберем для дальнейшей продажи. Доставка, проверка подлинности, реставрация при необходимости, бережное хранение, профессиональная съемка со стилистом, публикация на сайте и в социальных сетях, коммуникация с потенциальными покупателями — все берем на себя!
			<br />
			<br />
			Вам останется только получить деньги на карту после того, как ваш товар приобретут.

			<br />
			<br />
			<br />

			<h4>Обмен</h4>
			Мы оценим ваш лот и предложим депозит в размере его стоимости на покупку нового лота на нашем сайте.
			
			<br />
			<br />
			<br />

			<h4>VIP-сервис</h4>
			Если у вас есть для продажи более 7 лотов, соответствующих нашему бренд-листу, то представитель THE CULTT приедет к вам, чтобы выбрать и оценить их, согласовать условия, заключить с вами договор и забрать лоты для продажи. Услуга предоставляется бесплатно и не влияет на размер комиссии.

			<br />
			<br />
			<br />

			<h4>Круговорот</h4>
			Если товар куплен в THE CULTT, вы можете в течение 3 месяцев обменять его на выгодных условиях. Размер депозита на обмен зависит от количества месяцев, прошедших с даты покупки.
			<br />
			<br />
			До 1 месяца* - 90%,  
			<br />
			<br />
			От 1 до 3 месяцев - 85%,
			<br />
			<br />
			Сумки Hermes категорий: Birkin, Kelly, Constance участвуют с фиксированным процентом депозита - 85%.
			<br />
			<br />
			<i>*В программе “Круговорот” не участвуют лоты из категории “Обувь”,  “Аксессуары”, в состоянии “новое” и отдельные лоты с пометкой “Лот не участвует в программе “Круговорот”.</i>
			<br />
			<br />
			*Для вашего удобства в качестве первого месяца мы отсчитываем 35 календарных дней с момента получения товара.
			<br />
			<br />
			Позвольте себе быть разной каждый день, не увеличивая гардероб физически!
			`,
        },
        {
            title: 'Какой у вас размер комиссии?',
            description: `
			Размер комиссии зависит от стоимости лота на нашем сайте.
			<br />
			<table>
			<thead>
			<tr>
			<td>
			<p align="center">Цена товара в рублях</p>
			</td>
			<td>
			<p align="center">Наша комиссия с учетом налогов</p>
			</td>
			</tr>
			</thead>
			<tbody>
			<tr>
			<td>
			<p align="center">от 8.000₽ до 15.000₽</p>
			</td>
			<td>
			<p align="center">49%</p>
			</td>
			</tr>
			<tr>
			<td>
			<p align="center">от 15.001₽ до 30.000₽</p>
			</td>
			<td>
			<p align="center">39%</p>
			</td>
			</tr>
			<tr>
			<td>
			<p align="center">от 30.001₽ до 50.000₽</p>
			</td>
			<td>
			<p align="center">35%</p>
			</td>
			</tr>
			<tr>
			<td>
			<p align="center">от 50.001₽ до 100.000₽</p>
			</td>
			<td>
			<p align="center">30%</p>
			</td>
			</tr>
			<tr>
			<td>
			<p align="center">от 100.001₽ до 500.000₽</p>
			</td>
			<td>
			<p align="center">25%</p>
			</td>
			</tr>
			<tr>
			<td>
			<p align="center">от 500.001₽ и 1.000.000</p>
			</td>
			<td>
			<p align="center">20%</p>
			</td>
			</tr>
			<tr>
			<td>
			<p align="center">от 1.000.001₽ и выше</p>
			</td>
			<td>
			<p align="center">15%</p>
			</td>
			</tr>
			<tr>
			<td>
			<p align="center">Hermes Birkin и Kelly в состоянии "Из бутика" </p>
			</td>
			<td>
			<p align="center">10%</p>
			</td>
			</tr>
			</tbody>
			</table>
			<br />
			При продаже лота, купленного в THE CULTT, мы предлагаем специальную комиссию -5 % от стандартных условий.
			<br />
			*Снижение комиссии распространяется на любой Лот любой категории, купленный в THE CULTT в любое время.
			<br />
			**Подавать заявку на продажу необходимо из того же Личного кабинета, в котором была совершена покупка данного Лота.
			<br />
			***Снижение комиссии не распространяется на Лоты, купленные через другой ЛК (например, если вы собираетесь продать Лот, приобретенный на THE CULTT и подаренный вам).
			`,
        },
        {
            title: 'Какие аксессуары вы принимаете?',
            description: `
			Мы не работаем с подделками! Все сумки, аксессуары и обувь  проходят проверку на подлинность. Если ваш лот окажется неоригинальным, то вам придется возместить стоимость аутентификации и доставки до офиса THE CULTT плюс самостоятельно забрать ваш товар.
			<br />
			<br />
			Хорошее и отличное состояние
			<br />
			Сумки: подкладка без дыр и пятен, на сумке нет сильных потертостей, загрязнений и крупных царапин. Реставрацию незначительных дефектов мы возьмем на себя и подготовим сумку к продаже с помощью партнерского сервиса. Стоимость реставрационных работ мы вычитаем из выплаты после продажи, предварительно согласовав с вами. В случае если сумку забирает сам продавец, он компенсирует стоимость ремонта.
			<br />
			Украшения: нет видимых глубоких царапин и потертостей, все застежки и механизмы в рабочем состоянии.
			<br />
			Шелковые платки: нет затяжек, дыр и пятен.
			<br />
			Очки: нет видимых глубоких царапин на линзах, все механизмы в рабочем состоянии.
			<br />
			Обувь: новое и отличное состояние. Сумма выплаты зависит также от наличия профилактики.

			<br />
			<br />
			<br />

			<h4>Актуальность</h4>
			Мы самостоятельно анализируем тренды и принимаем к продаже только актуальные товары. Мы очень трепетно относимся к нашей селекции и надеемся на ваше понимание, если предложенный лот не подойдет по нашим критериям.
				
			<br />
			<br />
			<br />

			<h4>Соответствие бренд-листу</h4>
			Мы работаем с определенными брендами. Ознакомиться со списком можно по <a href="/sell/brands">ссылке</a>.
			`,
        },
        {
            title: 'Как я могу получить деньги за проданные товары?',
            description: `
			Мы отправим деньги на вашу карту по банковским реквизитам.
			<br />
			<br />
			Сроки выплат:
			<br />
			<br />
			при выкупе — после получения результатов проверки подлинности;
			<br />
			при продаже с комиссией — в течение десяти рабочих дней после покупки вашего лота на сайте.
			`,
        },
        {
            title: 'Что делать, если мой аксессуар не купили?',
            description: `Мы заключаем договор комиссии на 90 дней. После истечения этого срока вы можете забрать вашу вещь любым удобным способом или согласовать с нами снижение цены лота на сайте.`,
        },
        {
            title: 'Кто и каким образом определяет цену продажи на сайте?',
            description: `
			Эксперты отдела закупки помогут определить оптимальную цену для продажи вашего лота.
			<br />
			<br />
			Мы постоянно анализируем рынок и предлагаем конкурентную цену, по которой ваш лот найдет покупателя максимально быстро. При формировании стоимости мы ориентируемся на индекс оценки предметов роскоши для повторной продажи (comprehensive luxury appraisal index for resale).
			<br />
			<br />
			Согласно международной статистике, при вторичной продаже сумки теряют от 30 до 70% от первоначальной стоимости в бутике, даже если они почти не носились и сохранились в идеальном состоянии (за редким исключением вроде сумок Hermes). На цену влияет несколько факторов: актуальность модели, цвет, год выпуска, состояние, размер.
			`,
        },
        {
            title: 'Могу ли я параллельно продавать на других платформах? ',
            description: `
			Вы можете не убирать объявления с других ресейл-платформ и заниматься продажей параллельно.
			<br />
			<br />
			Важно! Предоставляя премиальный сервис по продаже, мы забираем на хранение ваш лот на период действия договора комиссии (90 дней), что помогает гораздо быстрее продать товар. Если ваш лот купят на другой ресейл-платформе раньше, чем закончится срок нашего сотрудничества, мы запросим у вас денежную компенсацию.
			`,
        },
        {
            title: 'В каких случаях у меня могут запросить оплату компенсации? ',
            description: `
			Мы запросим у вас компенсацию в следующих случаях:
			<br />
			<br />
			В результате проверки подлинности сумка, аксессуар или обувь оказались неоригинальными. Вам будет необходимо самостоятельно забрать ваш товар в течение трех рабочих дней любым удобным способом (курьерская доставка или самовывоз);
			<br />
			<br />
			Вы хотите снять лот с продажи до истечения срока действия договора комиссии (90 дней). Сумма неустойки составляет 2.700₽ за любой лот, кроме некоторых моделей сумок Hermes (Birkin, Kelly, Constance — для этих моделей компенсация составляет 15.000₽) и наручных стальных часов (для них компенсация составляет 4.000₽). В эту сумму входят наши затраты на обработку одного товара, обратная доставка осуществляется за счет продавца.
			`,
        },
        {
            title: 'Что делать, если мой лот не прошел проверку на подлинность?',
            description: `Каждый лот на THE CULTT проходит три этапа проверки на подлинность с участием внутренних экспертов платформы и сторонних специалистов-аутентификаторов. Если товар оказался неоригинальным, он не сможет попасть в каталог THE CULTT. Его продавцу необходимо выплатить компенсацию, размер которой указан в договоре.`,
        },
    ];

    return (
        <div className="faq-main-content-tab-wrapper">
            {tabs.map((tab, index) => (
                <FaqTabItem {...tab} key={`faq-main-content-tab-${index}`} />
            ))}
        </div>
    );
};

export default FaqSellers;
