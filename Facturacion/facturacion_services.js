const Factura = require("./facturacion_model");

function createFactura(factura){
    return Factura.create(factura);
}

function getAllFacturas(){
    return Factura.find({});
}

function getFactura(_id){
    return Factura.findById(_id)
}


module.exports = {
    createFactura,
    getAllFacturas,
    getFactura,
};