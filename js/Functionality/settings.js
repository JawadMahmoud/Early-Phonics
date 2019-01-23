function changeInfoText(value) {
    var info = document.getElementById("mode_info");
    if (value == "testing") {
        info.innerHTML = "Word Hidden";
    } else if (value == "learning") {
        info.innerHTML = "Word Shown";
    }
}

function changeInfoTextKeyboard(value) {
    var info = document.getElementById("scanning_select");
    var settings = document.getElementById("scanning_settings");
    if (value == "scanning") {
        info.style.visibility = "hidden";
        settings.style.visibility = "visible";
    } else {
        //info.style.visibility = "visible";
        //settings.style.visibility = "hidden";
    }
}

function changeInfoTextSwitch(value) {
    var info = document.getElementById("switch_info");
    if (value == "one") {
        info.innerHTML = "Press switch or space to select.";
    } else if (value == "two") {
        info.innerHTML = "Press left switch or space to move and right switch or enter to select.";
    }
}

var keyboard_select = "restricted";
var coloured_keys = true;
var mode_select = "testing";

function getSettingsValues() {

    input_cookie_in = getCookie("InputCookie");
    if (input_cookie_in !== "") {
        //console.log("Input cookie found!");
        mode_select = input_cookie_in;
        $(".input_mode[value="+input_cookie_in+"]").prop('checked', true);
        if (input_cookie_in == "learning") {
            $("#mode_info").html("(Words shown)");
        } else {
            $("#mode_info").html("(Words hidden)");
        }
    }


    key_cookie_in = getCookie("KeyboardCookie");
    if (key_cookie_in !== "") {
        //console.log("Keyboard cookie found!");
        keyboard_select = key_cookie_in;
        $(".keyboard_mode[value="+key_cookie_in+"]").prop('checked', true);
        if (key_cookie_in == "restricted") {
            $("#keyboard_info").html("(Fewer keys)");
            $(".colour_key_div").hide();
        }
        $("#colour_keys_off").prop('checked', true);
        coloured_keys = false;
    } else {
        if ($(".keyboard_mode:checked").val() == "standard") {
            keyboard_select = "standard";
        } else {
            keyboard_select = "restricted";
        }
    }

    
    if ($(".colour_mode:checked").val() == "true") {
        coloured_keys = true;
    } else {
        coloured_keys = false;
    }
    // console.log($(".keyboard_mode:checked").val());
    // console.log($(".colour_mode:checked").val());
}

function demoSettings() {

    $(".input_mode").click(function () {
        var val = $(this).attr('value');
        if (val == "testing") {
            $("#mode_info").html("(Words hidden)");
        } else if (val == "learning") {
            $("#mode_info").html("(Words shown)");
        }
        setCookie("InputCookie", val, 1);
    })

    $(".keyboard_mode").click(function () {
        var val = $(this).attr('value');
        if (val == "standard") {
            $("#keyboard_info").html("(Standard keyboard with all keys)");
            $(".colour_key_div").show();
            $("#colour_keys_off").prop('checked', true);
            keyboard_select = "standard";
            coloured_keys = false;
        } else if (val == "restricted") {
            $("#keyboard_info").html("(Fewer keys)");
            $(".colour_key_div").hide();
            $("#colour_keys_off").prop('checked', true);
            coloured_keys = false;
            keyboard_select = "restricted";
        }
        setCookie("KeyboardCookie", val, 1);
    })

    $(".switch_mode").click(function () {
        var val = $(this).attr('value');
        if (val == "true") {
            $(".switch_num_div").show();
            $("#radio-switches-2").prop('checked', true);
        } else if (val == "false") {
            $(".switch_num_div").hide();
            $(".switch_time_div").hide();
            $("#radio-switches-2").prop('checked', false);
            $("#time-switches-1").prop('checked', false);
            $("#time-switches-2").prop('checked', false);
            $("#time-switches-3").prop('checked', false);
        }
        // delCookie("KeyboardCookie");
    })

    $(".switch_number").click(function () {
        var val = $(this).attr('value');
        if (val == "1") {
            $(".switch_time_div").show();
            $("#time-switches-2").prop('checked', true);
        } else if (val == "2") {
            $(".switch_time_div").hide();
            $("#time-switches-1").prop('checked', false);
            $("#time-switches-2").prop('checked', false);
            $("#time-switches-3").prop('checked', false);
        }
    })

    $(".colour_mode").click( function() {
        //console.log($(".colour_mode").attr("value"));
        var val = $(this).attr('value');
        if (val == "true") {
            coloured_keys = true;
        } else if (val == "false") {
            coloured_keys = false;
        }
    })
	
	//set default wordlist on load of this webpage
		var wordlist = ['bag', 'bed', 'bin', 'box', 'can', 'cap', 'cat', 'dog', 'fan', 'fox', 'hat', 'hen', 'jam', 'jug', 'leg', 'man', 'map', 'men', 'mug', 'net', 'pan', 'peg', 'pen', 'pig', 'rat', 'red', 'sun', 'tap', 'ten', 'van', 'web', 'zip'];
		sessionStorage.setItem("wordlist", wordlist);
	
	
	//if there is a click on to indicate change of game/activity type
	// get the appropriate wordlist for it
	document.getElementById('game_type').onclick = function(){
	if (document.getElementById('words_input').checked){
		var wordlist = ['bag', 'bed', 'bin', 'box', 'can', 'cap', 'cat', 'dog', 'fan', 'fox', 'hat', 'hen', 'jam', 'jug', 'leg', 'man', 'map', 'men', 'mug', 'net', 'pan', 'peg', 'pen', 'pig', 'rat', 'red', 'sun', 'tap', 'ten', 'van', 'web', 'zip'];
		
		
	}else if (document.getElementById('blends_input').checked){
		var wordlist = ['ant', 'belt', 'brush', 'bulb', 'clap', 'crab', 'desk', 'drum', 'fist', 'flag', 'flash', 'frog', 'gift', 'golf', 'green', 'hand', 'lamp', 'milk', 'nest', 'plug', 'pram', 'raft', 'shelf', 'spoon', 'stamp', 'stop', 'string', 'swim', 'swing', 'tent', 'tree'];

	}else if(document.getElementById('digraphs_input').checked){
		var wordlist = ['bath', 'bee', 'book', 'boot', 'chin', 'cook', 'feet', 'fish', 'food', 'foot', 'good', 'heel', 'hood', 'hoof', 'hook', 'jeep', 'king', 'loop', 'moon', 'path', 'peek', 'peel', 'pool', 'queen', 'ring', 'roof', 'ship', 'string', 'swing', 'weed', 'wood', 'wool'];

	}else if(document.getElementById('moredigraphs_input').checked){
		var wordlist = ['car', 'chair', 'chick', 'cloud', 'coat', 'coin', 'cue', 'dart', 'egg', 'fork', 'goat', 'hair', 'horn', 'ill', 'jar', 'kerb', 'mouth', 'nail', 'oil', 'pie', 'pink', 'rain', 'road', 'shark', 'shell', 'snail', 'sock', 'star', 'tail', 'tank', 'tie', 'train'];
		
	}else{
		var wordlist = [''];
	}
	
	sessionStorage.setItem("wordlist", wordlist);
	console.log(wordlist);
	}
}