function StartGame(tries,tryCounter){
	//disable next button
	document.getElementById("nextBtn").hidden = true;

	var audioElement = document.getElementById("word-audio");
	var correctAudioElement = document.getElementById("correct-audio");

	var modalElement = document.getElementById("modal");
		
	
	//pop first word from choices
	
	var choicesString = sessionStorage.getItem("choices");
	choices = choicesString.split(",");
	var currentImage = choices.pop();
	//sessionStorage.setItem("currentImage", currentImage);
	//console.log(sessionStorage.getItem("currentImage"));
	sessionStorage.setItem("choices", choices);
	//array to hold the tries
	//check if it was passed or not
	if ((typeof tries == 'undefined') && (typeof tryCounter == 'undefined')){
		var tries = new Array(choices.length);
		var tryCounter = 0;
		
	}else{
		var tries = tries;
		var tryCounter = tryCounter;
	}

	var audioOnEnded = function() {
		console.log("test");
		console.log(audioElement.src);
		if (audioElement.src.indexOf("resources/sounds/zip.mp3")!==-1) {
			audioElement.src = "resources/sounds/" + currentImage + ".mp3";
			audioElement.play();
		}
	};

	
	// load image
	document.getElementById('img-random').src='resources/images/' + currentImage + '.svg';
	sessionStorage.setItem("currentImage", currentImage);
	audioElement.src = "resources/sounds/zip.mp3";
	audioElement.addEventListener("ended", audioOnEnded);
	//audioElement.src = "resources/sounds/" + currentImage + ".mp3";
	audioElement.play();

	if (getCookie("InputCookie") == "learning") {
		document.getElementById("word-text").innerHTML = currentImage;
	}

	
	//if check pressed pass as correct
	//click
	document.getElementById('check-button').onclick = function(){
		inputToCheck = document.getElementById('write').value;
		//if is a hit
		if (inputToCheck == currentImage){
			//console.log('TRUE');
			document.getElementById('write').value = '';
			//increase Tries and Trycounter
			if (typeof tries[tryCounter] == 'undefined') {
    			tries[tryCounter] = [currentImage,1];
			}else{
				tries[tryCounter][1]++; 
			}
			tryCounter++;
			//console.log(tries)
			
			//still more left
			if(choices.length > 0){
				audioElement.removeEventListener("ended",audioOnEnded);
				modalElement.innerHTML = "Correct!";
				modalElement.style.display = "block";
				const correctAudioOnEnded = function() {
					modalElement.style.display = "none";
					StartGame(tries,tryCounter);
					LoadKeyboard();
					correctAudioElement.removeEventListener("ended",correctAudioOnEnded);
				};
				correctAudioElement.addEventListener("ended",correctAudioOnEnded);
				correctAudioElement.play();
				//document.getElementById("nextBtn").hidden = false;

			}else{      //no more left -> activate NEXT btn
				
				//Save the points for results to load
				sessionStorage.setItem("tries", JSON.stringify(tries));
				console.log(tries);
				modalElement.innerHTML = "Correct!";
				modalElement.style.display = "block";
				const correctAudioOnEnded = function() {
					modalElement.style.display = "none";
					window.LoadResultsPage();
					correctAudioElement.removeEventListener("ended",correctAudioOnEnded);
				};
				correctAudioElement.addEventListener("ended",correctAudioOnEnded);
				correctAudioElement.play();
				LoadResultsPage();
			}
		// miss
		}else{
			//console.log('TRY AGAIN');
			//this is the first miss
			modalElement.innerHTML = "Try again!";
			modalElement.style.display = "block";
			setTimeout(function () {
				modalElement.style.display = "none";
			}, 1000);
			if (typeof tries[tryCounter] == 'undefined') {
    			tries[tryCounter] = [currentImage,1];
			}else{
				tries[tryCounter][1]++; 
			}
			//console.log(tries)
		}
		
	}
	

	
};