
var progressData = [0];
var progress = ['goal'];

$.get("/api/goals").then(function (data) {

    console.log(data);
    var progressInPercent = (data[0].progress / data[0].total) * 100;

    Chart.defaults.global.defaultFontColor = '#000000'

    new Chart(document.getElementById("progress-bar").getContext('2d'), {
        type: 'horizontalBar',
        data: {
            labels: [`goal`],
            datasets: [{
                label: "Here's your progress",
                backgroundColor: ["#3e95cd"],
                data: [progressInPercent],
            }],
        },
        options: {
            scales: { xAxes: [{ id: 'x-axis-1', type: 'linear', position: 'left', ticks: { min: 0, max: 100 } }] },

        }

    });

})
});