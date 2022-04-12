// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

const productLabel = [];
const percentValue = [];

    Promise.all([
            fetch('http://localhost:8080/topproduct')
        ]).then(function (responses) {
            // Get a JSON object from each of the responses
            return Promise.all(responses.map(function (response) {
                return response.json();
            }));
        }).then(function (data) {
            // Log the data to the console
            for (var i = 0; i < data.length; i++) {
                        var obj = data[i]
                        for(var j = 0; j < obj.length; j++ ){

                            var dataObj = obj[j];
                            //let monthName = obj.month;
                            productLabel.push(dataObj.product);
                            percentValue.push(dataObj.percentage);
                            console.log(productLabel)
                            //console.log(obj.month);
                         }

                    }
                    console.log(productLabel)
        }).catch(function (error) {
            // if there's an error, log it
            console.log(error);
        });
    // Function to define innerHTML for HTML div


// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: productLabel,
    datasets: [{
      data: percentValue,
      backgroundColor:  ['#4e73df', '#1cc88a', '#36b9cc'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: true
    },
    //cutoutPercentage: 80,
  },
});
function updateGraph(chart) {
    chart.update();
}
setInterval(function () {
    updateGraph(myPieChart);
  }, 1000);
