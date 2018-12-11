const express = require('express');
const bodyParser = require('body-parser');
const app = express();
//const router = express.Router();
const mongoose = require('mongoose');

//Conecta ao banco
mongoose.connect('mongodb://localhost:27017/product');

//Carrega os Models
const Product = require('./models/product')

//Carregar as Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/products-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;