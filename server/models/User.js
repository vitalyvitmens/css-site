const mongoose = require('mongoose')
const ROLES = require('../constants/roles')
const validator = require('validator')

const UserSchema = mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		avatar: {
			type: String,
			default:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaBBWetwkRwKEWJ6OyX_UEtmmSKkh8JVqr-1JPiZJvl6qlA2modv6AX_pS4R4Cr5bFmNk&usqp=CAU',
			validate: {
				validator: validator.isURL,
				message: 'Avatar should be a valid url',
			},
		},
		login: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		role: {
			type: Number,
			default: ROLES.USER,
		},
	},
	{ timestamps: true }
)

const User = mongoose.model('User', UserSchema)

module.exports = User
