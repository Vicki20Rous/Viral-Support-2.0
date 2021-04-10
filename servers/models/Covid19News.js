const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Covid19NewsSchema = new Schema({
    data: String,
    title: String,
    description: String,
    date: {
      type: String, 
      default: Date.now() 
    }
});


const Covid19News = mongoose.model('Covid19News', Covid19NewsSchema);

module.exports = Covid19News