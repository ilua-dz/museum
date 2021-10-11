//*! burger menu
const menuButton = document.querySelector('.menu-icon');
const menuButtonOffset = document.querySelector('.menu-icon-container')
const welcomeTitle = document.querySelector('.welcome-title');
const welcomeDescr = document.querySelector('.welcome-descr');
const welcomeButton = document.querySelector('.welcome-button');
const headerNavList = document.querySelector('.nav-list-header');
const welcomeSection = document.querySelector('.welcome-container')
const navItemsHeader = document.querySelectorAll('.nav-item-header')
const overlay = document.querySelector('.overlay');

let menuIsClosed = true;

const menuToggle = () => {
	menuButton.classList.toggle('menu-icon-active');
	welcomeTitle.classList.toggle('menu-active');
	welcomeDescr.classList.toggle('menu-active');
	welcomeButton.classList.toggle('menu-active');
	welcomeSection.classList.toggle('welcome-menu-active');
	headerNavList.classList.toggle('side-menu-active');
	overlay.classList.toggle('overlay-active');
	menuIsClosed = !menuIsClosed;
};

overlay.addEventListener('click', () => menuToggle());
menuButtonOffset.addEventListener('click', () => menuToggle());
navItemsHeader.forEach(i => i.addEventListener('click', () => menuToggle()));

const setOverlayBodySize = () => {
	let bodyHeight = document.querySelector('body').offsetHeight;
	let bodyWidth = document.querySelector('body').offsetWidth;
	overlay.style.height = bodyHeight + 'px';
	overlay.style.width = bodyWidth + 'px';
}

window.addEventListener('resize', () => setOverlayBodySize());
document.addEventListener('DOMContentLoaded', () => setOverlayBodySize());


//*! welcome-slider

const welcomeSlider = new Swiper('.welcome-slider', {
	direction: 'horizontal',

	loop: true,
	effect: 'slide',

	pagination: {
		el: '.swiper-pagination',
		clickable: '.true',
	},

	navigation: {
		nextEl: '.pag-right-arrow',
		prevEl: '.pag-left-arrow',
	},
},
);

document.getElementById("slide-number").textContent = '0' + welcomeSlider.activeIndex;

welcomeSlider.on('slideChange', function () {
	document.getElementById("slide-number").textContent = `0${welcomeSlider.realIndex + 1}`;
})



//*! explore slider

const compContainer = document.querySelector('.img-compare-container');

window.addEventListener('resize', () => {
	let compContainerWidth = compContainer.offsetWidth;
	compContainer.style.height = (compContainerWidth * 0.97) + "px";
});

const compareOverlay = document.querySelector('.img-compare-overlay');

function compareInit() {
	let compContainerWidth = compContainer.offsetWidth;
	let h = compareOverlay.offsetHeight;
	compareOverlay.style.width = (compContainerWidth * 0.61) + "px";
	slider.style.top = (h * 0.5) - (slider.offsetHeight / 2) + "px";
	slider.style.left = (compContainerWidth * 0.61) - (slider.offsetWidth / 2) + "px";
	if (window.innerWidth < 769) slider.style.top = (h * 0.52) - (slider.offsetHeight / 2) + "px";
}
let pressed = 0;
let w = compareOverlay.offsetWidth;
const slider = document.createElement("div");
slider.setAttribute("class", "img-compare-slider");
compareOverlay.parentElement.insertBefore(slider, compareOverlay);

document.addEventListener('DOMContentLoaded', () => compareInit());
window.addEventListener('resize', () => compareInit());

slider.addEventListener("mousedown", slideReady);
window.addEventListener("mouseup", () => pressed = 0);

slider.addEventListener("touchstart", slideReady);
window.addEventListener("touchstop", () => pressed = 0);

function slideReady(event) {
	event.preventDefault();
	pressed = 1;
	window.addEventListener("mousemove", slideMove);
	window.addEventListener("touchmove", slideMove);
}

function slideMove(event) {
	if (pressed == 0) return false;
	let position = getCursorPosition(event)
	if (position < 0) position = 0;
	if (position > w) position = w;
	slide(position);
}

function getCursorPosition(event) {
	let a = compareOverlay.getBoundingClientRect();
	let pos = event.pageX - a.left;
	event = event || window.event;
	pos = pos - window.pageXOffset;
	return pos;
}

function slide(pos) {
	compareOverlay.style.width = pos + "px";
	slider.style.left = compareOverlay.offsetWidth - (slider.offsetWidth / 2) + "px";
}


//*! video-controls

const videoProgress = document.querySelectorAll('.video-progress');

for (let i = 0; i < videoProgress.length; i++) {
	videoProgress[i].addEventListener('input', function () {
		const value = this.value;
		this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`
	})
}


//*! video-slider

const videoSlider = new Swiper('.video-slider', {
	loop: true,
	slidesPerView: 3,
	spaceBetween: 30,

	pagination: {
		bulletClass: 'video-slider-bullet',
		bulletActiveClass: 'video-slider-bullet-active',
		el: '.video-slider-pagination',
		clickable: '.true',
	},

	navigation: {
		nextEl: '.video-slider-button-next',
		prevEl: '.video-slider-button-prev',
	},
},
);


let videoSliderSlide = document.querySelectorAll('.video-slider-slide');

const videoSliderSizing = () => {
	videoSliderSlide.forEach(i => i.style.height = (i.offsetWidth * 0.561947) + 'px')
};

window.addEventListener('resize', () => videoSliderSizing());
document.addEventListener('DOMContentLoaded', () => videoSliderSizing());

// videoSliderSlide.forEach(i => {
// 	i.onplay = (e) => { console.log(e) }
// 	i.onpause = (e) => { console.log(e) }
// });



//*! gallery-randomize

const galleryImgContainer = document.querySelector('.gallery-img-container');

let images = [];
for (let i = 1; i < 16; i++) {
	image = `<img src="./assets/img/gallery/gallery${i}.avif" alt="gallery${i}">`
	images.push(image)
}



let i = 0, arr = [], temp;

while (arr.length < 15) {
	temp = Math.trunc(Math.random() * 15 + 1);
	if (!arr.includes(temp)) {
		arr.push(temp);
	};
}
let randomImages = [];
for (let i = 0; i < 15; i++) {
	randomImages.push(images[arr[i] - 1])
}

for (let i = 1; i < 16; i++) {
	if (i === 5 || i === 11) randomImages.splice(i, 0, `<div class="spacer"></div>`)
}

galleryImgContainer.innerHTML = randomImages.join('');

//*! Tickets

const ticketBasicMinus = document.querySelectorAll('.amount-minus-basic');
const ticketBasicPlus = document.querySelectorAll('.amount-plus-basic');
const ticketSeniorMinus = document.querySelectorAll('.amount-minus-senior');
const ticketSeniorPlus = document.querySelectorAll('.amount-plus-senior');
const ticketBasicAmount = document.querySelectorAll('.basic-amount');
const ticketSeniorAmount = document.querySelectorAll('.senior-amount');
const ticketBasicSum = document.querySelector('.basic-sum');
const ticketSeniorSum = document.querySelector('.senior-sum');
const ticketTotalSum = document.querySelectorAll('.total-sum');
const exhibitionTypeRadioButtons = document.querySelectorAll('.tickets-type-choise-input');
const exhibitionTypeSelect = document.querySelector('.tickets-select');
const ticketTimeInput = document.querySelector('.time')
const ticketsDateInput = document.querySelector('.tickets-date')
const ticketDateString = document.querySelector('.day')
const exhibitionString = document.querySelector('.exhibition-string')
const nameInput = document.querySelector('.input-name')
const emailInput = document.querySelector('.input-email')
const phoneInput = document.querySelector('.input-phone')
const namePrompt = document.querySelector('.invalid-name')
const emailPrompt = document.querySelector('.invalid-email')
const phonePrompt = document.querySelector('.invalid-phone')
const basicPriceString = document.querySelector('.basic-ticket-price');
const seniorPriceString = document.querySelector('.senior-ticket-price');



let counterBasic = 1;
let counterSenior = 1;
let exhibitionType = 1;


const ticketsTime = document.querySelector('.tickets-time')
let availableTime = [];
for (let i = 9; i < 19; i++) {
	availableTime.push(i + ' : 00', i + ' : 30');
}
availableTime.pop();
for (let i = 0; i < availableTime.length; i++) availableTime[i] = `<option value="${availableTime[i]}">${availableTime[i]}</option>`
ticketsTime.innerHTML = availableTime.join('');

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const exhibTypes = ['Permanent exhibition', 'Temporary exhibition', 'Combined Admission'];
let today = new Date();

let dd = today.getDate();
let mm = today.getMonth() + 1;
if (dd < 10) dd = '0' + dd
if (mm < 10) mm = '0' + mm

ticketsDateInput.setAttribute('min', today.getFullYear() + '-' + mm + '-' + dd);

let date;
const setDate = () => {
	let dateString = daysOfWeek[date.getDay()] + ', ' + months[date.getMonth()] + ' ' + date.getDate();
	ticketDateString.textContent = dateString;
	localStorage.setItem('dateString', dateString);
}


const setAmountAndPrice = () => {

	ticketBasicAmount.forEach(item => item.textContent = counterBasic);
	ticketSeniorAmount.forEach(item => item.textContent = counterSenior);

	let basicPrice = 20 * exhibitionType;
	let seniorPrice = 10 * exhibitionType;
	let basicPriceSum = counterBasic * basicPrice;
	let seniorPriceSum = counterSenior * seniorPrice;
	let totalPrice = basicPriceSum + seniorPriceSum;

	ticketBasicSum.textContent = basicPriceSum;
	ticketSeniorSum.textContent = seniorPriceSum;
	basicPriceString.textContent = basicPrice;
	seniorPriceString.textContent = seniorPrice;

	switch (exhibitionType) {
		case '1': exhibitionString.textContent = exhibTypes[0]; break;
		case '1.25': exhibitionString.textContent = exhibTypes[1]; break;
		case '2': exhibitionString.textContent = exhibTypes[2]; break;
	}

	exhibitionTypeSelect.value = exhibitionType;
	exhibitionTypeRadioButtons.forEach(i => { if (i.value === exhibitionType) i.checked = true });

	ticketTotalSum.forEach(item => item.textContent = totalPrice);

	localStorage.setItem('exhibitionType', exhibitionType);
	localStorage.setItem('counterBasic', counterBasic);
	localStorage.setItem('counterSenior', counterSenior);

}



document.body.addEventListener('change', function (e) {
	switch (e.target.name) {
		case 'tickets-type-choise-input':
			exhibitionType = e.target.value;
			break;
		case 'time':
			ticketTimeInput.textContent = e.target.value;
			localStorage.setItem('ticketTime', e.target.value);
			break;
		case 'date':
			date = new Date(e.target.value);
			setDate();
			break;
		case 'tickets-name':
			namePrompt.style.display = e.target.validity.valid ? 'none' : 'block';
			break;
		case 'tickets-email':
			emailPrompt.style.display = e.target.validity.valid ? 'none' : 'block';
			break;
		case 'tickets-phone':
			phonePrompt.style.display = e.target.validity.valid ? 'none' : 'block';
			break;
	}
	setAmountAndPrice();
});

for (let i = 0; i < ticketBasicMinus.length; i++) {
	ticketBasicMinus[i].addEventListener("click", function () {
		if (counterBasic > 0) {
			counterBasic--;
			setAmountAndPrice();
		}
	});

	ticketBasicPlus[i].addEventListener("click", function () {
		if (counterBasic < 20) {
			counterBasic++;
			setAmountAndPrice();
		}
	});

	ticketSeniorMinus[i].addEventListener("click", function () {
		if (counterSenior > 0) {
			counterSenior--
			setAmountAndPrice();
		}
	});

	ticketSeniorPlus[i].addEventListener("click", function () {
		if (counterSenior < 20) {
			counterSenior++;
			setAmountAndPrice();
		}
	});
}

document.addEventListener('DOMContentLoaded', () => {
	exhibitionType = localStorage.getItem('exhibitionType') || 1;
	counterBasic = localStorage.getItem('counterBasic') || 1;
	counterSenior = localStorage.getItem('counterSenior') || 1;
	ticketTimeInput.textContent = localStorage.getItem('ticketTime') || '-- -- --';
	ticketDateString.textContent = localStorage.getItem('dateString') || '-- -- --';
	setAmountAndPrice();
});


//*! Contacts mapbox

mapboxgl.accessToken = 'pk.eyJ1IjoiaWx1YS1keiIsImEiOiJja3VtZ2U3NWIwZTY2Mm9waXp3anBwNGpuIn0.bUEBVKqZ5IAe5T1_vQSZAA';
const map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/light-v10',
	center: [2.3364123, 48.860915],
	zoom: 16,
});

map.addControl(new mapboxgl.NavigationControl());

const marker1 = new mapboxgl.Marker({ color: 'black' }).setLngLat([2.3364, 48.86091]).addTo(map);
const marker2 = new mapboxgl.Marker({ color: 'grey' }).setLngLat([2.3333, 48.8602]).addTo(map);
const marker3 = new mapboxgl.Marker({ color: 'grey' }).setLngLat([2.3397, 48.8607]).addTo(map);
const marker4 = new mapboxgl.Marker({ color: 'grey' }).setLngLat([2.3330, 48.8619]).addTo(map);
const marker5 = new mapboxgl.Marker({ color: 'grey' }).setLngLat([2.3365, 48.8625]).addTo(map);