function selectionPageLoaded() {

    //set the right wordlist that was passed

    var fullWords = sessionStorage.getItem("wordlist");
    var wordlist = fullWords.split(",");

    onLoadPage(wordlist, '#pills-home', 'button', 0); //call load with wordlist = words to load & id for the page with containers
    onLoadPage(wordlist, '#pills-profile', 'button', 1);
    //TODO: add listener to Page switch

    var choices = [];
    sessionStorage.setItem("choices", choices);
    document.getElementById("nextBtn").hidden = true;

    //any 5 words
    $('#option1').click(function () {
        $('#select').find('button').each(function () {
            $(this).text('');
        })
        choices = generateWords(5, wordlist);
        sessionStorage.setItem("choices", choices); //store choices for future use
        document.getElementById("nextBtn").hidden = false;
        onLoad(choices, '#select', 'input');
        $('#pills-home , #pills-profile, #pills-profile2, #pills-profile3, #pills-profile4').find('button').prop('disabled', false);
    });

    //any 10 words
    $('#option3').click(function () {
        choices = generateWords(10, wordlist);
        sessionStorage.setItem("choices", choices);
        document.getElementById("nextBtn").hidden = false;
        onLoad(choices, '#select', 'input');
        $('#pills-home , #pills-profile, #pills-profile2, #pills-profile3, #pills-profile4').find('button').prop('disabled', false);
    });

    //any 20 words
    $('#option2').click(function () {
        choices = generateWords(20, wordlist);
        sessionStorage.setItem("choices", choices);
        document.getElementById("nextBtn").hidden = false;
        onLoad(choices, '#select', 'input');
        $('#pills-home , #pills-profile, #pills-profile2, #pills-profile3, #pills-profile4').find('button').prop('disabled', true);
    });

    //on click add to list
    $('#pills-home , #pills-profile, #pills-profile2, #pills-profile3, #pills-profile4').find('button').click(function () {

        tried = $(this).text();
        if (duplicate(tried, choices)) {
            return;
        }

        if (choices.length == 20) {
            $('#pills-home , #pills-profile, #pills-profile2, #pills-profile3, #pills-profile4').find('button').prop('disabled', true);
            return;
        } else {
            choices.push(tried);
            sessionStorage.setItem("choices", choices);
            document.getElementById("nextBtn").hidden = false;
            if (choices.length == 20) {
                $('#pills-home , #pills-profile, #pills-profile2, #pills-profile3, #pills-profile4').find('button').prop('disabled', true);

            }
        }

        onLoad(choices, '#select', 'input');

    });


    //remove
    var i = 0;
    $('#select').find('input').each(function () {
        //function to get the id of the word to remove
        $('#pills-home , #pills-profile, #pills-profile2, #pills-profile3, #pills-profile4').find('button').prop('disabled', false);
        $(this).attr("id", i);
        i = i + 1;
    });

    $('#select').find('input').click(function () {
        choices.splice($(this).attr("id"), 1);
        onLoad(choices, '#select', 'input');
        $('#pills-home , #pills-profile, #pills-profile2, #pills-profile3, #pills-profile4').find('button').prop('disabled', false);
        sessionStorage.setItem("choices", choices);
        if (choices.length == 0) {
            document.getElementById("nextBtn").hidden = true;
        }
    });

    $(".word-button.chosen").on("mousedown", function (e) {
        e.preventDefault();
        $(this).addClass("removeWord");
    }).on("mouseup", function () {
        $(this).removeClass("removeWord");
    });

    $(".word-button").on("mousedown", function (e) {
        e.preventDefault();
        $(this).addClass("selectWord");
    }).on("mouseup", function () {
        $(this).removeClass("selectWord");
    });

}

function generateWords(amount, wordlist) {
    var out = [];
    var arr = [];
    while (arr.length < amount) {

        var r = Math.floor(Math.random() * wordlist.length);
        if (arr.indexOf(r) === -1) arr.push(r);
    }

    for (i = 0; i < arr.length; i++) {
        out.push(wordlist[arr[i]]);
    }
    return out;
}

function duplicate(word, words) {
    for (i = 0; i < words.length; i++) {
        if (words[i] == word) {
            return true;
        }
    }
    return false;
}