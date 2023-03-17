function ExecuteScript(strId)
{
  switch (strId)
  {
      case "614uqwa4Gts":
        Script1();
        break;
      case "62fMAVMV3qE":
        Script2();
        break;
      case "5X6r8Rjxs8z":
        Script3();
        break;
      case "6hu0uWx0kqo":
        Script4();
        break;
      case "6JM8Gxz4jnh":
        Script5();
        break;
      case "5WeTv67dAbP":
        Script6();
        break;
      case "6MvG4UMH3zg":
        Script7();
        break;
      case "5XE4o11V76U":
        Script8();
        break;
  }
}

function Script1()
{
  //StoreQuestion();

var player = GetPlayer();
var question = {
    QuestionId: 0,
    QuestionTitle: '',
    QuestionBody: '',
    CorrectResponse: '',
    LearnerResponse: '',
    QuestionDurration: 0,
    QuestionScore: 0
}

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
    //window.QuizObj = QuizObj;
    console.log('Finsh Load learner reponse!');

}

function Script2()
{
  //StoreQuestion();

var player = GetPlayer();
var question = {
    QuestionId: 0,
    QuestionTitle: '',
    QuestionBody: '',
    CorrectResponse: '',
    LearnerResponse: '',
    QuestionDurration: 0,
    QuestionScore: 0
}

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
    //window.QuizObj = QuizObj;
    console.log('Finsh Load learner reponse!');

}

function Script3()
{
  //StoreQuestion();

var player = GetPlayer();
var question = {
    QuestionId: 0,
    QuestionTitle: '',
    QuestionBody: '',
    CorrectResponse: '',
    LearnerResponse: '',
    QuestionDurration: 0,
    QuestionScore: 0
}

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
    //window.QuizObj = QuizObj;
    console.log('Finsh Load learner reponse!');

}

function Script4()
{
  //StoreQuestion();

var player = GetPlayer();
var question = {
    QuestionId: 0,
    QuestionTitle: '',
    QuestionBody: '',
    CorrectResponse: '',
    LearnerResponse: '',
    QuestionDurration: 0,
    QuestionScore: 0
}

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
    //window.QuizObj = QuizObj;
    console.log('Finsh Load learner reponse!');

}

function Script5()
{
  var player = GetPlayer();
var QuizObjStr = player.GetVar('QuizObjStr');
QuizObj = JSON.parse(QuizObjStr);

// Loding question 1 data:
player.SetVar('qTitle1',QuizObj.data[0].QuestionTitle);
player.SetVar('qBody1',QuizObj.data[0].QuestionBody);
player.SetVar('CorrAns1',QuizObj.data[0].CorrectResponse);
player.SetVar('LearnAns1',QuizObj.data[0].LearnerResponse);
player.SetVar('qTime1',QuizObj.data[0].QuestionDurration/1000);
player.SetVar('qPoints1',QuizObj.data[0].QuestionScore);

// Loding question 2 data:
player.SetVar('qTitle2',QuizObj.data[1].QuestionTitle);
player.SetVar('qBody2',QuizObj.data[1].QuestionBody);
player.SetVar('CorrAns2',QuizObj.data[1].CorrectResponse);
player.SetVar('LearnAns2',QuizObj.data[1].LearnerResponse);
player.SetVar('qTime2',QuizObj.data[1].QuestionDurration/1000);
player.SetVar('qPoints2',QuizObj.data[1].QuestionScore);
console.log('Finish loading questions to table!');

}

function Script6()
{
  var player = GetPlayer();
// Define load script function with Promise:
function LoadSCcript(src) {
  return new Promise((resolve, reject) => {
    var arr = src.split("/");
    var last_item = arr.length - 1;
    var file_name = arr[last_item];
    var script = document.createElement("script");

    script.src = src;
    document.getElementsByTagName("head")[0].appendChild(script);

    script.onload = function () {
      resolve("Script: " + file_name + " loaded and ready");
    };
    script.onerror = function () {
      reject("Faild to load the script: " + file_name);
    };
  }); // end of Promise
} // end of function
src = "story_content/external_files/sprestlib.js";
// Calling Promise:
LoadSCcript(src)
    .then((data) => {
        console.log(data);
        player.SetVar('SprestlibMinLoaded', true);
        ScriptsLoaded = player.GetVar('ScriptsLoaded') + 1;
        player.SetVar('ScriptsLoaded', ScriptsLoaded);
        src = "story_content/external_files/jquery.min.js";
        LoadSCcript(src)
            .then((data) => {
                console.log(data);
                player.SetVar('JqueryMinLoaded', true);
                ScriptsLoaded = player.GetVar('ScriptsLoaded') + 1;
                player.SetVar('ScriptsLoaded', ScriptsLoaded);
                src = "story_content/external_files/sprestlib.bundle.js";
                LoadSCcript(src)
                    .then((data) => {
                        console.log(data);
                        player.SetVar('SprestlibBundleLoaded', true);
                        ScriptsLoaded = player.GetVar('ScriptsLoaded') + 1;
                        player.SetVar('ScriptsLoaded', ScriptsLoaded);
                        src = "story_content/external_files/store-quiz-data.js";
                        LoadSCcript(src)

                            .then((data) => {
                                console.log(data);
                                player.SetVar('DataQuizLoaded', true);
                                ScriptsLoaded = player.GetVar('ScriptsLoaded') + 1;
                                player.SetVar('ScriptsLoaded', ScriptsLoaded);
                                var options = { baseUrl: 'https://121tikshuv.sharepoint.com/sites/test-2' };
                                user = {};
                                // Get current user:
                                sprLib.user(options).info()
                                    .then(function (objUser) {
                                        //console.log(objUser);
                                        player.SetVar('StudentName',objUser.Title);
                                        player.SetVar('StudentId',objUser.Email)
                                      
                                    });
                            })
                            .catch((error) => {
                                console.log(error);
                            });

                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    })
    .catch((error) => {
        console.log(error);
    });

}

function Script7()
{
  // Store Course data into sharepoint:
CourseObj = StoreQuiz();
window.CourseObj = CourseObj;
url = '//121tikshuv.sharepoint.com/sites/test-2';

GetRequestDigest(url)
    .then((data) => {
    
        url = '//121tikshuv.sharepoint.com/sites/test-2';
        GetRequestDigest(url)
            .then((data) => {
                options = {
                    name: 'Grades',
                    baseUrl: '//121tikshuv.sharepoint.com/sites/test-2',
                    requestDigest: RequestDigest
                };
                sprLib.list(options)
                    .create({
                        Title: 'grade',
                        Durration: CourseObj.Durration.toString(),
                        CourseName: CourseObj.CourseName.toString(),
                        StudentId: CourseObj.StudentId.toString(),
                        StudentName: CourseObj.StudentName.toString(),
                        Attempts: CourseObj.Attempts.toString(),
                        quizScore: CourseObj.quizScore.toString()
                    })
                    .then(function(objItem) {
                        console.log('New Item:');
                        console.table(objItem);
                    })
                    .catch(function(strErr) {
                        console.error(strErr);
                    });

            })
            .catch((error) => {
                console.log(error);
            });

    })
    .catch((error) => {
        console.log(error);
    });
}

function Script8()
{
  
url = '//121tikshuv.sharepoint.com/sites/test-2';
GetRequestDigest(url)
    .then((data) => {
        RequestDigest = data;
        QuizObj = GetQuestions();
        GetRequestDigest(url)
            .then((data) => {
                options = {
                    name: 'Interactions',
                    baseUrl: url,
                    requestDigest: RequestDigest
                };
                for (question of QuizObj.data) {
                    sprLib.list(options)
                        .create({
                            Title: 'question',
                            QuestionId: question.QuestionId.toString(),
                            QuestionTitle: question.QuestionTitle.toString(),
                            QuestionBody: question.QuestionBody.toString(),
                            CorrectResponse: question.CorrectResponse.toString(),
                            LearnerResponse: question.LearnerResponse.toString(),
                            QuestionDurration: question.QuestionDurration.toString(),
                            QuestionScore: question.QuestionScore.toString()
                        })
                        .then(function(objItem) {
                            console.log('New Item:');
                            console.log(objItem);
                        })
                        .catch(function(strErr) {
                            console.error(strErr);
                        });


                }

            })
            .catch((error) => {
                console.log(error);
            });

    })
    .catch((error) => {
        console.log(error);
    });
}

