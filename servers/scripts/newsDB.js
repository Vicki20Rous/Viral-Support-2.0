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
        description: "Conspiracy theorists are at work again. This time, they are intensifying efforts to stop us from taking the Coronavirus vaccines. According to them, some forces want to reduce the world\u2019s population, especially Africans.One of their usual victims is billionaire Bill Gates, who they mentioned again But, let us get some facts straight",
        url: "https:\/\/thenationonlineng.net\/covid-19-vaccines\/",
        source: "thenationonlineng",
        image: "null",
        country: "us",
        published_at: "2021-01-13T03:46:45+00:00",
        date: new Date(Date.now())
    },
    {
        author: "Scott Taylor",
        title: "COVID-19 Numbers",
        description: "Santa Barbara County Health Officials have added 187 new cases of COVID-19, for a new total of 29,191 comfirmed cases. They also added 13more deaths related to the virus. 148 new cases of COVID-19 were also added",
        url: "http:\/\/www.920kvec.com\/2021\/02\/04\/covid-19-numbers-17\/",
        source: "920kvec",
        published_date: "2021-02-04T15:49:00+00:00",
        date: new Date(Date.now()) 
    },
    {
        author: "Jordie Simpson",
        title: "COVID-19 on Campus",
        description: "COVID-19 on Campus",
        url: "https:\/\/seattlespectator.com\/2021\/02\/05\/covid-19-on-campus\/",
        source: "suspectator",
        country: "us",
        published_at: "2021-02-05T19:14:22+00:00",
        date: new Date(Date.now())
    },
    {
    author:"Serena Bettis",
    title: "COVID-19 by the numbers",description:"Editor\u0026#8217;s Note: This page will be updated continuously by The Collegian on Sunday and Wednesday nights, according to numbers from Colorado State University. The \u0026#8220;updated as of\u0026#8221; dates are included to indicate when the data has last been updated by CSU. Updated 2\/24 Total positive CSU COVID-19 cases: 2,304 Total tests done by CSU (updated [\u0026#8230;]",
    url:"https:\/\/collegian.com\/2021\/02\/category-news-covid-19-by-the-numbers-updated-sept-13\/",
    source:"collegian",
    image:null,
    country:"us",published_at:"2021-02-25T02:04:36+00:00"
    },   

]