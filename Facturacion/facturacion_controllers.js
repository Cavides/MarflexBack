const {
    createFactura,
    getAllFacturas,
    getFactura,
} = require("./facturacion_services");

async function getAllFacturasHandler(req, res){
    const facturas = await getAllFacturas();
    return res.status(200).json(facturas);
}

async function getFacturaHandler(req, res) {
    const { id } = req.params;
    try{
        const factura = await getFactura(id);
        return res.status(200).json(factura);
    }catch(error){
        console.error(error);
        return res.status(500).json({message:"Error, Factura no encontrada" })
    }
}

async function createFacturaHandler(req, res){
    const{ name, lastName, doc, email, telephone, departamento, ciudad, direccion, descripcion, cart} = req.body;
    try{
    const factura = await createFactura({ name, lastName, doc, email, telephone, departamento, ciudad, direccion, descripcion,cart});
    return res.status(200).json(factura);
    }catch(error){
        console.error(error);
        return res.status(500).json({error});
    }
}


module.exports = {
    getAllFacturasHandler,
    getFacturaHandler,
    createFacturaHandler,
};