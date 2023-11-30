const Comment = require('../models/Comment')
const Product = require('../models/Product')

// add
async function addComment(productId, comment) {
	const newComment = await Comment.create(comment)

	await Product.findByIdAndUpdate(productId, {
		$push: { comments: newComment },
	})

	await newComment.populate('author')

	return newComment
}

// edit
async function editComment(productId, commentId, comment) {
	const newComment = await Comment.findByIdAndUpdate(commentId, comment, {
		returnDocument: 'after',
	})

	await newComment.populate('author')

	await Product.findByIdAndUpdate(productId, { $push: { comments: newComment } })

	return newComment
}

// delete
async function deleteComment(productId, commentId) {
	await Comment.deleteOne({ _id: commentId })
	await Product.findByIdAndUpdate(productId, { $pull: { comments: commentId } })
}

module.exports = {
	addComment,
	editComment,
	deleteComment,
}
