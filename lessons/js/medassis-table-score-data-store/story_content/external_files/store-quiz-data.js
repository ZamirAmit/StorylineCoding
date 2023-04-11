var player = GetPlayer();

var CourseObj = {
    Durration: 0,
    CourseName: 'לומדת טסט',
    StudentId: 'test-student@gmail.com',
    StudentName: 'סטודנט טסט',
    Attempts: 0,
    quizScore: 0
};
var question = {
    QuestionId: 0,
    QuestionTitle: '',
    QuestionBody: '',
    CorrectResponse: '',
    LearnerResponse: '',
    QuestionDurration: 0,
    QuestionScore: 0
}

var data = [];
var player = GetPlayer();
var data = [];
var QuizObj = {};
QuizObj.data = data;

// Define load script function with Promise:
function LoadSCcript(src) {
    return new Promise((resolve, reject) => {
        var arr = src.split("/");
        var last_item = arr.length - 1;
        var file_name = arr[last_item];
        var script = document.createElement("script");

        script.src = src;
        document.getElementsByTagName("head")[0].appendChild(script);

        script.onload = function() {
            resolve("Script: " + file_name + " loaded and ready");
        };
        script.onerror = function() {
            reject("Faild to load the script: " + file_name);
        };
    }); // end of Promise
} // end of function

function StoreQuestion() {

    var QuizObjStr = player.GetVar('QuizObjStr');
    QuizObj = JSON.parse(QuizObjStr);
    if (QuizObj.data) {
        data = QuizObj.data;


    } else {
        QuizObj.data = [];
        data = QuizObj.data;

    }

    question.QuestionId = player.GetVar('QuestionId');
    question.QuestionTitle = player.GetVar('QuestionTitle');
    question.QuestionBody = player.GetVar('QuestionBody');
    question.CorrectResponse = player.GetVar('CorrectResponse');
    question.LearnerResponse = player.GetVar('LearnerResponse');
    question.QuestionDurration = player.GetVar('QuestionDurration');
    question.QuestionScore = player.GetVar('QuestionScore');
    data.push(question)
    QuizObj.data = data;
    QuizObjStr = JSON.stringify(QuizObj);
    player.SetVar('QuizObjStr', QuizObjStr)
    window.QuizObj = QuizObj;

}

function GetQuestions() {

    var QuizObjStr = player.GetVar('QuizObjStr');
    QuizObj = JSON.parse(QuizObjStr);
    return QuizObj;
}

function StoreQuiz() {

    CourseObj.CourseName = document.title;
    CourseObj.Durration = player.GetVar('QuizDurration');
    CourseObj.quizScore = player.GetVar('QuizScore');
    CourseObj.Attempts = player.GetVar('Attempts');
    CourseObj.StudentId = player.GetVar('StudentId');
    CourseObj.StudentName = player.GetVar('StudentName');
    return CourseObj;

}

function GetRequestDigest(url) {
    return new Promise((resolve, reject) => {
        // Must referance JQUERY:
        $.ajax({
            url: url + "/_api/contextinfo",
            type: "POST",
            headers: {
                Accept: "application/json; odata=verbose"
            },

            success: function(data) {

                resolve(data.d.GetContextWebInformation.FormDigestValue);
            },
            error: function(error) {
                reject(error);
            },
        }); // end of request
    }); // end of Promise
} // end of function