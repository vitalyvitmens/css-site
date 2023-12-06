import { useEffect, useState } from 'react'

export const Footer = () => {
	const [city, setCity] = useState('')
	const [temperature, setTemperature] = useState('')
	const [weather, setWeather] = useState('')

	useEffect(() => {
		fetch(
			'https://api.openweathermap.org/data/2.5/weather?q=Minsk&units=metric&lang=ru&appid=4707c215225f3783a2e45a56dd73e1b2'
		)
			.then((res) => res.json())
			.then(({ name, main, weather }) => {
				setCity(name)
				setTemperature(Math.round(main.temp))
				setWeather(weather[0].description)
			})
	}, [])

	return (
		<div className="flex flex-row items-center justify-between bottom-0 ml-[10%] w-[80%] -mt-2 h-24 py-5 px-10 text-sm tracking-[.015em] text-[#211f20] font-bold font-['Georgia_serif'] bg-[bisque] rounded-t-lg shadow-[0_-7px_10px_#333] z-10">
			<div>
				<div>ООО "ЦЕНТРОСТАЛЬСТРОЙ"</div>
				<div>
					©{' '}
					{new Date().toLocaleString('ru', {
						year: 'numeric',
					})}{' '}
					vitalyvitmens. All rights reserved.
				</div>
			</div>
			<div>
				<div>
					{city}{' '}
					{new Date().toLocaleString('ru', {
						day: 'numeric',
						month: 'long',
						year: 'numeric',
					})}
				</div>
				<div>
					{temperature}
					{'°C,'} {weather}
				</div>
			</div>
		</div>
	)
}
