$('.nav-toogle, .three-lines-container').on('click', () => {
    $('.nav-toggle-container').addClass('hidden');
    $('.navigation-container').addClass('z-index');
    $('nav').removeClass('animation-remove-height');
    $('nav').addClass('animation-height');
});

$('.menutoggle').on('click', () => {
    $('nav').removeClass('animation-height');
    $('nav').addClass('animation-remove-height');
    setTimeout(() => {
        $('.nav-toggle-container').removeClass('hidden');
        $('.navigation-container').removeClass('z-index');
    }, 800);
});