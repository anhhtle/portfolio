$('.nav-toogle, .three-lines-container').on('click', () => {
    $('.nav-toggle-container').addClass('hidden');
    $('.navigation-container').addClass('z-index');
    $('.top-nav').removeClass('animation-remove-height');
    $('.top-nav').addClass('animation-height');
});

$('.menutoggle').on('click', () => {
    $('.top-nav').removeClass('animation-height');
    $('.top-nav').addClass('animation-remove-height');
    setTimeout(() => {
        $('.nav-toggle-container').removeClass('hidden');
        $('.navigation-container').removeClass('z-index');
    }, 800);
});