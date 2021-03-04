const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const morgan = require('morgan')


const app = express();
const log = console.log;
const PORT = process.env.PORT || 8080;


const routes = require("./servers/routes");

const MONGODB_URI ='mongodb+srv://covid-relief:LuLa7600@cluster0.b2djq.mongodb.net/viralsupport2?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI || 'mongodb://localhost/viralsupport2', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected !!!!!');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(morgan('tiny'));
app.use('/', routes);

const port = process.env.PORT || 5000;

app.listen(PORT, console.log (`Server running on port ${PORT} 🔥`));
