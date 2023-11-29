module.exports = function (user) {
	return {
		id: user.id,
		email: user.email,
		avatar: user.avatar,
		login: user.login,
		role: user.role,
		createdAt: user.createdAt,
		updatedAt: user.updatedAt,
	}
}
