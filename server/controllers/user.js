const bcrypt = require('bcrypt')
const User = require('../models/User')
const { generate } = require('../helpers/token')
const ROLES = require('../constants/roles')

// register
async function register(email, avatar, login, password) {
	if (!password) {
		throw new Error('Password is empty')
	}

	const passwordHash = await bcrypt.hash(password, 10)

	const user = await User.create({
		email,
		avatar,
		login,
		password: passwordHash,
	})

	const token = generate({ id: user.id })

	return { user, token }
}

// login
async function login(login, password) {
	const user = await User.findOne({ login })

	if (!user) {
		throw new Error('User not found')
	}

	const isPasswordMatch = await bcrypt.compare(password, user.password)

	if (!isPasswordMatch) {
		throw new Error('Wrong password')
	}

	const token = generate({ id: user.id })

	return { token, user }
}

// get users
async function getUsers() {
	return await User.find()
}

// get user
async function getUser(id) {
	return await User.findById(id)
}

// get roles
function getRoles() {
	return [
		{ id: ROLES.ADMIN, name: 'Admin' },
		{ id: ROLES.MODERATOR, name: 'Moderator' },
		{ id: ROLES.USER, name: 'User' },
	]
}

// edit
async function editUser(id, userData) {
	return await User.findByIdAndUpdate(id, userData, { returnDocument: 'after' })
}

// delete
async function deleteUser(id) {
	return await User.deleteOne({ _id: id })
}

module.exports = {
	register,
	login,
	getUsers,
	getUser,
	getRoles,
	editUser,
	deleteUser,
}
