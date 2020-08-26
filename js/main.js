'use strict';
$('a[data-rel^=lightcase]').lightcase();
  
$('.accordion-content .accordion-title').click(function () {
    $('.accordion-content .accordion-title.active').removeClass('active').siblings('.accordion-body').slideUp();
    $(this).addClass('active').siblings('.accordion-body').slideDown();
});

$('.overlay-right-side-reviews').slick({
	dots: true
});

// Добавляем нужные переменные
let 
	closeCallBackMenuHeader		= document.querySelector('.close-call-back-header'),
	btnHiddenSidewWindow		= document.querySelector('.btn-hidden-side-window'),
	callBackMenuHeader 			= document.querySelector('.call-back-header'),
	btnLeftSideReviews 			= document.querySelector('.btn-left-side-reviews'),	
	closeCallBackMenu			= document.querySelector('.close-call-back'),
	closeWindowReview 			= document.querySelector('.close-window-review'),
	btnFormSignUp				= document.querySelector('.btn-form-sign-up'),
	btnDownHeader 				= document.querySelector('.btn-down-header'),
	windowSuccess 				= document.querySelector('.window-successfully-sign-up');
	callBackMenu				= document.querySelector('.call-back'),
	enterReviews 				= document.querySelector('.enter-reviews'),
	sideWindow 					= document.querySelector('.side-window'),
	fieldEnter					= document.querySelectorAll('.field-enter'),
	formSignUp					= document.querySelector('.form-sign-up'),
	btnSignUp 					= document.querySelector('.sign-up'),
	overlay 					= document.querySelector('.overlay'),
	btnFaq						= document.querySelector('.btn-faq'),

// Задаем функцие задержку 
let timerId						= setTimeout(function showSideWindow() {
	sideWindow.style.opacity = "1"; // делаем видимым sideModal 
	sideWindow.style.transform = "translateX(0%)"; // меняем положение sideModal в видимую зону
}, 3000);

// Кнопке скрыть навешиваем обработчик событий click
btnHiddenSidewWindow.addEventListener('click', function() {
	sideWindow.style.opacity = "0"; // скрываем его 
	sideWindow.style.transform = "translateX(120%)"; // выносим за экран 
});

// кнопке зарегистрироватся  навешиваем обработчик событий click
btnSignUp.addEventListener('click', function() {
	formSignUp.style.opacity = "1"; // делаем видимым FormSignUp
	formSignUp.style.transform = "translateY(0)";  // меняем положение FormSignUp в видимую зону
	sideWindow.style.transform = "translateX(120%)"; // выносим за экран 
	sideWindow.style.opacity = "0"; // скрываем его 
});

// Второй кнопке зарегистрироватся навешиваем обработчик событий click
btnFormSignUp.addEventListener('click', function() {
	fieldEnter.forEach(function(i) { // Перебираем массив с input
		if (i.value.length > 7) { // пишим условие на проверку длины каждого инпута
			formSignUp.style.opacity = "0"; // скрываем форму
			formSignUp.style.transform = "translateY(-120%)"; // выносим за экран форму 
			windowSuccess.style.opacity = "1"; // делаем видимым окно успешной регистрации
			windowSuccess.style.transform = "translateY(0)" // делаем его видимым на экране
		}
	});
});

// создаем среверсивный setTimeout 
setTimeout(function hiddeWindowSuccess() {
	if (getComputedStyle(windowSuccess).opacity == "1") { // проверяем по условию windowSuccess
		windowSuccess.style.opacity = "0"; // скрываем windowSuccess
		windowSuccess.style.transform = "translateY(-120%)"; // выносим за экран windowSuccess
	};
	setTimeout(hiddeWindowSuccess) // функция вызываем саму себя 
}, 3000); // задем интервал в 3с

// на кнопку навешиваем событие click
btnFaq.addEventListener('click', function() {
	callBackMenu.style.transform = "translateX(0)"; // выводим его на экран
	overlay.style.display = "block";

	setTimeout(function showCallBackMenu(){
		callBackMenu.style.opacity = "1"; // делаем видимым 
	}, 301)
});

// на кнопку навешиваем событие click
closeCallBackMenu.addEventListener('click', function() {
	callBackMenu.style.opacity = "0"; // делаем не видимым 
	overlay.style.display = "none"; // скрываем overlay
	
	setTimeout(function showCallBackMenu(){
		callBackMenu.style.transform = "translateX(-200%)"; // выносим за экран
	}, 301)
});

// на кнопку навешиваем событие click
btnDownHeader.addEventListener('click', function() {
	callBackMenuHeader.style.transform = "translateX(0)"; // выводим его на экран
	overlay.style.display = "block";

	setTimeout(function showCallBackMenu(){
		callBackMenuHeader.style.opacity = "1"; // делаем видимым 
	}, 301)
});

// на кнопку навешиваем событие click
closeCallBackMenuHeader.addEventListener('click', function() {
	callBackMenuHeader.style.opacity = "0"; // делаем не видимым 
	overlay.style.display = "none"; // скрываем overlay
	
	setTimeout(function showCallBackMenu(){
		callBackMenuHeader.style.transform = "translateX(-200%)"; // выносим за экран
	}, 301)
});

// на кнопку навешиваем событие click
btnLeftSideReviews.addEventListener('click', function() {
	enterReviews.style.transform = "translateX(0)"; // выводим его на экран
	overlay.style.display = "block";

	setTimeout(function showCallBackMenu(){
		enterReviews.style.opacity = "1"; // делаем видимым 
	}, 301)
});

closeWindowReview.addEventListener('click', function() {
	enterReviews.style.opacity = "0"; // делаем не видимым 
	overlay.style.display = "none"; // скрываем overlay
	
	setTimeout(function showCallBackMenu(){
		enterReviews.style.transform = "translateX(-200%)"; // выносим за экран
	}, 301)
});