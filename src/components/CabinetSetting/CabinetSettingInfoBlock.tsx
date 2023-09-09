import React from "react";

import { Input, RadioSelect } from "../";

const CabinetSettingInfoBlock: React.FC = () => {
	return (
		<div className="cabinet-setting-block">
			<div className="cabinet-setting-block-title">
				<h3 className="cabinet-setting-block-title__title">
					Основные данные
				</h3>

				<button className="cabinet-setting-block-title__edit">
					Изменить
				</button>
			</div>
			<div className="cabinet-setting-block-form">
				<div className="cabinet-setting-block-form-input-wrapper">
					<div
						className="cabinet-setting-block-form-input"
						style={{ width: "49%" }}
					>
						<Input type="text" name="" label="Имя" bgWhite />
					</div>

					<div
						className="cabinet-setting-block-form-input"
						style={{ width: "49%" }}
					>
						<Input type="text" name="" label="Отчество" bgWhite />
					</div>

					<div
						className="cabinet-setting-block-form-input"
						style={{ width: "49%" }}
					>
						<Input type="text" name="" label="Фамилия" bgWhite />
					</div>
					<div
						className="cabinet-setting-block-form-input"
						style={{ width: "49%" }}
					>
						<Input
							type="text"
							name=""
							label="Дата рождения"
							bgWhite
						/>
					</div>
				</div>

				{/* <div className="cabinet-setting-block-form-radio-wrapper">
					<div className="cabinet-setting-block-form-radio">
						<RadioSelect label="Женский" name="sex" />
					</div>
					<div className="cabinet-setting-block-form-radio">
						<RadioSelect label="Мужской" name="sex" />
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default CabinetSettingInfoBlock;
