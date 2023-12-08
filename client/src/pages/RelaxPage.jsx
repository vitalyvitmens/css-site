import { useState } from 'react'

export const RelaxPage = () => {
	const [isVisible, setIsVisible] = useState(true)

	setTimeout(() => {
		setIsVisible(false)
	}, 5000)

	return isVisible ? (
		<div
			className={
				'flex flex-col justify-center text-center min-h-screen text-5xl text-blue-900 font-semibold'
			}
		>
			Перед лицом Космоса большинство людских дел выглядят незначительными, даже
			пустячными
		</div>
	) : null
}
