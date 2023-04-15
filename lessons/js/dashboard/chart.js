function drawPieChart(dataPie) {

    let data = google.visualization.arrayToDataTable(dataPie);

    let options = {
        legend: {
            position: 'none'
        },
        chartArea: {
            width: "100%",
            height: "100%"
        }
    };

    let chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);

}

function drawLinChart(dataLine) {
    let data = google.visualization.arrayToDataTable(dataLine);

    let options = {
        curveType: 'function',
        legend: {
            position: 'none'
        }
    };

    let chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
    chart.draw(data, options);
}



function drawBarChart(dataBar) {
    var data = new google.visualization.arrayToDataTable(dataBar);

    var options = {
        legend: { position: 'none' },
        bar: { groupWidth: "90%" }
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('bar_chart'));
    // Convert the Classic options to Material options.
    chart.draw(data, google.charts.ColumnChart(options));
};