function ExecuteScript(strId) {
    switch (strId) {
        case "6LgOuknO9Rm":
            Script1();
            break;
        case "5nW3cr4JPmD":
            Script2();
            break;
    }
}

function Script1() {

    /* This code is for MALE customer: */
    let player = GetPlayer();
    let operatorName = player.GetVar('operatorName');
    let companyName = player.GetVar('companyName');
    let customerName = player.GetVar('customerName');
    let greetings = "שלום " +
        customerName +
        ", שמי " +
        operatorName +
        " ואשמח לתת שירות. ";
    let intro_male = 'הפוליסה שלך מבוססת על החזר הוצאות,' +
        ' כלומר אתה יכול לפנות לכל מוסד רפואי שנוח ונגיש לך,' +
        ' לקבל טיפול רפואי ולשלם בעבורו. ';
    let save_receipt_male = ' יש לשמור את הקבלה ואת הדוחות הרפואיים בכדי להגיש תביעה לחברת ' +
        companyName +
        ' זכאות להחזר תיבדק בהתאם לתנאי הפוליסה.';
    let Conversation = greetings +
        intro_male +
        save_receipt_male;
    player.SetVar('Conversation', Conversation);
}

function Script2() {
    /* This code is for FEMALE customer: */
    let player = GetPlayer();
    let operatorName = player.GetVar('operatorName');
    let companyName = player.GetVar('companyName');
    let customerName = player.GetVar('customerName');
    let greetings = "שלום " +
        customerName +
        ", שמי " +
        operatorName +
        " ואני אשמח לעזור לך. ";
    let intro_female = ' הפוליסה שלך מבוססת על החזר הוצאות,' +
        ' כלומר את יכולה לפנות לכל מוסד רפואי שנוח ונגיש לך,' +
        ' לקבל טיפול רפואי ולשלם בעבורו.';
    let save_receipt_female = ' יש לשמור את הקבלה ואת הדוחות הרפואיים בכדי להגיש תביעה לחברת' +
        companyName +
        ' זכאות להחזר תיבדק בהתאם לתנאי הפוליסה.';
    let Conversation = greetings + intro_female + save_receipt_female;
    player.SetVar('Conversation', Conversation);

}