import { useState } from 'react'
import { Button, H2, Icon, Input } from '../components'

export const CalcPage = () => {
	const [cornice1Length, setCornice1Length] = useState(400)
	const [ramp1Length, setRamp1Length] = useState(200)
	const [cornice2Length, setCornice2Length] = useState(400)
	const [ramp2Length, setRamp2Length] = useState(200)
	const [color, setColor] = useState('amber')

	return (
		<div className="mx-auto pt-28">
			<H2>Расчет металлочерепицы "Супермонтеррей":</H2>
			<div className="mx-auto">
				<form className="flex flex-col gap-2">
					<div className="flex flex-row gap-2 text-[#C80815]">
						<label htmlFor="color">Выберите цвет кровли, RAL</label>
						<Input
							id="color"
							name="color"
							className="px-2 rounded-md w-[220px]"
							placeholder="Выберите цвет кровли, RAL"
							// type=""
							onChange={(e) => setColor(String(e.target.value))}
						/>
					</div>
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
						className={`flex flex-col justify-center text-center relative border-4 border-double border-gray-200 bg-${color}-950 text-gray-200`}
						style={{ width: cornice1Length, height: ramp1Length }}
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
						className={`flex flex-col justify-center text-center relative border-4 border-double border-gray-200 bg-${color}-950 text-gray-200 -mt-2`}
						style={{ width: cornice2Length, height: ramp2Length }}
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
			<div className="mx-auto w-[200px] text-center">
				<Button
					bgColor="bg-green-800"
					onClick={() =>
						alert('Ещё в процессе разработки, наберитесь терпения!')
					}
				>
					Расчитать
				</Button>
			</div>
		</div>
	)
}
