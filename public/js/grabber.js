$(document).ready(function () {
    console.log("document ready")

    var spentInput = $("#spent");
    var category = $("#category");
    var regEx = /^[0-9]+([.,][0-9]{2})?$/g;

    $(document).on("submit", "#user-spending", grabUserSubmit);

    function grabUserSubmit(event) {
        event.preventDefault();
        $.get('/api/user_data', function (userData) {   // gets the current user data
            // console.log(spentInput);
            var spentObj = spentInput.val().trim();     // console.log(spentTest);
            var spentArr = spentObj.match(regEx);       // console.log(spentVal);  // spentVal returns as an object 
            var spentVal = spentArr.join("");           // console.log(spentVal); converts back to string that only takes in integers and 2 decimal places

            var description = $('#name').val().trim();
            // console.log("clicked")
            // won't accept the form if fields have not been filled out
            if (!spentVal) {                            // console.log("user wants to submit form!") 
                return;
            }
            insertData({
                amount_spent: spentVal,
                category: category.val().trim(),
                description: description,
                UserId: userData.id,
            });
        }).then(function () {
            location.reload();
        });
    }

    function insertData(budgetData) {               // console.log(budgetData) -- object
        $.post("/api/budget", budgetData)
            .then(grabBudget);                      // console.log(grabBudget);
    }

    function grabBudget() {
        $.get('/api/budget', function (res) {
            // console.log(res);
            spentInput.val("");
            category.val("");
        });
    };

    // $(".deletebutton").on("click", function(event) {
    $(document).on("click", ".deletebutton", function () {
        console.log("you clicked me");
        // var id = $(this).data("id");
        // Send the DELETE request.
        // $.ajax("/api/user_data/" + id, {
        //   type: "DELETE"
        // }).then(
        //   function() {
        // console.log("deleted your transaction", id);
        // Reload the page to get the updated list
        // location.reload();
        //   }
        // );
    });
}); // end document ready




// Old functions

    // function grabBudget() {
    //     $.get('/api/budget', function (res) {
    //         console.log(res);
    //         var rowsToAdd = [];
    //         for (var i = 0; i < res.length; i++) {
    //             rowsToAdd.push(createBudgetRow(res[i]));
    //         }
    //         // renderBudget(rowsToAdd);     // not created yet
    //         spentInput.val("");
    //         category.val("");                       // remove once we create the dropdown menu for categories
    //     });
    // }

    // function createBudgetRow(budgetData) {
    //     console.log(budgetData);
    //     var newTableRow = $("<tr>");
    //     newTableRow.data("Budget", budgetData);
    //     newTableRow.append(`<td> + ${budgetData.name} + </td>`);
    //     // if (budgetData.User)
    // }