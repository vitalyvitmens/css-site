import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from './Button'
import { Icon } from './Icon'
import { Avatar } from './Avatar'
import { logout } from '../redux/actions'

export const Navbar = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const authUser = useSelector(({ user }) => user)

	const activeStyles = {
		color: '#C80815',
	}

	const onLogout = () => {
		dispatch(logout())
		sessionStorage.removeItem('userData')
		navigate('/')
	}

	return (
		<div className="flex justify-between items-center px-5 w-full">
			<Link
				className="bg-cover bg-logo h-[90px] w-[130px] hover:cursor-pointer hover:opacity-80"
				to="/"
			/>
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
			<Icon
				id="fa-arrow-left"
				color="text-green-800"
				onClick={() => navigate(-1)}
			/>
			<div className="flex text-xl">
				{authUser.login ? (
					<div className="flex flex-row">
						<div
							className="flex flex-col items-center px-2"
							onClick={() => navigate('/profile')}
						>
							<Avatar>{authUser.avatar}</Avatar>
							<p className=" text-blue-900 px-2 text-base cursor-pointer hover:opacity-80 active:opacity-60">
								{authUser.login}
							</p>
						</div>
						<Button onClick={onLogout}>Выйти</Button>
					</div>
				) : (
					<Button bgColor="bg-green-800" margin="m-4">
						<Link to="/login">Войти</Link>
					</Button>
				)}
			</div>
		</div>
	)
}
