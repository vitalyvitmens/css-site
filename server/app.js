require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const {
	register,
	login,
	getUsers,
	getUser,
	getRoles,
	editUser,
	deleteUser,
} = require('./controllers/user')
const mapUser = require('./helpers/mapUser')
const authenticated = require('./middlewares/authenticated')
const hasRole = require('./middlewares/hasRole')
const ROLES = require('./constants/roles')

const PORT = process.env.PORT || 3001
const app = express()

app.use(cookieParser())
app.use(express.json())

app.post('/register', async (req, res) => {
	try {
		const { user, token } = await register(
			req.body.email,
			req.body.avatar,
			req.body.login,
			req.body.password
		)

		res
			.cookie('token', token, { httpOnly: true })
			.send({ error: null, user: mapUser(user) })
	} catch (e) {
		res.send({ error: e.message || 'Unknown register error' })
	}
})

app.post('/login', async (req, res) => {
	try {
		const { user, token } = await login(req.body.login, req.body.password)

		res
			.cookie('token', token, { httpOnly: true })
			.send({ error: null, user: mapUser(user) })
	} catch (e) {
		res.send({ error: e.message || 'Unknown login error' })
	}
})

app.post('/logout', (req, res) => {
	res.cookie('token', '', { httpOnly: true }).send({})
})

app.use(authenticated)

app.get('/users', hasRole([ROLES.ADMIN]), async (req, res) => {
	const users = await getUsers()

	res.send({ data: users.map(mapUser) })
})

app.get('/users/:id', hasRole([ROLES.ADMIN]), async (req, res) => {
	const user = await getUser(req.params.id)

	res.send({ data: mapUser(user) })
})

app.get('/users/roles', hasRole([ROLES.ADMIN]), async (req, res) => {
	const roles = getRoles()

	res.send({ data: roles })
})

app.put('/users/:id', hasRole([ROLES.ADMIN]), async (req, res) => {
	const newUser = await editUser(req.params.id, {
		avatar: req.body.avatar,
		role: req.body.role,
	})

	res.send({ data: mapUser(newUser) })
})

app.delete('/users/:id', hasRole([ROLES.ADMIN]), async (req, res) => {
	await deleteUser(req.params.id)

	res.send({ error: null })
})

mongoose.connect(process.env.DB_CONNECTION_STRING).then(() => {
	app.listen(PORT, () => {
		console.log(`http://localhost:${PORT}`)
		console.log(`Server has been started on port ${PORT}...`)
	})
})
