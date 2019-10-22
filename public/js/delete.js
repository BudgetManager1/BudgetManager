$(document).ready(function () {
    console.log("document ready")

$("#deletebutton").on("click", function(event) {
    console.log("you clicked me");
    var id = $(this).data("id");
    // Send the DELETE request.
    $.ajax("/api/user_data/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted your transaction", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

}); // end document ready