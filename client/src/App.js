import { useLayoutEffect } from 'react'

export const App = () => {
	useLayoutEffect(() => {
		fetch('products')
			.then((res) => res.json())
			.then(console.log)
	}, [])

	return (
		<div className="text-center">
			<div className="text-blue-600 text-7xl mt-10">Контент</div>
			<div className="circle-red">77</div>
		</div>
	)
}
