google.charts.load('current', {
    'packages': ['corechart']
});
google.charts.setOnLoadCallback(function() {
    drawPieChart();
    drawLinChart();
});

function drawPieChart() {

    let data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],

    ]);

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

function drawLinChart() {
    let data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses'],
        ['2004', 1000, 400],
        ['2005', 1170, 460],
        ['2006', 660, 1120],
        ['2007', 1030, 540]
    ]);

    let options = {
        title: 'Company Performance',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    let chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
    chart.draw(data, options);
}