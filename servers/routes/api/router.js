const express = require('express');
const router = express.Router();

const Covid19News = require("../../models/Covid19News");

router.get('/covid19news', (req, res) => {
    Covid19News.find()
      .then(covid19news => res.json(covid19))
      .catch(err => res.status(404).json({ nonewsfind: 'No News Found'}));
});


 module.exports = router;