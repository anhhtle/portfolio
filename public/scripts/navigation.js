let closeNav = () => {
    $('.top-nav').removeClass('animation-height');
    $('.top-nav').addClass('animation-remove-height');
    $('.nav-background').removeClass('height');
    setTimeout(() => {
        $('.menutoggle').addClass('hidden');
    }, 200);
    setTimeout(() => {
        $('.nav-toggle-container').removeClass('hidden');
        $('.navigation-container').removeClass('z-index');
        $('.menutoggle').addClass('hidden');
    }, 500);
}

// show top navigation
$('.nav-toogle, .three-lines-container').on('click', () => {
    $('.nav-toggle-container').addClass('hidden');
    $('.navigation-container').addClass('z-index');
    $('.top-nav').removeClass('animation-remove-height');
    $('.nav-background').addClass('height');
    $('.top-nav').addClass('animation-height');
    setTimeout(() => {
        $('.menutoggle').removeClass('hidden');
    }, 200);
});

// hide top navigation
$('.menutoggle').on('click', () => {
    closeNav();
});

$('.nav-background').on('click', () => {
    closeNav();
});