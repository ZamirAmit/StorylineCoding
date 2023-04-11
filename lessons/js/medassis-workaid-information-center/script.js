$(document).ready(function() {

    $("#search").keyup(function() {

        // removes all white spaces:
        let searchValue = $.trim(this.value);

        let searchValueIsEmpty = searchValue === "";
        if (searchValueIsEmpty) {

            // Show all contents:
            $('.item').show();

        } else {
            // Hide all contents before searching:
            $('.item').hide();
            // show all div contents that have the search value in its content:
            $(".item:contains(" + searchValue + ")").show();
        }
    });

});
// This function contain
function setDial(startNumber, endNumber) {

    endNumberIsRealNumber = isNaN(endNumber);
    endNumberIsPositive = endNumber <= 0;
    if (endNumberIsRealNumber || endNumberIsPositive) {
        return 'There was a problem with the inputS types'
    }

    let dialAnimmation = setInterval(runDial, 50);
    /*
        The dialAnimmation method will:
        1. execute the function runDial until the end of it.
        2. Wait 50 mili-seconds
        3. run it again
       * Only ClearInterval method will stop it *
   */

    // This function moving th dial
    function runDial() {

        isDialinished = startNumber + 1 == endNumber;
        isDialNegetive = endNumber <= 0;
        if (isDialinished || isDialNegetive) {

            clearInterval(dialAnimmation); // This method stops the dial

        }
        // Adding one value startNumber
        startNumber++;
        // Passing the value into storyline scope
        Player.SetVar("dial", startNumber);
        // This is will whow on the actual dial

    } // End of function


}
let Player = GetPlayer();
try {
    /* This Block of code will try
        will try to excute itselft
        and will jump to 'catch' block
        if an error has ocured
    */

    setDial(0, 100);

} catch (err) {

    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);


}