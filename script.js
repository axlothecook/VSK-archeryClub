//code for image carousel
let count = 1;
let slidesContainer = document.querySelector('.carousel-frame');

function increaseCount(){
	let smt = count;
	return (smt + 1 === 4) ? smt = 1 : smt + 1;

};

function decreaseCount(){
	let smt = count;
	return (smt - 1 === 0) ? smt = 3 : smt -= 1;

};

window.addEventListener('load', function (e) {
	var currentImg = document.querySelector(`.image-div-${count}`);
	currentImg.classList.add('show');

	document.querySelector('.circle-1').classList.add('color');

});

var next = function (count) {
	var currentImg = document.querySelector(`.image-div-${count}`);
	if (!currentImg.classList.contains('show')) return;

	var currentCircle = document.querySelector(`.circle-${count}`);
	if (!currentCircle.classList.contains('color')) return;

	var nextImg = document.querySelector(`.image-div-${increaseCount()}`);
	if (nextImg.classList.contains('show')) return;

	currentImg.classList.remove('show');
	nextImg.classList.add('show');
	
	//for circle
	var nextCircle = document.querySelector(`.circle-${increaseCount()}`);
	if (nextCircle.classList.contains('color')) return;

	currentCircle.classList.remove('color');
	// slidesContainer.style.transition = 'transform 0.4s ease-in-out'; doesnt work
	nextCircle.classList.add('color');

};

var previous = function (count) {
	var currentImg = document.querySelector(`.image-div-${count}`);
	if (!currentImg.classList.contains('show')) return;

	var currentCircle = document.querySelector(`.circle-${count}`);
	if (!currentCircle.classList.contains('color')) return;

	var previousImg = document.querySelector(`.image-div-${decreaseCount()}`);
	if (previousImg.classList.contains('show')) return;

	currentImg.classList.remove('show');
	previousImg.classList.add('show');

	//for circle
	var previousCircle = document.querySelector(`.circle-${decreaseCount()}`);
	if (previousCircle.classList.contains('color')) return;

	currentCircle.classList.remove('color');
	previousCircle.classList.add('color');

};

var changeImage = function (event) {
	if (!event.target.classList.contains('arrow')) return;

	var arrow = event.target;
	if (arrow.classList.contains('right-side-arrow')) {
		next(count);
		(count + 1 != 4) ? count += 1 : count = 1;
	};

	if (arrow.classList.contains('left-side-arrow')) {
		previous(count);
		(count - 1 != 0) ? count -= 1 : count = 3;
	};
}

document.addEventListener('click', function (event) {
	changeImage(event);
}, false);
