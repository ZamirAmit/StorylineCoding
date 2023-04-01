function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6n04XvwROBg":
        Script1();
        break;
      case "6DeRxlVlKTq":
        Script2();
        break;
      case "6ht3MA9kFlf":
        Script3();
        break;
      case "5zRn0EwFDqQ":
        Script4();
        break;
      case "5WCR0lfkZTG":
        Script5();
        break;
      case "5dHEnuMygGJ":
        Script6();
        break;
  }
}

function Script1()
{
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
   
    let startNumber = 0;
    setDial(0, 100);

} catch (err) {

    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);


}
}

function Script2()
{
  
// This function contain
function setProgress(startNumber, endNumber) {

    endNumberIsRealNumber = isNaN(endNumber);
    endNumberIsPositive = endNumber <= 0;
    if (endNumberIsRealNumber || endNumberIsPositive) {
        return 'There was a problem with the inputS types'
    }

    let progressAnimmation = setInterval(runProgress, 50);
    /*
        The progressAnimmation method will:
        1. execute the function runProgress until the end of it.
        2. Wait 50 mili-seconds
        3. run it again
       * Only ClearInterval method will stop it *
   */

    // This function moving th Progress
    function runProgress() {

        isProgressinished = startNumber + 1 == endNumber;
        isProgressNegetive = endNumber <= 0;
        if (isProgressinished || isProgressNegetive) {

            clearInterval(progressAnimmation); // This method stops the Progress

        }
        // Adding one value startNumber
        startNumber++;
        // Passing the value into storyline scope
        Player.SetVar("progress", startNumber);
        // This is will whow on the actual Progress

    } // End of function


}
let Player = GetPlayer();
try {
    /* This Block of code will try
        will try to excute itselft
        and will jump to 'catch' block
        if an error has ocured
    */
    
    setProgress(0, 100);

} catch (err) {

    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);


}
}

function Script3()
{
  // This function contain
function setSlider(startNumber, endNumber) {

    endNumberIsRealNumber = isNaN(endNumber);
    endNumberIsPositive = endNumber <= 0;
    if (endNumberIsRealNumber || endNumberIsPositive) {
        return 'There was a problem with the inputS types'
    }

    let sliderAnimmation = setInterval(runSlider, 50);
    /*
        The sliderAnimmation method will:
        1. execute the function runSlider until the end of it.
        2. Wait 50 mili-seconds
        3. run it again
       * Only ClearInterval method will stop it *
   */

    // This function moving th Slider
    function runSlider() {

        isSliderinished = startNumber + 1 == endNumber;
        isSliderNegetive = endNumber <= 0;
        if (isSliderinished || isSliderNegetive) {

            clearInterval(sliderAnimmation); // This method stops the Slider

        }
        // Adding one value startNumber
        startNumber++;
        // Passing the value into storyline scope
        Player.SetVar("slider", startNumber);
        // This is will whow on the actual Slider

    } // End of function


}

let Player = GetPlayer();
try {
    /* This Block of code will try
        will try to excute itselft
        and will jump to 'catch' block
        if an error has ocured
    */
    
    setSlider(0, 100);

} catch (err) {

    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);


}
}

function Script4()
{
  // This function contain
function setCountDown(startNumber, endNumber) {

    endNumberIsRealNumber = isNaN(endNumber);
    endNumberIsPositive = endNumber < 0;
    if (endNumberIsRealNumber || endNumberIsPositive) {
        return 'There was a problem with the inputS types'
    }

    let countDownAnimmation = setInterval(runCountDown, 1000);
    /*  
        The countDownAnimmation method will:
        1. execute the function runCountDown until the end of it.
        2. Wait 50 mili-seconds
        3. run it again
       * Only ClearInterval method will stop it *
   */

    // This function moving th CountDown
    function runCountDown() {

        IsCountDowninished = endNumber + 1 == startNumber;
        IsCountDownNegetive = startNumber < 0;
        if (IsCountDowninished || IsCountDownNegetive) {

            clearInterval(countDownAnimmation); // This method stops the CountDown

        }
        // Adding one value startNumber
        startNumber--;
        // Passing the value into storyline scope
        Player.SetVar("countdown", startNumber);
        // This is will whow on the actual CountDown

    } // End of function


}
let Player = GetPlayer();
try {
    /* This Block of code will try
        will try to excute itselft
        and will jump to 'catch' block
        if an error has ocured
    */
    
    setCountDown(10, 0);

} catch (err) {

    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);


}
}

function Script5()
{
  function setstoper(stoper) {

    // Extracting minutes:
    _minutesDurration = stoper.split(":")[0];

    // Extracting seocond:
    _secondsDurration = stoper.split(":")[1];

    // Converting total time into seconds:
    let _distance = _minutesDurration
        * 60 +
        parseInt(_secondsDurration);

    if (!isNaN(_distance)) {
        {
            let stoper = setInterval(_updateStoper, 1000);
            /*  
                The stoperAnimmation method will:
                1. execute the function RunCountDown until the end of it.
                2. Wait 50 mili-seconds
                3. run it again
               * Only ClearInterval method will stop it *
           */
            function _updateStoper() {

                // Time calculations for days, hours, minutes and seconds
                let _remainMinutes = Math.floor(_distance / 60);
                let _remainSeconds = Math.floor(_distance - _remainMinutes * 60);
                _remainSeconds =
                    _remainSeconds
                        .toString().padStart(2, "0");
                _remainMinutes =
                    _remainMinutes
                        .toString().padStart(2, "0");

                // Output the result in an element with id="demo"
                _remainTime =
                    _remainMinutes +
                    ":" +
                    _remainSeconds;

                Player.SetVar("stoper", _remainTime);
                _distance++;

                // If the count down is over, write some text 
                if (_distance < 0) {

                    Player.SetVar("stoper", "");
                    clearInterval(stoper);
                    window.setstoper = false;
                    //console.log(stoper);

                }



            }

        }
    }
}




let Player = GetPlayer();
try {
    /* This Block of code will try
        will try to excute itselft
        and will jump to 'catch' block
        if an error has ocured
    */
    
    let stoper = Player.GetVar("stoper");
    setstoper(stoper);

} catch (err) {

    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);


}
}

function Script6()
{
  function setTimer(timer) {

    // Extracting minutes:
    _minutesDurration = timer.split(":")[0];

    // Extracting seocond:
    _secondsDurration = timer.split(":")[1];

    // Converting total time into seconds:
    let _distance = _minutesDurration
        * 60 +
        parseInt(_secondsDurration);

    if (!isNaN(_distance)) {
        {
            let timer = setInterval(_updateTimer, 1000);
            /*  
                The TimerAnimmation method will:
                1. execute the function RunCountDown until the end of it.
                2. Wait 50 mili-seconds
                3. run it again
               * Only ClearInterval method will stop it *
           */
            function _updateTimer() {

                // Time calculations for days, hours, minutes and seconds
                let _remainMinutes = Math.floor(_distance / 60);
                let _remainSeconds = Math.floor(_distance - _remainMinutes * 60);
                _remainSeconds =
                    _remainSeconds
                        .toString().padStart(2, "0");
                _remainMinutes =
                    _remainMinutes
                        .toString().padStart(2, "0");

                // Output the result in an element with id="demo"
                _remainTime =
                    _remainMinutes +
                    ":" +
                    _remainSeconds;

                Player.SetVar("timer", _remainTime);
                _distance--;

                // If the count down is over, write some text 
                if (_distance < 0) {

                    Player.SetVar("timer", "");
                    clearInterval(timer);
                    window.setTimer = false;
                    //console.log(timer);

                }



            }

        }
    }
}




let Player = GetPlayer();
try {
    /* This Block of code will try
        will try to excute itselft
        and will jump to 'catch' block
        if an error has ocured
    */
    
    let timer = Player.GetVar("timer");
    setTimer(timer);

} catch (err) {

    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);


}
}

