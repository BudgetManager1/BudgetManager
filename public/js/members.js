$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.email);
  });


  document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, options);
  });

  $('.collapsible').collapsible();

  //New Transaction Function
  document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
  });

  $('.modal').modal();
  document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });

  //Goal Wish list Function
  document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.modal1');
    var instances = M.Modal.init(elems, options);
  });

  $('.modal1').modal();
  document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });

  $('select').formSelect();

  //progress for bar
  var i = 0;
  function move() {
    if (i == 0) {
      i = 1;
      var elem = document.getElementById("myBar");
      var width = 10;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width + "%";
        }
      }
    }
  }
  
  
  $("#submit1").on("click", function (event) {
    event.preventDefault();
    
    var goal = {
      goalName: $("#goal").val().trim(),
      total: $("#amount").val().trim()
    };
    
    $.post("/api/goals", goal)
    
    .then(function(data){
      console.log(data);
      
      alert("adding goal")
      
      $("#goal").val(""),
      $("#amount").val("")
      grabGoals()
      // $("#wishList").text(`${data.goalName}`)
      // $("#cost").text(`$${data.total}`)
    });
  })
  

  function grabGoals(){
    $.get("/api/goals").then(function (data) {
      console.log("this is goal data")
     console.log(data)
     $("#wishList").text(`${data[0].wish}`)
      $("#cost").text(`$${data[0].total}`)
    });

  }

  grabGoals()
  // $.get("/api/goals", function(req, res){
  //   console.log(res);
  //   $("#wishlist").text(`${data.goalName}`),
  //   $("#cost").text(`$${data.total}`)
  // });

  
});



// app.get("/api/goals", function(req, res) {
//   var dbQuery = "SELECT * FROM Goals";

//   connection.query(dbQuery, function(err, result) {
//     if (err) throw err;
//     res.json(result);
//   });
// });