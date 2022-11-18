const mongoose = require("mongoose");
const { Schema, model } = mongoose;


const facturaScheme = new Schema(
    {
        name:{
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        doc:{
            type: Number,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        telephone:{
            type:Number,
            required: true,
        },
        departamento:{
            type: String,
            required: true,
        },
        ciudad:{
            type: String,
            required: true,
        },
        direccion:{
            type: String,
            required: true,
        },
        descripcion:{
            type: String,
            require: false,
        },
    },
    {
        timestamps: true,
    }
);

const Factura = model("Factura", facturaScheme);

module.exports = Factura;