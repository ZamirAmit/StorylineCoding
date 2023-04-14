url = "grades-data.json";

async function fetchDataFromApi() {
    const res = await fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    });
    const json = await res.json();
    return json;

}


function getDataFromJson(json) {
    data = json.data;
    // All this variables have to be global:
    let dashboardObject = {
        totalGrades: 0,
        totalTime: 0,
        passAmount: 0,
        failAmount: 0,
        frequency: {}

    }
    for (_line of data) {
        // += is short for: totalGrades = totalGrades +_line.StudentGrade;
        dashboardObject.totalGrades += _line.StudentGrade;
        dashboardObject.totalTime += _line.StudentTotalTime;
        if (dashboardObject.frequency[_line.StudentGrade]) {
            //console.log(_line.StudentGrade);
            dashboardObject.frequency[_line.StudentGrade] += 1;

        } else {
            dashboardObject.frequency[_line.StudentGrade] = 1;

        }
        // Check if score has Pass status:
        if (_line.GradeStatus == 'Pass') {
            dashboardObject.passAmount++; // Add to pass
        } else {
            dashboardObject.failAmount++; // Add to fail
        }
    }
    dataLine = [
        ['Amount', 'Grade']
    ];
    for (key of Object.keys(dashboardObject.frequency)) {
        dataLine.push([parseInt(key), dashboardObject.frequency[key]]);

    }
    dashboardObject.dataLine = dataLine;
    delete dashboardObject.frequency;
    dashboardObject.studentsAmount = data.length;
    // Average  = sum of group / amount of group.
    averageGrade = Math.round(dashboardObject.totalGrades / dashboardObject.studentsAmount);
    averageTime = dashboardObject.totalTime / dashboardObject.studentsAmount;
    // Converting from mili-seconds to seconds:
    averageTimeInSeconds = averageTime / 1000;
    // Converting from seconds to minutes:
    averageTimeInMinutes = Math.floor(averageTimeInSeconds / 60);
    // Caculating remainig seconds after subtracting total from seconds:
    remainAverageSecond = Math.round(averageTimeInSeconds - averageTimeInMinutes * 60);
    // Formatting the time to readable version:
    dashboardObject.formatedAverageTime = averageTimeInMinutes + ":" + remainAverageSecond;
    return dashboardObject;
}
async function init() {

    let json = await fetchDataFromApi();
    let sumData = getDataFromJson(json);
    console.log(sumData);
    document.querySelector("#corseName").innerHTML = json.courseName;
    document.querySelector("#total-students-value").innerHTML = sumData.failAmount + sumData.passAmount;
    document.querySelector("#pass-tudents-value").innerHTML = sumData.passAmount;
    document.querySelector("#fail-tudents-value").innerHTML = sumData.failAmount;
    document.querySelector("#average-time-value").innerHTML = sumData.formatedAverageTime;
    let dataPie = [
        ['Task', 'Hours per Day'],
        ['עברו את המבחן', sumData.passAmount],
        ['נכשלו במבחן', sumData.failAmount]
    ];
    let dataLine = sumData.dataLine;
    google.charts.load('current', {
        'packages': ['corechart']
    });
    google.charts.setOnLoadCallback(function() {
        drawPieChart(dataPie);
        drawLinChart(dataLine);
    });
}
init();