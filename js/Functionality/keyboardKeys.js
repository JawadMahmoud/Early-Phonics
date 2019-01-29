function getKeys() {

    var letters = sessionStorage.getItem("currentImage");
    var alphabets = "abcdefghijklmnopqrstuvwxyz";
    var unique = letters.split('').filter(function (item, i, ar) {
        return ar.indexOf(item) === i;
    });
    var chosen = [];

    for (i = 0; i < unique.length; i++) {
        chosen.push(unique[i]);
    }

    while (chosen.length < 8) {
        var randomLetter = alphabets.charAt(Math.floor(Math.random() * alphabets.length));
        if (!duplicate(randomLetter, chosen)) {
            chosen.push(randomLetter);
        }
    }

    var shuffled = shuffle(chosen);
    var inputIndex = 0;
    for (i = 0; i < keyboard_res.length; i++) {
        for (j = 0; j < 4; j++) {
            keyboard_res[i].keys[j].key = shuffled[inputIndex];
            inputIndex++;
        }
    }
}

function shuffle(array) {
    var shuffleIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== shuffleIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * shuffleIndex);
        shuffleIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[shuffleIndex];
        array[shuffleIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}