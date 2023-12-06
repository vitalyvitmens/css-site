import { useState } from 'react'

export const Relax = () => {
	const [isVisible, setIsVisible] = useState(true)

	setTimeout(() => {
		setIsVisible(false)
	}, 5000)

	return isVisible ? (
		<div
			className={`flex flex-col items-center justify-center text-center m-auto pt-4 px-40 w-[80%] min-h-screen text-5xl text-blue-900 font-semibold bg-[antiquewhite] shadow-[0_0_15px_black]`}
		>
			Перед лицом Космоса большинство людских дел выглядят незначительными, даже
			пустячными
		</div>
	) : null
}
