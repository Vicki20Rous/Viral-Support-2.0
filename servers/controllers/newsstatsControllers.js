const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Stats
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err=> res.status(422).json(err));
    },
    update: function(req, res) {
        db.Stats
        .findOneAndUpdate({_id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};