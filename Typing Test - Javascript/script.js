const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var mil = 0;
var sec = 0;
var min = 0;
var intervalID;
var timerRunning;

function removeLeadingZero(time){
    if (time < 10){
        time = "0" + time;
    }
    return time;
}   

function startTimer(){
    if(mil<100){
        mil ++;        
    }
    else {
        sec ++;
        mil = 0;
    }
    if(sec > 59){
        min ++;
        sec = 0;
    }

    theTimer.innerHTML = removeLeadingZero(min) + " : " +
                         removeLeadingZero(sec) + " : " +
                         removeLeadingZero(mil);
}

function start(){ 
    if(testArea.value.length === 0){
        intervalID = setInterval(startTimer, 10);
    }
    timerRunning = true;
}

function compareText(){
    var textToCompare = originText.substring(0, testArea.value.length);
    
    if ((originText == testArea.value) && (timerRunning == true)){
        alert("YOU WIN!");
        timerRunning = false;
        clearInterval(intervalID);
    }
    else{
        if(textToCompare == testArea.value){
            testWrapper.style.borderColor = "green";
        }
        else{
            testWrapper.style.borderColor = "red";
        }
    }
}

function reset(){
    console.log("RESET!!!");
    mil = 0;
    sec = 0;
    min = 0;
    testWrapper.style.borderColor = "grey";
    testArea.value = "";

    clearInterval(intervalID);
    intervalID = null;
    timerRunning == false;
}

testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", compareText, false);
resetButton.addEventListener("click", reset, false);