$(document).ready(function () {
    var spentInput = $("#spent");
    var category = $("#category");
    var regEx = /^[0-9]+([.,][0-9]{2})?$/g;
    var updateDesc = $("#updateDescription");
    var updateSpent = $("#updateSpent");

    $(document).on("submit", "#user-spending", grabUserSubmit);

    function grabUserSubmit(event) {
        event.preventDefault();
        $.get('/api/user_data', function (userData) {   // gets the current user data
            var spentObj = spentInput.val().trim();     // console.log(spentTest);
            var spentArr = spentObj.match(regEx);       // console.log(spentVal);  // spentVal returns as an object 
            var spentVal = spentArr.join("");           // console.log(spentVal); converts back to string that only takes in integers and 2 decimal places
            var description = $('#name').val().trim();

            if (!spentVal) {                            // won't accept the form if fields have not been filled out 
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

    function insertData(budgetData) {                   // console.log(budgetData) -- object
        return $.post("/api/budget", budgetData)
            .then(grabBudget);                          // console.log(grabBudget);
    }

    function grabBudget() {
        return $.get('/api/budget', function (res) {
            spentInput.val("");
        });
    };

    $(document).on("click", ".deletebutton", function () {
        var id = $(this).data("id");
        // Send the DELETE request.
        $.ajax({
            method: "DELETE",
            url: "/api/budget/" + id
        }).then(function (data) {
            location.reload();                      // Reload the page to get the updated list
        })
    });

    $(document).on('click', '.updateButton', function () {
        var passId = $(this).attr('data-id')
        $(".userEdit").attr('data-id', passId)
    })

    $(document).on("submit", ".userEdit", function (data) {
        event.preventDefault();
        var updateDescInput = updateDesc.val().trim()
        var updateSpentInput = updateSpent.val().trim();
        var editID = $(this).attr('data-id');
        $.ajax({
            method: "PUT",
            url: "api/budget",
            data: {
                description: updateDescInput,
                amount_spent: updateSpentInput,
                id: editID,
            }
        }).then(function () {
            location.reload();
        })
    });

});     