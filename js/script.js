const swiper = new Swiper('.swiper', {
	direction: 'horizontal',
	loop: true,

	// pagination: {
	// 	el: '.frac-pagination',
	// 	type: 'fraction',
	// 	clickable: '.true',
	// },

	pagination: {
		el: '.swiper-pagination',
		// type: 'fraction',
		clickable: '.true',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.right-arrow',
		prevEl: '.left-arrow',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});