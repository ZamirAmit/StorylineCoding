url = "data/grades-data.json";

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
        failAmount: 0

    }
    for (_line of data) {
        // += is short for: totalGrades = totalGrades +_line.StudentGrade;
        dashboardObject.totalGrades += _line.StudentGrade;
        dashboardObject.totalTime += _line.StudentTotalTime;

        // Check if score has Pass status:
        if (_line.GradeStatus == 'Pass') {
            dashboardObject.passAmount++; // Add to pass
        } else {
            dashboardObject.failAmount++; // Add to fail
        }
    }

    // Average  = sum of group / amount of group.
    averageGrade = Math.round(totalGrades / studentsAmount);
    averageTime = totalTime / studentsAmount;
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
    data = json.data;
    console.log(getDataFromJson(json));
}
init();