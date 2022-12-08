const express = require("express"); 


const{
    createPedidoHandler,
    getPedidoHandler,
    updatePedidoHandler,
    deletePedidoHandler,
    getAllPedidosHandler,
    getPedidoByCodeHandler,
} = require("./pedidos_controllers"); 

const router = new express.Router(); 

router.get("/", getAllPedidosHandler); 

router.get ("/:id", getPedidoHandler); 

router.post ("/", createPedidoHandler); 

router.patch("/", updatePedidoHandler); 

router.delete("/:id", deletePedidoHandler); 

router.get('/numfactura/:numfactura', getPedidoByCodeHandler);

module.exports = router;