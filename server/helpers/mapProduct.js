const mongoose = require('mongoose')
const mapComment = require('./mapComment')

module.exports = function (product) {
	return {
		id: product.id,
		title: product.title,
		image: product.image,
		description: product.description,
		price: product.price,
		views: product.views,
		comments: product.comments.map((comment) =>
			mongoose.isObjectIdOrHexString(comment) ? comment : mapComment(comment)
		),
		createdAt: product.createdAt,
		updatedAt: product.updatedAt,
	}
}
