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
		<Loader />
	) : (
		<>
			<div className='flex w-full text-center mt-40 pl-60 text-blue-900 font-semibold text-2xl'>Продукция ООО "ЦЕНТРОСТАЛЬСТРОЙ"</div>
			{products.map(({ id, title, image, description, price }) => (
				<ul key={id}>
					<li className="flex flex-col mb-10 m-auto text-center">
						<div className="text-blue-800 font-semibold text-2xl py-2">
							{title}
						</div>
						<img
							className="rounded-[10px] shadow-[-5px_7px_10px_#000] w-[400px] m-auto"
							src={image}
							alt={image}
						/>
						<div className="text-green-800 text-xl">{description}</div>
						<div className="text-red-500 font-bold text-center">
							{price} руб
						</div>
					</li>
				</ul>
			))}
		</>
	)
}
