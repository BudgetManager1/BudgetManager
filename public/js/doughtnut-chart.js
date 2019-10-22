var Chart = require('chart.js');

// var budgetChart = new Chart($('#doughnut-chart'), {
//     type: 'doughnut',
//     data: {
//         labels: ['Food', 'Travel', 'Clothing', 'Entertainment', 'Utilities', 'Housing', 'Medical'],
//         datasets: [{
//             label: 'Money Spent',
//             data: [10, 25, 40, 67, 88, 100, 35]
//         }]
//     },
//     options: {
//         title: {
//             display: true,
//             text: 'Monthly Budget Breakdown'
//         }
//     }
// });
new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [{
            label: "Population (millions)",
            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
            data: [2478, 5267, 734, 784, 433]
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Predicted world population (millions) in 2050'
        }
    }
});