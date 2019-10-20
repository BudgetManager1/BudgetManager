

var spentInput = $("#spent");
var category = $("#category");
var regEx = /^[0-9]+([.,][0-9]{2})?$/g;

$(document).on("submit", "#user-spending", grabUserSubmit);

function grabUserSubmit(event) {
    event.preventDefault();
    // console.log(spentInput);
    var spentObj = spentInput.val().trim();     // console.log(spentTest);
    var spentArr = spentObj.match(regEx);       //console.log(spentVal);  //spentVal returns as an object 
    var spentVal = spentArr.join("");           //console.log(spentVal); converts back to string that only takes in integers and 2 decimal places
    // console.log("clicked")
    // won't accept the form if fields have not been filled out
    if (!spentVal) {                            // console.log("user wants to submit form!") 
        return;
    }
    insertData({
        amount_spent: spentVal,
        category: category.val().trim(),
        UserId: 1,
    });
}

function insertData(budgetData) {               // console.log(budgetData)
    $.post("/api/budget", budgetData)
        .then(grabBudget);                      // console.log(grabBudget);
}

function grabBudget() {
    $.get('/api/budget', function (res) {
        console.log(res);
        var rowsToAdd = [];
        for (var i = 0; i < res.length; i++) {
            rowsToAdd.push(createBudgetRow(res[i]));
        } 
        renderBudget(rowsToAdd);
        spentInput.val("");
    });
}

function createBudgetRow(budgetData) {
    console.log(budgetData);
    var newTableRow = $("<tr>");
    newTableRow.data("Budget", budgetData);
    newTableRow.append(`<td> + ${budgetData.name} + </td>`);
    // if (budgetData.User)
}