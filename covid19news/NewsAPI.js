import React from 


const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('96c41822c5bd447d90a6023f747bf769');
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
// newsapi.v2.topHeadlines({
//   sources: 'bbc-news,the-verge',
//   q: 'bitcoin',
//   category: 'health',
//   language: 'en',
//   country: 'us'

// }).then(response => {
//   console.log(response);

// };

var url = 'http://newsapi.org/v2/top-headlines?' +
'country=us&' +
'apiKey=96c41822c5bd447d90a6023f747bf769';
var req = new Request(url);
fetch(req)
.then(function(response) {
console.log(response.json());
})

// To query sources
// All options are optional
newsapi.v2.sources({
    category: 'health',
    language: 'en',
    country: 'us'
  }).then(response => {
    console.log(response);
    /*
      {
        status: "ok",
        sources: [...]
      }
    */
  });