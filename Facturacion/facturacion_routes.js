const express = require("express");
const {getAllFacturasHandler, getFacturaHandler, createFacturaHandler} = require("./facturacion_controllers");


const router = new express.Router();

router.get('/', getAllFacturasHandler);

router.get('/:id', getFacturaHandler);

router.post('/', createFacturaHandler);


module.exports = router;