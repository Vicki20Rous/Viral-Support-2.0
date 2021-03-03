const mongoose = require("mongoose");
const newsdb = require("../models")

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/viralsupport2.coronavirus"
);

const newsSeed = [
    {
        author: "Stella Daskalakis",
        title: "January 19: COVID-19 in Nebraska",
        description: "As of Tuesday, 1,850 COVID-19 deaths have been reported in Nebraska since the start of the pandemic. \nThe post January 19: COVID-19 in Nebraska appeared first on KTIV.",
        url: "http:\/\/ktiv.com\/2021\/01\/19\/january-19-covid-19-in-nebraska\/",
        source: "ktiv",
        image: "null",
        country: "us",
        published_at: "2021-01-20T04:28:20+00:00",
        date: new Date(Date.now())
    },
    {
        author: "Mustapha Temidayo",
        title: "COVID-19 vaccines",
        description: "Conspir"
    }
]