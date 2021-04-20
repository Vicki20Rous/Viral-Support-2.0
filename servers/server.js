const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors')

const Covid19News = require('./routes/api/router')

const app = express();

connectDB();
 
app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Server working '));

app.use('/api/router', Covid19News);


const port = process.env.PORT || 8000;

app.listen(port, () => console.log `Server is running on port 🔥`);
