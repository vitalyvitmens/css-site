import { useState } from 'react'

export const RelaxPage = () => {
	const [isVisible, setIsVisible] = useState(true)

	setTimeout(() => {
		setIsVisible(false)
	}, 5000)

	return isVisible ? (
		<div
			className={
				'm-auto pt-20 text-center text-5xl text-blue-900 font-semibold'
			}
		>
			Перед лицом Космоса большинство людских дел выглядят незначительными, даже
			пустячными
		</div>
	) : (
		<div className="m-auto pt-20 bg-space bg-cover min-h-screen w-[100%]"></div>
	)
}
