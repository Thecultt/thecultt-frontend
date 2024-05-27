import React from 'react';

import { FaqTabItem } from '../';

const FaqBuyers: React.FC = () => {
    const tabs: { title: string; description: string }[] = [
        {
            title: 'В чем преимущество покупки на платформе THE CULTT?',
            description: `
			Наши преимущества:
			<br />
			<br />
			Селекция — все изделия проходят тщательную проверку на подлинность и состояние перед публикацией на thecultt.com. Команда стилистов отбирает лоты на соответствие актуальности моделей и брендов. Вам не придется пролистывать тысячу товаров для того, чтобы найти один интересный вариант.
			<br />
			<br />
			Безопасность — на платформе представлены модели, прошедшие проверку на подлинность. THE CULTT несет 100% финансовую ответственность за все товары, приобретенные у нас.
			<br />
			<br />
			Наличие товара — все лоты хранятся на нашем складе, поэтому мы гарантируем актуальность сведений на сайте thecultt.com.
			Круговорот — программа дает возможность обменивать в течение 6 месяцев все приобретенные в THE CULTT сумки и аксессуары на новые с минимальной дружеской комиссией. Экспериментируйте с образами! А мы это поддержим)
			<br />
			<br />
			Доставка с примеркой — вы можете воспользоваться услугой «Доставка с примеркой», выбрав этот вариант при оформлении заказа, и познакомиться с лотом до покупки. К вам приедет собственный курьер THE CULTT и привезет до трех аксессуаров на выбор. Примерка доступна при доставке по Москве внутри МКАД.
			<br />
			<br />
			Онлайн-примерка — вы можете связаться с нами и запросить дополнительные фотографии и видео лотов. Наши менеджеры будут рады предоставить вам более детальную информацию.
			<br />
			<br />
			Рассрочка — вы можете не оплачивать всю стоимость покупки сразу, а разбить сумму на несколько месяцев, выбрав на сайте вариант Рассрочка или Кредит, который предоставляет наш партнер Тинькофф-банк.
			<br />
			<br />
			Мы заботимся о вас, поэтому предоставляем не только инструменты безопасной оплаты, вариант покупки в рассрочку, возможность примерки товара, но и быструю бесплатную доставку оплаченных заказов по Москве и России.
			<br />
			<br />
			Возврат - мы не скрываем дефекты и показываем все нюансы, которые присутствуют на наших лотах, потому что одна из наших важных ценностей — честность. Мы не боимся возвратов. Если вы засомневаетесь в покупке, на платформе THE CULTT у вас есть возможность вернуть оплаченный товар в течение 3 дней с момента получения.
			`,
        },
        {
            title: 'Как вы гарантируете подлинность товаров?',
            description: `
			Мы не допускаем подделки к продаже на нашей платформе и несем финансовую ответственность за подлинность всех размещенных на сайте лотов.
			<br />
			<br />
			Все изделия перед публикацией на сайте thecultt.com проходят проверку на подлинность внутренней командой экспертов. Кроме того, мы используем в работе общепризнанные международные сервисы аутентификации. <a href="/auth">Подробнее</a>.
			`,
        },
        {
            title: 'Как можно оплатить заказ?',
            description: `
			Вы можете оплатить заказ на сайте банковской картой с помощью безопасной системы платежей или воспользоваться беспроцентной рассрочкой, кредитом, Яндекс Сплитом на сайте, если хотите разбить платеж на части.			<br />
			<br />
			При доставке с примеркой по Москве возможна оплата нашему курьеру наличными или банковской картой по ссылке, которая придет вам на номер телефона.
			`,
        },
        {
            title: 'Какие есть варианты доставки?',
            description: `
			Мы работаем как интернет-магазин, что позволяет нам сохранять максимально выгодные для вас цены.
			<br />
			<br />
			Бесплатная доставка действует в следующих случаях:
			<br />
			<br />
			- для всех оплаченных на сайте заказов по России*;
			<br />
			- для оплаченных и оформленных заказов с самовывозом. Заказ можно забрать по адресу: Москва, ул. Трубная 25с3.
			<br />
			* Заказы с доставкой по Москве отправляются собственным курьером платформы THE CULTT, сроки доставки — 1–3 дня. Заказы с доставкой по России отправляются с помощью курьерской службы СДЭК до удобного вам адреса или пункта самовывоза. Срок доставки — 2–10 дней в зависимости от вашего региона.
			<br />
			<br />
			Доставка с примеркой — вы можете воспользоваться услугой «Доставка с примеркой», выбрав этот вариант при оформлении заказа, и познакомиться с лотом до покупки. К вам приедет собственный курьер THE CULTT и привезет до трех аксессуаров на выбор. Примерка доступна при доставке по Москве внутри МКАД.
			<br />
			<br />
			Платная доставка действует для следующих вариантов:
			<br />
			<br />
			Заказы с примеркой с доставкой по Москве внутри МКАД.
			<br />
			Вы можете заказать доставку:
			<br />
			- не более 2 сумок;
			<br />
			- не более 4 аксессуаров;
			<br />
			-не более 2 пар обуви.
			<br />
			- если в заказе присутствуют несколько товарных категорий (сумки, обувь, аксессуары и т.д.), то не более 4 товаров в одном заказе:
			<br />
			- не более 2 сумок  и 2 аксессуаров;
			<br />
			- не более 2 пар обуви и 2 аксессуаров;
			<br />
			- не более 1 сумки, 1 пары обуви и 2 аксессуаров.
			Доставка осуществляется по Москве в пределах МКАД и вы можете принять решение о покупке после примерки. Товары будут забронированы для вас на 24 часа и отправлены на примерку собственным курьером платформы THE CULTT. Стоимость услуги — 600₽. Время примерки - 15 минут. Если вам требуется больше времени (от 15 до 45 минут), то необходимо будет оплатить двойную стоимость примерки (1.200₽).`,
        },
        {
            title: 'Могу ли я вернуть вещь?',
            description: `
			Мы понимаем, что вы можете передумать, поэтому принимаем возврат в течение трех дней с момента получения заказа при наличии неповрежденной фирменной пломбы THE CULTT на изделии. По истечении этого срока вы можете воспользоваться нашей программой Круговорот
			<br />
			<br />
			Важно! 
			<br />
			<br />
			Нельзя вернуть товары, если: 
			<br />
			Вы оплатили его после услуги примерки,
			<br />
			Вы не сохранили бирку и защитную пломбу,
			<br />
			Вы оплатили товар зарубежной картой. 
			<br />
			Подробнее в разделе <a href="/help-return">ВОЗВРАТ</a>.
			<br />
			`,
        },
        {
            title: 'Хочу купить товар, но сомневаюсь',
            description: `
			Наши менеджеры всегда готовы отправить дополнительное видео или фотографии лота, чтобы вам было легче принять решение. Напишите нам в удобном мессенджере:
			<br />
			<br />
			- Telegram: <a href="https://t.me/thecultthelp">thecultthelp</a>
			<br />
			<br />
			- WhatsApp: <a href="https://api.whatsapp.com/send/?phone=79955026591&text&type=phone_number&app_absent=0">+79955026591</a> 
			`,
        },
        {
            title: 'Как я могу ознакомиться с ассортиментом, если я в Москве?',
            description: `
			Для предварительного знакомства с лотом мечты вы можете:
			<br />
			<br />
			1. Приехать в нашу клиентскую зону,  расположенную прямо в нашем офисе. Адрес: г. Москва, ул. Трубная, д. 25, к. 3. Примерка в клиентской зоне доступна ежедневно с 11:00 до 21:00. Нужна <a href="https://calendly.com/thecultt/visit?month=2024-01">предварительная запись</a>. На примерку у вас будет 30 минут.
			К примерке доступны 5 товаров, если у вас уже есть конкретные лоты - пожалуйста, укажите ссылки на них в заявке. Это сэкономит ваше время. 
			<br />
			<br />
			Важно! мы не можем забронировать товары от покупки в интернет-магазине, так как все аксессуары представлены в единственном экземпляре. Поэтому накануне или в день примерки менеджер может сообщить вам об отсутствии одной или нескольких позиций из вашего списка.
			2. Воспользоваться услугой доставки с примеркой с помощью штатного курьера.
			<br />
			<br />
			Мы доставим лоты по удобному вам адресу в пределах МКАД (не более 2 сумок/пар обуви и не более 4 товаров в одном заказе) и вы сможете принять решение о покупке после примерки. Курьер заранее согласует с вами время доставки в промежутке с 11 до 21, с понедельника по воскресенье. На примерку у вас будет 15 минут.
			Наш штатный курьер сможет принять оплату банковской картой (по безопасной ссылке).
			<br />
			<br />
			Стоимость услуги - 600₽, даже если после примерки вы отказались от заказа или его части.
			`,
        },
        {
            title: 'Не могу найти нужный аксессуар, что делать?',
            description: `Если товара, который вы ищете, не оказалось в нашей подборке, просто оставьте заявку в <a href="https://thecultt.com/#create_waiting">листе ожидания</a>, и мы сообщим вам, как только лот появится в наличии на сайте — до публикации в социальных сетях!`,
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

export default FaqBuyers;
