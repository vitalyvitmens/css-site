import { Button } from '../components'

export const CalcPage = () => {
	return (
		<div className="m-auto pt-28">
			<div className="mx-auto">
				<form className="flex flex-col gap-2">
					<div className="flex flex-row gap-2 mx-auto">
						<label htmlFor="ramp">Длина ската, мм</label>
						<input
							id="ramp"
							name="ramp"
							className="px-2 rounded-md"
							type="number"
							placeholder="Длина ската, мм"
						/>
					</div>
					<div className="flex flex-row gap-2 mx-auto">
						<label htmlFor="cornice1">Длина карниза, мм</label>
						<input
							id="cornice1"
							name="cornice1"
							className="px-2 rounded-md w-[200px]"
							type="number"
							placeholder="Длина карниза, мм"
						/>
					</div>
					<div className="border-2 border-black w-[400px] h-[200px]">
						<div className="text-center pt-20 text-green-900 text-3xl">
							Скат №1
						</div>
					</div>
					<div className="border-2 -mt-2 border-black w-[400px] h-[200px] text-center text-green-900 text-3xl">
						<div className="text-center pt-20 text-green-900 text-3xl">
							Скат №2
						</div>
					</div>
					<div className="flex flex-row gap-2 mx-auto">
						<label htmlFor="cornice2">Длина карниза, мм</label>
						<input
							id="cornice2"
							name="cornice2"
							className="px-2 rounded-md w-[200px]"
							type="number"
							placeholder="Длина карниза, мм"
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
