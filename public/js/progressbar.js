var progressData = [0];
var progress = ['goal'];
// for (var i = 0; i < progressData.length; i++) {
//     $(`span[data-category='${progress[i]}']`).each(function () {
//         progressData[i] += +$(this).data('amount');
//     });
// }
// var total = 0;
// for(var i=0;i<progressData.length;i++){
//     total += progressData[i];
// }

Chart.defaults.global.defaultFontColor = '#000000'

new Chart(document.getElementById("progress-bar").getContext('2d'), {
    type: 'horizontalBar',
    data: {
        labels: [`goal`],
        datasets: [{
            label: "Here's your progress",
            backgroundColor: ["#3e95cd"],
            data: [10]
        }]
    },
    // options = {
    //     scales: {
    //         xAxes: [{
    //             barPercentage: 0.5,
    //             barThickness: 6,
    //             maxBarThickness: 8,
    //             minBarLength: 2,
    //             gridLines: {
    //                 offsetGridLines: true
    //             }
    //         }]
    //     }
    // }
});