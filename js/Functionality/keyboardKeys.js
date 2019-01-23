function getKeys() {

    console.log(sessionStorage.getItem("currentImage"));
    var letters = sessionStorage.getItem("currentImage")
    var alphabets = "abcdefghijklmnopqrstuvwxyz"
    //alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    //filtered = ['','','','','','','',''];
    //answer = localStorage.getItem("currentLetters");
    var unique = letters.split('').filter(function(item, i, ar){ return ar.indexOf(item) === i; });
    var chosen = []
    // filtered = []
    // var chosenIndex = 0;
    // for (i = 0; i < letters.length; i++) {
    //     console.log(letters[i])
    //     if (!duplicate(letters[i], chosen)){
    //         chosen.push(letters[i]);
    //     } else {
    //         break;
    //     }
    // }
    for (i = 0; i < unique.length; i++) {
        chosen.push(unique[i]);
    }
    
    console.log(chosen);

    while(chosen.length < 8) {
        var randomLetter = alphabets.charAt(Math.floor(Math.random() * alphabets.length))
        if (!duplicate(randomLetter, chosen)) {
            chosen.push(randomLetter);
        }
    }
    console.log(chosen);

    var shuffled = shuffle(chosen);
    var inputIndex = 0;
    for (i= 0 ; i < keyboard_res.length; i++) {
        for(j=0; j < 4; j++) {
            keyboard_res[i].keys[j].key = shuffled[inputIndex];
            inputIndex++;
        }
    }
    console.log(shuffled);
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