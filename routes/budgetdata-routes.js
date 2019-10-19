// Requiring our models and passport as we've configured it
var db = require("../models");

module.exports = function(app) {
  app.post('/api/budget', function(req, res){
    db.Budget.create({
      category: req.body.category,
      amount_spent: req.body.amount_spent,
      UserId: req.body.UserId
    }).then(function(){
      res.redirect('/members');
    });
  });
};