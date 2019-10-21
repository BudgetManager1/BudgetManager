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
});


// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.dropdown-trigger');
//     var instances = M.Dropdown.init(elems, options);
    
// });

  // Or with jQuery

  // $('.dropdown-trigger').dropdown();


  // $('.dropdown-trigger + .dropdown-content').on('click', function(event) {
  //   event.stopPropagation();
  //   $('.dropdown-trigger').dropdown();
  // });
  
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
  });
  $(document).ready(function(){
    $('.modal').modal();
  });
  