function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5mCuoBIRdjo":
        Script1();
        break;
  }
}

function Script1()
{
  const date = new Date(); // Getting the and date of the present
const hours = date.getHours();
const player = GetPlayer();

let TimeInDay;
const IsMOrning = hours >= 5 && hours < 12;
const IsNoon = hours >= 12 && hours < 17;
const IsAfterNoon = hours >= 17 && hours < 19;

if (IsMOrning) {
    TimeInDay = "Morning";
} else if (IsNoon) {
    TimeInDay = "Noon";
} else if (IsAfterNoon) {
    TimeInDay = "AfterNoon";

} else {
    TimeInDay = "Night";
}
player.SetVar('timeInDay', TimeInDay);
time =
    date.getHours().toString().padStart(2, '0') +
    ":" +
    date.getMinutes().toString().padStart(2, '0');
player.SetVar('time', time);

console.log(TimeInDay);
}

