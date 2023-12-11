import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Button } from './Button'
import { Icon } from './Icon'

export const Navbar = () => {
	const navigate = useNavigate()
	const firstName = 'Куличиха'

	const activeStyles = {
		color: '#C80815',
	}

	return (
		<div className="flex justify-between items-center px-5 w-full">
			<Link
				className="bg-cover bg-logo h-[90px] w-[130px] hover:cursor-pointer hover:opacity-80"
				to="/"
			/>

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
				<Icon
					id="fa-arrow-left pt-7 px-2"
					color="text-green-800"
					onClick={() => navigate(-1)}
				/>
				{firstName ? (
					<div className="flex flex-row">
						<div className="flex flex-col items-center px-2">
							<Icon
								id="fa-user-circle-o"
								size="fa-2x pt-2"
								onClick={() => navigate('/profile')}
							/>
							<h1 className=" text-blue-900 px-2 text-base">{firstName}</h1>
						</div>
						<Button onClick={() => navigate('/login')}>
							Выйти
						</Button>
					</div>
				) : (
					<Button bgColor="bg-green-800" margin = 'm-4'>
						<Link to="/login">Войти</Link>
					</Button>
				)}
			</div>
		</div>
	)
}
