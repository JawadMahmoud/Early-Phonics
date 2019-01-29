function onLoad(wordlist, id, elt) {

    var words = $(id).find(elt);
    for (i = 0; i < words.length; i++) {
        if ($(words[i]).val) $(words[i]).val("");
        if ($(words[i]).text) $(words[i]).text("");
    }

    for (i = 0; i < wordlist.length; i++) {

        if ($(words[i]).val) $(words[i]).val(wordlist[i]);
        if ($(words[i]).text) $(words[i]).text(wordlist[i]);
    }
}

function onLoadPage(wordlist, id, elt, index) {

    var words = $(id).find(elt);

    for (i = 0; i < words.length; i++) {
        if (i + index * 16 > wordlist.length - 1) {
            $(words[i]).css("visibility", "hidden");
        } else {
            if ($(words[i]).val) $(words[i]).val(wordlist[i + index * 16]);
            if ($(words[i]).text) $(words[i]).text(wordlist[i + index * 16]);
        }
    }
}