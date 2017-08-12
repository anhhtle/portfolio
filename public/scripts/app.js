const one = $('#one');
const two = $('#two');
const six = $('#six');
const eleven = $('#eleven');

one.on('mouseenter', () => {
    one.find('div').addClass('animation-rotate');
})

one.on('mouseleave', () => {
    one.find('div').removeClass('animation-rotate');
})

two.on('mouseenter', () => {
    two.find('.underline').removeClass('animation-remove-underline');
    two.find('.underline').addClass('animation-underline');
    $('.question').addClass('animation-size-question');
    $('.exclaimation').addClass('animation-size-exclaimation');
});

two.on('mouseleave', () => {
    two.find('.underline').removeClass('animation-underline');
    two.find('.underline').addClass('animation-remove-underline');
    $('.question').removeClass('animation-size-question');
    $('.exclaimation').removeClass('animation-size-exclaimation');
});

two.on('click', () => {
    window.location.href = './about-me.html';
});

six.on('mouseenter', () => {
    six.find('.underline2').removeClass('animation-remove-underline');
    six.find('.underline2').addClass('animation-underline');
    $('.six-img').addClass('animation-movement');
});

six.on('mouseleave', () => {
    six.find('.underline2').removeClass('animation-underline');
    six.find('.underline2').addClass('animation-remove-underline');
    $('.six-img').removeClass('animation-movement');
});

six.on('click', () => {
    window.location.href = './projects.html';
});

eleven.on('mouseenter', () => {
    eleven.find('.underline2').removeClass('animation-remove-underline');
    eleven.find('.underline2').addClass('animation-underline');
    $('.eleven-img').removeClass('animation-opacity');
    $('.eleven-img').addClass('animation-fly');
    $('.eleven-fly-trail').addClass('animation-fly-trail');
});

eleven.on('mouseleave', () => {
    eleven.find('.underline2').removeClass('animation-underline');
    eleven.find('.underline2').addClass('animation-remove-underline');
    $('.eleven-img').removeClass('animation-fly');
    $('.eleven-img').addClass('animation-opacity');
    $('.eleven-fly-trail').removeClass('animation-fly-trail');
});

eleven.on('click', () => {
    window.location.href = './contact-me.html';
});