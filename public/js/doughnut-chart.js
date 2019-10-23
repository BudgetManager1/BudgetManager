var budgetData = [0, 0, 0, 0, 0, 0, 0];
var budgetArr = ['food', 'travel', 'clothing', 'entertainment', 'utilities', 'housing', 'medical'];
for (var i = 0; i < budgetData.length; i++) {
    $(`span[data-category='${budgetArr[i]}']`).each(function () {
        budgetData[i] += +$(this).data('amount');
    });
}

new Chart(document.getElementById("doughnut-chart").getContext('2d'), {
    type: 'doughnut',
    data: {
        labels: ['Food', 'Travel', 'Clothing', 'Entertainment', 'Utilities', 'Housing', 'Medical'],
        datasets: [{
            label: 'Money Spent',
            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#ff9900", "cc0066"],
            data: budgetData
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Monthly Budget Breakdown'
        }
    }
});