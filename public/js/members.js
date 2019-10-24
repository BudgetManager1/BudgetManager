var moneyChange = 0;
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
  // edit transaction modal
  document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.modal3');
    var instances = M.Modal.init(elems, options);
  });
  $('.modal3').modal();

  $('select').formSelect();

  $("#submit1").on("click", function (event) {
    event.preventDefault();
    var goal = {
      goalName: $("#goal").val().trim(),
      total: $("#amount").val().trim(),
      addition: $("#addMoney").val().trim()
    };
    // var total = 100;
    // var progress = total / goal.addition;

    console.log(progress)

    $.post("/api/goals", goal)
      .then(function (data) {
        // alert("adding goal")
        $("#goal").val("");
        $("#amount").val("");
        $("#addMoney").val("");
        grabGoals();
        $('.modal.open').modal('close');
        location.reload();
      });
  });

  function grabGoals() {
    $.get("/api/goals").then(function (data) {
      // console.log("this is goal data")
      // console.log(data)
      $("#wishList").text(`${data[0].wish}`)
      $("#cost").text(`$${data[0].total}`)
      // $("#progress-bar").html(`${data[0].progress}`)
    });
  }
  grabGoals();
  win
});
