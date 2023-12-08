import { Link } from 'react-router-dom'

export const ErrorPage = ({ error }) => {
	return (
		<div className="flex m-auto w-full pt-28 min-h-screen">
			<div className="flex flex-col my-auto items-center bg-dribbble w-full bg-cover bg-center">
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
