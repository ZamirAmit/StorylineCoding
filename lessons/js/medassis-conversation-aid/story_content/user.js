function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6LgOuknO9Rm":
        Script1();
        break;
      case "5nW3cr4JPmD":
        Script2();
        break;
  }
}

function Script1()
{
  
/* This code is for MALE customer: */
var player = GetPlayer();
var OperatorName = player.GetVar('OperatorName');
var CompanyName = player.GetVar('CompanyName');
var CustomerName = player.GetVar('CustomerName');
var greetings = "שלום " +
  CustomerName +
  ", שמי " +
  OperatorName +
  " ואשמח לתת שירות. ";
var intro_male = 'הפוליסה שלך מבוססת על החזר הוצאות,' +
  ' כלומר אתה יכול לפנות לכל מוסד רפואי שנוח ונגיש לך,' +
  ' לקבל טיפול רפואי ולשלם בעבורו. ';
var save_receipt_male = ' יש לשמור את הקבלה ואת הדוחות הרפואיים בכדי להגיש תביעה לחברת ' +
  CompanyName +
  ' זכאות להחזר תיבדק בהתאם לתנאי הפוליסה.';
var Conversation = greetings +
  intro_male +
  save_receipt_male;
player.SetVar('Conversation', Conversation);
}

function Script2()
{
  /* This code is for FEMALE customer: */
var player = GetPlayer();
var OperatorName = player.GetVar('OperatorName');
var CompanyName = player.GetVar('CompanyName');
var CustomerName = player.GetVar('CustomerName');
var greetings = "שלום " +
  CustomerName +
  ", שמי " +
  OperatorName +
  " ואני אשמח לעזור לך. ";
var intro_female = ' הפוליסה שלך מבוססת על החזר הוצאות,' +
  ' כלומר את יכולה לפנות לכל מוסד רפואי שנוח ונגיש לך,' +
  ' לקבל טיפול רפואי ולשלם בעבורו.';
var save_receipt_female = ' יש לשמור את הקבלה ואת הדוחות הרפואיים בכדי להגיש תביעה לחברת' +
  CompanyName +
  ' זכאות להחזר תיבדק בהתאם לתנאי הפוליסה.';
var Conversation = greetings + intro_female + save_receipt_female;
player.SetVar('Conversation', Conversation);

}

