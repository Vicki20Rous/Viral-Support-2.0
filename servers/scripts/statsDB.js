const mongoose = require("mongoose");
const statsdb = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/viralsupport2.coronavirus"
);

const statsSeed = [
    {
        states: "56",
        positive: "28453529",
        negative: "117104254",
        pending: "11196",
        death: "506373",
        hospitalized: "870901",
        recovered: "null",
        date: new Date(Date.now())
    }, 
    {
        states: "56",
        positive: "28399281",
        negative: "116726735",
        pending: "11748",
        death: "504488",
        hospitalized: "869030",
        recovered: "null",
        date: new Date(Date.now())  
    },
    {
        states: "56",
        positive: "28351189",
        negative: "116414006",
        pending: "11708",
        death: "503247",
        hospitalized: "868006",
        recovered: "null",
        date: new Date(Date.now())  
    },
    {
        states: "56",
        positive: "28296840",
        negative: "116120267",
        pending: "11731",
        death: "502196",
        hospitalized: "867127",
        recovered: "null",
        date: new Date(Date.now())  
    },
    {
        states: "56",
        positive: "28225595",
        negative: "115712514",
        pending: "11945",
        death: "500349",
        hospitalized: "865699",
        recovered: "null",
        date: new Date(Date.now())  
    },
    {
        states: "56",
        positive: "28150738",
        negative: "115202053",
        pending: "11813",
        death: "498208",
        hospitalized: "863766",
        recovered: "null",
        date: new Date(Date.now())  
    },
    {
        states: "56",
        positive: "28075173",
        negative: "114693558",
        pending: "12548",
        death: "495070",
        hospitalized: "861784",
        recovered: "null",
        date: new Date(Date.now())  
    },






]