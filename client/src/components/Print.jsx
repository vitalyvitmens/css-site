import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print' // Импортируем хук для печати компонента
import { Button } from './Button'

// Компонент для отображения данных в виде таблицы
const DataTable = ({ data }) => {
	const ColumnSum = ({ arrObj, myKey, decimal = 2 }) =>
		arrObj.reduce((acc, item) => (acc += item[myKey]), 0).toFixed(decimal)

	// const RowSum = ({ arrObj, myKey1, myKey2, decimal = 2 }) =>
	// 	arrObj.map((item) => item[myKey1] * item[myKey2]).toFixed(decimal)

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
								{item.amount * item.sellingPrice}
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
						<th className="px-0.5 text-end">
							<ColumnSum arrObj={data} myKey="amount" />
						</th>
						<th></th>
						<th className="px-0.5 text-end">
							<ColumnSum arrObj={data} myKey="numberUnits" decimal={0} />
						</th>
						<th></th>
						<th className="px-0.5 text-end">
							<ColumnSum arrObj={data} myKey="price" />
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
			name: 'Металлочерепица 0,50*1210*720 RAL 8019МАТ',
			color: '8019МАТ',
			unit: 'м2',
			amount: 164.22,
			length: '2000',
			numberUnits: 40,
			sellingPrice: 19.8,
			price: 3251.56,
		},
		{
			name: 'Планка конька круглого',
			color: '8019МАТ',
			unit: 'пог.м',
			amount: 80,
			length: '2000',
			numberUnits: 40,
			sellingPrice: 19.8,
			price: 221.76,
		},
		{
			name: 'Поддон деревянный',
			color: '',
			unit: 'шт',
			amount: 1,
			length: '',
			numberUnits: 1,
			sellingPrice: 30.0,
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
