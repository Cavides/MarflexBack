const Products = require("./products_model");

function createProducts(products) {
    return Products.create(products);
}

function deleteProducts(id){
    return Products.findByIdAndDelete(id);
}

function updateProducts(id, products){
    return Products.findByIdAndUpdate(id, products, { new: true});
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
    createProducts,
    deleteProducts,
    updateProducts,
    getAllProducts,
    getProduct,
    getProductByCode,
};