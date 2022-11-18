const {
    createPedido,
    updatePedido,
    deletePedido,
    getPedido,
    getAllPedidos,
  
  } = require("./pedidos_services");

  async function createPedidoHandler(req,res){
      const {fechaPedido, numFactura,alamcen,nombreProducto, color, medida, especificacion, foto, fechaEntrega, asesor, proveedor,valorVenta} = req.body;
      try{
        const pedido = await createPedido({fechaPedido, numFactura,alamcen,nombreProducto, color, medida, especificacion, foto, fechaEntrega, asesor, proveedor,valorVenta});
        return res.status(200).json({message:"Pedido registrado"});
      }catch(error){
          return res.status(500).json({error});
      }
  }

  async function getPedidoHandler(req,res){
      const { id } = req.params;
      try{
        const pedido = await getPedido(id);
        return res.status(200).json(pedido);

      }catch(error){
        console.error(error);
        return res.status(500).json({ message: "Error. Pedido not found" });
      }
  }

async function updatePedidoHandler(req,res){
    const pedidoUpdate =req.body;
    const{id} =req.pedido; 
    try{
        await updatePedido(id, pedidoUpdate); 
        return res.status(200).json({ message: "pedido updated"});
    }catch(error){
        console.error(`[ERROR]: ${error}`);
        return res.status(500).json({ message: "Error updating pedido", error });
    }
}

async function deletePedidoHandler(req,res){
    const {id} =req.pedido;
    try{
        await deletePedido(id);
        console.log(`pedido ${id} eliminate`);
        return res.status(200).json({message: "pedido eliminado"}); 

    }catch(error) {
        console.error(`[ERROR]: ${error}`);
        return res.status(500).json({ error });
    }
}
async function getAllPedidosHandler(req,res){
    const pedido = await getAllPedidos(); 
    return res.status(200).json(pedido); 
}


module.exports = {
    createPedidoHandler,
    getPedidoHandler,
    updatePedidoHandler,
    deletePedidoHandler,
    getAllPedidosHandler
  };
