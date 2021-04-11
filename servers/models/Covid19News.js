const mongoose = require('mongoose');

const Covid19NewsSchema = new mongoose.Schema({
    author: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true
    },
    url: {
      type: String, 
      required: true
    },
    published_at: {
      type: Date
    },
    updated_date: {
      type: Date,
      default: Date.now
    }
});

module.exports = Covid19News = mongoose.model('covid19news', Covid19NewsSchema);