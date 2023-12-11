import { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { AuthFormError, Button, H2, Input } from '../components'
import { useResetForm } from '../hooks'
// import { setUser } from '../../redux/actions'
// import { selectUserRole } from '../../redux/selectors'
// import { ROLE } from '../constants'
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

	// const dispatch = useDispatch()

	// const roleId = useSelector(selectUserRole)

	// useResetForm(reset)

	const onSubmit = ({ login, password }) => {
		request('/', 'POST', { login, password }).then(({ error, user }) => {
			if (error) {
				setServerError(`Ошибка запроса: ${error}`)
				return
			}

			// dispatch(setUser(user))
			sessionStorage.setItem('userData', JSON.stringify(user))
		})
	}

	const formError = errors?.login?.message || errors?.password?.message
	const errorMessage = formError || serverError

	// if (roleId !== ROLE.GUEST) {
	// 	return <Navigate to="/main" />
	// }

	return (
		<div className="flex flex-col justify-center mx-auto items-center w-[400px] pt-28 text-xl">
			<H2>Авторизация</H2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					id="email"
					name="email"
					type="text"
					placeholder="Логин..."
					{...register('login', {
						onChange: () => setServerError(null),
					})}
				/>
				<Input
					id="password"
					name="password"
					type="password"
					placeholder="Пароль..."
					{...register('password', {
						onChange: () => setServerError(null),
					})}
				/>
				<Button type="submit" disabled={!!formError}>
					Авторизоваться
				</Button>
				{errorMessage && <AuthFormError>{errorMessage}</AuthFormError>}
				<Link
					className="flex justify-center underline my-5 text-lg hover:opacity-80"
					to="/register"
				>
					Регистрация
				</Link>
			</form>
		</div>
	)
}
