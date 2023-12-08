import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { AuthFormError, Button, H2, Input } from '../../components'
// import { useResetForm } from '../../hooks'
import { request } from '../../utils/request'
import { setUser } from '../../redux/actions'
import { selectUserRole } from '../../redux/selectors'
import { ROLE } from '../constants'

const regFormSchema = yup.object().shape({
	email: yup
		.string()
		.required('Заполните email')
		.min(5, 'Неверно заполнен email. Минимум 5 символа')
		.max(30, 'Неверно заполнен email. Максимум 30 символов')
		.matches(
			/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
			'Неверно заполнен email'
		),
	avatar: yup
		.string()
		.required('Укажите ссылку (URL) на Ваше фото')
		.min(
			3,
			'Неверно заполненна интернет ссылка (URL) на Ваше фото. Минимум 3 символа'
		)
		.max(
			500,
			'Неверно заполненна интернет ссылка (URL) на Ваше фото. Максимум 500 символов'
		)
		.matches(
			/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&\\/=]*)$$/,
			'Неверно заполненна интернет ссылка (URL) на Ваше фото. Допустимые форматы jpg, jpeg, png'
		),
	login: yup
		.string()
		.required('Заполните логин')
		.min(3, 'Неверно заполнен логин. Минимум 3 символа')
		.max(15, 'Неверно заполнен логин. Максимум 15 символов')
		.matches(
			/^\w+$/,
			'Неверно заполнен логин. Допускаются только буквы цифры и нижнее подчеркивание'
		),
	password: yup
		.string()
		.required('Заполните пароль')
		.min(6, 'Неверно заполнен пароль. Минимум 6 символов')
		.max(30, 'Неверно заполнен пароль. Максимум 30 символов')
		.matches(
			/^[\w#%]+$/,
			'Неверно заполнен пароль. Допускаются латинские буквы, цифры и знаки # %'
		),
	passcheck: yup
		.string()
		.required('Заполните повтор пароля')
		.oneOf([yup.ref('password'), null], 'Повтор пароля не совпадает'),
})

// const StyledLink = styled(Link)`
// 	text-align: center;
// 	text-decoration: underline;
// 	margin: 20px 0;
// 	font-size: 18px;
// `

export const RegistrationPage = ({ className }) => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
			avatar: '',
			login: '',
			password: '',
			passcheck: '',
		},
		resolver: yupResolver(regFormSchema),
	})

	const [serverError, setServerError] = useState(null)

	const dispatch = useDispatch()

	const roleId = useSelector(selectUserRole)

	// useResetForm(reset)

	const onSubmit = ({
		email,
		avatar,
		login,
		password,
	}) => {
		request('/register', 'POST', {
			email,
			avatar,
			login,
			password,
		}).then(({ error, user }) => {
			if (error) {
				setServerError(`Ошибка запроса: ${error}`)
				return
			}

			dispatch(setUser(user))
			sessionStorage.setItem('userData', JSON.stringify(user))
		})
	}

	const formError =
		errors?.email?.message ||
		errors?.avatar?.message ||
		errors?.login?.message ||
		errors?.password?.message ||
		errors?.passcheck?.message
	const errorMessage = formError || serverError

	if (roleId !== ROLE.GUEST) {
		return <Navigate to="/main" />
	}

	return (
		<div className={className}>
			<H2>Регистрация</H2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					type="email"
					placeholder="Электронная почта..."
					{...register('email', {
						onChange: () => setServerError(null),
					})}
				/>
				<Input
					type="text"
					placeholder="Интернет ссылка (URL) на фото..."
					{...register('avatar', {
						onChange: () => setServerError(null),
					})}
				/>
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
				<Input
					type="password"
					placeholder="Проверка пароля..."
					{...register('passcheck', {
						onChange: () => setServerError(null),
					})}
				/>
				<Button type="submit" disabled={!!formError}>
					Зарегистрироваться
				</Button>
				{errorMessage && <AuthFormError>{errorMessage}</AuthFormError>}
				<Link to="/">Авторизация</Link>
			</form>
		</div>
	)
}

	// display: flex;
	// flex-direction: column;
	// align-items: center;

	// & > form {
	// 	display: flex;
	// 	flex-direction: column;
	// 	width: 400px;
	// }
