// Requiring our models and passport as we've configured it
var db = require("../models");

module.exports = function (app) {
  app.get("/api/budget", function (req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Budget.findAll({
      include: [db.User]
    }).then(function (dbBudget) {
      res.json(dbBudget);
    });
  });

  app.post('/api/budget', function (req, res) {
    db.Budget.create({
      category: req.body.category,
      amount_spent: req.body.amount_spent,
      UserId: req.body.UserId
    }).then(function () {
      res.redirect('/members');
    });
  });


  app.post("/api/budget", function (req, res) {
    console.log(res)
    console.log(req.body)
    db.Budget.create(req.body).then(function (dbBudget) {
      res.json(dbBudget);
    });
  });



}; // ends module.exports