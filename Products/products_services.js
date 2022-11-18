const Products = require("./products_model");

function createProducts(products) {
    return Products.create(products);
}

function deleteProducts(id){
    return Products.findByIdAndDelete(id);
}

function updateProducts(id, products){
    return Products.findByIdAndDelete(id, products, {new: true});
}

function getAllProducts(){
    return Products.find({});
}

function getProducts(id){
    return Products.findById(id);
}

module.exports ={
    createProducts,
    deleteProducts,
    updateProducts,
    getAllProducts,
    getProducts,
};