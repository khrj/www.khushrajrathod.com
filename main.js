"use strict";

var projectsList = [
	{
		title: "Lorem ipsum dolor sit amet",
		type: "Google Assistant",
		link: "#",
		content:
			"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
		icons: [
			'<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#000000" d="M7,2A6,6 0 0,0 1,8A6,6 0 0,0 7,14A6,6 0 0,0 13,8A6,6 0 0,0 7,2M21.5,6A1.5,1.5 0 0,0 20,7.5A1.5,1.5 0 0,0 21.5,9A1.5,1.5 0 0,0 23,7.5A1.5,1.5 0 0,0 21.5,6M17,8A3,3 0 0,0 14,11A3,3 0 0,0 17,14A3,3 0 0,0 20,11A3,3 0 0,0 17,8M17,15A3.5,3.5 0 0,0 13.5,18.5A3.5,3.5 0 0,0 17,22A3.5,3.5 0 0,0 20.5,18.5A3.5,3.5 0 0,0 17,15Z" /></svg>'
		]
	},
	{
		title: "Duis autem",
		type: "Website",
		link: "#",
		content:
			"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
		icons: [
			'<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#000000" d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />'
		]
	},
	{
		title: "Consetetur sadipscing elitr",
		type: "Blog Website",
		link: "#",
		content:
			"Consetetur sadipscing elitr,  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
		icons: [
			'<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#000000" d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />'
		]
	},
	{
		title: "Nam liber tempor",
		type: "Android App",
		link: "#",
		content:
			"Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. ",
		icons: [
			'<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#000000" d="M15,5H14V4H15M10,5H9V4H10M15.53,2.16L16.84,0.85C17.03,0.66 17.03,0.34 16.84,0.14C16.64,-0.05 16.32,-0.05 16.13,0.14L14.65,1.62C13.85,1.23 12.95,1 12,1C11.04,1 10.14,1.23 9.34,1.63L7.85,0.14C7.66,-0.05 7.34,-0.05 7.15,0.14C6.95,0.34 6.95,0.66 7.15,0.85L8.46,2.16C6.97,3.26 6,5 6,7H18C18,5 17,3.25 15.53,2.16M20.5,8A1.5,1.5 0 0,0 19,9.5V16.5A1.5,1.5 0 0,0 20.5,18A1.5,1.5 0 0,0 22,16.5V9.5A1.5,1.5 0 0,0 20.5,8M3.5,8A1.5,1.5 0 0,0 2,9.5V16.5A1.5,1.5 0 0,0 3.5,18A1.5,1.5 0 0,0 5,16.5V9.5A1.5,1.5 0 0,0 3.5,8M6,18A1,1 0 0,0 7,19H8V22.5A1.5,1.5 0 0,0 9.5,24A1.5,1.5 0 0,0 11,22.5V19H13V22.5A1.5,1.5 0 0,0 14.5,24A1.5,1.5 0 0,0 16,22.5V19H17A1,1 0 0,0 18,18V8H6V18Z" /></svg>'
		]
	},
	{
		title: "Stet clita kasd",
		type: "Web Site",
		link: "#",
		content:
			"Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ",
		icons: [
			'<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="#000000" d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />'
		]
	}
];

var dicWithColors = {
	"0": ["#4CB8C4", "#3CD3AD"],
	"1": ["#f05d6f", "#f9b252"],
	"2": ["#536be6", "#63b3ec"],
	"3": ["#807d6e", "#fcd82f"],
	"4": ["#2e3e50", "#53bd9c"],
	"5": ["#32abda", "#fdd4a4"]
};

Number.prototype.roundTo = function(nTo) {
	nTo = nTo || 10;
	return Math.round(this * (1 / nTo)) * nTo;
};

var windowWidth = window.innerWidth,
	windowHeight = window.innerHeight;

$(document).ready(function() {
	createCardList();

	setupDraggableCards();

	handleClicks();
});

function handleClicks() {
	var slideCardsContainer = $(".cards-container"),
		cardList = $("#slider ul"),
		obfuscator = $(".obfuscator"),
		card = $(".cards-container .card"),
		projectCard = $("#project");

	var dragPosition = 0;

	/* var projectDesktop = {
		open: e => {
			console.log(projectCard[0]);
			projectCard[0].innerHTML = e.currentTarget.innerHTML;
			projectCard.show();
			obfuscator.fadeTo("fast", 1, () => obfuscator.show());
		},
		close: () => {
			projectCard.hide();
			obfuscator.fadeTo("fast", 0, () => obfuscator.hide());
		}
	};

	card.on("mousedown", function() {
		if (slideCardsContainer[0].style["left"] == "") dragPosition = 0;
		else dragPosition = parseInt(slideCardsContainer[0].style["left"]);
	});

	card.on("click", function(e) {
		var currentDragPosition =
			slideCardsContainer[0].style["left"] == ""
				? 0
				: parseInt(slideCardsContainer[0].style["left"]);
		if (currentDragPosition == dragPosition) {
			if (window.innerWidth < 800) {
				var target = $(e.currentTarget);
				if (target.hasClass("active")) {
					target.removeClass("active");
					cardList.draggable("enable");
				} else {
					target.addClass("active");
					cardList.draggable("disable");
				}
			} else projectDesktop.open(e);
		}
	}); */

	window.visualViewport.addEventListener("resize", function() {
		console.log("window resize");
	});
}

function getCardPadding() {
	var cards = $(".card");
	return 2 * parseInt(cards.css("paddingLeft"));
}

function getCardMargin() {
	var cards = $(".card");
	return 2 * parseInt(cards.css("marginLeft"));
}

function getSliderWidth() {
	var bodyWidth = $("body").width(),
		cards = $(".card"),
		numberOfSlides = $("#slider ul").children().length - 1;

	if (bodyWidth < 600) return $("body").width() * numberOfSlides;
	else
		return (
			(cards.width() + getCardPadding() + getCardMargin()) * numberOfSlides
		);
}

function createSliderIndicator(numberOfSlides) {
	var sliderDiv = $("#slider");
	let sliderIndicator = document.createElement("div");
	let sliderIndicatorContainer = document.createElement("div");
	sliderIndicator.setAttribute("id", "sliderIndicator");
	sliderIndicatorContainer.setAttribute("id", "sliderIndicatorContainer");
	sliderIndicator.appendChild(sliderIndicatorContainer);
	sliderDiv.append(sliderIndicator);
	for (let i = 0; i < numberOfSlides + 1; i++) {
		let indicator = document.createElement("div");
		if (i == 0) indicator.setAttribute("class", "indicator active");
		else indicator.setAttribute("class", "indicator");
		sliderIndicatorContainer.appendChild(indicator);
	}
}

function setupDraggableCards() {
	var cardList = $("#slider ul"),
		numberOfSlides = $("#slider ul").children().length - 1,
		sliderWidth = getSliderWidth();

	var min = 0,
		max = -sliderWidth,
		currentSlide = 0;

	var startTime = 0,
		endTime = 0,
		startPosition = 0,
		endPosition = 0;

	createSliderIndicator(numberOfSlides);

	cardList.draggable({
		cursor: "pointer",
		position: "unset",
		axis: "x",
		drag: function(event, ui) {
			$(this).clearQueue();
			if (ui.position.left > min) ui.position.left = min;
			if (ui.position.left < max) ui.position.left = max;
			//Set start drag time
			if (!startTime) {
				startTime = Date.now();
				startPosition = ui.position.left;
			}
		},
		stop: function(event, ui) {
			endTime = Date.now();
			endPosition = ui.position.left;
			var dragTime = endTime - startTime;
			var sliderLeftPosition =
				endPosition +
				Math.sign(startPosition > endPosition ? -1 : 1) *
					($(".card").width() / 2) *
					(50 / (2 + dragTime));
			if (sliderLeftPosition < max) sliderLeftPosition = max;
			if (sliderLeftPosition > min) sliderLeftPosition = min;
			var leftPositionRounded = sliderLeftPosition.roundTo(
				sliderWidth / numberOfSlides
			);
			$(this).animate({
				left: leftPositionRounded
			});
			currentSlide = -leftPositionRounded / (sliderWidth / numberOfSlides);

			$("#sliderIndicatorContainer .indicator").removeClass("active");
			$($("#sliderIndicatorContainer .indicator")[currentSlide]).addClass(
				"active"
			);
			startTime = 0;
		}
	});
}

function createCardList() {
	var slideCardsContainer = $(".cards-container");

	for (var i = 0; i < projectsList.length; i++) {
		var icons = "";
		for (var j = 0; j < projectsList[i].icons.length; j++) {
			icons += '<div class="icon">' + projectsList[i].icons[j] + "</div>";
		}

		slideCardsContainer.append(
			'<li class="card">' +
				"</div>" +
				'<div class="card-icons">' +
				icons +
				"</div>" +
				'<div class="card-header">' +
				'<span class="card-type">' +
				projectsList[i].type +
				"</span>" +
				'<span class="card-title">' +
				projectsList[i].title +
				"</span>" +
				'<a href="' +
				projectsList[i].link +
				'">' +
				'<button class="card-more-button">See More</button></a></div>' +
				"</li>"
		);
	}
}

window.addEventListener("orientationchange", function() {
	location.reload();
});
