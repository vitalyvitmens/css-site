import { useLayoutEffect, useState } from 'react'
import { Loader } from '../components'

export const Main = () => {
	const [products, setProducts] = useState()

	useLayoutEffect(() => {
		fetch('products')
			.then((res) => res.json())
			.then((res) => setProducts(res.data.products))
	}, [])

	return !products ? (
		<div className="flex flex-col m-auto pt-4 w-[80%] min-h-screen bg-[antiquewhite] shadow-[0_0_15px_black]">
			<Loader />
		</div>
	) : (
		<div className="flex flex-col m-auto mt-20 pt-8 w-[80%] min-h-screen bg-[antiquewhite] shadow-[0_0_15px_black]">
			<div className="flex justify-center mb-4 text-blue-900 font-semibold text-2xl">
				Продукция ООО "ЦЕНТРОСТАЛЬСТРОЙ"
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
		</div>
	)
}
