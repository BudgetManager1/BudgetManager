// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require('../models');

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  app.get("/", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get('/members', isAuthenticated, function (req, res) {
    db.Budget.findAll({
      where: {
        UserId: req.user.id
      },
      include: [db.User]
    }).then(function (dbBudget) {
      // res.render('index', { dbBudget: dbBudget });

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
            // console.log(dbBudget[i]);
            infoArr.push(dbBudget[i]);
            console.log(infoArr)
          }
      }

      // for (var i = 0; i < infoArr.length; i++) {
      //   console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
      //   // console.log(infoArr[i].dataValues);
      //   console.log(infoArr[i].dataValues.id);
      //   console.log(infoArr[i].dataValues.category);
      //   console.log(infoArr[i].dataValues.description);
      //   console.log(infoArr[i].dataValues.amount_spent);
      //   console.log(infoArr[i].dataValues.createdAt)
      //   console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
      // }

      budgetInfo = {
        Travel: [
        ],
        Entertainment: [
        ],
        Food: [
        ],
        Clothing: [
        ],
        Housing: [
        ],
        Utilities: [
        ],
        Food: [
        ],
        Medical: [
        ],
        Personal: [
        ],
      }

      for (var i = 0; i < infoArr.length; i++) {
        // console.log(infoArr[i]);
        budgetInfo[infoArr[i].category].push(
          {
            description: infoArr[i].description,
            amount_spent: infoArr[i].amount_spent,
            createdAt: infoArr[i].createdAt
          }
        )
        // console.log(infoArr[i])
      }
      console.log(budgetInfo);
      res.render('index', { dbBudget: budgetInfo });

    });
  });
  /* 


    arrs are objects
    var arr = [1,2,3] arr.push(4)
    arr[1] = 2
    obj.1 = 2
    var obj = {
      0: 1,
      1: 2,
      2: 3,
      3: 4,
      length: 4
    }


      */




  app.get("/budget", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

};
