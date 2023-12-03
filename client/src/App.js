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
			<i className="fa fa-address-book"></i>
			<i className="fa fa-address-book fa-lg"></i>
			<i className="fa fa-address-book fa-2x"></i>
			<i className="fa fa-address-book fa-3x"></i>
			<i className="fa fa-address-book fa-4x"></i>
			<i className="fa fa-address-book fa-5x"></i>
			<i className="fa fa-refresh fa-spin fa-fw fa-5x text-blue-800"></i>
			<i className="fa fa-address-book fa-5x text-red-600"></i>
		</div>
	)
}
