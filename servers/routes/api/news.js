const express = require('express');

const router = express.Router();
const db = require("../../controllers");
const Covid19News = require('../../models/Covid19News');

router.get('/api', (req, res) => {
    Covid19News.find({  })
      .then((data) => {
          console.log('Data: ', data);
          res.json(data);
      })
      .catch((err) => {
            console.log('error: ', dataerror);
      });
  
      
  });
  
  router.get('/api/name', (req, res) => {
    const data = {
      author: 'Stella Daskalakis',
      url: 'http:\/\/ktiv.com\/2021\/01\/19\/january-19-covid-19-in-nebraska\/',
      country: 'us'
    };
    res.json(data);
  });
  


module.exports = router