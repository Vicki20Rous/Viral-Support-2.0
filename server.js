const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const morgan = require('morgan')
// require('dotenv').config()
const 
const PORT = process.env.PORT || 8080;
const app = express();
const routes = require("./routes/api");
const MONGODB_URI ='mongodb+srv://covid-relief:LuLa7600@cluster0.b2djq.mongodb.net/viralsupport2?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI || 'mongodb://localhost/viralsupport2.0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected !!!!!');
});

//Schema 

//Saving data to our mongo database
const data = {
  title: 'January 19: COVID-19 in Nebraska',
  body: 'As of Tuesday, 1,850 COVID-19 deaths have been reported in Nebraska since the start of the pandemic. \nThe post January 19: COVID-19 in Nebraska appeared first on KTIV.',
}


const newCovid19News = new Covid19News(data);

// newCovid19News.save((error) => {
//   if (error) {
//     console.log('Ooops something happened');
//   } else {
//       console.log('Data has been saved');
//     }
  
// });

//.save();

//HTTP request logger
app.use(morgan('tiny'));
app.use('/', routes);
//Routes


// Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// Define API routes here


// Send every other request to the React app
// Define any API routes before this runs



// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// app.listen(PORT, () => {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });
