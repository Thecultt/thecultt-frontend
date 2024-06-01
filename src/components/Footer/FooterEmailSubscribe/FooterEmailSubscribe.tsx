import React from 'react';

import { FooterEmailSubscribeForm } from 'src/components';

const FooterEmailSubscribe: React.FC = () => {
	const onSubmit = (data: any) => {

	};

	return (
		<div className="footer-email">
			<div className="container">
				<div className="footer-email-wrapper">
					<div className="footer-email-text">
						<h4 className="footer-email-text__title">Дарим бонус 2000₽ за подписку на email рассылки</h4>
						<p className="footer-email-text__subtitle">
							Подпишитесь на рассылку THE CULTT и получайте полезные письма и предложения для покупателей
							и продавцов.
						</p>
					</div>

					<FooterEmailSubscribeForm onSubmit={onSubmit} />
				</div>
			</div>
		</div>
	);
};

export default FooterEmailSubscribe;
