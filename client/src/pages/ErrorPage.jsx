import { Link } from 'react-router-dom'

export const ErrorPage = ({ error }) => {
	return (
		<div className="flex flex-col m-auto w-[80%] min-h-screen bg-[antiquewhite] shadow-[0_0_15px_black]">
			<div className="flex flex-col mt-40 items-center bg-dribbble h-full w-full bg-cover bg-center">
				<h2 className="my-5 text-2xl text-red-500 font-['Playfair_Display']">
					{error}
				</h2>
				<Link
					className="pt-96 mb-8 text-green-900 text-xl font-semibold underline hover:opacity-80"
					to="/"
				>
					НА ГЛАВНУЮ
				</Link>
			</div>
		</div>
	)
}
