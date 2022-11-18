const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const pedidoSchema = new Schema(
    {
        fechaPedido:{
            type: Date,
            required: true,
        },
        numfactura:{
            type: String,
            required: true,
            unique: true, //cambiar por si acaso//
        },
        almacen:{
            type: String,
            required: true,
        },
        nombreProducto:{
            type: String,
            required: true,
        },
        color:{
            type: String,
            required: true,
        },
        medida:{
            type: String,
            required: true,
        },
        especificacion:{
            type: String,
            required: true,
        },
        foto:{
            type: String,
            required: true,
        },
        fechaEntrega:{
            type: String,
            required: true,
        },
        asesor:{
            type: String,
            required: true,
        },
        proveedor:{
            type: String,
            required: true,
        },
        valorVenta:{
            type: Number,
            required: true,
        }
    }
)

const Pedido = model("Pedido",pedidoSchema);

module.exports = Pedido;