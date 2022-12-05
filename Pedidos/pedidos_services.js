const Pedido = require("./pedidos_model");

function createPedido(pedido) {
    return Pedido.create(pedido);
  }
  
  function deletePedido(id) {
    return Pedido.findByIdAndDelete(id);
  }
  
  function updatePedido(id, pedido) {
    return Pedido.findByIdAndUpdate(id, pedido, { new: true });
  }
  
  function getAllPedidos() {
    return Pedido.find({});
  }
  
  function getPedido(id) {
    return Pedido.findById(id);
  }

  function getPedidoByCode(numfactura) {
    return Pedido.findOne({ numfactura : numfactura });
  }

  
  module.exports = {
    createPedido,
    deletePedido,
    updatePedido,
    getAllPedidos,
    getPedido,
    getPedidoByCode,
  };