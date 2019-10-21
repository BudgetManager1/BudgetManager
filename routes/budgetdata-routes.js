// Requiring our models and passport as we've configured it
var db = require("../models");

module.exports = function (app) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
  app.get("/api/budget/:id", function (req, res) {
    db.Budget.findAll({
      include: [db.User]
    }).then(function (dbBudget) {
      res.json(dbBudget);
      console.log(dbBudget)
    });
  });



  app.post("/api/budget", function (req, res) {
    console.log(res)
    console.log(req.body)
    db.Budget.create(req.body);
  });



}; // ends module.exports