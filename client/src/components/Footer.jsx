import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Footer = () => {
	const [city, setCity] = useState('')
	const [temperature, setTemperature] = useState('')
	const [weather, setWeather] = useState('')
	const navigate = useNavigate()

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
				<div className="hover:opacity-80">
					<Link to={'https://github.com/vitalyvitmens'}>
						©{' '}
						{new Date().toLocaleString('ru', {
							year: 'numeric',
						})}{' '}
						vitalyvitmens. All rights reserved.
					</Link>
				</div>
			</div>
			<div
				className="bg-cover bg-relax h-[63px] w-[125px] rounded-lg shadow-[-2px_5px_5px_black] hover:cursor-pointer hover:opacity-80 active:shadow-none"
				onClick={() => navigate('/relax')}
			>
				{' '}
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
