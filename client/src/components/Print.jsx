import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print' // Импортируем хук для печати компонента

// Компонент для отображения данных в виде таблицы
const DataTable = ({ data }) => {
	const sumPrice = (arrObj) =>
		arrObj.reduce((acc, item) => (acc += item.price), 0).toFixed(2)

	const sumNumberUnits = (arrObj) =>
		arrObj.reduce((acc, item) => (acc += item.numberUnits), 0).toFixed()

	const sumAmount = (arrObj) =>
		arrObj.reduce((acc, item) => (acc += item.amount), 0).toFixed(2)

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
					{data.map((item, index) => (
						<tr key={index} className="border border-black">
							<th className="px-0.5 text-end border border-black">
								{index + 1}
							</th>
							<td className="px-0.5 text-start border border-black">
								{item.name}
							</td>
							<td className="px-0.5 text-start border border-black">
								{item.color}
							</td>
							<td className="px-0.5 text-end border border-black">
								{item.unit}
							</td>
							<td className="px-0.5 text-end border border-black">
								{item.amount}
							</td>
							<td className="px-0.5 text-end border border-black">
								{item.length}
							</td>
							<td className="px-0.5 text-end border border-black">
								{item.numberUnits}
							</td>
							<td className="px-0.5 text-end border border-black">
								{item.sellingPrice}
							</td>
							<td className="px-0.5 text-end border border-black">
								{item.price}
							</td>
						</tr>
					))}
				</tbody>
				<tfoot className="border-t-2 border-black">
					<tr>
						<th></th>
						<th>ИТОГО:</th>
						<th></th>
						<th></th>
						<th className="px-0.5 text-end">{sumAmount(data, data.amount)}</th>
						<th></th>
						<th className="px-0.5 text-end">
							{sumNumberUnits(data, data.sumNumberUnits)}
						</th>
						<th></th>
						<th className="px-0.5 text-end">{sumPrice(data, data.price)}</th>
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
			name: 'Металлочерепица 0,50*1210*720 RAL 8019МАТ',
			color: '8019МАТ',
			unit: 'м2',
			amount: 164.22,
			length: '2000',
			numberUnits: 40,
			sellingPrice: '19.80',
			price: 3251.56,
		},
		{
			name: 'Планка конька круглого',
			color: '8019МАТ',
			unit: 'пог.м',
			amount: 80,
			length: '2000',
			numberUnits: 40,
			sellingPrice: '19.80',
			price: 221.76,
		},
		{
			name: 'Поддон деревянный',
			color: '',
			unit: 'шт',
			amount: 1,
			length: '',
			numberUnits: 1,
			sellingPrice: '30.00',
			price: 30.0,
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
				<button
					className="bg-blue-500 text-white my-2 p-2 rounded"
					onClick={handlePrint}
				>
					Сохранить в PDF
				</button>
			</div>
		</div>
	)
}
