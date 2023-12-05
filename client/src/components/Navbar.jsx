import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Button } from './Button'

export const Navbar = () => {
	const navigate = useNavigate()
	const firstName = 'куличиха'

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
							to="/calc"
							className="text-xl text-blue-900 hover:text-blue-600"
							style={({ isActive }) => (isActive ? activeStyles : undefined)}
						>
							Расчет
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/gallery"
							className="text-xl text-blue-900 hover:text-blue-600"
							style={({ isActive }) => (isActive ? activeStyles : undefined)}
						>
							Галерея
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/us"
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
					className="fa fa-arrow-left pt-6 pr-2 pl-2 text-green-800 hover:cursor-pointer hover:opacity-70"
					onClick={() => navigate(-1)}
				></i>
				{firstName ? (
					<div className="flex flex-row">
						<div className="flex flex-col items-center px-2">
							<i
								className="fa fa-user-circle-o fa-2x text-blue-900 hover:cursor-pointer hover:text-blue-600"
								onClick={() => navigate('/profile')}
							></i>
							<h1 className=" text-blue-900 px-2 text-base">{firstName}</h1>
						</div>
						<Button onClick={() => alert(`${firstName} хочет выйти?`)}>
							Выйти
						</Button>
					</div>
				) : (
					<Button bgColor="bg-green-800">
						<Link to="/login">Войти</Link>
					</Button>
				)}
			</div>
		</div>
	)
}
