const Product = require('../models/Product')

// add
async function addProduct(product) {
	const newProduct = await Product.create(product)

	// await newProduct.populate({
	// 	path: 'comments',
	// 	populate: 'author',
	// })

	return newProduct
}

// edit
async function editProduct(id, product) {
	const newProduct = await Product.findByIdAndUpdate(id, product, {
		returnDocument: 'after',
	})

	return newProduct
}

// delete
async function deleteProduct(id) {
	return await Product.deleteOne({ _id: id })
}

// get list with search and pagination
async function getProducts(search = '', limit = 10, page = 1) {
	const [products, count] = await Promise.all([
		Product.find({ title: { $regex: search, $options: 'i' } })
			.limit(limit)
			.skip((page - 1) * limit)
			.sort({ updatedAt: -1 }),
		// .sort({ views: -1 }),
		Product.countDocuments({ title: { $regex: search, $options: 'i' } }),
	])

	return {
		products,
		lastPage: Math.ceil(count / limit),
	}
}

// get item
async function getProduct(id) {
	const product = await Product.findById(id)

	product.views = product.views + 1
	await product.save()

	return product
}

module.exports = {
	addProduct,
	editProduct,
	deleteProduct,
	getProducts,
	getProduct,
}
