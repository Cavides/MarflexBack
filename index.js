require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();

const user = require('./Users/user_routes');
const pedido = require('./Pedidos/pedidos_routes');
const factura = require('./Facturacion/facturacion_routes');
const producto = require("./Products/products_routes");
const authLocal = require('./auth/local/local_routes');

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to shop API...");
});

app.use("/productos",producto);

app.use("/pedidos",pedido);

app.use("/users", user);

app.use("/facturas", factura);


app.use('/auth/local', authLocal);




const  port =process.env.PORT || 5000;

const MURI = process.env.MONGO_URI;



app.listen(port, async () => {
    try {
        await mongoose.connect(MURI);
        console.log("Connect to mongodb");
        console.log("Server running on port " + port);
    } catch (error) {
        console.error(error);
        console.log("No está conectado");
    }
});