const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

const server = express();

mongoose.connect('mongodb+srv://dev:Vini05011997@backend-saeh1.mongodb.net/dev?retryWrites=true&w=majority', {
     useNewUrlParser: true,
     useUnifiedTopology: true,
});
server.use(express.cors());
server.use(express.json());
server.use(routes);

server.listen(3333);