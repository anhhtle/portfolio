// underline
$('.contact').on('mouseenter', function() {
    $(this).find('.underline').removeClass('animation-remove-underline');
    $(this).find('.underline').addClass('animation-underline');
});

$('.contact').on('mouseleave', function() {
    $(this).find('.underline').removeClass('animation-underline');
    $(this).find('.underline').addClass('animation-remove-underline');
});