const Factura = require("./facturacion_model");

function createFactura(factura){
    return Factura.create(factura);
}

function getAllFacturas(){
    return Factura.find({});
}

function getFactura(id){
    return Factura.findById(id)
}

function deleteFactura(id){
    return Factura.findByIdAndDelete(id);
}

module.exports = {
    createFactura,
    getAllFacturas,
    getFactura,
    deleteFactura,
};