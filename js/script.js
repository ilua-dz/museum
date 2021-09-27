//*! welcome-slider

const swiper = new Swiper('.swiper', {
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

document.getElementById("slide-number").textContent = '0' + swiper.activeIndex;

swiper.on('slideChange', function () {
	document.getElementById("slide-number").textContent = `0${swiper.realIndex + 1}`;
})

//*! video-controls

const videoProgress = document.querySelectorAll('.video-progress');

for (let i = 0; i < videoProgress.length; i++) {
	videoProgress[i].addEventListener('input', function () {
		const value = this.value;
		this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`
	})
}

//*! gallery-randomize

const galleryImgContainer = document.querySelector('.gallery-img-container');

let images = [];
for (let i = 1; i < 16; i++) {
	image = `<img src="assets/img/gallery/gallery${i}.jpg" alt="gallery${i}">`
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

galleryImgContainer.innerHTML = randomImages.join('');

//*! Tickets

const ticketBasicMinus = document.querySelectorAll('.amount-minus-basic');
const ticketBasicPlus = document.querySelectorAll('.amount-plus-basic');
const ticketSeniorMinus = document.querySelectorAll('.amount-minus-senior');
const ticketSeniorPlus = document.querySelectorAll('.amount-plus-senior');
const ticketBasicAmount = document.querySelectorAll('.basic-amount');
const ticketSeniorAmount = document.querySelectorAll('.senior-amount');

let counterBasic = 1;
let counterSenior = 1;

for (let i = 0; i < ticketBasicMinus.length; i++) {
	ticketBasicMinus[i].addEventListener("click", function () {
		if (counterBasic > 0) {
			counterBasic--
			ticketBasicAmount.forEach(item => item.textContent = counterBasic);
		}
	});

	ticketBasicPlus[i].addEventListener("click", function () {
		if (counterBasic < 20) {
			counterBasic++;
			ticketBasicAmount.forEach(item => item.textContent = counterBasic);
		}
	});

	ticketSeniorMinus[i].addEventListener("click", function () {
		if (counterSenior > 0) {
			counterSenior--
			ticketSeniorAmount.forEach(item => item.textContent = counterSenior);
		}
	});

	ticketSeniorPlus[i].addEventListener("click", function () {
		if (counterSenior < 20) {
			counterSenior++;
			ticketSeniorAmount.forEach(item => item.textContent = counterSenior);
		}
	});
}