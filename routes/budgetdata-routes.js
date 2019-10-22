// Requiring our models and passport as we've configured it
var db = require("../models");

module.exports = function (app) {
  // Here we add an "include" property to our options in our findAll query
  // We set the value to an array of the models we want to include in a left outer join
  // In this case, just db.User
  app.get("/api/budget/:id", function (req, res) {
    // console.log(req.params.id)
    // console.log(req.user)
    if (req.user.id == req.params.id) { // console.log("matching user id")
      db.Budget.findAll({
        where: {
          UserId: req.params.id
        },
        include: [db.User]
      }).then(function (dbBudget) { console.log(dbBudget)
        res.json(dbBudget);
      });
    }
    else if (req.user.id === undefined) {
      console.log("undefined user")
      res.redirect("/");
    } else { //console.log("redirected to members")
      res.redirect("/members");
    }
  });

  

  app.post("/api/budget", function (req, res) {
    // console.log(res)
    // console.log(req.body)
    db.Budget.create(req.body);
  });

  app.delete("/api/budget/:id", function(req, res) {
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    console.log(req);
    console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    db.Budget.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbBudget) {
      res.json(dbBudget);
    });
  });

  
}; // ends module.exports