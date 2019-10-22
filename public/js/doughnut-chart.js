new Chart(document.getElementById("doughnut-chart").getContext('2d'), {
    type: 'doughnut',
    data: {
        labels: ['Food', 'Travel', 'Clothing', 'Entertainment', 'Utilities', 'Housing', 'Medical'],
        datasets: [{
            label: 'Money Spent',
            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#6699ff", "cc0066"],
            data: [10, 25, 40, 67, 88, 100, 35]
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Monthly Budget Breakdown'
        }
    }
});