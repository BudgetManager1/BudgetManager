// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require('../models');

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");
var budgetInfo = {};
module.exports = function (app) {
  app.get("/", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    } else {
      res.sendFile(path.join(__dirname, "../public/login.html"));
    }
  });

  app.get("/signup", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    } else {
      res.sendFile(path.join(__dirname, "../public/signup.html"));
    }
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get('/members', isAuthenticated, function (req, res) {
    var info;
    db.Budget.findAll({
      where: {
        UserId: req.user.id
      },
      include: [db.User]
    }).then(function (dbBudget) {
      var categoryArr = [];
      for (var i = 0; i < dbBudget.length; i++) {
        if (!categoryArr.includes(dbBudget[i].category)) {
          categoryArr.push(dbBudget[i].category)
        }
      }

      var infoArr = [];
      for (var i = 0; i < dbBudget.length; i++) {
        for (var j = 0; j < categoryArr.length; j++)
          if (dbBudget[i].category == categoryArr[j]) {
            infoArr.push(dbBudget[i]);                      // console.log(infoArr)
          }
      }

      var budgetInfo = {
        Travel: [],
        Entertainment: [],
        Food: [],
        Clothing: [],
        Housing: [],
        Utilities: [],
        Food: [],
        Medical: [],
        Personal: [],
      }

      for (var i = 0; i < infoArr.length; i++) {
        budgetInfo[infoArr[i].category].push(
          {
            id: infoArr[i].id,
            description: infoArr[i].description,
            amount_spent: infoArr[i].amount_spent,
            createdAt: infoArr[i].createdAt
          }
        )
      }                                                 // console.log(budgetInfo);
      info = budgetInfo;
    }).then(function () {
      db.Goals.findAll({
        where: {
          UserId: req.user.id
        },
        include: [db.User],
        order: [['createdAt', 'DESC']]
      }).then(function (dbGoals) {
        // console.log(dbGoals[0].dataValues);
        // console.log('------------------------------------------------------------');
        // console.log(dbGoals[0].dataValues.id);
        // console.log(dbGoals[0].dataValues.wish);
        // console.log(dbGoals[0].dataValues.total);
        // console.log(dbGoals[0].dataValues.progress);
        // console.log('----------------------------------------------');
        res.render('index', {
          dbBudget: info,
          dbGoals: dbGoals
        }); 
      });
    });
  });

  app.get("/budget", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });
};
