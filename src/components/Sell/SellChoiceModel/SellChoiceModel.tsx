import React from 'react'

const SellChoiceModel: React.FC = () => {
	return (
		<div className='sell-block sell-block-choice-model'>
			<div className="sell-block-choice-model-text">
				<h3 className='sell-block-choice-model-text__title'>
					Мы нашли подходящие модели
				</h3>

				<p className='sell-block-choice-model-text__description'>
					Выберите вариант, который соответствует бренду и модели вашей сумки без привязки к цвету и материалу.
					<br />
					Если совпадений нет, нажмите кнопку "Нет моего варианта".
				</p>
			</div>

			<div className="sell-block-choice-model-models">
				<div className="sell-block-choice-model-models-block">
					<div className="sell-block-choice-model-models-block-image" style={{ backgroundImage: `url('https://storage.yandexcloud.net/prod-thecultt/5853/7a8431c8ae939fec77524617471d6a98df2f17f0.jpg')` }}></div>

					<p className="sell-block-choice-model-models-block__brand">
						Saint Laurent
					</p>
					<h4 className="sell-block-choice-model-models-block__name">
						PRADA LEATHER BAG
					</h4>
				</div>

				<div className="sell-block-choice-model-models-block">
					<div className="sell-block-choice-model-models-block-image" style={{ backgroundImage: `url('https://storage.yandexcloud.net/prod-thecultt/5853/7a8431c8ae939fec77524617471d6a98df2f17f0.jpg')` }}></div>

					<p className="sell-block-choice-model-models-block__brand">
						Saint Laurent
					</p>
					<h4 className="sell-block-choice-model-models-block__name">
						PRADA LEATHER BAG
					</h4>
				</div>

				<div className="sell-block-choice-model-models-block">
					<div className="sell-block-choice-model-models-block-image" style={{ backgroundImage: `url('https://storage.yandexcloud.net/prod-thecultt/5853/7a8431c8ae939fec77524617471d6a98df2f17f0.jpg')` }}></div>

					<p className="sell-block-choice-model-models-block__brand">
						Saint Laurent
					</p>
					<h4 className="sell-block-choice-model-models-block__name">
						PRADA LEATHER BAG
					</h4>
				</div>
			</div>

			<div className="sell-block-choice-model-btns">
				<button className="btn sell-block-choice-model-btns__btn">
					Выбрать
				</button>

				<button className="btn-regular sell-block-choice-model-btns__btn">
					Нет моего варианта
				</button>
			</div>
		</div>
	)
}

export default SellChoiceModel