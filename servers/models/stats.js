const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const statsSchema = new Schema({
    states:{},
    positive: {},
    negative: {},
    pending: {},
    death: {},
    hospitalized: {},
    recovered: {},
    date: { type: Date, default: Date.now }
}),

const Stats = mongoose.model("Stats", statsSchema);

module.exports = Stats;