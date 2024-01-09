import { useLayoutEffect, useState } from 'react'
import { H2, Loader } from '../components'

export const MainPage = () => {
	const [products, setProducts] = useState()

	useLayoutEffect(() => {
		fetch('products')
			.then((res) => res.json())
			.then((res) => setProducts(res.data.products))
	}, [])

	return !products ? (
		<Loader />
	) : (
		<>
			<div className="flex justify-center pt-28 text-blue-900 font-semibold text-2xl">
				<H2>Продукция ООО "ЦЕНТРОСТАЛЬСТРОЙ"</H2>
			</div>
			{products.map(({ id, title, image, description, price }) => (
				<ul key={id}>
					<li className="flex flex-col mb-10 m-auto text-center">
						<div className="text-blue-800 font-semibold text-xl py-4">
							{title}
						</div>
						<img
							className="rounded-[10px] shadow-[-5px_7px_10px_#000] w-[400px] m-auto mb-2"
							src={image}
							alt={image}
						/>
						<div className="text-green-800 text-lg">{description}</div>
						<div className="text-red-500 font-bold text-center">
							{price} руб
						</div>
					</li>
				</ul>
			))}
		</>
	)
}
