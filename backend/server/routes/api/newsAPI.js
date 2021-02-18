const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('96c41822c5bd447d90a6023f747bf769');

const router = require("express").Router();
router.get("/headlines",function(req,res){
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
   res.json(response)
  });
})  

module.exports = router 