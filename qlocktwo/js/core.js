//****************************************************************************//
//Nom          : core.js
//Date         : 24.02.15
//Version      : 0.1
//Auteur       : SEEMULLER Julien
//Description  : Le script permettant de génerer et gerer l'horloge.
//****************************************************************************//

var arrayLetters = [
    ["I", "L", "N", "E", "S", "T", "O", "U", "N", "E", "R"],
    ["D", "E", "U", "X", "N", "U", "T", "R", "O", "I", "S"],
    ["Q", "U", "A", "T", "R", "E", "D", "O", "U", "Z", "E"],
    ["C", "I", "N", "Q", "S", "I", "X", "S", "E", "P", "T"],
    ["H", "U", "I", "T", "N", "E", "U", "F", "D", "I", "X"],
    ["O", "N", "Z", "E", "R", "H", "E", "U", "R", "E", "S"],
    ["M", "O", "I", "N", "S", "O", "L", "E", "D", "I", "X"],
    ["E", "T", "R", "Q", "U", "A", "R", "T", "R", "E", "D"],
    ["V", "I", "N", "G", "T", "-", "C", "I", "N", "Q", "U"],
    ["E", "T", "S", "D", "E", "M", "I", "E", "P", "A", "N"]
];
var div = $("<div>", {class: "letter"});

for (i = 0; i < arrayLetters.length; i++) {
    for (j = 0; j < arrayLetters[i].length; j++) {
        div.append(arrayLetters[i][j]);
    }
}

$( "#matrix" ).append(div);

