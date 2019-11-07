//===============
//======UI=======
//===============
var measure;

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('resize', function () {
        handleResize();
        setTimeout(handleResize, 10);
    })
});

function handleResize() {
    $(".item").width($("#one").height());
    $("#grid").css("height", '100%');

    $("#container").css("grid-template-rows", "2fr 3fr");
    $(".item").css("font-size", "6vh")
    $("#clear").css("font-size", "5vh")

    if (window.innerHeight > window.innerWidth) {
        // PORTRAIT                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        $("#grid").css("width", '100%');
        if (window.innerWidth / window.innerHeight < 380 / 796) {
            $("#grid").height($("#grid").width() / 4 * 5);
            $("#container").css("grid-template-rows", "1fr min-content");
            $(".item").css("font-size", "10vw")
        }
        $("#zero").css("width", ($("#one").height() + $("#measure").width() + 13) + 'px');
    } else {
        // LANDSCAPE
        $("#grid").width($("#grid").height() / 5 * 4);
        $("#container").css("justify-content", "center");
        $("#zero").css("width", ($("#one").width() * 2 + 13) + 'px');
    }
    $("#result").width($("#grid").width());
}

handleResize();
setTimeout(handleResize, 1);

//===============
//====Function===
//===============

var sum = '';
var symbolChecked = false;

function zero() {
    print("0");
    $("#clear").html("C");
}

function one() {
    print("1");
    $("#clear").html("C")
}

function two() {
    print("2");
    $("#clear").html("C");
}

function three() {
    print("3");
    $("#clear").html("C");
}

function four() {
    print("4");
    $("#clear").html("C");
}

function five() {
    print("5");
    $("#clear").html("C");
}

function six() {
    print("6");
    $("#clear").html("C");
}

function seven() {
    print("7");
    $("#clear").html("C");
}

function eight() {
    print("8");
    $("#clear").html("C");
}


function nine() {
    print("9");
    $("#clear").html("C");
}

$("#clear").on('click', clear);

function clear() {
    if ($("#result").html() != "0") {
        $("#result").html("0");
        $("#clear").html("AC");
        clean();
    } else {
        sum = "";
        $("#clear").html("AC");
        clean();
    }
}

function changeSign() {
    $("#result").html(math.evaluate($("#result").html() * -1));
}

function percent() {
    $("#result").html(math.evaluate($("#result").html() / 100));
}

function divide() {
    clean();
    if (symbolChecked != "/") {
        symbolChecked = "/";
        $("#divide").css("background-color", "#fefefe");
        $("#divide").css("color", "#fe9e09");
    }
}

function plus() {
    clean();
    if (symbolChecked != "+") {
        symbolChecked = "+";
        $("#plus").css("background-color", "#fefefe");
        $("#plus").css("color", "#fe9e09");
    }
}

function minus() {
    clean();
    if (symbolChecked != "-") {
        symbolChecked = "-";
        $("#minus").css("background-color", "#fefefe");
        $("#minus").css("color", "#fe9e09");
    }
}

function multiply() {
    clean();
    if (symbolChecked != "*") {
        symbolChecked = "*";
        $("#multiply").css("background-color", "#fefefe");
        $("#multiply").css("color", "#fe9e09");
    }
}

function equals() {
    sum += $("#result").html();
    $("#result").html(math.format(math.evaluate(sum), {
        precision: 14
    })) // "0.3"
    sum = "";
    clean();
}

function decimal() {
    print(".");
    $("#clear").html("C");
}

//LIB
function print(write) {
    if (!(symbolChecked == false)) {
        sum = sum + $("#result").html() + symbolChecked;
        clean();
        $("#result").html("");
    }

    if ($("#result").html() != "0") {
        $("#result").html($("#result").html() + write);
    } else {
        $("#result").html(write);
    }
}

function clean() {
    $("#divide").css("background-color", "#fe9e09");
    $("#divide").css("color", "#fff");

    $("#multiply").css("background-color", "#fe9e09");
    $("#multiply").css("color", "#fff");

    $("#plus").css("background-color", "#fe9e09");
    $("#plus").css("color", "#fff");

    $("#minus").css("background-color", "#fe9e09");
    $("#minus").css("color", "#fff");

    symbolChecked = false;
}