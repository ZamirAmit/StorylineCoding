function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6CRmryOrSQD":
        Script1();
        break;
  }
}

function Script1()
{
  
let player = GetPlayer();
let file = "story_content/external_files/questions.txt";
var headers = new Headers();
headers.append('Content-Type', 'text/plain; charset=UTF-8');
fetch(file, headers)


    .then(function (content) {
        return content.text();
    })
    .then(function (text) {
        rows = text.split('\n');
        question = rows[1].split(',');
        
        player.SetVar('questionTitle', question[0]);
        player.SetVar('correctAnswer', question[1]);
        player.SetVar('firstDistractor', question[2]);
        player.SetVar('secondDistractor', question[3]);
        player.SetVar('successFeedback', question[4]);
        player.SetVar('failFeedback', question[5]);

    });
}

