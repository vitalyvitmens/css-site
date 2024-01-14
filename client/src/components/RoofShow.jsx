import React, { useState, useRef } from 'react'
import { useReactToPrint } from 'react-to-print' // Импортируем хук для печати компонента в PDF
import { Canvas } from '@react-three/fiber' // Импортируем компонент для работы с 3D-графикой
// import { Roof } from './Roof' // Импортируем компонент для отображения кровли
import { extend } from '@react-three/fiber' // импортируем функцию extend

extend({ Roof }) // расширяем пространство имен THREE с помощью Li
// Компонент Roof отображает информацию о крыше
function Roof(props) {
	// Получаем данные о крыше из свойства data
	const { area, material, color, slope } = props.data

	// Возвращаем JSX-элемент, который содержит данные о крыше
	return extend(
		<div className="roof">
			{extend(<h3>Крыша</h3>)}
			{extend(
				<ul>
					{extend(<li>Площадь: {area} кв.м.</li>)}
					{extend(<li>Материал: {material}</li>)}
					{extend(<li>Цвет: {color}</li>)}
					{extend(<li>Уклон: {slope} град.</li>)}
				</ul>
			)}
		</div>
	)
}

export default Roof
// Компонент для ввода данных от клиента
function InputForm({ onSubmit }) {
	// Состояние для хранения длины ската №1
	const [ram1Length, setRam1Length] = useState('')

	// Состояние для хранения длины карниза №1
	const [cornice1Length, setCornice1Length] = useState('')

	// Состояние для хранения длины ската №2
	const [ram2Length, setRam2Length] = useState('')

	// Состояние для хранения длины карниза №2
	const [cornice2Length, setCornice2Length] = useState('')

	// Состояние для хранения цвета кровли в RAL
	const [roofColor, setRoofColor] = useState('')

	// Функция для обработки изменения значения в поле ввода
	const handleChange = (e) => {
		// Получаем имя и значение поля ввода
		const { name, value } = e.target

		// Обновляем соответствующее состояние в зависимости от имени поля ввода
		switch (name) {
			case 'ram1Length':
				setRam1Length(value)
				break
			case 'cornice1Length':
				setCornice1Length(value)
				break
			case 'ram2Length':
				setRam2Length(value)
				break
			case 'cornice2Length':
				setCornice2Length(value)
				break
			case 'roofColor':
				setRoofColor(value)
				break
			default:
				break
		}
	}

	// Функция для обработки отправки формы
	const handleSubmit = (e) => {
		// Предотвращаем стандартное поведение формы
		e.preventDefault()

		// Передаем данные от клиента в родительский компонент
		onSubmit({
			ram1Length,
			cornice1Length,
			ram2Length,
			cornice2Length,
			roofColor,
		})
	}

	return (
		<form className="flex flex-col" onSubmit={handleSubmit}>
			<label className="text-lg font-bold">Длина ската №1 (мм):</label>
			<input
				className="border border-gray-300 p-2 rounded"
				type="text"
				name="ram1Length"
				value={ram1Length}
				onChange={handleChange}
			/>
			<label className="text-lg font-bold">Длина карниза №1 (мм):</label>
			<input
				className="border border-gray-300 p-2 rounded"
				type="text"
				name="cornice1Length"
				value={cornice1Length}
				onChange={handleChange}
			/>
			<label className="text-lg font-bold">Длина ската №2 (мм):</label>
			<input
				className="border border-gray-300 p-2 rounded"
				type="text"
				name="ram2Length"
				value={ram2Length}
				onChange={handleChange}
			/>
			<label className="text-lg font-bold">Длина карниза №2 (мм):</label>
			<input
				className="border border-gray-300 p-2 rounded"
				type="text"
				name="cornice2Length"
				value={cornice2Length}
				onChange={handleChange}
			/>
			<label className="text-lg font-bold">Цвет кровли в RAL:</label>
			<input
				className="border border-gray-300 p-2 rounded"
				type="text"
				name="roofColor"
				value={roofColor}
				onChange={handleChange}
			/>
			<button className="bg-blue-500 text-white p-2 rounded mt-4" type="submit">
				Рассчитать
			</button>
		</form>
	)
}

// Компонент для отображения таблицы с данными о металлочерепице
function DataTable({ data }) {
	// Деструктурируем данные из пропса
	const {
		ram1Length,
		cornice1Length,
		ram2Length,
		cornice2Length,
		roofColor,
		numSheets,
		sheetLength,
		sheetArea,
		sheetPrice,
		totalPrice,
	} = data

	return (
		<div className="overflow-x-auto">
			<table className="table w-full">
				<thead>
					<tr>
						<th>Название продукции</th>
						<th>Цвет</th>
						<th>Единицы измерения</th>
						<th>Длина листов (мм)</th>
						<th>Количество листов</th>
						<th>Отпускная цена (руб/м2)</th>
						<th>Стоимость (руб)</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Металлочерепица</td>
						<td>{roofColor}</td>
						<td>м2</td>
						<td>{sheetLength}</td>
						<td>{numSheets}</td>
						<td>20.16</td>
						<td>{sheetPrice}</td>
					</tr>
					<tr>
						<td colSpan="6" className="text-right font-bold">
							Общая стоимость:
						</td>
						<td className="font-bold">{totalPrice}</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

// Главный компонент
export const RoofShow = () => {
	// Состояние для хранения данных от клиента
	const [data, setData] = useState(null)

	// Ссылка на компонент таблицы
	const tableRef = useRef()

	// Функция для печати компонента в формате PDF
	const handlePrint = useReactToPrint({
		content: () => tableRef.current,
	})

	// Функция для расчета количества металлочерепицы
	const calculate = (data) => {
		// Деструктурируем данные от клиента
		const {
			ram1Length,
			cornice1Length,
			ram2Length,
			cornice2Length,
			roofColor,
		} = data

		// Приводим строки к числам
		const ram1 = Number(ram1Length)
		const cornice1 = Number(cornice1Length)
		const ram2 = Number(ram2Length)
		const cornice2 = Number(cornice2Length)

		// Рассчитываем количество листов
		const numSheets = Math.ceil((cornice1 + cornice2) / 1100)

		// Рассчитываем длину листов
		const sheetLength = Math.round((ram1 + ram2) / 10) * 10

		// Рассчитываем площадь металлочерепицы
		const sheetArea = ((1190 * sheetLength * numSheets) / 1000000).toFixed(3)

		// Рассчитываем стоимость металлочерепицы
		const sheetPrice = (sheetArea * 20.16).toFixed(2)

		// Рассчитываем общую стоимость
		const totalPrice = sheetPrice

		// Возвращаем объект с результатами расчета
		return {
			ram1Length,
			cornice1Length,
			ram2Length,
			cornice2Length,
			roofColor,
			numSheets,
			sheetLength,
			sheetArea,
			sheetPrice,
			totalPrice,
		}
	}

	// Функция для обработки данных от клиента
	const handleSubmit = (data) => {
		// Рассчитываем количество металлочерепицы
		const result = calculate(data)

		// Обновляем состояние с результатами расчета
		setData(result)
	}

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-3xl font-bold">
				React JS компонент для расчета количества металлочерепицы, построения
				таблицы и отображения кровли в 3д
			</h1>
			{data ? (
				<div>
					<DataTable data={data} ref={tableRef} />
					<button
						className="bg-blue-500 text-white p-2 rounded mt-4"
						onClick={handlePrint}
					>
						Сохранить таблицу в PDF
					</button>
					<Canvas className="w-full h-64 mt-4">
						<Roof data={data} />
					</Canvas>
				</div>
			) : (
				<InputForm onSubmit={handleSubmit} />
			)}
		</div>
	)
}
