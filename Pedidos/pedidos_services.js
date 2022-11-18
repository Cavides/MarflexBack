const Pedido = require("./pedidos_model");

function createPedido(Pedido) {
    return Pedido.create(Pedido);
  }
  
  function deletePedido(id) {
    return Pedido.findByIdAndDelete(id);
  }
  
  function updatePedido(id, Pedido) {
    return Pedido.findByIdAndUpdate(id, Pedido, { new: true });
  }
  
  function getAllPedidos() {
    return Pedido.find({});
  }
  
  function getPedido(id) {
    return Pedido.findById(id);
  }

  
  module.exports = {
    createPedido,
    deletePedido,
    updatePedido,
    getAllPedidos,
    getPedido,
  };