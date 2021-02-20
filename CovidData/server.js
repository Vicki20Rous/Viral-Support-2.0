const axios = require("axios")
const Parser = require ("rss-parser")
const parser = new Parser()
    const settings = {
        
        "url": "https://covid19-api.org/api/status/US",
        "method": "GET",
    }
    
   axios.request(settings)
   .then(function(response){
       console.log(response.data);
   })
   .catch(function(error){
       console.log(error);
   })

   const cdc = {
       url: "https://tools.cdc.gov/api/v2/resources/media/132608.rss",
       method: "GET",
   }
   parser.parseURL("https://tools.cdc.gov/api/v2/resources/media/132608.rss")
   .then(function(response){
       console.log(response);
   })
   .catch(function(error){
       console.log(error);
   })
//    axios.request(cdc)
//    .then(function(response){
//        console.log(response.data);
//    })
//    .catch(function(error){
//        console.log(error);
//    })