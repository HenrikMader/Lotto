var localcounter = 0;
function first_submit () {
    var y = Math.random();
    if (y > 0.5) {
        y = 1;
    }
    else {
        y = 0;
    }
    var x = document.getElementById("answer").value;
    if (y == x) {
        document.getElementById ("feed").innerHTML = "Richtig";
        window.open ("second.html");
    }
    else {
        document.getElementById ("feed").innerHTML = "Falsch"
        localcounter = localcounter + 1;
        document.getElementById("trys1").innerHTML = localcounter;
    }
}

function second_submit () {
    var y = Math.round(Math.random() * 9);

    var x = document.getElementById('answer').value;

    if (x == y) {
        document.getElementById ("feed").innerHTML = "Richtig";
        window.open ("third.html");
    }
    else {
        document.getElementById ("feed").innerHTML = "Falsch"
        localcounter = localcounter + 1;
        document.getElementById("trys1").innerHTML = localcounter;
    }
}

function third_submit () {
    var y = Math.round(Math.random() * 49);

    var x = document.getElementById('answer').value;

    if (x == y) {
        document.getElementById ("feed").innerHTML = "Richtig";
        window.open ("last.html");
    }
    else {
        document.getElementById ("feed").innerHTML = "Falsch"
        localcounter = localcounter + 1;
        document.getElementById("trys1").innerHTML = localcounter;
    }
}

function fourth_submit () {
    //jetzt muss er beide richtig erraten
    var y = Math.round(Math.random() * 49);
    var z = Math.round (Math.random() * 49);

    var x = document.getElementById('answer').value;
    var res = x.split (";");

    var first = res [0];
    var second = res [1];

    if (y == first && z == second) {
        document.getElementById ("feed").innerHTML = "Richtig";
        window.open ("really_last.html");
    }
    else {
        document.getElementById ("feed").innerHTML = "Falsch"
        localcounter = localcounter + 1;
        document.getElementById("trys1").innerHTML = localcounter;
    }
}

//Wie berechnet man alle Versuche?


//Last: add all of the local Variables