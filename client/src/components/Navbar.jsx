import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export const Navbar = () => {
	const navigate = useNavigate()
	const firstName = 'vitalyvitmens'

	const activeStyles = {
		color: '#C80815',
	}

	return (
		<div className="flex justify-around items-center w-full">
			<div className="bg-cover bg-logo h-[90px] w-[130px]"></div>

			{firstName ? (
				<ul className="flex gap-8">
					<li>
						<NavLink
							to="/"
							className="text-xl text-blue-900 hover:text-blue-600"
							style={({ isActive }) => (isActive ? activeStyles : undefined)}
						>
							Главная
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/walkthroughs"
							className="text-xl text-blue-900 hover:text-blue-600"
							style={({ isActive }) => (isActive ? activeStyles : undefined)}
						>
							Расчет
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/quiz"
							className="text-xl text-blue-900 hover:text-blue-600"
							style={({ isActive }) => (isActive ? activeStyles : undefined)}
						>
							Галерея
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/edit"
							className="text-xl text-blue-900 hover:text-blue-600"
							style={({ isActive }) => (isActive ? activeStyles : undefined)}
						>
							О нас
						</NavLink>
					</li>
				</ul>
			) : (
				<ul className="flex gap-8">
					<li>
						<NavLink
							to="/"
							className="text-xl text-blue-900 hover:text-blue-600"
							style={({ isActive }) => (isActive ? activeStyles : undefined)}
						>
							Главная
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/register"
							className="text-xl text-blue-900 hover:text-blue-600"
							style={({ isActive }) => (isActive ? activeStyles : undefined)}
						>
							Регистрация
						</NavLink>
					</li>
				</ul>
			)}
			<div className="flex text-xl">
				<i
					className="fa fa-backward fa-2x pt-2 pr-2 pl-2 text-green-800 hover:cursor-pointer hover:opacity-70"
					onClick={() => navigate(-1)}
				></i>
				{firstName ? (
					<div className="flex items-center">
						<div className="flex flex-col items-center px-2">
							<i
								className="fa fa-user-circle-o fa-2x text-blue-900 hover:cursor-pointer hover:text-blue-600"
								onClick={() => navigate('/profile')}
							></i>
							<h1 className=" text-blue-900 mr-2 text-base">{firstName}</h1>
						</div>
						<button className="text-[#C80815]" onClick={false}>
							Выйти
						</button>
					</div>
				) : (
					<button bgColor="bg-green-800">
						<Link to="/login">Войти</Link>
					</button>
				)}
			</div>
		</div>
	)
}
