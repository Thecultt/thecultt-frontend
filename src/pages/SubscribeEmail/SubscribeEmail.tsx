import React from 'react'

import SubscribeEmailImage from "../../assets/images/subscribe-email/subscribe-email-image.jpg"

import { SubscribeEmailForm } from '../../components/'

const SubscribeEmail: React.FC = () => {
	return (
		<section className='subscribe-email'>
			<div className="container">
				<div className="subscribe-email-wrapper">
					<div className="subscribe-email-image" style={{ backgroundImage: `url("${SubscribeEmailImage}")` }}></div>

					<div className="subscribe-email-text">
						<h2 className="subscribe-email-text__title">
							Дарим <span>полезный гайд</span> по уходу за сумками!
						</h2>

						<p className="subscribe-email-text__description">
							<span>Если вы хотите продать</span> свой аксессуар, ищите в гайде рекомендации по тому, как увеличить стоимость и скорость продажи.  
						</p>

						<p className="subscribe-email-text__description">
							<span>Планируете купить</span> — расскажем, как правильно ухаживать за новой покупкой. Оставьте свой e-mail, чтобы мы прислали вам бесплатные гайды от экспертов THE CULTT.
						</p>
								
						<SubscribeEmailForm />
					</div>
				</div>
			</div>
		</section>
	)
}

export default SubscribeEmail