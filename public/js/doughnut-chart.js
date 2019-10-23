var budgetData = [];
console.log($("#food-11").data("test"));
// for(var i=0;i<)

new Chart(document.getElementById("doughnut-chart").getContext('2d'), {
    type: 'doughnut',
    data: {
        labels: ['Food', 'Travel', 'Clothing', 'Entertainment', 'Utilities', 'Housing', 'Medical'],
        datasets: [{
            label: 'Money Spent',
            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#ff9900", "cc0066"],
            data: [35, 35, 35, 35, 35, 45, 45]
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Monthly Budget Breakdown'
        }
    }
});