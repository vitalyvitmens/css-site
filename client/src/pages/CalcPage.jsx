import { useState } from 'react'
import { Button, H2, Icon, Input, Select } from '../components'
import { COLORS } from '../constants'

export const CalcPage = () => {
	const [cornice1Length, setCornice1Length] = useState(10000)
	const [ramp1Length, setRamp1Length] = useState(5195)
	const [cornice2Length, setCornice2Length] = useState(10000)
	const [ramp2Length, setRamp2Length] = useState(5000)
	const [color, setColor] = useState('8017 глянец')

	const calcMetalTiles = () => {
		const numSheets = Math.ceil(cornice1Length / 1100)
		const sheetLength = Math.round(ramp1Length / 10) * 10
		const sheetArea = ((1190 * sheetLength * numSheets) / 1000000).toFixed(3)
		const costMetalTiles = (sheetArea * 20.16).toFixed(2)
		return (
			<>
				<div>
					Длина листов / количество: {sheetLength} мм = {numSheets} шт
				</div>
				<div>Количество металлочерепицы: {sheetArea} м2</div>
				<div>Стоимость металлочерепицы: {costMetalTiles} руб</div>
			</>
		)
	}

	return (
		<div className="mx-auto pt-28">
			<H2>Расчет металлочерепицы "Супермонтеррей":</H2>
			<div className="mx-auto">
				<form className="flex flex-col gap-2">
					<Select
						id="color"
						title="Выберите цвет кровли, RAL"
						className="px-1"
						constantsObject={COLORS}
						stateValue={color}
						stateFn={setColor}
					/>
					<div className="flex flex-row gap-2">
						<label htmlFor="cornice1">Длина карниза №1, мм</label>
						<Input
							id="cornice1"
							name="cornice1"
							className="px-2 rounded-md w-[220px]"
							placeholder="Длина карниза №1, мм"
							onChange={(e) => setCornice1Length(Number(e.target.value))}
						/>
					</div>
					<div
						className={`flex flex-col justify-center text-center relative border-4 border-double border-gray-200 text-gray-200`}
						style={{
							width:
								cornice1Length > 14000
									? cornice1Length / 40
									: cornice1Length / 20,
							height:
								cornice1Length > 14000 ? ramp1Length / 40 : ramp1Length / 20,
							backgroundColor: COLORS[color],
						}}
					>
						<div className="flex flex-col">
							<Icon
								id="flex items-center justify-center fa-long-arrow-up text-6xl"
								color="text-gray-200"
							>
								<Input
									id="ramp1"
									name="ramp1"
									className="px-2 rounded-md w-[140px] text-black text-sm mt-2"
									placeholder="Длина ската №1, мм"
									onChange={(e) => setRamp1Length(Number(e.target.value))}
								/>
							</Icon>
							Скат №1
						</div>
					</div>
					<div
						className={`flex flex-col justify-center text-center relative border-4 border-double border-gray-200 text-gray-200 -mt-2`}
						style={{
							width:
								cornice2Length > 14000
									? cornice2Length / 40
									: cornice2Length / 20,
							height:
								cornice2Length > 14000 ? ramp2Length / 40 : ramp2Length / 20,
							backgroundColor: COLORS[color],
						}}
					>
						<div className="flex flex-col">
							Скат №2
							<Icon
								id="flex items-center justify-center fa-long-arrow-down text-6xl"
								color="text-gray-200"
							>
								<Input
									id="ramp2"
									name="ramp2"
									className="px-2 rounded-md w-[140px] text-black text-sm mb-2"
									placeholder="Длина ската №2, мм"
									onChange={(e) => setRamp2Length(Number(e.target.value))}
								/>
							</Icon>
						</div>
					</div>
					<div className="flex flex-row gap-2">
						<label htmlFor="cornice2">Длина карниза №2, мм</label>
						<Input
							id="cornice2"
							name="cornice2"
							className="px-2 rounded-md w-[220px]"
							placeholder="Длина карниза №2, мм"
							onChange={(e) => setCornice2Length(Number(e.target.value))}
						/>
					</div>
				</form>
			</div>
			<div>{calcMetalTiles()}</div>
			<div className="mx-auto w-[200px] text-center">
				<Button bgColor="bg-green-800" onClick={calcMetalTiles}>
					Расчитать
				</Button>
			</div>
		</div>
	)
}
