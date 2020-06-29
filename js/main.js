$('a[data-rel^=lightcase]').lightcase();
  
$('.accordion-content .accordion-title').click(function () {
    $('.accordion-content .accordion-title.active').removeClass('active').siblings('.accordion-body').slideUp();
    $(this).addClass('active').siblings('.accordion-body').slideDown();
});

$('.overlay-right-side-reviews').slick({
	dots: true
});
