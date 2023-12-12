import { Link } from 'react-router-dom'

export const ErrorPage = ({ error }) => {
	return (
		<div className="flex m-auto w-full h-full pt-24">
			<div className="flex flex-col m-auto w-[800px] h-[600px] items-center bg-dribbble bg-fit bg-center rounded-lg">
				<p className="pt-[50px] text-2xl text-red-500 font-['Playfair_Display']">
					{error}
				</p>
				<Link
					className="pt-[430px] text-green-900 text-xl font-semibold underline hover:opacity-80 active:opacity-60"
					to="/"
				>
					НА ГЛАВНУЮ
				</Link>
			</div>
		</div>
	)
}
