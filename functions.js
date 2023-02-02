// This is the main function for the timer:
function SetTimer() {
    try {
        document.querySelector(".timer-text").style.display = "none"
        document.querySelector(".timer-wheel.cs-pie").style.display = "none"
        window.x = setInterval(function() {

            timer = document.querySelector(".timer-text").innerText;
            const player = GetPlayer();
            player.SetVar("timer", timer);
        }, 1000);
    } catch (err) {
        console.log(err.name);
        console.log(err.message);
        console.log(err.stack);


    }
}

function SetProgressBar() {
    try {
        var player = GetPlayer();
        var buttons = [];
        for (i = 1; i <= 25; i++) {
            new_btn = "btn_" + i;
            buttons.push(player.GetVar(new_btn));
        }
        progress_exam = buttons.filter(x => x == "Completed").length;
        player.SetVar("progress_exam", progress_exam);
        progress_message = progress_exam + " שאלות הושלמו מתוך 25"
        player.SetVar("progress_message", progress_message);
        //return buttons


    } catch (err) {
        console.log(err.name);
        console.log(err.message);
        console.log(err.stack);


    }
}

function ReverseEnglish(str) {
    var regex_eng = new RegExp("^[A-Za-z]|[A-Za-z]|[A-Za-z]$");
    var regex_heb = new RegExp("^[\u0590-\u05fe]|[\u0590-\u05fe]$");
    var regex_valid = new RegExp(regex_eng + "|" + regex_heb);
    IsNotUndefined = typeof str !== 'undefined';
    if (IsNotUndefined) {
        words = str.split(' ');
        arr_prev_words = [];
        arr_curr_words = [];

        for (word of words) {
            IsEnglish = regex_eng.test(word)
            if (IsEnglish) {
                word = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
                arr_prev_words.push(word);
                letters = word.split('');
                letters.reverse();
                word = letters.join('');
                arr_curr_words.push(word);


            }
            for (i = 0; i <= arr_prev_words.length; i++) {
                str = str.replace(arr_prev_words[i], arr_curr_words[i]);
            }

        }
        return str;


    } else { // value is undefined
        console.log("the value is undefined!");


    }
}

function ReverseNumbersInsideString(str) {

    numbers = FindAllNumbersInString(str);
    if (Array.isArray(numbers)) {
        reverse_numbers = numbers.map(x => ReverseNumber(x));
        ////console.log(reverse_numbers);
        for (i = 0; i <= numbers.length; i++) {
            str = str.replace(numbers[i], reverse_numbers[i]);
        }
        ////console.log(str);
        return str;

    } else {
        return str;
    }


}

function ReverseNumber(num) {
    //console.log(num);
    num = num.toString();
    num = num.split('');
    num = num.reverse();
    num = num.join('');
    parseFloat(num) * Math.sign(num);
    //console.log(num);
    return num;


}

function FindAllNumbersInString(str) {

    var regex = /\d+/g;
    var matches = str.match(regex);
    ////console.log(str);
    return matches;


}

function BuidQuestion() {

    var player = GetPlayer();
    exam_obj_shfl = JSON.parse(player.GetVar("exam_obj_shfl"));
    var question_id = player.GetVar("question_id");
    question_body = ReverseNumbersInsideString(exam_obj_shfl.data[question_id].question_body);
    question_number = parseInt(player.GetVar("interaction_number")) + 1;
    question_title = ReverseNumbersInsideString(question_number + ". " + exam_obj_shfl.data[question_id].question_title);
    subject_body = ReverseNumbersInsideString(exam_obj_shfl.data[question_id].subject_body);
    ans1 = ReverseNumbersInsideString(exam_obj_shfl.data[question_id].ans1);
    ans2 = ReverseNumbersInsideString(exam_obj_shfl.data[question_id].ans2);
    ans3 = ReverseNumbersInsideString(exam_obj_shfl.data[question_id].ans3);
    ans4 = ReverseNumbersInsideString(exam_obj_shfl.data[question_id].ans4);

    chapter_body = ReverseNumbersInsideString(exam_obj_shfl.data[question_id].chapter_body.replace("\r", ""));
    acronym = "";
    acronym_obj = exam_obj_shfl.data[question_id].acronym;
    /*
    if (acronym_obj.length > 0) {
 
        if (acronym_obj.indexOf("|")) {
 
            acronym_obj.split("|").map((acr) => {
                acronym += " " + acr;
            });
 
            acronym = ReverseNumbersInsideString(acronym)
        } else {
 
            acronym = ReverseNumbersInsideString(acronym_obj);
        }
 
        player.SetVar("acronym", acronym);
    } else {
        player.SetVar("acronym", "");
    }
*/
    player.SetVar("acronym", acronym_obj);
    player.SetVar("question_body", question_body);


    subject_body_rvs = ReverseEnglish(subject_body);
    chapter_body_rvs = ReverseEnglish(chapter_body);
    ans1_rvs = ReverseEnglish(ans1);
    ans2_rvs = ReverseEnglish(ans2);
    ans3_rvs = ReverseEnglish(ans3);
    ans4_rvs = ReverseEnglish(ans4);
    question_title_rvs = ReverseEnglish(question_title);
    player.SetVar("question_title", question_title_rvs);
    player.SetVar("subject_body", subject_body_rvs);
    player.SetVar("chapter_body", chapter_body_rvs);
    player.SetVar("ans1", ans1_rvs);
    player.SetVar("ans2", ans2_rvs);
    player.SetVar("ans3", ans3_rvs);
    player.SetVar("ans4", ans4_rvs);

    console.log("Finished loading: " + question_id + "!");

}
/*
try {
    BuidQuestion();
} catch (err) {
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);


}
*/



function UpdateInteraction() {

    var player = GetPlayer();
    var interaction = {};
    IsScormCloud = typeof SCORM2004_GrabAPI == "function";
    if (IsScormCloud) {

        interaction_number = player.GetVar("interaction_number");
        interaction.interaction_number = interaction_number;
        current_learner_response = player.GetVar("learner_response");
        interaction.current_learner_response = current_learner_response;
        last_answer_cmi = "cmi.interactions." +
            interaction_number +
            ".learner_response";
        previous_learner_response = SCORM2004_CallGetValue(last_answer_cmi);
        interaction.previous_learner_response = previous_learner_response
        correct_answer_cmi = "cmi.interactions." +
            interaction_number +
            ".correct_responses.0.pattern";
        result_cmi = "cmi.interactions." +
            interaction_number +
            ".result";
        latency_cmi = "cmi.interactions." +
            interaction_number +
            "latency";
        correct_answer = SCORM2004_CallGetValue(correct_answer_cmi);
        interaction.correct_answer = correct_answer;
        previous_answer = SCORM2004_CallGetValue(last_answer_cmi);

        CurrentAnswerIsCorrect = correct_answer == current_learner_response;
        PreviousAnswerWasCorrect = SCORM2004_CallGetValue(result_cmi) == "correct";
        interaction.PreviousAnswerWasCorrect = PreviousAnswerWasCorrect;
        PreviousCurrentAreIdentical = previous_answer == current_learner_response;
        interaction.CurrentAnswerIsCorrect = CurrentAnswerIsCorrect;
        end_date = new Date;
        end_time = end_date.getTime();
        start_time = player.GetVar("start_time");
        additional_latency = end_time - start_time;
        interaction.additional_latency = additional_latency;

        if (CurrentAnswerIsCorrect &&
            !PreviousAnswerWasCorrect) {

            //alert("ענית נכון והרווחת 4 נקודות!");

            // update new learner response:
            SCORM2004_CallSetValue(last_answer_cmi, current_learner_response);

            // increasing  learner score:
            cmi_latency = SCORM2004_CallGetValue(latency_cmi);
            previous_latency = ConvertScorm2004TimeToMS(cmi_latency);
            new_latency = additional_latency;
            new_cmi_latency = ConvertMilliSecondsToSCORMTime(new_latency);
            SCORM2004_CallSetValue(latency_cmi, new_cmi_latency);

            // Update question result:
            SCORM2004_CallSetValue(result_cmi, "correct");

            // Increasinglearner score:
            previous_score = parseInt(SCORM2004_GetScore());
            new_score = previous_score + 4;
            SCORM2004_SetScore(new_score, 100, 0);
            console.log("ScormCloud interaction was updated!");


        } else if (!CurrentAnswerIsCorrect &&
            PreviousAnswerWasCorrect) {

            //alert("התשובה הקודמת היתה נכונה והנוכחית השגויה ולכן איבדת 4 נקודות!");

            // update new learner response:
            SCORM2004_CallSetValue(last_answer_cmi, current_learner_response);

            // update new latency:
            cmi_latency = SCORM2004_CallGetValue(latency_cmi);
            previous_latency = ConvertScorm2004TimeToMS(cmi_latency);
            new_latency = additional_latency;
            new_cmi_latency = ConvertMilliSecondsToSCORMTime(new_latency);
            SCORM2004_CallSetValue(latency_cmi, new_cmi_latency);

            // Update question result:
            SCORM2004_CallSetValue(result_cmi, "incorrect");

            // Decreasing learner score:
            previous_score = parseInt(SCORM2004_GetScore());
            new_score = previous_score == 0 ? 0 : previous_score - 4;
            SCORM2004_SetScore(new_score, 100, 0);
            console.log("ScormCloud interaction was updated!");


        } else if (!CurrentAnswerIsCorrect &&
            !PreviousAnswerWasCorrect &&
            !PreviousCurrentAreIdentical) {

            //alert("התשובה הקודמת היתה שגויה וגם הנוכחית ולכן לא קיבלת נקודות");

            // update new learner response:
            SCORM2004_CallSetValue(last_answer_cmi, current_learner_response);

            // update new latency:
            cmi_latency = SCORM2004_CallGetValue(latency_cmi);
            previous_latency = ConvertScorm2004TimeToMS(cmi_latency);
            new_latency = additional_latency;
            new_cmi_latency = ConvertMilliSecondsToSCORMTime(new_latency);
            SCORM2004_CallSetValue(latency_cmi, new_cmi_latency);
            console.log("ScormCloud interaction was updated!");

        }
    }


    IsSapErp = typeof API == "object";
    if (IsScormCloud) {
        interaction_number = player.GetVar("interaction_number");
        current_learner_response = player.GetVar("learner_response");
        //console.log(current_learner_response);
        last_answer_cmi = "cmi.interactions." +
            interaction_number +
            ".learner_response";
        previous_learner_response = API.LMSGetValue(last_answer_cmi);
        correct_answer_cmi = "cmi.interactions." +
            interaction_number +
            ".correct_responses.0.pattern";
        result_cmi = "cmi.interactions." +
            interaction_number +
            ".result";
        latency_cmi = "cmi.interactions." +
            interaction_number +
            "latency";
        correct_answer = API.LMSGetValue(correct_answer_cmi);
        previous_answer = API.LMSGetValue(last_answer_cmi);
        CurrentAnswerIsCorrect = correct_answer == current_learner_response;
        PreviousAnswerWasCorrect = API.LMSGetValue(result_cmi) == "correct";
        PreviousCurrentAreIdentical = previous_answer == current_learner_response;
        end_date = new Date;
        end_time = end_date.getTime();
        start_time = player.GetVar("start_time");
        additional_latency = end_time - start_time;

        if (CurrentAnswerIsCorrect &&
            !PreviousAnswerWasCorrect) {

            //alert("ענית נכון והרווחת 4 נקודות!");

            // update new learner response:
            API.LMSSetValue(last_answer_cmi, current_learner_response);

            // increasing  learner score:
            cmi_latency = API.LMSGetValue(latency_cmi);
            previous_latency = ConvertScorm2004TimeToMS(cmi_latency);
            new_latency = additional_latency;
            new_cmi_latency = ConvertMilliSecondsToSCORMTime(new_latency);
            API.LMSSetValue(latency_cmi, new_cmi_latency);

            // Update question result:
            API.LMSSetValue(result_cmi, "correct");

            // Increasinglearner score:
            previous_score = parseInt(SCORM2004_GetScore());
            new_score = previous_score + 4;
            API.LMSSetValue(new_score, 100, 0);
            console.log("ScormCloud interaction was updated!");


        } else if (!CurrentAnswerIsCorrect &&
            PreviousAnswerWasCorrect) {

            //alert("התשובה הקודמת היתה נכונה והנוכחית השגויה ולכן איבדת 4 נקודות!");

            // update new learner response:
            API.LMSSetValue(last_answer_cmi, current_learner_response);

            // update new latency:
            cmi_latency = API.LMSGetValue(latency_cmi);
            previous_latency = ConvertScorm2004TimeToMS(cmi_latency);
            new_latency = additional_latency;
            new_cmi_latency = ConvertMilliSecondsToSCORMTime(new_latency);
            API.LMSSetValue(latency_cmi, new_cmi_latency);

            // Update question result:
            API.LMSSetValue(result_cmi, "incorrect");

            // Decreasing learner score:
            previous_score = parseInt(SCORM2004_GetScore());
            new_score = previous_score == 0 ? 0 : previous_score - 4;
            API.LMSSetValue(new_score, 100, 0);
            console.log("ScormCloud interaction was updated!");


        } else if (!CurrentAnswerIsCorrect &&
            !PreviousAnswerWasCorrect &&
            !PreviousCurrentAreIdentical) {

            //alert("התשובה הקודמת היתה שגויה וגם הנוכחית ולכן לא קיבלת נקודות");

            // update new learner response:
            API.LMSSetValue(last_answer_cmi, current_learner_response);

            // update new latency:
            cmi_latency = API.LMSGetValue(latency_cmi);
            previous_latency = ConvertScorm2004TimeToMS(cmi_latency);
            new_latency = additional_latency;
            new_cmi_latency = ConvertMilliSecondsToSCORMTime(new_latency);
            API.LMSSetValue(latency_cmi, new_cmi_latency);
            console.log("ScormCloud interaction was updated!");

        }
    }

    IsLocal = typeof window.Script1 == "function";
    if (IsLocal) {

    }

    //console.log(interaction);

}

/*
try {
    UpdateInteraction();
} catch (err) {
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);


}
*/


function SetLatencyOn() {
    try {
        var start_date = new Date;
        var start_time = start_date.getTime();
        var player = GetPlayer();
        player.SetVar("start_time", start_time);

    } catch (err) {
        console.log(err.name);
        console.log(err.message);
        console.log(err.stack);


    }

}


function SetAnsAsLearnerResponse(ans_number) {
    // Set learner_response id ans1 was chosen:
    var player = GetPlayer();
    exam_obj_shfl = JSON.parse(player.GetVar("exam_obj_shfl"));
    var question_id = player.GetVar("question_id");
    learner_reponse = exam_obj_shfl.data[question_id][ans_number];
    player.SetVar("learner_response", learner_reponse);
}

/*
try {
    SetAns1AsLearnerResponse();
} catch (err) {
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);


}
*/

function SetAns2AsLearnerResponse() {
    // Set learner_response id ans1 was chosen:
    var player = GetPlayer();
    exam_obj_shfl = JSON.parse(player.GetVar("exam_obj_shfl"));
    var question_id = player.GetVar("question_id");
    learner_reponse = exam_obj_shfl.data[question_id].ans2;
    player.SetVar("learner_response", learner_reponse);
}
/*
try {
    SetAns2AsLearnerResponse();
} catch (err) {
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);


}
*/

function SetAns3AsLearnerResponse() {
    // Set learner_response id ans1 was chosen:
    var player = GetPlayer();
    exam_obj_shfl = JSON.parse(player.GetVar("exam_obj_shfl"));
    var question_id = player.GetVar("question_id");
    learner_reponse = exam_obj_shfl.data[question_id].ans3;
    player.SetVar("learner_response", learner_reponse);
}
/*
try {
    SetAns3AsLearnerResponse();
} catch (err) {
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);


}
*/
function SetAns4AsLearnerResponse() {
    // Set learner_response id ans1 was chosen:
    var player = GetPlayer();
    exam_obj_shfl = JSON.parse(player.GetVar("exam_obj_shfl"));
    var question_id = player.GetVar("question_id");
    learner_reponse = exam_obj_shfl.data[question_id].ans4;
    player.SetVar("learner_response", learner_reponse);
}
/*
try {
    SetAns4AsLearnerResponse();
} catch (err) {
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);


}
*/

function SetGrades() {
    var player = GetPlayer();
    var grades = {};
    grades.total = {
        "correct_answers": 0,
        "incorrect_answers": 0,
        "total_amount": 0,
        "score_percent": 0
    };

    IsScormCloud = typeof SCORM2004_GrabAPI == "function";
    interactions_count = SCORM2004_CallGetValue("cmi.interactions._count");
    if (IsScormCloud) {
        for (i = 0; i < interactions_count; i++) {
            description = "cmi.interactions." +
                i +
                ".description";
            chapter_name = SCORM2004_CallGetValue(description).split("-")[0];
            grades[chapter_name] = {
                "correct_answers": 0,
                "incorrect_answers": 0,
                "total_amount": 0,
                "score_percent": 0
            };

        }
        points = [];
        mistakes = [];
        for (i = 0; i < interactions_count; i++) {
            description = "cmi.interactions." +
                i +
                ".description";
            result = "cmi.interactions." +
                i +
                ".result";
            chapter_name = SCORM2004_CallGetValue(description).split("-")[0];
            interaction_result = SCORM2004_CallGetValue(result);
            if (interaction_result == "correct") {
                grades[chapter_name].correct_answers++;
                grades[chapter_name].total_amount++;
                grades.total.correct_answers++;
                grades.total.total_amount++;


            } else {
                grades[chapter_name].incorrect_answers++;
                grades[chapter_name].total_amount++;
                grades.total.incorrect_answers++;
                grades.total.total_amount++;
            }

        }
        grades_obj = {};
        i = 1;
        for (chapter in grades) {
            if (chapter !== "total") {
                grades_obj["chapter" + i] = grades[chapter];
                grades_obj["chapter" + i].description = chapter;
                i++;
            }
            grades_obj.total = grades.total
        }

    }

    IsSapErp = typeof API == 'object';
    if (IsSapErp) {
        for (i = 0; i < interactions_count; i++) {
            description = "cmi.interactions." +
                i +
                ".description";
            chapter_name = API.LMSGetValue(description).split("-")[0];
            grades[chapter_name] = {
                "correct_answers": 0,
                "incorrect_answers": 0,
                "total_amount": 0,
                "score_percent": 0
            };

        }
        points = [];
        mistakes = [];
        for (i = 0; i < interactions_count; i++) {
            description = "cmi.interactions." +
                i +
                ".description";
            result = "cmi.interactions." +
                i +
                ".result";
            chapter_name = API.LMSGetValue(description).split("-")[0];
            interaction_result = API.LMSGetValue(result);
            if (interaction_result == "correct") {
                grades[chapter_name].correct_answers++;
                grades[chapter_name].total_amount++;
                grades.total.correct_answers++;
                grades.total.total_amount++;


            } else {
                grades[chapter_name].incorrect_answers++;
                grades[chapter_name].total_amount++;
                grades.total.incorrect_answers++;
                grades.total.total_amount++;
            }

        }
        grades_obj = {};
        i = 1;
        for (chapter in grades) {
            if (chapter !== "total") {
                grades_obj["chapter" + i] = grades[chapter];
                grades_obj["chapter" + i].description = chapter;
                i++;
            }
            grades_obj.total = grades.total
        }

    }
    grades_obj.total.score_percent = grades_obj.total.correct_answers / grades_obj.total.total_amount * 100;
    grades_obj.chapter1.score_percent = grades_obj.chapter1.correct_answers / grades_obj.total.total_amount * 100;
    grades_obj.chapter2.score_percent = grades_obj.chapter2.correct_answers / grades_obj.total.total_amount * 100;
    grades_obj.chapter3.score_percent = grades_obj.chapter3.correct_answers / grades_obj.total.total_amount * 100;
    return grades_obj;
}
/*
try {
    grades = SetGrades();
    var player = GetPlayer();
    player.SetVar("general_score",parseInt( grades.chapter2.score_percent));
    player.SetVar("professional_score", parseInt(grades.chapter1.score_percent));
    player.SetVar("soft_skills_score", parseInt(grades.chapter3.score_percent));
    player.SetVar("total_score", parseInt(grades.total.score_percent));
    player.SetVar("passing_score", 70);

} catch (err) {
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);


}



*/
function GetTimeLeft() {
    var player = GetPlayer();
    timer = player.GetVar("timer");
    if (timer !== "") {

        current_minutes = timer.split(":")[1].padStart(2, '0');
        current_seconds = timer.split(":")[2].padStart(2, '0');
        user_minutes = (60 - current_minutes).toString().padStart(2, '0');
        user_seconds = (60 - current_seconds).toString().padStart(2, '0');
        user_time = user_minutes + ":" + user_seconds;
        player.SetVar("user_time", user_time);

    } else {

        player.SetVar("user_time", "60:00");

    }

}
/*
try {

    GetTimeLeft();
} catch (err) {
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);


}
*/
function SetProfessionalDial() {
    var player = GetPlayer();
    var start_number = 0;

    var end_number = player.GetVar("professional_score") - 1;
    if (isNaN(end_number) || end_number <= 0) {
        return;
    }

    //alert(end_number);
    var DialAnimmation = setInterval(RunDial, 50);

    function RunDial() {

        if (start_number == end_number || end_number <= 0) {
            clearInterval(DialAnimmation);
        }
        start_number++;
        player.SetVar("professional_dial", start_number);

    }


}
/*
try {

    SetProfessionalDial();

} catch (err) {
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);


}
*/

function SetGeneralDial() {

    var player = GetPlayer();
    var start_number = 0;
    var end_number = player.GetVar("general_score") - 1;
    if (isNaN(end_number) || end_number <= 0) {
        return;
    }
    var DialAnimmation = setInterval(RunDial, 50);

    function RunDial() {

        if (start_number == end_number || end_number <= 0) {
            clearInterval(DialAnimmation);
        }
        start_number++;
        player.SetVar("general_dial", start_number);

    }


}
/*
try {

    SetGeneralDial();

} catch (err) {
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);


}
*/

function SetSoftSkillsDial() {
    var player = GetPlayer();
    var start_number = 0;

    var end_number = player.GetVar("soft_skills_score") - 1;
    console.log(end_number);
    if (isNaN(end_number) || end_number <= 0) {
        return;
    }

    //alert(end_number);
    var DialAnimmation = setInterval(RunDial, 50);

    function RunDial() {

        if (start_number == end_number || end_number <= 0) {
            clearInterval(DialAnimmation);
        }
        start_number++;
        player.SetVar("soft_skills_dial", start_number);

    }


}
/*
try {

    SetSoftSkillsDial();

} catch (err) {
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);


}
*/
function SetFailed() {
    var player = GetPlayer();
    var score = player.GetVar("total_score");
    IsScormCloud = typeof SCORM2004_GrabAPI == "function";
    if (IsScormCloud) {
        SCORM2004_CallSetValue("cmi.success_status", "failed");
        SCORM2004_CallSetValue("cmi.completion_status", "completed");
        SCORM2004_SetScore(score, 100, 0);
    }

    IsSapErp = typeof API == "object";
    if (IsSapErp) {
        API.LMSSetValue("cmi.success_status", "failed");
        API.LMSSetValue("cmi.completion_status", "completed");
        API.SetScoree(score, 100, 0);
        API.LMSSetValue("cmi.exit", "logout");

    }

}
/*

try {
    SetFailed();

} catch (err) {
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);


}
*/
function SetPassed() {
    var player = GetPlayer();
    var score = player.GetVar("total_score");
    IsScormCloud = typeof SCORM2004_GrabAPI == "function";
    if (IsScormCloud) {
        SCORM2004_CallSetValue("cmi.success_status", "passed");
        SCORM2004_CallSetValue("cmi.completion_status", "completed");
        SCORM2004_SetScore(score, 100, 0);
    }

    IsSapErp = typeof API == "object";
    if (IsSapErp) {
        API.LMSSetValue("cmi.success_status", "passed");
        API.LMSSetValue("cmi.completion_status", "completed");
        API.SetScoree(score, 100, 0);
        API.LMSSetValue("cmi.exit", "logout");


    }

}
/*
try {
    SetPassed();
    
} catch (err) {
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);


}
*/
var GetCurrentUSerDetails = function(url) {
        return new Promise(function(resolve, reject) {
            url = url + "/_api/web/currentuser";
            $.ajax({
                url: url,
                headers: {
                    Accept: "application/json;odata=verbose"
                },
                async: false,
                resolve("Stuff worked!");
                reject(Error("It broke"));
            });
            /* stuff using username, password */


        });

        GetCurrentUSerDetails(url).then(function(data) {
            console.log(data);
        });
        url = "https://365openu.sharepoint.com/sites/digital-books/test-werb/";
        // Calling Promise:
        GetCurrentUSerDetails(url)
            .then((data) => {
                console.log(data)

            })
            .catch((error) => {
                console.log(error)
            });

        // Create a function with Promise:
        function GetCurrentUSerDetails(url) {
            return new Promise((resolve, reject) => {
                    // Must referance JQUERY:
                    $.ajax({
                            url: url + "/_api/web/currentuser",
                            headers: {
                                Accept: "application/json;odata=verbose"
                            },
                            async: false,
                            success: function(data) {
                                resolve(data)
                            },
                            error: function(error) {
                                reject(error)
                            },
                        }) // end of request
                }) // end of Promise
        } // end of function

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

                    }
                    script.onerror = function() {
                        reject('Faild to load the script: ' + file_name);

                    }

                }) // end of Promise
        }

        src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js";
        // Calling Promise:
        LoadSCcript(src)
            .then((data) => {
                console.log(data)

            })
            .catch((error) => {
                console.log(error)
            });