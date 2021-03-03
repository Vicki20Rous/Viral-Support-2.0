const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema({
    author: {},
    title: {},
    description: {},
    url: {},
    source: {},
    image: {},
    country: {},
    published_at: {},
    date: {type: Date, default: Date.now }
});

const News = mongoose.model("News", newsSchema);

module.exports = News;