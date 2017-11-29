// Tworze tablice, ktora bedzie przechowywala kod
var arr = [];

// Generowanie szyfru
for (var i = 0; i < 4; i++) {
    arr.push(Math.floor(Math.random() * 6))
}

//Wyswietlam w konsoli poprawny wynik
console.log("0 - red, 1 - orange, 2 - yellow, blue - 3, 4 - green, 5 - brown");
console.log(arr);

//Tworze tablice, ktora bedzie przechowywala kod proponowany przez gracza, zapycham ją 4 elementami, bym mogl sprawdzac,
//czy gracz moze przejsc do kolejnego poziomu
var code = [undefined, undefined, undefined, undefined];

//warunki sprawdzajace, czy guzik "sprawdzam" moze juz byc odblokowany
if ((code[0] == undefined) || (code[1] == undefined) || (code[2] == undefined) || (code[3] == undefined)) {
    $('#check').prop('disabled', true)
}


//licznik kolejnego rzedu tablicy code - tablica ta bedzie przechowywac kod proponowany przez gracza
var codeCounter;


var colors = ["red", "orange", "yellow", "blue", "green", "brown"];
var levelCounter = 1;

//petla for dzieki ktorej nie musze pisac kodu dla kazdego level'u
for (var level = 1; level <= 8; level++) {

    (function () {
        
//licznik potrzebny do przechodzenia z koloru na kolor kolejny
        var counter = 0;

        //metoda .data() użyta by przypisac kolejne wartosci dla level
        $(".level" + level + " .request .socketBig:nth-child(1)").data("level", level);

        //zmieniam kolor w sockecie nr 1 za pomoca LPP
        $(".level" + level + " .request .socketBig:nth-child(1)").on("click", function () {



            if ($(this).data("level") == levelCounter) {
               
                //pozycja 0 w tablicy kodu proponowanego przez gracza
                codeCounter = 0;
                
                //zmieniamy kolejno kolory socketow, jednoczesnie dodajac na biezaco kolor do code[]
                if (counter == 0) {
                    $(this).css("background-color", colors[counter]);
                    code[codeCounter] = counter;

                    counter++;
                } else if (counter == 1) {
                    $(this).css("background-color", colors[counter]);
                    code[codeCounter] = counter;

                    counter++;

                } else if (counter == 2) {
                    $(this).css("background-color", colors[counter]);
                    code[codeCounter] = counter;

                    counter++;

                } else if (counter == 3) {
                    $(this).css("background-color", colors[counter]);
                    code[codeCounter] = counter;

                    counter++;

                } else if (counter == 4) {
                    $(this).css("background-color", colors[counter]);
                    code[codeCounter] = counter;

                    counter++;

                } else if (counter == 5) {
                    $(this).css("background-color", colors[counter]);
                    code[codeCounter] = counter;

                    counter++;
                } else if (counter > 5) {
                    counter = 0;
                    code[codeCounter] = counter;
                    $(this).css("background-color", colors[counter]);

                    counter++;

                }

            }


            //po kazdym kliku w socket musimy sprawdzic czy cala tablica zostala juz zapelniona kolorami, tylko wtedy mozemy przejsc dalej
            if ((code[0] == undefined) || (code[1] == undefined) || (code[2] == undefined) || (code[3] == undefined)) {
                $('#check').prop('disabled', true)
            }
            if ((code[0] != undefined) && (code[1] != undefined) && (code[2] != undefined) && (code[3] != undefined)) {
                $('#check').prop('disabled', false)
            }

        });
    })();

    (function () {
        var counter = 0;

        $(".level" + level + " .request .socketBig:nth-child(2)").data("level", level);
        $(".level" + level + " .request .socketBig:nth-child(2)").on("click", function () {

            if ($(this).data("level") == levelCounter) {

                codeCounter = 1;
                if (counter == 0) {
                    $(this).css("background-color", colors[counter]);
                    code[codeCounter] = counter;

                    counter++;
                } else if (counter == 1) {
                    $(this).css("background-color", colors[counter]);
                    code[codeCounter] = counter;

                    counter++;

                } else if (counter == 2) {
                    $(this).css("background-color", colors[counter]);
                    code[codeCounter] = counter;

                    counter++;

                } else if (counter == 3) {
                    $(this).css("background-color", colors[counter]);
                    code[codeCounter] = counter;

                    counter++;

                } else if (counter == 4) {
                    $(this).css("background-color", colors[counter]);
                    code[codeCounter] = counter;

                    counter++;

                } else if (counter == 5) {
                    $(this).css("background-color", colors[counter]);
                    code[codeCounter] = counter;

                    counter++;
                } else if (counter > 5) {
                    counter = 0;
                    code[codeCounter] = counter;
                    $(this).css("background-color", colors[counter]);

                    counter++;

                }
            }
            if ((code[0] == undefined) || (code[1] == undefined) || (code[2] == undefined) || (code[3] == undefined)) {
                $('#check').prop('disabled', true)
            }
            if ((code[0] != undefined) && (code[1] != undefined) && (code[2] != undefined) && (code[3] != undefined)) {
                $('#check').prop('disabled', false)
            }
        });
    })();

    (function () {
        var counter = 0;

        $(".level" + level + " .request .socketBig:nth-child(3)").data("level", level);
        $(".level" + level + " .request .socketBig:nth-child(3)").on("click", function () {

            if ($(this).data("level") == levelCounter) {

                codeCounter = 2;
                if (counter == 0) {
                    $(this).css("background-color", colors[counter]);
                    code[codeCounter] = counter;

                    counter++;
                } else if (counter == 1) {
                    $(this).css("background-color", colors[counter]);
                    code[codeCounter] = counter;

                    counter++;

                } else if (counter == 2) {
                    $(this).css("background-color", colors[counter]);
                    code[codeCounter] = counter;

                    counter++;

                } else if (counter == 3) {
                    $(this).css("background-color", colors[counter]);
                    code[codeCounter] = counter;

                    counter++;

                } else if (counter == 4) {
                    $(this).css("background-color", colors[counter]);
                    code[codeCounter] = counter;

                    counter++;

                } else if (counter == 5) {
                    $(this).css("background-color", colors[counter]);
                    code[codeCounter] = counter;

                    counter++;
                } else if (counter > 5) {
                    counter = 0;
                    code[codeCounter] = counter;
                    $(this).css("background-color", colors[counter]);

                    counter++;

                }
            }
            if ((code[0] == undefined) || (code[1] == undefined) || (code[2] == undefined) || (code[3] == undefined)) {
                $('#check').prop('disabled', true)
            }
            if ((code[0] != undefined) && (code[1] != undefined) && (code[2] != undefined) && (code[3] != undefined)) {
                $('#check').prop('disabled', false)
            }
        });

    })();

    (function () {

        var counter = 0;

        $(".level" + level + " .request .socketBig:nth-child(4)").data("level", level);
        $(".level" + level + " .request .socketBig:nth-child(4)").on("click", function () {

            if ($(this).data("level") == levelCounter) {

                codeCounter = 3;
                if (counter == 0) {
                    $(this).css("background-color", colors[counter]);
                    code[codeCounter] = counter;

                    counter++;
                } else if (counter == 1) {
                    $(this).css("background-color", colors[counter]);
                    code[codeCounter] = counter;

                    counter++;

                } else if (counter == 2) {
                    $(this).css("background-color", colors[counter]);
                    code[codeCounter] = counter;

                    counter++;

                } else if (counter == 3) {
                    $(this).css("background-color", colors[counter]);
                    code[codeCounter] = counter;

                    counter++;

                } else if (counter == 4) {
                    $(this).css("background-color", colors[counter]);
                    code[codeCounter] = counter;

                    counter++;

                } else if (counter == 5) {
                    $(this).css("background-color", colors[counter]);
                    code[codeCounter] = counter;

                    counter++;
                } else if (counter > 5) {
                    counter = 0;
                    code[codeCounter] = counter;
                    $(this).css("background-color", colors[counter]);

                    counter++;

                }
            }

            if ((code[0] == undefined) || (code[1] == undefined) || (code[2] == undefined) || (code[3] == undefined)) {
                $('#check').prop('disabled', true)
            }
            if ((code[0] != undefined) && (code[1] != undefined) && (code[2] != undefined) && (code[3] != undefined)) {
                $('#check').prop('disabled', false)
            }
        });
    })();

}

//guzik check - za jego pomoca sprawdzamy proponowana kombinacje przez gracza
$("#check").on("click", function () {
    //robimy kopie szyfru oraz kodu proponowanego przez gracza, gdyz algorytm "niszczy" nasze tablice
    //to na kopiach będziemy operowac, sprawdzajac poprawnosc kodu
    var tempArr = arr.concat([]);
    var tempCode = code.concat([]);

    //tablica ktora bedziemy mieszac, by odpowiedzi pojawiajace sie w littleSocket'ach nie byly schematyczne
    // Jest to wazne, gdyż gracz znajac juz schemat moze znacznie latwiej odgadnac szyfr
    var mixAnswer = [1, 2, 3, 4];

    //funkcja mieszajaca tablice, malo wydajna, ale na nasza tablice 4 elementowa calkowicie wystarczy
    /*Native sort with callback */
        mixAnswer.sort(function () {
            return .5 - Math.random();
        });


    // bardziej wydajny algorytm
    /* Knuth-Fisher-Yates as for */
//    function knuthfisheryates(mixAnswer) {
//        var i, temp, j, len = mixAnswer.length;
//        for (i = 0; i < len; i++) {
//            j = ~~(Math.random() * (i + 1));
//            temp = mixAnswer[i];
//            mixAnswer[i] = mixAnswer[j];
//            mixAnswer[j] = temp;
//        }
//
//        return mixAnswer;
//
//    }


    //Najpierw sprawdzamy i wykluczamy z tablicy kolory ktore sa poprawne miejscem i kolorem
    //oraz podmieniamy poprawne odpowiedzi czymkolwiek, wazne aby bylo to cos innego niz liczby z naszego zakresu
    //oraz by tempArr i tempCode nie byly podmieniane na to samo
    //calosc operacji jest niezbedna, musimy wyeliminowac mozliwosc ponownego zliczenia danego koloru
    for (var i = 0; i < 4; i++) {
        if (tempCode[i] == tempArr[i]) {
            $(".level" + levelCounter + " .answer .socketSmall:nth-child(" + (mixAnswer[i]) + ")").css("background-color", "black");
            tempArr.splice(i, 1, 'B');
            tempCode.splice(i, 1, '_B');

        }
    }

    //W tym miejscu sprawdzamy czy kolor w ogole wystepuje w szyfrze. Wykluczajac wczesniej nasze "czarne" strzaly
    //mamy pewnosc ze nie podmienimy czarnego jako bialego
    for (var j = 0; j < 4; j++) {
        for (var i = 0; i < 4; i++) {

            if (tempCode[j] == tempArr[i]) {
                $(".level" + levelCounter + " .answer .socketSmall:nth-child(" + (mixAnswer[i]) + ")").css("background-color", "white");
                tempArr.splice(i, 1, 'W');
                tempCode.splice(j, 1, '_W');
            }
        }
    }
    //po wcisnieciu guzika check zmieniamy rzad na kolejny
    levelCounter++;
    
    //zmieniamy rząd poprzedni rzad aktywny na neutralny ( zabieg ma na celu ulatwic nawigacje)
    $(".level" + (levelCounter - 1)).css("background-color", "transparent");
    $(".level" + (levelCounter - 1)).css("border-left", "none");
    $(".level" + (levelCounter - 1)).css("border-right", "none");
    $(".level" + (levelCounter - 1) + " .request .socketBig").css("cursor", "not-allowed");

    //jesli nie odgadlismy szyfru, przechodzimy to "farbujemy" kolejny rzad(cel ten sam, co wyzej)
    //zamieniamy tablice na stringi, by je moc szybko porownac, sposob wystarczajacy na nasze potrzeby
    if ((JSON.stringify(arr) != JSON.stringify(code))) {
        $(".level" + levelCounter).css("background-color", "rgba(0,0,0,0.7)");
        $(".level" + levelCounter).css("border-left", "10px solid black");
        $(".level" + levelCounter).css("border-right", "10px solid black");
        $(".level" + levelCounter + " .request .socketBig").css("cursor", "pointer");
    }

    //wylaczamy mozliwosc uzycia guzika, by nie bylo mozliwosci uzycia go bez powodu
    $('#check').prop('disabled', true);

    //jesli szyfr zostal odgadniety, to zaznaczamy poprawna odpowiedz na zielono
    if ((JSON.stringify(arr) == JSON.stringify(code))) {

        $(".level" + (levelCounter - 1)).css("background-color", "rgba(72,251,71,0.7)");
        $(".level" + (levelCounter - 1)).css("border-left", "10px solid #48fb47");
        $(".level" + (levelCounter - 1)).css("border-right", "10px solid #48fb47");
        $(".level" + (levelCounter - 1) + " .request .socketBig").css("cursor", "none");
        $(".level" + levelCounter + " .request .socketBig").css("pointer-events", "none");
        $(".level" + levelCounter + " .request .socketBig .yourLevel").css("pointer-events", "none");
        
        //chowamy nasz guzik na rzecz informacji informujacej nas o zwyciestwie
        $('#check').css("display", "none");
        $('.gameStatus.winInfo').css("display", "block");

        //jesli po przejsciu przez wszystkie 8 rzedow nie uda nam sie zlamac szyfru to przegrywamy. 
        //wyswietla sie nam poprawna kombinacja w specjalnie zaprojektowanym do tego rzedzie
    } else if ((levelCounter == 9) && (JSON.stringify(arr) != JSON.stringify(code))) {
        $(".level9").css("display", "table");
        $(".level9 .request .socketBig").css("cursor", "none");
        for (var j = 0; j <= 3; j++) {
            for (var i = 0; i <= 5; i++) {
                if (arr[j] == i) {
                    $(".level9 .request .socketBig:nth-child(" + (j + 1) + ")").css("background-color", colors[i]);
                }
            }

        }
        $(".level9").css("background-color", "rgba(255,165,0,0.7)");
        $(".level9").css("border", "2px solid #FFA500");
        $(".level9").css("border-left", "10px solid #FFA500");
        $(".level9").css("border-right", "10px solid #FFA500");
        
        //ukrycie guzika, wyswietlenie informacji o przegranej
        $('#check').css("display", "none");
        $('.gameStatus.loseInfo').css("display", "block");
        $('.wrapper').css("margin-bottom", "50px");



    }

    //zerowanie tablicy kodu proponowanego przez gracza
    //operacja potrzebna, by wynik nie byl zaklamywany, a guzik check mial poprawne informacje
    code = [];
});


/* modal z zasadami gry */

//pobieramy kolejno modal, guzik otwierajacy modal oraz element X zamykajacy modal
var modal = document.getElementById('myModal');

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];


//jesli uzytkownik kliknie guzik, otwieramy modal
btn.onclick = function () {
    modal.style.display = "block";
}
//jesli uzytkownik kliknie X, zamykamy modal
span.onclick = function () {
    modal.style.display = "none";
}
// jesli uzytkownik kliknie gdziekolwiek poza modalem, zamykamy modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//reset strony
$(".reset").click(function () {
    document.location.reload(true);
});
