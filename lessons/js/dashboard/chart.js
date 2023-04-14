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
        legend: { position: 'none' }
    };

    let chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
    chart.draw(data, options);
}