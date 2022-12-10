const Products = require("./products_model");

function createProduct(product) {
    return Products.create(product);
}

function deleteProduct(id){
    return Product.findByIdAndDelete(id);
}

function updateProduct(id, product){
    return Products.findByIdAndUpdate(id, product, { new: true});
}

function getAllProducts(){
    return Products.find({});
}

function getProduct(id){
    return Products.findById(id);
}

function getProductByCode(code){
    return Products.findOne({ code : code});
}

module.exports ={
    createProduct,
    deleteProduct,
    updateProduct,
    getAllProducts,
    getProduct,
    getProductByCode,
};