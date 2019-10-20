// $(document).on("click","#user-submit",function() {
//     event.preventDefault();
//     console.log("user hit the submit button");
//     console.log($("#user-spending"));
// });

var spentInput = $("#spent");
var category = $("#category");
// var categoryInput = $(".test");
var regEx = /^[0-9]+([,.][0-9]+)?$/g;

$(document).on("submit", "#user-spending", grabUserSubmit);

function grabUserSubmit(event) {
    event.preventDefault();
    console.log("clicked")
    // won't accept the form if fields have not been filled out
    if (!spentInput.val().trim()) {
        // console.log("user wants to submit form!")
        return;
    } 
        // else if (make userInput obey parameters set by regEx)
        // console.log(spentInput[0].value)
    
    insertData({
        amount_spent: spentInput.val().trim(),
        category: category.val().trim(),
        
    });
}

function insertData(budgetData) {
    console.log(spent)
    $.post("/api/budgets", budgetData)
        .then(grabBudget);
}

function grabBudget() {
    $.get('/api/budgets', function (res) {
        console.log(res);
        var rowsToAdd = [];
        // for (var i = 0; i < res.length; i++) {
        //     rowsToAdd.push(createBudgetRow(res[i]));
        // } 
        renderBudget(rowsToAdd);
        spentInput.val("");
    });
}

function createBudgetRow(budgetData) {
    var newTableRow = $("<tr>");
    newTableRow.data("Budget", budgetData);
    newTableRow.append(`<td> + ${budgetData.name} + </td>`);
    console.log(budgetData);
    // if (budgetData.User)
}