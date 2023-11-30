module.exports = function (comment) {
	return {
		id: comment.id,
		content: comment.content,
		author: { login: comment.author.login, avatar: comment.author.avatar },
		createdAt: comment.createdAt,
		updatedAt: comment.updatedAt,
	}
}
