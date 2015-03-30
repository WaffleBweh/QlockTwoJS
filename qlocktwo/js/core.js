//****************************************************************************//
//Nom          : core.js
//Date         : 24.02.15
//Version      : 0.1
//Auteur       : SEEMULLER Julien
//Description  : Le script permettant de génerer et gerer l'horloge.
//****************************************************************************//

var arrayLetters;
var sentence;
var firstLaunch = true;


$("#btnFR").click(function () {
    //On efface le tableau
    $("#matrix").html("");

    //On crée un tableau de lettres
    arrayLetters = [
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
    sentence = {
        //Debut de phrase (Il est ... heures)
        pre: {
            all: [[0, 0, 1], [0, 3, 5]]
        },
        //Heures
        hour: {
            1: [[0, 7, 9]],
            2: [[1, 0, 3]],
            3: [[1, 6, 10]],
            4: [[2, 0, 5]],
            5: [[3, 0, 3]],
            6: [[3, 4, 6]],
            7: [[3, 7, 10]],
            8: [[4, 0, 3]],
            9: [[4, 4, 7]],
            10: [[4, 8, 10]],
            11: [[5, 0, 3]],
            12: [[2, 6, 10]]
        },
        //Minutes
        minute: {
            0: [[5, 5, 10]],
            5: [[8, 6, 9], [5, 5, 10]],
            10: [[6, 8, 10], [5, 5, 10]],
            15: [[7, 0, 1], [7, 3, 7], [5, 5, 10]],
            20: [[8, 0, 4], [5, 5, 10]],
            25: [[8, 0, 9], [5, 5, 10]],
            30: [[9, 0, 1], [9, 3, 6], [5, 5, 10]],
            35: [[6, 0, 4], [8, 0, 9], [5, 5, 10]],
            40: [[6, 0, 4], [8, 0, 4], [5, 5, 10]],
            45: [[6, 0, 4], [7, 3, 7], [5, 5, 10]],
            50: [[6, 0, 4], [6, 8, 10], [5, 5, 10]],
            55: [[6, 0, 4], [8, 6, 9], [5, 5, 10]]
        }
    };

    //On parcours le tableau de lettre et on crée un div de 50px/50px pour chaque lettres
    for (i = 0; i < arrayLetters.length; i++) {
        for (j = 0; j < arrayLetters[i].length; j++) {
            $("#matrix").append("<div class=\"letterBox" + " " + i + j + "\">" + arrayLetters[i][j] + "</div>");
        }
    }

    //Si on lance le programme pour la première fois, on lance l'horloge
    if (firstLaunch) {
        firstLaunch = false;
        //Chaque une seconde, on affiche et on actualise l'horloge.
        setInterval(function () {
            updateClock();
        }, 1000);
    }
});

$("#btnEN").click(function () {
    //On efface le tableau
    $("#matrix").html("");

    //On crée un tableau de lettres
    arrayLetters = [
        ["I", "T", "L", "I", "S", "B", "F", "A", "M", "P", "M"],
        ["A", "C", "Q", "U", "A", "R", "T", "E", "R", "D", "C"],
        ["T", "W", "E", "N", "T", "Y", "F", "I", "V", "E", "X"],
        ["H", "A", "L", "F", "B", "T", "E", "N", "F", "T", "O"],
        ["P", "A", "S", "T", "E", "R", "U", "N", "I", "N", "E"],
        ["O", "N", "E", "S", "I", "X", "T", "H", "R", "E", "E"],
        ["F", "O", "U", "R", "F", "I", "V", "E", "T", "W", "O"],
        ["E", "I", "G", "H", "T", "E", "L", "E", "V", "E", "N"],
        ["S", "E", "V", "E", "N", "T", "W", "E", "L", "V", "E"],
        ["T", "E", "N", "S", "E", "O'", "C", "L", "O", "C", "K"]
    ];

//On crée un objet pour les phrases
    sentence = {
        //Debut de phrase (Il est ... heures)
        pre: {
            all: [[0, 0, 1], [0, 3, 4]]
        },
        //Heures
        hour: {
            1: [[5, 0, 2]],
            2: [[6, 8, 10]],
            3: [[5, 6, 10]],
            4: [[6, 0, 3]],
            5: [[6, 4, 7]],
            6: [[5, 3, 5]],
            7: [[8, 0, 4]],
            8: [[7, 0, 3]],
            9: [[4, 7, 10]],
            10: [[9, 0, 2]],
            11: [[7, 5, 10]],
            12: [[8, 5, 10]]
        },
        //Minutes
        minute: {
            0: [[9, 5, 10]],
            5: [[2, 6, 9], [4, 0, 3]],
            10: [[3, 5, 7], [4, 0, 3]],
            15: [[1, 2, 8], [4, 0, 3]],
            20: [[2, 0, 5], [4, 0, 3]],
            25: [[2, 0, 9], [4, 0, 3]],
            30: [[3, 0, 3], [4, 0, 3]],
            35: [[2, 0, 9], [3, 9, 10]],
            40: [[2, 0, 5], [3, 9, 10]],
            45: [[1, 2, 8], [3, 9, 10]],
            50: [[3, 5, 7], [3, 9, 10]],
            55: [[2, 6, 9], [3, 9, 10]]
        }
    };

    //On parcours le tableau de lettre et on crée un div de 50px/50px pour chaque lettres
    for (i = 0; i < arrayLetters.length; i++) {
        for (j = 0; j < arrayLetters[i].length; j++) {
            $("#matrix").append("<div class=\"letterBox" + " " + i + j + "\">" + arrayLetters[i][j] + "</div>");
        }
    }

    //Si on lance le programme pour la première fois, on lance l'horloge
    if (firstLaunch) {
        firstLaunch = false;
        //Chaque une seconde, on affiche et on actualise l'horloge.
        setInterval(function () {
            updateClock();
        }, 1000);
    }
});


for (i = 1; i <= 4; i++) {
    $("#dot-container").append("<span id=\"point" + i + "\" class=\"dot\">●</span>");
}


//On met a jour l'heure
function updateTime() {
    var d = new Date();
    var time = {hours: d.getHours(), minutes: d.getMinutes(), seconds: d.getSeconds()};
    return (time);
}

function updateClock() {
    //On récupère l'heure actuelle
    currentTime = updateTime();
    //On nettoye les lettres et les points avant d'en afficher des nouvelles
    $(".letterBox").removeClass("lightLetter");
    $(".dot").removeClass("lightLetter");

    //On initialise une variable pour les nouvelles heures
    newHours = currentTime.hours;
    //On coupe les minutes par tranche de 5min
    newMinutes = Math.floor(currentTime.minutes / 5) * 5;
    //On crée une variable pour les minutes des points
    dotMinutes = currentTime.minutes - newMinutes;

    //Si les minutes sont au dessus de 30, on ajoute 1 a l'heure
    //Ex : il est CINQ heures MOINS vingt-cinq
    if (newMinutes > 30) {
        newHours += 1;
    }

    //On limite les heures à un format 12 heures
    if (newHours > 12) {
        newHours -= 12;
    }

    //On crée un array pour les heures formatées correctement
    hoursArray = sentence.hour[newHours];
    //On crée un array pour les minutes formatées correctement
    minuteArray = sentence.minute[newMinutes];


    //On affiche les infos permanantes (Il est ...)
    sentence.pre.all.forEach(function (y) {
        for (i = y[1]; i <= y[2]; i++) {
            $("." + y[0] + i).addClass("lightLetter");
        }
    });

    //On parcours notre array des heures pour recuperer les caractères à illuminer, puis on les illumine
    hoursArray.forEach(function (y) {
        for (i = y[1]; i <= y[2]; i++) {
            $("." + y[0] + i).addClass("lightLetter");
        }
    });

    //On parcours notre array des minutes pour recuperer les caractères à illuminer, puis on les illumine
    minuteArray.forEach(function (y) {
        for (i = y[1]; i <= y[2]; i++) {
            $("." + y[0] + i).addClass("lightLetter");
        }
    });

    //On affiche les minutes précises graces aux points
    for (i = 1; i <= dotMinutes; i++) {
        $("#point" + i).addClass("lightLetter");
    }
}