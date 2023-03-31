// This is the referance to the other external JS file:
let data = studentsData.data;

// The amount of object children is the amount of students
let studentsAmount = data.length;

// All this variables have to be global:
let totalGrades = 0;
let totalTime = 0;
let passAmount = 0;
let failAmount = 0;

for (_line of data) {
    // += is short for: totalGrades = totalGrades +_line.StudentGrade;
    totalGrades += _line.StudentGrade;
    totalTime += _line.StudentTotalTime;

    // Check if score has Pass status:
    if (_line.GradeStatus == 'Pass') {
        passAmount++; // Add to pass
    } else {
        failAmount++; // Add to fail
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
formatedAverageTime = averageTimeInMinutes + ":" + remainAverageSecond;

// Loading all calculations into DOM elements:
document.getElementById('average-score').innerHTML = averageGrade;
document.getElementById('average-time').innerHTML = formatedAverageTime;
document.getElementById('amount-pass').innerHTML = passAmount;
document.getElementById('amount-fail').innerHTML = failAmount;
document.getElementById('amount').innerHTML = studentsAmount;