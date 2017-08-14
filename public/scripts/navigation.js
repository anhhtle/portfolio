let wrapper = $('.navigation-container');
let navBackground = wrapper.find('div');
let nav = navBackground.children();
let menutoggle = nav.find('.menutoggle');

let closeNav = () => {
    nav.removeClass('animation-height');
    nav.addClass('animation-remove-height');
    navBackground.removeClass('height');
    $('body').removeClass('noscroll');
    setTimeout(() => {
        menutoggle.addClass('hidden');
    }, 200);
    setTimeout(() => {
        $('.nav-toggle-container').removeClass('hidden');
        wrapper.removeClass('z-index');
        menutoggle.addClass('hidden');
    }, 500);
}

// show top navigation
$('.nav-toogle, .three-lines-container').click(() => {
    $('.nav-toggle-container').addClass('hidden');
    wrapper.addClass('z-index');
    nav.removeClass('animation-remove-height');
    navBackground.addClass('height');
    nav.addClass('animation-height');
    $('body').addClass('noscroll');
    setTimeout(() => {
        menutoggle.removeClass('hidden');
    }, 200);
});

// hide top navigation
menutoggle.click(() => {
    closeNav();
});

navBackground.click(() => {
    closeNav();
});

// prevent clicking on navagation will trigger click on nav-background
nav.click((e) => {
    e.stopPropagation();
})