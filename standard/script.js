// Tworze tablice, ktora bedzie przechwywala kod
var arr = [];

// Generowanie szyfru  
for (var i = 0; i < 4; i++) {
    arr.push(Math.floor(Math.random() * 6))
}

//Wyswietlam w konsoli poprawny wynik
console.log("0 - red, 1 - orange, 2 - yellow, 3 - blue, 4 - green, 5 - brown");
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

//tablica kolorow
var colors = ["red", "orange", "yellow", "blue", "green", "#512A09"];

//tablica symboli dla daltonistow
var symbols = ["A", "B", "C", "D", "E", "F"];

//domyslnie symbole sa przezroczyste
$(".socketBig").css("color", "transparent");
$(".socketBig").css("text-shadow", "none");

var symbolsCounter = true;

//przelacznik trybu dla daltonistow
$("#colorblind").on("click", function () {

    symbolsCounter = !symbolsCounter;

    if (symbolsCounter == true) {
        $(".socketBig").css("color", "transparent");
        $(".socketBig").css("text-shadow", "none");
    } else {
        $(".socketBig").css("color", "white");
        $(".socketBig").css("text-shadow", "0 0 1px #000");
    }
});



var levelCounter = 1;


//sciezki dostepu do plikow audio
var checkSound = new Audio("./sound/check.mp3");
var rollSound = new Audio("./sound/button-50.mp3");

//ustawiam dzwiek na przekliku duzego socketa
$('.socketBig').click(function () {
    //przed kazdym odtworzeniem zeruje czas trwania utworu, by niezaleznie od tego czy dzwiek sie odegral do konca, 
    //czy tez nie, przy kazdym przekliku dzwiek bedzie odtwarzany

    rollSound.currentTime = 0;
    rollSound.play();
});

//oraz na guziku "check"
$('#check').click(function () {
    checkSound.currentTime = 0;
    checkSound.play();
});


//ustawiam dzwiek rowniez na prawym przycisku myszy
$('.socketBig').on("contextmenu", function () {
    rollSound.currentTime = 0;
    rollSound.play();
});





var flag = true;

//przelacznik trybu mute
$("#muteBtn").on("click", function () {

    flag = !flag;

    if (flag === true) {
        $('.socketBig').click(function () {
            rollSound.currentTime = 0;
            rollSound.play();
        });
        $('#check').click(function () {
            checkSound.currentTime = 0;
            checkSound.play();
        });
        $('.socketBig').on("contextmenu", function () {
            rollSound.currentTime = 0;
            rollSound.play();
        });
    } else {
        $('.socketBig').click(function () {
            rollSound.pause();
        });
        $('#check').click(function () {

            checkSound.pause();
        });
        $('.socketBig').on("contextmenu", function () {
            rollSound.pause();
        });
    }
});

//tworze licznik czasu korzystajac z biblioteki easytimer.js
//https://albert-gonzalez.github.io/easytimer.js
//bede wyswietlal minuty, sekundy oraz dziesietne sekundy
var timerAbsoluteTime;
var timer = new Timer();
timer.addEventListener('secondTenthsUpdated', function (e) {
    $('.timeCounter').html(timer.getTimeValues().toString(['minutes', 'seconds', 'secondTenths']));
    timerAbsoluteTime = timer.getTotalTimeValues().secondTenths;
});



//petla for dzieki ktorej nie musze pisac kodu dla kazdego level'u
for (var level = 1; level <= 8; level++) {

    (function () {

        //licznik potrzebny do przechodzenia z koloru na kolor kolejny
        var counter = -1;

        //metoda .data() użyta by przypisac kolejne wartosci dla level
        $(".board .level" + level + " .request .socketBig:nth-child(1)").data("level", level);

        //zmieniam kolor w sockecie nr 1 za pomoca LPP
        $(".board .level" + level + " .request .socketBig:nth-child(1)").on("click", function () {
            //            $(".board .level" + level + " .request .socketBig:nth-child(1)").data("level", level);


            if ($(this).data("level") == levelCounter) {

                //pozycja 0 w tablicy kodu proponowanego przez gracza
                codeCounter = 0;

                //zmieniamy kolejno kolory socketow, jednoczesnie dodajac na biezaco kolor do code[]
                if (counter == -1) {
                    //rozpoczynam liczyc czas
                    timer.start({
                        precision: 'secondTenths'
                    });
                    counter++;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;



                } else if (counter == 0) {

                    counter++;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;



                } else if (counter == 1) {
                    counter++;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;



                } else if (counter == 2) {
                    counter++;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;



                } else if (counter == 3) {
                    counter++;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;



                } else if (counter == 4) {
                    counter++;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;



                } else if (counter >= 5) {
                    counter = 0;
                    code[codeCounter] = counter;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(".socketBig").css("color", "transparent");
                        $(".socketBig").css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }


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

        //zmiana kolorow/symboli na prawym przekliku
        $(".level" + level + " .request .socketBig:nth-child(1)").on("contextmenu", function (event) {
            //usuwam domyslne contextmenu po kliknieciu PPM
            event.preventDefault();

            if ($(this).data("level") == levelCounter) {

                //pozycja 0 w tablicy kodu proponowanego przez gracza
                codeCounter = 0;

                //zmieniamy kolejno kolory socketow, jednoczesnie dodajac na biezaco kolor do code[]
                if (counter == 5) {

                    counter--;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;




                } else if (counter == 4) {

                    counter--;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;




                } else if (counter == 3) {

                    counter--;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;




                } else if (counter == 2) {

                    counter--;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;




                } else if (counter == 1) {

                    counter--;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;




                } else if (counter <= 0) {
                    timer.start({
                        precision: 'secondTenths'
                    });
                    counter = 5;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;



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

        //licznik potrzebny do przechodzenia z koloru na kolor kolejny
        var counter = -1;

        //metoda .data() użyta by przypisac kolejne wartosci dla level
        $(".board .level" + level + " .request .socketBig:nth-child(2)").data("level", level);

        //zmieniam kolor w sockecie nr 1 za pomoca LPP
        $(".board .level" + level + " .request .socketBig:nth-child(2)").on("click", function () {



            if ($(this).data("level") == levelCounter) {

                //pozycja 0 w tablicy kodu proponowanego przez gracza
                codeCounter = 1;

                //zmieniamy kolejno kolory socketow, jednoczesnie dodajac na biezaco kolor do code[]
                if (counter == -1) {
                    timer.start({
                        precision: 'secondTenths'
                    });
                    counter++;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;



                } else if (counter == 0) {

                    counter++;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;



                } else if (counter == 1) {
                    counter++;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;



                } else if (counter == 2) {
                    counter++;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;



                } else if (counter == 3) {
                    counter++;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;



                } else if (counter == 4) {
                    counter++;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;



                } else if (counter >= 5) {
                    counter = 0;
                    code[codeCounter] = counter;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(".socketBig").css("color", "transparent");
                        $(".socketBig").css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }


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


        $(".level" + level + " .request .socketBig:nth-child(2)").on("contextmenu", function (event) {
            event.preventDefault();

            if ($(this).data("level") == levelCounter) {

                //pozycja 1 w tablicy kodu proponowanego przez gracza
                codeCounter = 1;

                //zmieniamy kolejno kolory socketow, jednoczesnie dodajac na biezaco kolor do code[]
                if (counter == 5) {

                    counter--;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;




                } else if (counter == 4) {

                    counter--;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;




                } else if (counter == 3) {

                    counter--;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;




                } else if (counter == 2) {

                    counter--;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;




                } else if (counter == 1) {

                    counter--;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;




                } else if (counter <= 0) {
                    timer.start({
                        precision: 'secondTenths'
                    });
                    counter = 5;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;



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

        //licznik potrzebny do przechodzenia z koloru na kolor kolejny
        var counter = -1;

        //metoda .data() użyta by przypisac kolejne wartosci dla level
        $(".board .level" + level + " .request .socketBig:nth-child(3)").data("level", level);

        //zmieniam kolor w sockecie nr 1 za pomoca LPP
        $(".board .level" + level + " .request .socketBig:nth-child(3)").on("click", function () {



            if ($(this).data("level") == levelCounter) {

                //pozycja 2 w tablicy kodu proponowanego przez gracza
                codeCounter = 2;

                //zmieniamy kolejno kolory socketow, jednoczesnie dodajac na biezaco kolor do code[]
                if (counter == -1) {
                    timer.start({
                        precision: 'secondTenths'
                    });
                    counter++;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;



                } else if (counter == 0) {

                    counter++;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;



                } else if (counter == 1) {
                    counter++;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;



                } else if (counter == 2) {
                    counter++;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;



                } else if (counter == 3) {
                    counter++;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;



                } else if (counter == 4) {
                    counter++;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;



                } else if (counter >= 5) {
                    counter = 0;
                    code[codeCounter] = counter;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(".socketBig").css("color", "transparent");
                        $(".socketBig").css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }


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


        $(".level" + level + " .request .socketBig:nth-child(3)").on("contextmenu", function (event) {
            event.preventDefault();

            if ($(this).data("level") == levelCounter) {

                //pozycja 2 w tablicy kodu proponowanego przez gracza
                codeCounter = 2;

                //zmieniamy kolejno kolory socketow, jednoczesnie dodajac na biezaco kolor do code[]
                if (counter == 5) {

                    counter--;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;




                } else if (counter == 4) {

                    counter--;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;




                } else if (counter == 3) {

                    counter--;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;




                } else if (counter == 2) {

                    counter--;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;




                } else if (counter == 1) {

                    counter--;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;




                } else if (counter <= 0) {
                    timer.start({
                        precision: 'secondTenths'
                    });
                    counter = 5;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;



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

        //licznik potrzebny do przechodzenia z koloru na kolor kolejny
        var counter = -1;

        //metoda .data() użyta by przypisac kolejne wartosci dla level
        $(".board .level" + level + " .request .socketBig:nth-child(4)").data("level", level);

        //zmieniam kolor w sockecie nr 1 za pomoca LPP
        $(".board .level" + level + " .request .socketBig:nth-child(4)").on("click", function () {



            if ($(this).data("level") == levelCounter) {

                //pozycja 3 w tablicy kodu proponowanego przez gracza
                codeCounter = 3;

                //zmieniamy kolejno kolory socketow, jednoczesnie dodajac na biezaco kolor do code[]
                if (counter == -1) {
                    timer.start({
                        precision: 'secondTenths'
                    });
                    counter++;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;



                } else if (counter == 0) {

                    counter++;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;



                } else if (counter == 1) {
                    counter++;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;



                } else if (counter == 2) {
                    counter++;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;



                } else if (counter == 3) {
                    counter++;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;



                } else if (counter == 4) {
                    counter++;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;



                } else if (counter >= 5) {
                    counter = 0;
                    code[codeCounter] = counter;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(".socketBig").css("color", "transparent");
                        $(".socketBig").css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }


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


        $(".level" + level + " .request .socketBig:nth-child(4)").on("contextmenu", function (event) {
            event.preventDefault();

            if ($(this).data("level") == levelCounter) {

                //pozycja 3 w tablicy kodu proponowanego przez gracza
                codeCounter = 3;

                //zmieniamy kolejno kolory socketow, jednoczesnie dodajac na biezaco kolor do code[]
                if (counter == 5) {

                    counter--;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;




                } else if (counter == 4) {

                    counter--;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;




                } else if (counter == 3) {

                    counter--;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;




                } else if (counter == 2) {

                    counter--;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;




                } else if (counter == 1) {

                    counter--;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;




                } else if (counter <= 0) {
                    timer.start({
                        precision: 'secondTenths'
                    });
                    counter = 5;
                    $(this).css("background-color", colors[counter]);
                    if (symbolsCounter === true) {
                        $(this).html(symbols[counter]);
                        $(this).css("color", "transparent");
                        $(this).css("text-shadow", "none");
                    } else {
                        $(this).html(symbols[counter]);
                    }
                    code[codeCounter] = counter;



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

    //Najpierw sprawdzamy i wykluczamy z tablicy kolory ktore sa poprawne miejscem i kolorem
    //oraz podmieniamy poprawne odpowiedzi czymkolwiek, wazne aby bylo to cos innego niz liczby z naszego zakresu
    //oraz by tempArr i tempCode nie byly podmieniane na to samo
    //calosc operacji jest niezbedna, musimy wyeliminowac mozliwosc ponownego zliczenia danego koloru
    for (var i = 0; i < 4; i++) {
        if (tempCode[i] == tempArr[i]) {
            $(".board .level" + levelCounter + " .answer .socketSmall:nth-child(" + (mixAnswer[i]) + ")").css("background-color", "black");
            tempArr.splice(i, 1, 'B');
            tempCode.splice(i, 1, '_B');

        }
    }

    //W tym miejscu sprawdzamy czy kolor w ogole wystepuje w szyfrze. Wykluczajac wczesniej nasze "czarne" strzaly
    //mamy pewnosc ze nie podmienimy czarnego jako bialego
    for (var j = 0; j < 4; j++) {
        for (var i = 0; i < 4; i++) {

            if (tempCode[j] == tempArr[i]) {
                $(".board .level" + levelCounter + " .answer .socketSmall:nth-child(" + (mixAnswer[i]) + ")").css("background-color", "white");
                tempArr.splice(i, 1, 'W');
                tempCode.splice(j, 1, '_W');
            }
        }
    }
    //po wcisnieciu guzika check zmieniamy rzad na kolejny
    levelCounter++;

    //zmieniamy rząd poprzedni rzad aktywny na neutralny ( zabieg ma na celu ulatwic nawigacje)
    $(".level" + (levelCounter - 1)).css("background-color", "transparent");
    $(".level" + (levelCounter - 1)).css("border-top", "none");
    $(".level" + (levelCounter - 1)).css("border-bottom", "none");
    $(".level" + (levelCounter - 1)).css("box-shadow", "none");
    $(".level" + (levelCounter - 1) + " .request .socketBig").css("cursor", "not-allowed");
    $(".level" + (levelCounter - 1) + " .request .socketBig").css("pointer-events", "none");


    //jesli nie odgadlismy szyfru, przechodzimy to "farbujemy" kolejny rzad(cel ten sam, co wyzej)
    //zamieniamy tablice na stringi, by je moc szybko porownac, sposob wystarczajacy na nasze potrzeby
    if ((JSON.stringify(arr) != JSON.stringify(code))) {
        $(".level" + levelCounter).css("background-color", "rgba(0,0,0,0.7)");
        $(".level" + levelCounter).css("border-top", "2px solid black");
        $(".level" + levelCounter).css("border-bottom", "2px solid black");
        $(".level" + levelCounter).css("box-shadow", "inset 0 0 7px 0 rgba(0, 0, 0, 0.75);");
        $(".level" + levelCounter + " .request .socketBig").css("cursor", "pointer");
        $(".level" + levelCounter + " .request .socketBig").css("pointer-events", "auto");
    }

    //wylaczamy mozliwosc uzycia guzika, by nie bylo mozliwosci uzycia go bez powodu
    $('#check').prop('disabled', true);
    var totalScore;
    //jesli szyfr zostal odgadniety, to zaznaczamy poprawna odpowiedz na zielono
    if ((JSON.stringify(arr) == JSON.stringify(code))) {
        //zatrzymuje timer
        timer.stop();
        //obliczam wynik
        totalScore = 124000 - timerAbsoluteTime * 3 - levelCounter * 2000;
        //wyswietlam wynik w konsoli
        console.info(totalScore);

        //asynchroniczne zapytanie AJAX
        //pobieram tabele wynikow, by moc porownac z nia wynik uzyskany przez gracza
        //w celu zweryfikowania, czy kwalifikuje sie do pozycji highscore 
        $.ajax({
            //typ zapytania
            type: "GET",
            //sciazka do wykorzystywanego w tym celu pliku
            url: "get.php",
            //info o formacie transferu danych
            contentType: "application/json; charset=utf-8",
            //typ danych
            dataType: 'json',

            //jesli sie operacja powiedzie
            success: function (json) {

                //wrzucam do tablicy wynik zapytania SQL
                for (var key in json) {

                    var row = json[key];
                    var nickname = row[0];
                    var score = row[1];
                    var rank = row[2];

                }

                //jesli uzyskany wynik jest wyzszy od ostatniego wyniku z pozycji ostatniej
                if (json[9][1] < totalScore) {
                    //wyswietlam modal umozliwiajacy wpisanie swojego highscore do rankingu
                    $("#enterScoreModal").css("display", "block");
                    //wyswietlam wynik gracza
                    $("#score").html(totalScore);


                    $(function () {
                        //po kliknieciu guzika "save"
                        $("#savePlayer").on('click', function () {
                            //zbieram nickname podany przez gracza
                            var nickname = $("#nickname").val();
                            //zbieram wynik gracza
                            var score = totalScore;
                            //zapytanie asynchroniczne AJAX, w celu wstawienia naszego nowego rekordu
                            $.ajax({
                                method: "POST",
                                url: "post.php",
                                data: {
                                    "nickname": nickname,
                                    "score": score
                                },
                            }).done(function (data) {
                                var result = $.parseJSON(data);

                                //jesli insert sie powiodl, wyswietlam w konsoli komunikat to potwierdzajacy
                                if (result == 1) {
                                    console.info('User record saved successfully.');
                                    //jesli gracz nie wpisal nickname, wyswietlam komunikat w konsoli
                                } else if (result == 2) {
                                    console.info('All fields are required.');
                                    //jesli cos sie nie udalo
                                } else {
                                    console.info('User data could not be saved. Please try again');

                                }

                            });
                            //sprawdzam, czy gracz podal swoj nickname
                            //jesli rozni sie od pustego stringa, chowam modal po kliku w guzik "save"
                            if ($("#nickname").val() != '') {
                                $("#enterScoreModal").css("display", "none");
                                //jesli nie wpisal nic, to farbuje pole do wpisu na czerwono
                            } else {
                                $("#nickname").css("background-color", "#ff3333");
                            }
                        });
                    });
                    //jesli gracz wygral, lecz jego wynik jest zbyt niski, wyswietlam tylko jego wynik 
                } else {

                    $("form").remove();
                    $("#enterScoreModal").css("display", "block");

                    $("#message").html("<p>YOUR SCORE</p><p>" + totalScore + "</p>");
                }

            },


            //gdy wystapi blad, wyswietlam alert oraz info w konsoli
            error: function (err) {
                alert("Something went wrong...");
                console.log(err);
            }

        });

        //podswietlam na zielono zwycieski poziom
        $(".level" + (levelCounter - 1)).css("background-color", "rgba(72,251,71,0.7)");
        $(".level" + (levelCounter - 1)).css("border-top", "2px solid #48fb47");
        $(".level" + (levelCounter - 1)).css("border-bottom", "2px solid #48fb47");
        $(".level" + (levelCounter - 1)).css("box-shadow", "inset 0 0 7px 0 rgba(0, 0, 0, 0.75);");
        $(".level" + (levelCounter - 1) + " .request .socketBig").css("cursor", "none");
        $(".level" + levelCounter + " .request .socketBig").css("pointer-events", "none");

        //chowamy nasz guzik na rzecz informacji informujacej nas o zwyciestwie
        $('#check').css("display", "none");
        $('.gameStatus.winInfo').css("display", "flex");

        //sciezka do dzwieku zwyciestwa
        rollSound = new Audio("./sound/win.mp3");
        //w zaleznosci od stanu guzika mute, wlaczam/wylaczam dzwiek
        if (flag === true) {
            rollSound.currentTime = 0;
            rollSound.play();
        } else {
            rollSound.pause();
        }

        //jesli po przejsciu przez wszystkie 8 rzedow nie uda nam sie zlamac szyfru to przegrywamy. 
        //wyswietla sie nam poprawna kombinacja w specjalnie zaprojektowanym do tego rzedzie
    } else if ((levelCounter == 9) && (JSON.stringify(arr) != JSON.stringify(code))) {
        //zatrzymuje timer
        timer.stop();
        $(".level9").css("display", "flex");
        $(".level9 .request .socketBig").css("cursor", "none");
        $(".level9 .request .socketBig").css("pointer-events", "none");


        //pobieram szyfr z tablicy arr i "farbuje" po kolei kazdy socket z poziomu 9,
        for (var j = 0; j <= 3; j++) {
            for (var i = 0; i <= 5; i++) {
                if (arr[j] == i) {
                    $(".level9 .request .socketBig:nth-child(" + (j + 1) + ")").css("background-color", colors[i]);
                    //to samo robie z symbolami dla daltonistow
                    if (symbolsCounter === true) {
                        $(".level9 .request .socketBig:nth-child(" + (j + 1) + ")").html(symbols[i]);
                        $(".level9 .request .socketBig:nth-child(" + (j + 1) + ")").css("color", "transparent");
                        $(".level9 .request .socketBig:nth-child(" + (j + 1) + ")").css("text-shadow", "none");;
                    } else {
                        $(".level9 .request .socketBig:nth-child(" + (j + 1) + ")").html(symbols[i]);
                    }
                }
            }

        }
        //koloruje wyswietlony juz poprawny szyfr
        $(".level9").css("background-color", "rgba(255,165,0,0.7)");
        $(".level9").css("border", "2px solid #FFA500");
        $(".level9").css("border-top", "2px solid #FFA500");
        $(".level9").css("border-bottom", "2px solid #FFA500");
        $(".level9").css("box-shadow", "inset 0 0 7px 0 rgba(0, 0, 0, 0.75)");


        //ukrycie guzika, wyswietlenie informacji o przegranej
        $('#check').css("display", "none");
        $('.gameStatus.loseInfo').css("display", "flex");
        //sciezka do dzwieku przegranej
        rollSound = new Audio("./sound/lose.mp3");
        //w zaleznosci od stanu guzika mute, wlaczam/wylaczam dzwiek
        if (flag === true) {
            rollSound.currentTime = 0;
            rollSound.play();
        } else {
            rollSound.pause();
        }


    }

    //zerowanie tablicy kodu proponowanego przez gracza
    //operacja potrzebna, by wynik nie byl zaklamywany, a guzik check mial poprawne informacje
    code = [];

});




//pobieram modale oraz guziki
var modal = document.getElementById('rulesModal');
var btn = document.getElementById("rulesBtn");
var rankingModal = document.getElementById('rankingModal');
var rankingBtn = document.getElementById("ranking");
var scoreModal = document.getElementById('enterScoreModal');



//krzyzyki do zamykania
var span = document.getElementsByClassName("closeRules")[0];
var rankingSpan = document.getElementsByClassName("closeRanking")[0];
var scoreSpan = document.getElementsByClassName("closeScore")[0];

//wyswietlam modal z zasadami po kliknieciu w guzik
btn.onclick = function () {
    modal.style.display = "block";
}

// chowam modale po kliknieciu w X
span.onclick = function () {
    modal.style.display = "none";
}

rankingSpan.onclick = function () {
    rankingModal.style.display = "none";

}

scoreSpan.onclick = function () {
    scoreModal.style.display = "none";

}
//wyswietlam ranking po klikniciu w guzik ranking
rankingBtn.onclick = function () {
    $("#nextRow").empty();
    rankingModal.style.display = "block";
    $.ajax({
        type: "GET",

        url: "get.php",

        contentType: "application/json; charset=utf-8",

        dataType: 'json',



        success: function (json) {


            for (var key in json) {
                var row = json[key];

                var nickname = row[0];
                var score = row[1];
                var rank = row[2];


                //wrzucam zawartosc tabeli z bazy danych do table w modalu ranking
                $("<tr><td>" + nickname + "</td><td>" + score + "</td><td>" + rank + "</td></tr>")
                    .appendTo('#nextRow')
            }

        },

        error: function (err) {
            alert("Something went wrong...");
            console.log(err);
        }

    });



}




// jesli uzytkownik kliknie gdziekolwiek poza modalem, zamykamy modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";

    }
    if (event.target == rankingModal) {
        rankingModal.style.display = "none";
    }
    if (event.target == scoreModal) {
        scoreModal.style.display = "none";
    }
}


//reset strony
$(".reset").click(function () {
    document.location.reload(true);
});

var muteCounter = 1;
//zmiana ikonki w przelaczniku mute
$("#muteBtn").on("click", function () {

    if (muteCounter == 1) {
        $(".unmuteIcon").css("display", "none");
        $(".muteIcon").css("display", "block");
        muteCounter = 0;
    } else if (muteCounter == 0) {
        $(".unmuteIcon").css("display", "block");
        $(".muteIcon").css("display", "none");
        muteCounter = 1;
    }
});

var colorblindCounter = 1;
//zmiana ikonki w przelaczniku dla daltonistow
$("#colorblind").on("click", function () {

    if (colorblindCounter == 1) {

        $(".enableEye").css("display", "block");
        $(".unenableEye").css("display", "none");
        colorblindCounter = 0;
    } else if (colorblindCounter == 0) {

        $(".enableEye").css("display", "none");
        $(".unenableEye").css("display", "block");
        colorblindCounter = 1;
    }
});
