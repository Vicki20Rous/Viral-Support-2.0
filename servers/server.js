const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const routesUrls = require("./servers/routes/api");
const cors = require('cors')
// const morgan = require('morgan')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database connected"))

// mongoose.connect(MONGODB_URI || 'mongodb://localhost/viralsupport2', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// mongoose.connection.on('connected', () => {
//   console.log('Mongoose is connected !!!!!');
// });

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(morgan('tiny'));
app.use('/', routes);
app.use(cors())
app.listen(4000, console.log ("Server is running 🔥"))
