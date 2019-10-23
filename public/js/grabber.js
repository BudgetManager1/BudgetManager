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
            return insertData({
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
        return $.post("/api/budget", budgetData)
            .then(grabBudget);                      // console.log(grabBudget);
    }

    function grabBudget() {
        return $.get('/api/budget', function (res) {
            // console.log(res);
            spentInput.val("");
        });
    };

    $(document).on("click", ".deletebutton", function () {
        var id = $(this).data("id");
        console.log(id)
        // Send the DELETE request.
        $.ajax({
            method: "DELETE",
            url: "/api/budget/" + id
        }).then(function (data) {
            location.reload();                      // Reload the page to get the updated list
        })
    });

    $(document).on("click", ".updateButton", function () {   
        var id = $(this).data("id");
        console.log(id)
    });

});     // end document ready