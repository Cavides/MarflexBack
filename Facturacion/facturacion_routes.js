const express = require("express");
const {getAllFacturasHandler, getFacturaHandler, createFacturaHandler} = require("./facturacion_controllers");


const router = new express.Router();

router.get('/', getAllFacturasHandler);

router.get('/:_id', getFacturaHandler);

router.post('/', createFacturaHandler);


module.exports = router;