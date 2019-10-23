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

$.get("/api/goals").then(function (data) {
 console.log(data);
 
 Chart.defaults.global.defaultFontColor = '#000000'

new Chart(document.getElementById("progress-bar").getContext('2d'), {
    type: 'horizontalBar',
    data: {
        labels: [`goal`],
        datasets: [{
            label: "Here's your progress",
            backgroundColor: ["#3e95cd"],
            data: [data[0].total]
        }]
    },
 
});
 
  })
//   console.log(totalAmount);
  
