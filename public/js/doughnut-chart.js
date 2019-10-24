var budgetData = [0, 0, 0, 0, 0, 0, 0, 0];
var budgetArr = ['food', 'travel', 'clothing', 'entertainment', 'utilities', 'housing', 'medical', 'personal'];
for (var i = 0; i < budgetData.length; i++) {
    $(`span[data-category='${budgetArr[i]}']`).each(function () {
        budgetData[i] += +$(this).data('amount');
    });
}
var total = 0;
for (var i = 0; i < budgetData.length; i++) {
    total += budgetData[i];
}

Chart.defaults.global.defaultFontColor = '#000000'

new Chart(document.getElementById("doughnut-chart").getContext('2d'), {
    type: 'doughnut',
    data: {
        labels: [`Food`, `Travel`, `Clothing`, `Entertainment`, `Utilities`, `Housing`, `Medical`, `Personal`],
        datasets: [{
            label: 'Money Spent',
            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#ff9900", "cc0066", "#006666"],
            data: budgetData
        }]
    },
    options: {
        title: {
            display: true,
            fontSize: 24,
            fontStyle: 'bold',
            text: ['Budget Breakdown', `(Total Spent: $${total})`]
        },
        legend: {
            position: 'right',
            labels: {
                fontSize: 16
            }
        }
    }
});