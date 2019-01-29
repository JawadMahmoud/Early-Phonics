function isMobileDevice() {
    if (/Android|webOS|iPhone|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        console.log("Mobile Device");
        return true;
    } else {
        console.log("Not Mobile Device");
        return false;
    }
};

function StartGame(tries, tryCounter) {
    //disable next button
    document.getElementById("nextBtn").hidden = true;

    var audioElement = document.getElementById("word-audio");
    var correctAudioElement = document.getElementById("correct-audio");
    var modalElement = document.getElementById("modal");


    //pop first word from choices

    var choicesString = sessionStorage.getItem("choices");
    choices = choicesString.split(",");
    var currentImage = choices.pop();
    sessionStorage.setItem("choices", choices);
    //array to hold the tries
    //check if it was passed or not
    if ((typeof tries == 'undefined') && (typeof tryCounter == 'undefined')) {
        var tries = new Array(choices.length);
        var tryCounter = 0;

    } else {
        var tries = tries;
        var tryCounter = tryCounter;
    }

    var audioOnEnded = function () {
        if (audioElement.src.indexOf("resources/sounds/spelltheword.mp3") !== -1) {
            audioElement.src = "resources/sounds/" + currentImage + ".mp3";
            audioElement.play();
        }
    };


    // load image
    document.getElementById('img-random').src = 'resources/images/' + currentImage + '.svg';
    sessionStorage.setItem("currentImage", currentImage);
    audioElement.src = "resources/sounds/spelltheword.mp3";
    audioElement.addEventListener("ended", audioOnEnded);
    audioElement.play();

    if (getCookie("InputCookie") == "learning") {
        document.getElementById("word-text").innerHTML = currentImage;
    } else {
        $("#spell-word").css("margin-top","2.75em");
    }

    
    //if check pressed pass as correct
    //click
    document.getElementById('check-button').onclick = function () {
        inputToCheck = document.getElementById('write').value;
        //if is a hit
        if (inputToCheck == currentImage) {
            //console.log('TRUE');
            document.getElementById('write').value = '';
            //increase Tries and Trycounter
            if (typeof tries[tryCounter] == 'undefined') {
                tries[tryCounter] = [currentImage, 1];
            } else {
                tries[tryCounter][1]++;
            }
            tryCounter++;

            //still more left
            if (choices.length > 0) {
                audioElement.removeEventListener("ended", audioOnEnded);
                modalElement.innerHTML = "Correct!";
                modalElement.style.display = "block";
                const correctAudioOnEnded = function () {
                    modalElement.style.display = "none";
                    StartGame(tries, tryCounter);
                    LoadKeyboard();
                    startScanning();
                    stopScanning();
                    correctAudioElement.removeEventListener("ended", correctAudioOnEnded);
                };
                correctAudioElement.addEventListener("ended", correctAudioOnEnded);
                correctAudioElement.play();

            } else {      //no more left -> activate NEXT btn
                stopScanning();
                //Save the points for results to load
                sessionStorage.setItem("tries", JSON.stringify(tries));
                modalElement.innerHTML = "Correct!";
                modalElement.style.display = "block";
                const correctAudioOnEnded = function () {
                    modalElement.style.display = "none";
                    window.LoadResultsPage();
                    correctAudioElement.removeEventListener("ended", correctAudioOnEnded);
                };
                correctAudioElement.addEventListener("ended", correctAudioOnEnded);
                correctAudioElement.play();
                LoadResultsPage();
            }
            // miss
        } else {
            stopScanning();
            startScanning();
            //this is the first miss
            modalElement.innerHTML = "Try again!";
            modalElement.style.display = "block";
            setTimeout(function () {
                modalElement.style.display = "none";
                $("#write").val("");
            }, 1000);
            if (typeof tries[tryCounter] == 'undefined') {
                tries[tryCounter] = [currentImage, 1];
            } else {
                tries[tryCounter][1]++;
            }
        }

    }

    // document.getElementById("write").onfocus = function() {
    //     $(".keyboard").hide();
    // };
    isMobileDevice();

    $("#write").focus(function() {
        if (isMobileDevice()) {$(".keyboard").hide()};
    })
    $("#write").focusout(function() {
        if (isMobileDevice()) {$(".keyboard").show()};
    })
}