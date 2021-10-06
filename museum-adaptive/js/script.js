//*! burger menu
const menuButton = document.querySelector('.menu-icon');
const welcomeTitle = document.querySelector('.welcome-title');
const welcomeDescr = document.querySelector('.welcome-descr');
const welcomeButton = document.querySelector('.welcome-button');
const headerNavList = document.querySelector('.nav-list-header');
const welcomeSection = document.querySelector('.welcome-container')

menuButton.addEventListener('click', () => {
	menuButton.classList.toggle('menu-icon-active');
	welcomeTitle.classList.toggle('menu-active');
	welcomeDescr.classList.toggle('menu-active');
	welcomeButton.classList.toggle('menu-active');
	welcomeSection.classList.toggle('welcome-menu-active');
	headerNavList.classList.toggle('side-menu-active');

});



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

let counterBasic = 1;
let counterSenior = 1;

ticketBasicAmount.forEach(item => item.textContent = counterBasic);
ticketSeniorAmount.forEach(item => item.textContent = counterSenior);
ticketBasicSum.textContent = `${counterBasic * 20}`;
ticketSeniorSum.textContent = `${counterSenior * 10}`;
ticketTotalSum.forEach(item => item.textContent = `${counterBasic * 20 + counterSenior * 10}`);


for (let i = 0; i < ticketBasicMinus.length; i++) {
	ticketBasicMinus[i].addEventListener("click", function () {
		if (counterBasic > 0) {
			counterBasic--
			ticketBasicAmount.forEach(item => item.textContent = counterBasic);
			ticketBasicSum.textContent = `${counterBasic * 20}`;
			ticketTotalSum.forEach(item => item.textContent = `${counterBasic * 20 + counterSenior * 10}`);
		}
	});

	ticketBasicPlus[i].addEventListener("click", function () {
		if (counterBasic < 20) {
			counterBasic++;
			ticketBasicAmount.forEach(item => item.textContent = counterBasic);
			ticketBasicSum.textContent = `${counterBasic * 20}`;
			ticketTotalSum.forEach(item => item.textContent = `${counterBasic * 20 + counterSenior * 10}`);
		}
	});

	ticketSeniorMinus[i].addEventListener("click", function () {
		if (counterSenior > 0) {
			counterSenior--
			ticketSeniorAmount.forEach(item => item.textContent = counterSenior);
			ticketSeniorSum.textContent = `${counterSenior * 10}`;
			ticketTotalSum.forEach(item => item.textContent = `${counterBasic * 20 + counterSenior * 10}`);
		}
	});

	ticketSeniorPlus[i].addEventListener("click", function () {
		if (counterSenior < 20) {
			counterSenior++;
			ticketSeniorAmount.forEach(item => item.textContent = counterSenior);
			ticketSeniorSum.textContent = `${counterSenior * 10}`;
			ticketTotalSum.forEach(item => item.textContent = `${counterBasic * 20 + counterSenior * 10}`);
		}
	});
}

console.log('Предварительная оценка - 151 балл')
console.log('Не выполненные/частично выполненные пункты:')
console.log('-2 Адаптивное меню не закрывается при клике по его пункту/при клике по overlay')
console.log('-3 Для 420px и 768px не полностью сверстано меню;')
console.log('-4 Результат проверки скорости сайта - средний')
