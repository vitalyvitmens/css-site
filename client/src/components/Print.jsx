import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print' // Импортируем хук для печати компонента

// Компонент для отображения данных в виде таблицы
const DataTable = ({ data }) => {
	return (
		<div className="overflow-x-auto">
			<table className="table w-full">
				<thead>
					<tr>
						<th>
							№<br />
							п/п
						</th>
						<th>Наименование товара</th>
						<th>Цвет</th>
						<th>
							Ед.
							<br />
							изм.
						</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => (
						<tr key={index}>
							<th>{index + 1}</th>
							<td>{item.name}</td>
							<td>{item.color}</td>
							<td>{item.unit}</td>
						</tr>
					))}
				</tbody>
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
			unit: 'м.кв.',
		},
		{
			name: 'Планка конька круглого',
			color: '8019МАТ',
			unit: 'пог.м',
		},
		{
			name: 'Поддон деревянный',
			color: '',
			unit: 'шт.',
		},
	]

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-3xl font-bold">
				React JS компонент для вывода данных в виде таблицы и сохранения в PDF
			</h1>
			<p className="text-xl">
				Нажмите на кнопку "Сохранить в PDF", чтобы скачать таблицу в формате
				PDF:
			</p>
			<button
				className="bg-blue-500 text-white p-2 rounded"
				onClick={handlePrint}
			>
				Сохранить в PDF
			</button>
			<div ref={tableRef}>
				<DataTable data={data} />
			</div>
		</div>
	)
}
