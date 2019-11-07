var questions = [{
    question: "What's your first name?"
}, {
    question: "What's your last name?"
}, {
    question: "What's your email?",
    validate: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
}, {
    question: "Create your password",
    type: "password"
}]

var responses = [];


// ACTUAL CODE 
var current = 0;
var each = 100 / questions.length;
var percent = 0;

$("input").keypress(function (key) {
    if (key.which == 13) {
        next();
    }
});

function progress() {
    percent += each;
    $("#progress").css("width", percent + "%");
    $("#line").css("background-color", "#25a3ff");
    $("#next").css("color", "#25a3ff");
    $("#progress").css("background-color", "#00ae1b");
}

function create() {
    $("#placeholder").html(questions[current].question);
    if ("type" in questions[current]) {
        $("#input").attr("type", questions[current].type);
    }
}

function next() {
    if (checkValidity()) {
        responses.push($("#input").val());
        $("#input").val("");
        progress();
        current += 1;
        if (current < questions.length) {
            animateCSS('#container', 'jello');
            create();
        } else {
            console.log("over")
            // transition
            $("#input").css("transition", ".2s ease-out");
            $("#next").css("transition", ".2s ease-out");
            $("#progress").css("transition", ".2s ease-out");
            $("#placeholder").css("transition", ".2s ease-out");
            $("#line").css("transition", ".2s ease-out");

            // display
            $("#input").css("opacity", "0");
            $("#next").css("opacity", "0");
            $("#progress").css("opacity", "0");
            $("#placeholder").css("opacity", "0");
            $("#line").css("opacity", "0");

            // hide
            $("#center").css("transition", "1s ease-in-out");
            setTimeout(function () {
                $("#container").css("padding", "0px");
            }, 200);
            setTimeout(function () {
                $("#center").css("width", "0%");
            }, 1);
            setTimeout(function () {
                $("#center").css("height", "0%");
            }, 1);

            $("#message").html("Welcome " + responses[0] + " " + responses[1] + " &lt;" + responses[2] + "&gt;");
            setTimeout(function () {
                $("#message").css('animation', "opacity forwards 2s")
            }, 1500);
        }

    } else {
        $("#next").css("color", "#ff2d26");
        $("#progress").css("background-color", "#ff2d26");
        animateCSS('#container', 'shake');

    }
}

function checkValidity() {
    if ("validate" in questions[current]) {
        return questions[current].validate.test($("#input").val());
    }
    return true;
}

// LIB
function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}

$(function () {
    create();
});