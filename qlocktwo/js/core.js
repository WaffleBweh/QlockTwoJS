//****************************************************************************//
//Nom          : core.js
//Date         : 24.02.15
//Version      : 0.1
//Auteur       : SEEMULLER Julien
//Description  : Le script permettant de génerer et gerer l'horloge.
//****************************************************************************//

//On crée un tableau de lettres
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

//On crée un objet pour les phrases
var sentence = {
    //Debut de phrase (Il est)
    pre: {
        all: [[0][0],[0][1],[0][3],[0][4],[0][5]]
    },
    //Heures
    hour: {
        1 : [[0][7],[0][8],[0][9]], 
        2 : [[1][0],[1][1],[1][2],[1][3]], 
        3 : [[1][6],[1][7],[1][8],[1][9],[1][10]], 
        4 : [[2][0],[2][1],[2][2],[2][3],[2][4],[2][5]],  
        5 : [[3][0],[3][1],[3][2],[3][3]], 
        6 : [[3][4],[3][5],[3][6]], 
        7 : [[3][7],[3][8],[3][9],[3][10]], 
        8 : [[4][0],[4][1],[4][2],[4][3]], 
        9 : [[4][4],[4][5],[4][6],[4][7]], 
        10: [[4][8],[4][9],[4][10]], 
        11: [[5][0],[5][1],[5][2],[5][3]], 
        12: [[2][6],[2][7],[2][8],[2][9],[2][10]]
    },
    minute: {
        
    }
};

//On parcours le tableau de lettre et on crée un div de 50px/50px pour chaque lettres
for (i = 0; i < arrayLetters.length; i++) {
    for (j = 0; j < arrayLetters[i].length; j++) {
        $("#matrix").append("<div class=\"letterBox\">" + arrayLetters[i][j] + "</div>");
    }
}

//On met a jour l'heure, les minutes et les secondes chaque 1000ms (1 seconde)
setInterval(function(){ updateTime() }, 1000);
function updateTime(){
    var d = new Date();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
}