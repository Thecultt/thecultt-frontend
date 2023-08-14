import React from "react";

import {FaqBreadCrumbs} from "../../components/";

const Faq: React.FC = () => {
    return (
        <section className="faq">
            <div className="faq-bread-crumbs-wrapper">
                <div className="container">
                    <FaqBreadCrumbs />
                </div>
            </div>

            <div className="faq-title-white-wrapper">
                <div className="container">
                    <h3 className="faq-title-white__title">Возврат</h3>

                    <p className="faq-title-white__description">
                        Подробные условия обмена, возврата, проведения
                        экспертизы качества товаров, предъявления иных
                        требований указаны в Публичной оферте.
                    </p>
                </div>
            </div>

            <div className="container">
                <div className="faq-wrapper">
                    <div className="faq-text">
                        <div className="faq-text-block">
                            <h4 className="faq-text-block__title">
                                Возврат товара надлежащего качества
                            </h4>
                            <div className="faq-text-block-description">
                                <p>
                                    Надлежащее качество товара – это состояние
                                    товара, соответствующее его описанию при
                                    продаже. Если у товара бывшего в
                                    употреблении есть какие-либо недостатки и
                                    они заявлены при продаже – то такое качество
                                    товара является надлежащим.
                                </p>
                                <p>
                                    Можно вернуть товар в течение 3-х
                                    календарных дней (после его получения,
                                    включая день получения товара), если
                                    соблюдены следующие требования:
                                </p>
                                <ul>
                                    <li>товар был оплачен на сайте;</li>
                                    <li>
                                        товар соответствует его состоянию и
                                        описанию при продаже;
                                    </li>
                                    <li>
                                        товар не был использован после покупки;
                                    </li>
                                    <li>
                                        сохранены оригинальные
                                        пломбы/бирки/ярлыки товара и сервиса THE
                                        CULTT. Только так покупатель может
                                        подтвердить, что он не использовал товар
                                        после покупки.
                                    </li>
                                </ul>
                                <p>
                                    Важно! товар, оплаченный после услуги
                                    примерки, вернуть в течение 3-х дневного
                                    срока после его получения нельзя. По
                                    истечении 3-х дневного срока нельзя
                                    обменять/вернуть (в том числе, по причине не
                                    подошедшей формы, габаритов, фасона,
                                    расцветки, размера или комплектации) товар
                                    надлежащего качества.
                                </p>
                            </div>
                        </div>

                        <div className="faq-text-block">
                            <h4 className="faq-text-block__title">
                                Обмен/возврат товара ненадлежащего качества
                            </h4>
                            <div className="faq-text-block-description">
                                <p>
                                    Если вы обнаружили в товаре недостаток, не
                                    указанный в описании.
                                </p>
                                <p>
                                    Товаром ненадлежащего качества является
                                    товар с недостатками, не оговоренными при
                                    продаже (недостатки не были заявлены на фото
                                    и в описании товара).
                                </p>
                                <p>
                                    Можно запросить, если вы обнаружили в товаре
                                    недостаток, не оговоренный при продаже:
                                </p>
                                <ul>
                                    <li>
                                        замены товара на товар этой же марки или
                                        на такой же товар другой марки (модели,
                                        артикула) с соответствующим перерасчетом
                                        покупной цены; (только при фактическом
                                        наличии у THE CULTT соответствующей
                                        модели)
                                    </li>
                                    <li>
                                        соразмерного уменьшения покупной цены;
                                    </li>
                                    <li>
                                        незамедлительного безвозмездного
                                        устранения не оговоренных недостатков
                                        товара;
                                    </li>
                                    <li>совершить возврат.</li>
                                </ul>
                                <p>
                                    Нельзя запросить всего вышеперечисленного,
                                    если в товаре нет нюансов, не оговоренных
                                    при продаже. Не являются недостатком товара:
                                </p>
                                <ul>
                                    <li>
                                        1. недостатки товара, которые были
                                        указаны при продаже;
                                    </li>
                                    <li>
                                        2. недостатки товара, которые появились
                                        из-за нарушений условий его нормальной
                                        эксплуатации;
                                    </li>
                                    <li>
                                        например: контакт кожаных изделий с
                                        маслом/водой, металлических – с острыми
                                        поверхностями, ювелирных – с
                                        агрессивными веществами и т.д.
                                    </li>
                                    <li>
                                        3. недостатки товара, которые появляются
                                        в условиях его нормальной эксплуатации
                                        (естественный износ).
                                    </li>
                                    <li>
                                        Например: выгорание, выцветание, заломы,
                                        царапины, потертости и т.д.
                                    </li>
                                    <li>
                                        4. несоответствие товара представлению
                                        покупателя.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="faq-text-block-white-wrapper">
                            <div className="faq-text-block">
                                <h4 className="faq-text-block__title">
                                    Общий порядок возврата товара
                                </h4>
                                <div className="faq-text-block-description">
                                    <p>
                                        1. Покупатель извещает THE CULTT о
                                        желании вернуть товар письмом по
                                        электронной почте hey@thecultt.com. В
                                        письме покупатель указывает:
                                    </p>
                                    <ul>
                                        <li>тему письма «Возврат»;</li>
                                        <li>номер заказа;</li>
                                        <li>основания для возврата</li>
                                    </ul>
                                    <p>
                                        (Важно! для возврата товаров качества,
                                        оплаченных онлайн, срок извещения о
                                        возврате – 3 дня с момента получения
                                        товара.)
                                    </p>
                                    <p>
                                        2. Если покупатель запросил форму
                                        заявления на возврат, то THE CULTT
                                        высылает покупателю бланк заявления для
                                        заполнения.
                                    </p>
                                    <p>
                                        3. В течение 1 дня THE CULTT проводит
                                        проверку нарушения формальных сроков и
                                        оснований для возврата. Если нарушения
                                        есть, то THE CULTT проинформирует
                                        покупателя об отказе в принятии
                                        заявления.
                                    </p>
                                    <p>
                                        4. В течение 2-х дней с момента
                                        получения со стороны THE CULTT
                                        подтверждения о возможности возврата (в
                                        случае, если платформа не выявила
                                        нарушений), покупатель должен направить
                                        возвращаемый товар по адресу THE CULTT
                                        курьером или транспортной компанией.
                                    </p>
                                    <p>
                                        5. К возвращаемому товару необходимо
                                        приложить:
                                    </p>
                                    <ul>
                                        <li>
                                            оригинал заявления о возврате
                                            товара;
                                        </li>
                                        <li>
                                            копию главной страницы паспорта и
                                            страницы с адресом регистрации
                                            покупателя;
                                        </li>
                                        <li>
                                            оригинал упаковки товара, если товар
                                            передавался в оригинальной фирменной
                                            упаковке.
                                        </li>
                                    </ul>
                                    <p>
                                        6. Посылку с товаром необходимо
                                        отправить:
                                    </p>
                                    <ul>
                                        <li>без наложенного платежа;</li>
                                        <li>с описью вложения;</li>
                                        <li>
                                            не использовать в качестве упаковки
                                            картонный пакет/бумажный конверт и
                                            другую ненадежную упаковку.
                                        </li>
                                    </ul>
                                    <p>
                                        7. После отправки посылки номер
                                        отслеживания/квитанцию/иной документ об
                                        отправке необходимо сообщить THE CULTT
                                        по телефону или электронной почте.
                                        Ответственность за доставку
                                        возвращаемого товара лежит на
                                        покупателе.
                                    </p>
                                    <p>
                                        8. Денежные средства за товар
                                        возвращаются покупателю в течение 10
                                        дней после того, как THE CULTT получит и
                                        проверит возвращаемый товар и оригинал
                                        заявления о его возврате.
                                    </p>
                                    <p>
                                        <b>
                                            Адрес для возврата: Россия, город
                                            Москва, улица Трубная 25с3.
                                        </b>
                                    </p>
                                    <p>
                                        <b>
                                            Контактный номер:{" "}
                                            <a href="tel:+7 499 992 80 47">
                                                +7 499 992 80 47
                                            </a>
                                        </b>
                                    </p>

                                    <button style={{marginTop: "15px"}}>
                                        Заявление на возврат
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;