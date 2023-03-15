function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6pWozi4cHxN":
        Script1();
        break;
  }
}

function Script1()
{
  const date = new Date(); // Getting the and date of the present
const hours = date.getHours();
let player = GetPlayer();

let time_in_day;
IsMOrning = hours >= 5 && hours < 12;
IsNoon = hours >= 12 && hours < 17;
IsAfterNoon = hours >= 17 && hours < 19;

if (IsMOrning) {
    time_in_day = "Morning";
} else if (IsNoon) {
    time_in_day = "Noon";
} else if (IsAfterNoon) {
    time_in_day = "AfterNoon";

} else {
    time_in_day = "Night";
}
player.SetVar('time_in_day', time_in_day);
time =
    date.getHours().toString().padStart(2, '0') +
    ":" +
    date.getMinutes().toString().padStart(2, '0');
player.SetVar('time', time);

console.log(time_in_day);
}

