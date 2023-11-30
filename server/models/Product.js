const mongoose = require('mongoose')
const validator = require('validator')

const ProductSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			unique: true,
		},
		image: {
			type: String,
			required: true,
			default:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShnuP5Is1V1tr9U8IMhsQUq_LetoH2zkeZAA&usqp=CAU',
			validate: {
				validator: validator.isURL,
				message: 'Image should be a valid url',
			},
		},
		description: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		views: {
			type: Number,
			default: 0,
		},
		comments: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Comment',
			},
		],
	},
	{ timestamps: true }
)

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product
