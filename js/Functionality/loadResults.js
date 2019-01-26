function LoadResults() {
    var results = JSON.parse(sessionStorage.getItem("tries"));//get the tries
    var newTable = document.getElementById('resultsTable1').getElementsByTagName('tbody')[0]; //get the table
    var resultIndex = 0;
    var totalTries = 0;
    for (i = 0; i < results.length; i++) {
        // Insert a row in the table at the last row
        if (i == 10) {
            resultIndex = 0;
            $('#resultsTable2').show();
            newTable = document.getElementById('resultsTable2').getElementsByTagName('tbody')[0];
        }

        var newRow = newTable.insertRow(resultIndex);
        var StarCell1 = newRow.insertCell(0);
        var Word = newRow.insertCell(1);
        var Tries = newRow.insertCell(2);
        var StarCell2 = newRow.insertCell(3);

        //add css to cells
        StarCell1.className = "score_sheet_star";
        StarCell2.className = "score_sheet_star";
        Word.className = "text-center";
        Tries.className = "text-center";

        // add star to the cells
        var star1 = document.createElement("IMG");
        var star2 = document.createElement("IMG");
        star1.setAttribute("src", "resources/icons/scoresheet-star.svg");
        star2.setAttribute("src", "resources/icons/scoresheet-star.svg");
        StarCell1.appendChild(star1);
        StarCell2.appendChild(star2);

        //add the word
        var text = document.createTextNode(results[i][0]);
        Word.appendChild(text);

        //add the count of tries
        var countTries = document.createTextNode(results[i][1]);
        Tries.appendChild(countTries);

        resultIndex++;
        totalTries += results[i][1];

    }

    var totalWords = results.length;
    var totalPercentage = ((totalWords / totalTries) * 100).toFixed(1);

    if (getCookie("InputCookie") === "testing") {
        $('#running_total').html("Total = " + totalPercentage + "% | Words (" + totalWords + ") Tries (" + totalTries + ")");
    }
}
