import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print' // Импортируем хук для печати компонента
import { Button } from './Button'

// Компонент для отображения данных в виде таблицы
const DataTable = ({ data }) => {
	const ColumnSum = ({ arrObj, myKey, decimal = 2 }) =>
		arrObj
			.reduce((acc, item) => (acc += Number(item[myKey])), 0)
			.toFixed(decimal)

	// const RowSum = ({ arrObj, myKey1, myKey2, decimal = 2 }) =>
	// 	arrObj.map((item) => item[myKey1] * item[myKey2]).toFixed(decimal)
	const arrUnit = []
	const arrPrice = []

	const multiplyTwoNumRow = (num1, num2, decimal = 2) => {
		const sum = (Number(num1) * Number(num2)).toFixed(decimal)
		arrPrice.push(sum)
		return sum
	}

	// unitsQuantity
	// price

	const unitsQuantityCalc = (
		quantity,
		length = 1000,
		width = 1000,
		decimal = 2
	) => {
		const sum = (
			Number(quantity) *
			(Number(length) / 1000) *
			(Number(width) / 1000)
		).toFixed(decimal)
		arrUnit.push(sum)
		return sum
	}

	return (
		<div className="overflow-x-auto">
			<table className="table w-full  bg-white">
				<thead>
					<tr>
						<th className="border-2 border-black bg-[rgb(195,247,221)]">
							№<br />
							п/п
						</th>
						<th className="border-2 border-black bg-[rgb(195,247,221)]">
							Наименование товара
						</th>
						<th className="border-2 border-black bg-[rgb(195,247,221)]">
							Цвет
						</th>
						<th className="border-2 border-black bg-[rgb(195,247,221)]">
							Ед.
							<br />
							изм.
						</th>
						<th className="border-2 border-black bg-[rgb(195,247,221)]">
							Кол-во
						</th>
						<th className="border-2 border-black bg-[rgb(195,247,221)]">
							Длина,
							<br />
							мм
						</th>
						<th className="border-2 border-black bg-[rgb(195,247,221)]">
							Кол-во
							<br />
							единиц
						</th>
						<th className="border-2 border-black bg-[rgb(195,247,221)]">
							Отпускная
							<br />
							цена, руб.
							<br />
							коп.
						</th>
						<th className="border-2 border-black bg-[rgb(195,247,221)]">
							Стоимость,
							<br />
							руб. коп.
						</th>
					</tr>
				</thead>
				<tbody>
					{data.map(
						(
							{ name, color, unit, length, width, quantity, sellingPrice },
							index
						) => (
							<tr key={index} className="border border-black">
								<th className="px-0.5 text-end border border-black">
									{index + 1}
								</th>
								<td className="px-0.5 text-start border border-black">
									{name}
									{color}
								</td>
								<td className="px-0.5 text-start border border-black">
									{color}
								</td>
								<td className="px-0.5 text-end border border-black">{unit}</td>
								<td className="px-0.5 text-end border border-black">
									{unitsQuantityCalc(quantity, length, width, 3)}
								</td>
								<td className="px-0.5 text-end border border-black">
									{length}
								</td>
								<td className="px-0.5 text-end border border-black">
									{quantity}
								</td>
								<td className="px-0.5 text-end border border-black">
									{sellingPrice}
								</td>
								<td className="px-0.5 text-end border border-black">
									{multiplyTwoNumRow(
										unitsQuantityCalc(quantity, length, width, 3),
										sellingPrice
									)}
								</td>
							</tr>
						)
					)}
				</tbody>
				<tfoot className="border-t-2 border-black">
					<tr>
						<th></th>
						<th>ИТОГО:</th>
						<th></th>
						<th></th>
						<th className="px-0.5 text-end">
							{arrUnit.reduce((acc, num) => (acc += Number(num)), 0).toFixed(3)}
						</th>
						<th></th>
						<th className="px-0.5 text-end">
							{arrPrice
								.reduce((acc, num) => (acc += Number(num)), 0)
								.toFixed(0)}
						</th>
						<th></th>
						<th className="px-0.5 text-end">
							{arrPrice
								.reduce((acc, num) => (acc += Number(num)), 0)
								.toFixed(2)}
						</th>
					</tr>
				</tfoot>
			</table>
		</div>
	)
}

// Главный компонент
export const Print = () => {
	// Ссылка на компонент таблицы
	const tableRef = useRef()

	// Функция для печати компонента в формате PDF
	const handlePrint = useReactToPrint({
		content: () => tableRef.current,
	})

	// Массив с данными для таблицы
	const data = [
		{
			name: 'Монтеррей 0,45*1190*Lмм RAL',
			color: '8017',
			unit: 'м2',
			length: '5200',
			width: '1190',
			sellingPrice: '20.16',
			quantity: '10',
		},
		{
			name: 'Планка конька круглого RAL',
			color: '8019МАТ',
			unit: 'пог.м',
			length: '1250',
			sellingPrice: '19.80',
			quantity: '40',
		},
		{
			name: 'Поддон деревянный',
			color: '',
			unit: 'шт',
			sellingPrice: '30.00',
			quantity: '1',
		},
	]

	return (
		<div className="container mx-auto p-4">
			<div className="py-4 px-6 bg-white" ref={tableRef}>
				<DataTable data={data} />
			</div>
			<div className="flex justify-between items-center">
				<p>
					Нажмите на кнопку "Сохранить в PDF", чтобы скачать Счет-фактуру в
					формате PDF:
				</p>
				<Button
					bgColor="bg-blue-500"
					color="text-white"
					margin="my-2 mx-0"
					onClick={handlePrint}
				>
					Сохранить в PDF
				</Button>
			</div>
		</div>
	)
}
