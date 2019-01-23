function onLoad(wordlist, id, elt) {
	
    var words = $(id).find(elt);
	for (i=0; i<words.length;i++){
		$(words[i]).text("");
		
	}

    for (i = 0; i < wordlist.length; i++) {

        $(words[i]).text(wordlist[i]);

    }
}

function onLoadPage(wordlist, id, elt, index) {

    var words = $(id).find(elt);

    for (i = 0; i < words.length; i++) {
        if (i + index * 16 > wordlist.length - 1) {
            $(words[i]).css("visibility", "hidden");
        } else {
            $(words[i]).text(wordlist[i + index * 16]);
        }
    }
}