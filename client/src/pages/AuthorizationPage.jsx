import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { AuthFormError, Button, H2, Input } from '../components'
import { useResetForm } from '../hooks'
import { setUser } from '../redux/actions'
import { ROLE } from '../constants'
import { request } from '../utils'

export const authFormSchema = yup.object().shape({
	login: yup
		.string()
		.required('Заполните логин')
		.matches(
			/^\w+$/,
			'Неверно заполнен логин. Допускаются только буквы и цифры'
		)
		.min(3, 'Неверно заполнен логин. Минимум 3 символа')
		.max(15, 'Неверно заполнен логин. Максимум 15 символов'),
	password: yup
		.string()
		.required('Заполните пароль')
		.matches(
			/^[\w#%]+$/,
			'Неверно заполнен пароль. Допускаются латинские буквы, цифры и знаки # %'
		)
		.min(6, 'Неверно заполнен пароль. Минимум 6 символов')
		.max(30, 'Неверно заполнен пароль. Максимум 30 символов'),
})

export const AuthorizationPage = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(authFormSchema),
	})

	const [serverError, setServerError] = useState(null)

	const dispatch = useDispatch()

	const authUser = useSelector(({ user }) => user)

	useResetForm(reset)

	const onSubmit = ({ login, password }) => {
		request('/login', 'POST', { login, password }).then(({ error, user }) => {
			if (error) {
				setServerError(`Ошибка запроса: ${error}`)
				return
			}

			dispatch(setUser(user))
			sessionStorage.setItem('userData', JSON.stringify(user))
		})
	}

	const formError = errors?.login?.message || errors?.password?.message
	const errorMessage = formError || serverError

	if (authUser.role !== ROLE.GUEST) {
		return <Navigate to="/" />
	}

	return (
		<div className="flex flex-col justify-center mx-auto items-center w-[400px] pt-28 text-xl">
			<H2>Авторизация</H2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					type="text"
					placeholder="Логин..."
					{...register('login', {
						onChange: () => setServerError(null),
					})}
				/>
				<Input
					type="password"
					placeholder="Пароль..."
					{...register('password', {
						onChange: () => setServerError(null),
					})}
				/>
				<Button
					type="submit"
					disabled={!!formError}
					fontSize="text-xl"
					margin="mt-8"
				>
					Авторизоваться
				</Button>
				{errorMessage && <AuthFormError>{errorMessage}</AuthFormError>}
				<Link
					className="flex justify-center underline my-5 text-xl hover:opacity-80"
					to="/register"
				>
					Регистрация
				</Link>
			</form>
		</div>
	)
}
