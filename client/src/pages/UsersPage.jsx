import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { checkAccess, request } from '../utils'
import { ROLE } from '../constants'
import { Avatar, H2, Icon } from '../components'
import Moment from 'react-moment'

export const UsersPage = () => {
	const [users, setUsers] = useState([])
	const [roles, setRoles] = useState([])
	const [errorMessage, setErrorMessage] = useState(null)
	const [shouldUpdateUserList, setShouldUpdateUserList] = useState(false)
	const userRole = useSelector(({ user }) => user.role)
	const [initialRoleId, setInitialRoleId] = useState()
	const [selectedRoleId, setSelectedRoleId] = useState()

	console.log('users:', users)
	console.log('roles:', roles)
	console.log('errorMessage:', errorMessage)
	console.log('shouldUpdateUserList:', shouldUpdateUserList)
	console.log('userRole:', userRole)
	console.log('initialRoleId:', initialRoleId)
	console.log('selectedRoleId:', selectedRoleId)

	const onRoleChange = ({ target }) => {
		setSelectedRoleId(Number(target.value))
	}

	const onRoleSave = (userId, newUserRoleId) => {
		request(`/users/${userId}`, 'PATCH', { roleId: newUserRoleId }).then(() => {
			setInitialRoleId(newUserRoleId)
		})
	}

	const isSaveButtonDisabled = selectedRoleId === initialRoleId

	useEffect(() => {
		if (!checkAccess([ROLE.ADMIN], userRole)) {
			return
		}

		// 	Promise.all([request('/users'), request('/users/roles')]).then(
		// 		([usersRes, rolesRes]) => {
		// 			if (usersRes.error || rolesRes.error) {
		// 				setErrorMessage(usersRes.error || rolesRes.error)
		// 				return
		// 			}
		// 			setUsers(usersRes.data)
		// 			setRoles(rolesRes.data)
		// 		}
		// 	)
		// }, [shouldUpdateUserList, userRole])
		request('/users').then((usersRes) => {
			if (usersRes.error) {
				setErrorMessage(usersRes.error)
				return
			}
			setUsers(usersRes.data)
		})
	}, [shouldUpdateUserList])

	const onUserRemove = (userId) => {
		if (!checkAccess([ROLE.ADMIN], userRole)) {
			return
		}

		request(`/users/${userId}`, 'DELETE').then(() => {
			setShouldUpdateUserList(!shouldUpdateUserList)
		})
	}

	return (
		// <PrivateContent access={[ROLE.ADMIN]} serverError={errorMessage}>
		<div access={[ROLE.ADMIN]} serverError={errorMessage}>
			<div className="flex flex-col items-center pt-28">
				<H2>Пользователи</H2>
				<div>
					{/* <TableRow> */}
					<div className="flex items-center text-center w-[600px] font-medium">
						<div className="w-18 px-5">Аватар</div>
						<div className="w-32 px-5">Логин</div>
						<div className="w-32 px-5">Email</div>
						<div className="w-52 px-5">Дата регистрации</div>
						<div className="w-20 px-5">Роль</div>
						<div className="w-32 px-5"></div>
					</div>
					{users.map(({ id, email, avatar, login, role, createdAt }) => (
						// <UserRow
						<div className="flex m-1 items-center" key={id}>
							<div className="flex w-full justify-between items-center py-1 px-3 border border-black rounded-md">
								<div>
									<Avatar width="w-10" height="h-10">
										{avatar}
									</Avatar>
								</div>
								<div>{login}</div>
								<div>{email}</div>
								<div>{<Moment date={createdAt} format="DD-MM-YYYYг" />}</div>
								<div>{role}</div>
								<div>
									<select
										id={id}
										name="select"
										value={selectedRoleId}
										onChange={onRoleChange}
									>
										{roles.map(({ id: roleId, name: roleName }) => (
											<option key={roleId} value={roleId}>
												{roleName}
											</option>
										))}
									</select>
									<Icon
										id="fa-floppy-o"
										margin="0 0 0 10px"
										disabled={isSaveButtonDisabled}
										onClick={() => onRoleSave(id, selectedRoleId)}
									/>
								</div>
							</div>
							<Icon
								id="fa-trash-o"
								margin="25px 0 0 10px"
								onClick={onUserRemove}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
