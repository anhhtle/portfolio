const one = $('#one');
const two = $('#two');
const six = $('#six');
const eleven = $('#eleven');

one.on('mouseenter', () => {
    $('#one div').addClass('animation-rotate');
})

one.on('mouseleave', () => {
    $('#one div').removeClass('animation-rotate');
})

two.on('mouseenter', () => {
    $('#two .underline').removeClass('animation-remove-underline');
    $('#two .underline').addClass('animation-underline');
    $('.question').addClass('animation-size-question');
    $('.exclaimation').addClass('animation-size-exclaimation');
});

two.on('mouseleave', () => {
    $('#two .underline').removeClass('animation-underline');
    $('#two .underline').addClass('animation-remove-underline');
    $('.question').removeClass('animation-size-question');
    $('.exclaimation').removeClass('animation-size-exclaimation');
});

two.on('click', () => {
    window.location.href = './about-me.html';
});

six.on('mouseenter', () => {
    $('#six .underline2').removeClass('animation-remove-underline');
    $('#six .underline2').addClass('animation-underline');
    $('.six-img').addClass('animation-movement');
});

six.on('mouseleave', () => {
    $('#six .underline2').removeClass('animation-underline');
    $('#six .underline2').addClass('animation-remove-underline');
    $('.six-img').removeClass('animation-movement');
});

six.on('click', () => {
    window.location.href = './projects.html';
});

eleven.on('mouseenter', () => {
    $('#eleven .underline2').removeClass('animation-remove-underline');
    $('#eleven .underline2').addClass('animation-underline');
    $('.eleven-img').removeClass('animation-opacity');
    $('.eleven-img').addClass('animation-fly');
    $('.eleven-fly-trail').addClass('animation-fly-trail');
});

eleven.on('mouseleave', () => {
    $('#eleven .underline2').removeClass('animation-underline');
    $('#eleven .underline2').addClass('animation-remove-underline');
    $('.eleven-img').removeClass('animation-fly');
    $('.eleven-img').addClass('animation-opacity');
    $('.eleven-fly-trail').removeClass('animation-fly-trail');
});

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